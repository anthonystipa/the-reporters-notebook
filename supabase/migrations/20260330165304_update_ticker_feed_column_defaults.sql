alter table "public"."ticker_feed_items" rename column "text" to "content";

alter table "public"."ticker_feed_items" alter column "content" set not null;

alter table "public"."ticker_feed_items" alter column "type" set not null;


