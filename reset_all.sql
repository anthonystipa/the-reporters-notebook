begin;

-- 1) Wipe app objects only (keeps auth.users because that is in auth schema)
drop schema if exists public cascade;
create schema public;

-- 2) Restore standard schema grants
grant usage on schema public to postgres, anon, authenticated, service_role;
grant all on schema public to postgres, service_role;

-- 3) Let migrations run again from zero
delete from supabase_migrations.schema_migrations;

commit;