alter table "public"."news_feed_items" enable row level security;

drop policy if exists "Authenticated users can read news feed items" on "public"."news_feed_items";
create policy "Authenticated users can read news feed items"
  on "public"."news_feed_items"
  for select
  to authenticated
  using (true);

alter table "public"."ticker_feed_items" enable row level security;

drop policy if exists "Authenticated users can read ticker feed items" on "public"."ticker_feed_items";
create policy "Authenticated users can read ticker feed items"
  on "public"."ticker_feed_items"
  for select
  to authenticated
  using (true);
