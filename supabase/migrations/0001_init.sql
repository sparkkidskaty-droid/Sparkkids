-- Spark Kids Phase 1 schema

create table public.camp_interest (
  id uuid primary key default gen_random_uuid(),
  parent_name text not null,
  parent_email text not null,
  parent_phone text,
  camper_name text not null,
  camper_age int not null check (camper_age between 3 and 18),
  notes text,
  created_at timestamptz not null default now()
);

alter table public.camp_interest enable row level security;

-- Anyone can submit an interest form. Nobody can read submissions back
-- through the public API — staff review them via the Supabase dashboard
-- or a future admin view with a service-role client.
create policy "anyone can submit camp interest"
  on public.camp_interest for insert
  to anon
  with check (true);
