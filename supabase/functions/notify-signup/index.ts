// Supabase Edge Function: send an email alert when someone submits
// the camp interest form (INSERT into public.camp_interest).
//
// Triggered by a Database Webhook on the camp_interest table.
// Secrets: RESEND_API_KEY, NOTIFY_EMAIL (comma-separated recipients allowed)

import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY") ?? "");
const notifyEmails = (Deno.env.get("NOTIFY_EMAIL") ?? "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

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

    if (notifyEmails.length === 0) {
      return new Response(JSON.stringify({ error: "NOTIFY_EMAIL not set" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { error } = await resend.emails.send({
      // onboarding@resend.dev works without a verified domain; once you have
      // a domain, switch this to e.g. "Spark Kids <notify@sparkkids.org>".
      from: "Spark Kids <onboarding@resend.dev>",
      to: notifyEmails,
      subject: `New camp signup: ${r.camper_name}`,
      html: `
        <h2>New Spark Kids camp interest</h2>
        <p><strong>Parent:</strong> ${r.parent_name}</p>
        <p><strong>Email:</strong> ${r.parent_email}</p>
        <p><strong>Phone:</strong> ${r.parent_phone ?? "—"}</p>
        <p><strong>Camper:</strong> ${r.camper_name} (age ${r.camper_age})</p>
        <p><strong>Notes:</strong> ${r.notes ?? "—"}</p>
      `,
    });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
