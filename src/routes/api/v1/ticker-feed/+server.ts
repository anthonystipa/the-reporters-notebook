import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { TickerItems } from '$data/ticker-items';

export const GET: RequestHandler = async ({ request }) => {
	const tickerItems = TickerItems;

	return json({ tickerItems });
};
