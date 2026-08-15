-- Spark Kids: remember which language the parent was using when they
-- submitted, so the confirmation email can be sent in that language.

alter table public.camp_interest
  add column if not exists lang text not null default 'en';
