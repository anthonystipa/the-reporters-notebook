import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getAllTickerFeedItems } from '$lib/server/ticker-feed-dao';

export const GET: RequestHandler = async ({ locals }) => {
	const tickerItems = await getAllTickerFeedItems(locals.supabase);

	return json({ tickerItems });
};
