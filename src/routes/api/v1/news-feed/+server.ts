import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getAllNewsFeedItems } from '$lib/server/news-feed-dao';

export const GET: RequestHandler = async ({ locals }) => {
	const newsFeedItems = await getAllNewsFeedItems(locals.supabase);
	return json({ newsFeedItems });
};
