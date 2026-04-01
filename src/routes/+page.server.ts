import type { PageServerLoad } from './$types';
import { getAllNewsFeedItems } from '$lib/server/news-feed-dao';
import { getAllTickerFeedItems } from '$lib/server/ticker-feed-dao';
import { getRecentItems, sortByNewestDate } from '$lib/feed-utils';

export const load: PageServerLoad = async ({ locals }) => {
	const newsFeedItems = await getAllNewsFeedItems(locals.supabase);
	const tickerItems = await getAllTickerFeedItems(locals.supabase);
	const recentNewsFeedItems = getRecentItems(newsFeedItems).sort(sortByNewestDate);
	return {
		newsFeedItems: recentNewsFeedItems,
		tickerItems
	};
};
