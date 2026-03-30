import type { TickerFeedItem } from '$types/feed';

export async function getAllTickerFeedItems(supabase: any): Promise<TickerFeedItem[]> {
	const { data, error } = await supabase
		.from('ticker_feed_items')
		.select('id, type, content, date')
		.order('date', { ascending: false });

	const tickerFeedItems: TickerFeedItem[] = error ? [] : (data ?? []);
	return tickerFeedItems;
}
