import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { FeedItems } from '$data/feed-items';

export const GET: RequestHandler = async ({ request }) => {
	const newsFeedItems = FeedItems;

	return json({ newsFeedItems });
};
