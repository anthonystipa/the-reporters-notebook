import type { PageServerLoad } from './$types';
import { FeedItems } from '$data/feed-items';
import { TickerItems } from '$data/ticker-items';

export const load: PageServerLoad = async ({ params }) => {
	const newsFeedItems = FeedItems;
	const tickerItems = TickerItems;
	return {
		newsFeedItems,
		tickerItems
	};
};
