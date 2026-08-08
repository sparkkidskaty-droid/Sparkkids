# Spark Kids

Website for Spark Kids — a nonprofit running low-cost tennis and running camps.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Supabase setup (for the camp interest form)

The signup form on `/contact` writes to a `camp_interest` table via a Supabase
server action. To wire it up:

1. Create a project at [supabase.com](https://supabase.com).
2. Run the SQL in `supabase/migrations/0001_init.sql` against it (SQL Editor,
   or the Supabase CLI).
3. Copy `.env.local.example` to `.env.local` and fill in your project's URL
   and anon key (Project Settings → API).

Until those env vars are set, form submissions will fail with an error —
everything else on the site works without Supabase.

## Still needs real content

- Photos on `/gallery` (from the first two camps).
- A real donation link (PayPal/Venmo/giving platform) on `/get-involved`.

Branding (logo, favicon, WeChat QR) is pulled from `~/Downloads/spark kids/`
into `public/brand/`. Program dates, hours, fee, and class list on
`/programs` come from `spark_kids_flier_bilingual.pdf` in that same folder —
update both the flier and this site if the Summer 2026 details change.
