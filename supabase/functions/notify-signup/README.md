# notify-signup — email alerts + Google Sheets sync

Runs on every INSERT into `public.camp_interest` (wired via a Database
Webhook). It emails the camp inbox, emails the parent a confirmation in
their language, and optionally appends the row to a Google Sheet.

## Secrets

Set in Supabase → Edge Functions → Secrets:

| Name               | Value                                             |
| ------------------ | ------------------------------------------------- |
| `RESEND_API_KEY`   | Resend API key (`re_...`)                          |
| `NOTIFY_EMAIL`     | Camp inbox (comma-separate for several recipients) |
| `SHEET_WEBHOOK_URL`| Google Apps Script Web App URL (optional)          |

## Parent confirmation requires a verified domain

`onboarding@resend.dev` only delivers to the Resend account owner's own
email. To email parents (arbitrary addresses), verify a domain in Resend
and change `FROM` in `index.ts` to e.g. `Spark Kids <signups@yourdomain.org>`.

## Google Sheets setup (free, no paid tools)

1. Create a Google Sheet (sheets.new) and name the first row's columns:
   `created_at, parent_name, parent_email, parent_phone, camper_name, camper_age, lang, notes`.
2. Extensions → Apps Script. Delete the default code and paste:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  var r = data.record || {};
  sheet.appendRow([
    new Date(),
    r.parent_name || "",
    r.parent_email || "",
    r.parent_phone || "",
    r.camper_name || "",
    r.camper_age || "",
    r.lang || "en",
    r.notes || ""
  ]);
  return ContentService.createTextOutput("ok");
}
```

3. Deploy → New deployment → type **Web app**:
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Copy the resulting Web App URL (ends in `/exec`).
5. Add it as the `SHEET_WEBHOOK_URL` secret in Supabase, then redeploy
   the edge function.

Note: "Anyone" access means anyone holding the URL can append rows, so
keep the URL private (it lives only in the Supabase secret).
