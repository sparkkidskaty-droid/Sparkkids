// Supabase Edge Function: run when someone submits the camp interest form
// (INSERT into public.camp_interest, via a Database Webhook).
//
// Does three things:
//   1. Emails the camp inbox an alert (NOTIFY_EMAIL).
//   2. Emails the parent a confirmation in their language (record.lang).
//   3. Optionally appends the row to a Google Sheet (SHEET_WEBHOOK_URL).
//
// Secrets: RESEND_API_KEY, NOTIFY_EMAIL, SHEET_WEBHOOK_URL (optional)

import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY") ?? "");
const notifyEmails = (Deno.env.get("NOTIFY_EMAIL") ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
const sheetUrl = (Deno.env.get("SHEET_WEBHOOK_URL") ?? "").trim();

// onboarding@resend.dev only delivers to the Resend account owner's email.
// Once a domain is verified in Resend, switch this to
// "Spark Kids <signups@yourdomain.org>" so parent confirmations also deliver.
const FROM = "Spark Kids <onboarding@resend.dev>";

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function parentEmail(r: Record<string, unknown>, lang: string) {
  if (lang === "zh") {
    return {
      subject: `已收到您为 ${esc(r.camper_name)} 的报名！`,
      html: `
        <h2>报名已收到 ✅</h2>
        <p>${esc(r.parent_name)} 您好，</p>
        <p>感谢您为 <strong>${esc(r.camper_name)}</strong>（${Number(r.camper_age)} 岁）报名 Spark Kids！</p>
        <p>我们会尽快与您联系，告知夏令营的详细安排。如有任何问题，请直接回复此邮件。</p>
        <p>— Spark Kids</p>
      `,
    };
  }
  return {
    subject: `We got your Spark Kids signup for ${esc(r.camper_name)}!`,
    html: `
      <h2>Signup received ✅</h2>
      <p>Hi ${esc(r.parent_name)},</p>
      <p>Thanks for signing <strong>${esc(r.camper_name)}</strong> (age ${Number(r.camper_age)}) up for Spark Kids!</p>
      <p>We'll be in touch soon with camp details. Questions? Just reply to this email.</p>
      <p>— Spark Kids</p>
    `,
  };
}

Deno.serve(async (req) => {
  try {
    const payload = await req.json();
    const r = payload.record;
    if (!r || !r.parent_email) {
      return new Response(JSON.stringify({ error: "no record" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const lang = r.lang === "zh" ? "zh" : "en";
    const results: Record<string, string> = {};

    // 1. Alert the camp inbox.
    if (notifyEmails.length === 0) {
      results.alert = "NOTIFY_EMAIL not set";
    } else {
      const { error } = await resend.emails.send({
        from: FROM,
        to: notifyEmails,
        subject: `New camp signup: ${r.camper_name}`,
        html: `
          <h2>New Spark Kids camp interest</h2>
          <p><strong>Parent:</strong> ${esc(r.parent_name)}</p>
          <p><strong>Email:</strong> ${esc(r.parent_email)}</p>
          <p><strong>Phone:</strong> ${esc(r.parent_phone ?? "—")}</p>
          <p><strong>Camper:</strong> ${esc(r.camper_name)} (age ${esc(r.camper_age)})</p>
          <p><strong>Notes:</strong> ${esc(r.notes ?? "—")}</p>
          <p><strong>Language:</strong> ${lang === "zh" ? "中文 (Chinese)" : "English"}</p>
        `,
      });
      results.alert = error ? `error: ${error.message}` : "sent";
    }

    // 2. Confirm to the parent, in their language.
    const confirmation = parentEmail(r as Record<string, unknown>, lang);
    const { error: parentError } = await resend.emails.send({
      from: FROM,
      to: [String(r.parent_email)],
      subject: confirmation.subject,
      html: confirmation.html,
    });
    results.parent = parentError ? `error: ${parentError.message}` : "sent";

    // 3. Append to Google Sheets (best effort, never blocks email).
    if (sheetUrl) {
      try {
        const sheetRes = await fetch(sheetUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ record: r }),
        });
        results.sheet = sheetRes.ok ? "ok" : `http ${sheetRes.status}`;
      } catch (e) {
        results.sheet = `error: ${String(e)}`;
      }
    }

    return new Response(JSON.stringify({ ok: true, results }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
