"use server";

import { createHmac, timingSafeEqual } from "crypto";
import { headers } from "next/headers";
import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { dictionaries, type Lang } from "@/lib/translations";

// Spam protection, invisible to real parents:
// - form_token: server-signed issue time; humans take >3s to fill the form, bots don't
// - website: honeypot field hidden from humans (CSS + off tab-order); bots fill everything
// - per-IP cap: 5 submissions/hour, far above any real family's usage

const MIN_FILL_MS = 3_000;
const TOKEN_MAX_AGE_MS = 12 * 60 * 60 * 1000;
const MAX_PER_HOUR = 5;

// Stable across server instances so tokens verify on any one of them.
const FORM_SECRET =
  process.env.ADMIN_PASSWORD ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  "spark-kids-dev-fallback";

function sign(payload: string): string {
  return createHmac("sha256", FORM_SECRET).update(payload).digest("hex");
}

export async function issueFormToken(): Promise<string> {
  const issuedAt = String(Date.now());
  return `${issuedAt}.${sign(issuedAt)}`;
}

function checkToken(raw: string, now: number): "ok" | "too-fast" | "reissue" {
  const dot = raw.lastIndexOf(".");
  if (dot <= 0) return "reissue";
  const issuedAtRaw = raw.slice(0, dot);
  const sig = raw.slice(dot + 1);
  if (sig.length !== 64) return "reissue";
  let ok = false;
  try {
    ok = timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(sign(issuedAtRaw), "hex"));
  } catch {
    return "reissue";
  }
  if (!ok) return "reissue";
  const age = now - Number(issuedAtRaw);
  if (!Number.isFinite(age) || age > TOKEN_MAX_AGE_MS) return "reissue";
  return age < MIN_FILL_MS ? "too-fast" : "ok";
}

const attempts = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const hits = (attempts.get(ip) ?? []).filter((t) => now - t < 3_600_000);
  if (hits.length >= MAX_PER_HOUR) return true;
  hits.push(now);
  attempts.set(ip, hits);
  if (attempts.size > 1000) {
    for (const [key, times] of attempts) {
      if (times.every((t) => now - t >= 3_600_000)) attempts.delete(key);
    }
  }
  return false;
}

async function clientIp(): Promise<string> {
  const h = await headers();
  return (
    h.get("x-forwarded-for")?.split(",")[0]?.trim() || h.get("x-real-ip") || "unknown"
  );
}

function interestSchema(lang: Lang) {
  const t = dictionaries[lang].form;
  return z.object({
    parent_name: z.string().trim().min(1, t.errName).max(100),
    parent_email: z.string().trim().email(t.errEmail),
    parent_phone: z.string().trim().max(30).optional(),
    camper_name: z.string().trim().min(1, t.errCamperName).max(100),
    camper_age: z.coerce.number().int().min(3, t.errAge).max(18, t.errAge),
    notes: z.string().trim().max(1000).optional(),
  });
}

export type InterestState = {
  error?: string;
  success?: boolean;
  token?: string;
} | null;

export async function submitInterest(
  _prev: InterestState,
  formData: FormData
): Promise<InterestState> {
  const lang: Lang = formData.get("lang") === "zh" ? "zh" : "en";
  const t = dictionaries[lang].form;

  // 1. Honeypot: humans never see the field, so anything that fills it is a bot.
  //    Fake success so bots don't adapt; nothing is stored or emailed.
  if ((formData.get("website") as string | null)?.trim()) {
    return { success: true };
  }

  // 2. Per-IP hourly cap.
  if (rateLimited(await clientIp())) {
    return { error: t.errServer };
  }

  // 3. Timing token: instant posts are bots. "reissue" hands back a fresh token
  //    so a human with a stale page is never stuck.
  const verdict = checkToken((formData.get("form_token") as string | null) ?? "", Date.now());
  if (verdict === "too-fast") {
    return { error: t.errTooFast };
  }
  if (verdict === "reissue") {
    return { error: t.errTooFast, token: await issueFormToken() };
  }

  const parsed = interestSchema(lang).safeParse({
    parent_name: formData.get("parent_name"),
    parent_email: formData.get("parent_email"),
    parent_phone: formData.get("parent_phone") || undefined,
    camper_name: formData.get("camper_name"),
    camper_age: formData.get("camper_age"),
    notes: formData.get("notes") || undefined,
  });

  if (!parsed.success) {
    return { error: parsed.error.issues[0]?.message ?? t.errGeneric };
  }
  const values = parsed.data;

  try {
    const supabase = await createClient();
    const { error: insertError } = await supabase
      .from("camp_interest")
      .insert({
        parent_name: values.parent_name,
        parent_email: values.parent_email,
        parent_phone: values.parent_phone || null,
        camper_name: values.camper_name,
        camper_age: values.camper_age,
        notes: values.notes || null,
        lang,
      });

    if (insertError) throw insertError;
  } catch (err) {
    console.error("[contact] camp_interest insert failed", err);
    return { error: t.errServer };
  }

  return { success: true };
}
