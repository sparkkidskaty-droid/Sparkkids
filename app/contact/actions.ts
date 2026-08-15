"use server";

import { z } from "zod";
import { createClient } from "@/lib/supabase/server";
import { dictionaries, type Lang } from "@/lib/translations";

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

export type InterestState = { error?: string; success?: boolean } | null;

export async function submitInterest(
  _prev: InterestState,
  formData: FormData
): Promise<InterestState> {
  const lang: Lang = formData.get("lang") === "zh" ? "zh" : "en";
  const t = dictionaries[lang].form;

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
      });

    if (insertError) throw insertError;
  } catch (err) {
    console.error("[contact] camp_interest insert failed", err);
    return { error: t.errServer };
  }

  return { success: true };
}
