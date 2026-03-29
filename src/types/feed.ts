export interface BaseFeedItem {
	id: number;
	date: string;
}

export interface NewsFeedItem extends BaseFeedItem {
	author: string;
	role: string;
	avatar?: string;
	content: string;
	time: string;
	source: string;
	is_direct_from_source: boolean;
	link?: string;
}

export interface TickerFeedItem extends BaseFeedItem {
	type: 'move' | 'story';
	text: string;
}
