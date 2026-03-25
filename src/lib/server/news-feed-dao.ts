import type { NewsFeedItem } from '$types/feed';

export async function getAllNewsFeedItems(supabase: any): Promise<NewsFeedItem[]> {
	const { data, error } = await supabase
		.from('news_feed_items')
		.select('id, author, role, avatar, content, time, source, date')
		.order('date', { ascending: false })
		.order('id', { ascending: false });

	const newsFeedItems: NewsFeedItem[] = error ? [] : (data ?? []);
	return newsFeedItems;
}
