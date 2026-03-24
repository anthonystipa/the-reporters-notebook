# The Reporters Notebook

This website was originally created using the Google Anti Gravity IDE and was manually adapted and rebuilt using SvelteKit.

# Updating mock feed data

All of the data is currently being served through static files located in the `src/data` directory. The plan is to eventually move this to a database and have an admin interface to manage the entries.

# Managing users

Update existing user profile to be marked as paid:

```sql
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"paid": true}'::jsonb
where email = 'user@example.com';
```
