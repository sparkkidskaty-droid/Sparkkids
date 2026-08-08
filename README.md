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

- Camp ages, dates, and pricing on `/programs` (currently a placeholder).
- Photos on `/gallery`.
- A real donation link (PayPal/Venmo/giving platform) on `/get-involved`.
- The financial-assistance triage logic in `app/contact/actions.ts` — see the
  `TODO(human)` there.
