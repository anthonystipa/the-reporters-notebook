import type { PageServerLoad } from './$types';
import { FeedItems } from '$data/feed-items';
import { TickerItems } from '$data/ticker-items';
import { getInactivityRecords } from '$lib/feed-utils';

export const load: PageServerLoad = async ({ params }) => {
	const watchListItems = getInactivityRecords(FeedItems);
	const newsFeedItems = FeedItems;
	const tickerItems = TickerItems;

	return {
		newsFeedItems,
		tickerItems,
		watchListItems
	};
};
