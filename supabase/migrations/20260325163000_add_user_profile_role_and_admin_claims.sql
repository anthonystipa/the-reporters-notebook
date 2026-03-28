alter table "public"."user_profiles"
  add column if not exists "role" text;

update "public"."user_profiles"
set "role" = 'user'
where "role" is null;

alter table "public"."user_profiles"
  alter column "role" set default 'user',
  alter column "role" set not null;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'user_profiles_role_check'
      and conrelid = 'public.user_profiles'::regclass
  ) then
    alter table "public"."user_profiles"
      add constraint "user_profiles_role_check"
      check ("role" in ('user', 'admin'));
  end if;
end $$;

drop policy if exists "Users can update own basic profile fields" on "public"."user_profiles";
create policy "Users can update own basic profile fields"
  on "public"."user_profiles"
  for update
  using (auth.uid() = "user_id")
  with check (
    auth.uid() = "user_id"
    and "role" = (select up."role" from "public"."user_profiles" up where up."user_id" = auth.uid())
    and "payment_status" = (
      select up."payment_status" from "public"."user_profiles" up where up."user_id" = auth.uid()
    )
  );

create or replace function public.handle_new_user_profile()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.user_profiles (user_id, first_name, last_name, role)
  values (
    new.id,
    new.raw_user_meta_data ->> 'first_name',
    new.raw_user_meta_data ->> 'last_name',
    coalesce(new.raw_app_meta_data ->> 'role', 'user')
  )
  on conflict (user_id) do nothing;

  return new;
end;
$$;

create or replace function public.sync_user_profile_claims()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  update auth.users
  set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb)
    || jsonb_build_object(
      'role', new.role,
      'payment_status', new.payment_status,
      'paid', (new.payment_status = 'paid')
    )
  where id = new.user_id;

  return new;
end;
$$;

drop trigger if exists on_user_profile_claims_changed on public.user_profiles;
create trigger on_user_profile_claims_changed
  after insert or update of role, payment_status on public.user_profiles
  for each row
  execute function public.sync_user_profile_claims();

drop trigger if exists on_user_profile_payment_status_changed on public.user_profiles;
drop function if exists public.sync_user_payment_claims();

update auth.users u
set raw_app_meta_data = coalesce(u.raw_app_meta_data, '{}'::jsonb)
  || jsonb_build_object(
    'role', p.role,
    'payment_status', p.payment_status,
    'paid', (p.payment_status = 'paid')
  )
from public.user_profiles p
where p.user_id = u.id;
