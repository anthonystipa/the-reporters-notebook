import type { PageServerLoad } from './$types';
import { getAllNewsFeedItems } from '$lib/server/news-feed-dao';
import { getAllTickerFeedItems } from '$lib/server/ticker-feed-dao';

export const load: PageServerLoad = async ({ locals }) => {
	const newsFeedItems = await getAllNewsFeedItems(locals.supabase);
	const tickerItems = await getAllTickerFeedItems(locals.supabase);
	return {
		newsFeedItems,
		tickerItems
	};
};
