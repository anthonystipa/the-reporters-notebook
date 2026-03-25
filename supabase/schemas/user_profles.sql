create table if not exists "user_profiles" (
  "user_id" uuid primary key references auth.users (id) on delete cascade,
  "first_name" text,
  "last_name" text,
  "payment_status" text not null default 'unpaid' check ("payment_status" in ('unpaid', 'paid', 'past_due', 'canceled')),
  "inserted_at" timestamp with time zone default timezone('utc'::text, now()) not null,
  "updated_at" timestamp with time zone default timezone('utc'::text, now()) not null
);

alter table "user_profiles" enable row level security;

create policy "Users can view own profile"
  on "user_profiles"
  for select
  using (auth.uid() = "user_id");

create policy "Users can update own basic profile fields"
  on "user_profiles"
  for update
  using (auth.uid() = "user_id")
  with check (
    auth.uid() = "user_id"
    and "payment_status" = (select up."payment_status" from "user_profiles" up where up."user_id" = auth.uid())
  );

create function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.user_profiles (user_id, first_name, last_name)
  values (
    new.id,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name'
  )
  on conflict (user_id) do nothing;

  return new;
end;
$$;

create trigger on_auth_user_created_user_profile
  after insert on auth.users
  for each row
  execute function public.handle_new_user_profile();

create or replace function public.sync_user_payment_claims()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update auth.users
  set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb)
    || jsonb_build_object(
      'payment_status', new.payment_status,
      'paid', (new.payment_status = 'paid')
    )
  where id = new.user_id;

  return new;
end;
$$;

drop trigger if exists on_user_profile_payment_status_changed on public.user_profiles;
create trigger on_user_profile_payment_status_changed
  after update of payment_status on public.user_profiles
  for each row
  when (old.payment_status is distinct from new.payment_status)
  execute function public.sync_user_payment_claims();
