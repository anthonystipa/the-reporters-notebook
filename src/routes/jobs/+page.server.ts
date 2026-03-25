import type { PageServerLoad } from './$types';
import { FeedItems } from '$data/feed-items';
import { TickerItems } from '$data/ticker-items';

export const load: PageServerLoad = async ({ params }) => {
	return {
		newsFeedItems: FeedItems,
		tickerItems: TickerItems
	};
};
