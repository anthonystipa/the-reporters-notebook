# The Reporters Notebook

This website was originally created using the Google Anti Gravity IDE and was manually adapted and rebuilt using SvelteKit.

# Managing users

Update existing user profile to be marked as paid:

```sql
update auth.users
set raw_app_meta_data = coalesce(raw_app_meta_data, '{}'::jsonb) || '{"paid": true}'::jsonb
where email = 'user@example.com';
```
