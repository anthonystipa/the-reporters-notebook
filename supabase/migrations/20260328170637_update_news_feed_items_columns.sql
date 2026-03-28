alter table "public"."news_feed_items" add column "is_direct_from_source" boolean not null default false;

alter table "public"."news_feed_items" alter column "author" set not null;

alter table "public"."news_feed_items" alter column "content" set not null;

alter table "public"."news_feed_items"
  alter column "date" set default CURRENT_DATE,
  alter column "date" set not null;

alter table "public"."news_feed_items" alter column "role" set not null;

alter table "public"."news_feed_items" alter column "source" set not null;

alter table "public"."news_feed_items" alter column "time" set default 'Recently'::text;


