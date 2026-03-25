import type { TickerFeedItem } from '$types/feed';

export const TickerItems: TickerFeedItem[] = [
	{
		id: 1,
		type: 'move',
		text: 'Cynthia Koons takes over as Health Editor at the Wall Street Journal',
		date: '2026-03-11'
	},
	{
		id: 2,
		type: 'move',
		text: 'Anjalee Khemlani is now a Contributor for Forbes',
		date: '2026-03-11'
	},
	{
		id: 3,
		type: 'move',
		text: 'Joyce Famikinwa hired to replace Brock Turner at Modern Healthcare',
		date: '2026-03-04'
	},
	{ type: 'move', id: 4, text: 'Gabe Perna retiring at the end of the month', date: '2026-03-05' },
	{
		type: 'move',
		id: 5,
		text: 'Rebecca Torrence leaves Business Insider for Bloomberg to cover VC and startups',
		date: '2026-03-01'
	},
	{
		type: 'move',
		id: 6,
		text: 'Emma Beavins retires from her role as staff writer at Fierce Healthcare',
		date: '2026-02-28'
	},
	{
		type: 'move',
		id: 7,
		text: 'The Washington Post lays off approx. one-third of staff, impacting over 300 journalists',
		date: '2026-01-15'
	}, // Older than 30 days, will be filtered out
	{
		id: 8,
		type: 'story',
		text: 'Emma Beavins bows out with a story examining the Coalition for Health AI (CHAI) & assurance labs',
		date: '2026-02-28'
	},
	{
		id: 9,
		type: 'story',
		text: 'Rebecca Torrence begins covering AI, health tech, and emerging tech at Bloomberg',
		date: '2026-03-02'
	},
	{
		id: 10,
		type: 'move',
		text: 'Julie Wernau & Melanie Evans join Tradeoffs podcast from WSJ',
		date: '2026-03-05'
	},
	{
		id: 11,
		type: 'move',
		text: 'Teddy Rosenbluth joins NYT Well section as Health Reporter',
		date: '2026-03-05'
	},
	{
		id: 12,
		type: 'move',
		text: 'Trisha Thadani transitions to health beat at The Washington Post',
		date: '2026-03-05'
	},
	{
		id: 13,
		type: 'move',
		text: 'Victoria Knight (Axios Vitals) departs Axios health care policy beat',
		date: '2025-08-15'
	}, // Auto-filtered test
	{
		id: 14,
		type: 'move',
		text: 'Tim Baysinger (Axios Communicators) leaves Axios media beat',
		date: '2025-03-10'
	}, // Auto-filtered test
	{
		id: 15,
		type: 'story',
		text: 'Maia Anderson has returned from personal leave at Healthcare Brew',
		date: '2026-03-05'
	},
	{
		id: 16,
		type: 'move',
		text: 'Stefanie Ilgenfritz departs WSJ after 35-year health journalism career',
		date: '2025-10-15'
	} // Auto-filtered test
];
