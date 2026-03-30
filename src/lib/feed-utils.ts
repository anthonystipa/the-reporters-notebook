import type { NewsFeedItem, BaseFeedItem } from '$types/feed';

export function getRecentItems(items: BaseFeedItem[]) {
	const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
	const FORTY_FIVE_DAYS_MS = 45 * 24 * 60 * 60 * 1000;
	const now = Date.now();
	return items.filter((item) => {
		if (!item.date) return true;
		const itemDate = new Date(item.date).getTime();

		// If they retired, sunset them after 45 days. Otherwise 30 days.
		const isRetirement = /retir|step down/i.test(item.content);
		const threshold = isRetirement ? FORTY_FIVE_DAYS_MS : THIRTY_DAYS_MS;

		return now - itemDate <= threshold;
	});
}

export function getInactivityRecords(items: NewsFeedItem[]) {
	const SIXTY_DAYS_MS = 60 * 24 * 60 * 60 * 1000;
	const now = Date.now();

	// In a real database, we would group by author and find their most recent article date.
	// Here we simulate checking the mock data for items exactly 2+ months old
	// that don't have a recent counterpart.
	const inactiveItems: any[] = [];

	items.forEach((item) => {
		if (
			!item.date ||
			item.role.includes('Tips') ||
			item.role.includes('Feature') ||
			item.role.includes('Publication') ||
			item.role.includes('Former') ||
			item.role.includes('Newsletter') ||
			item.author.includes('Axios Vitals')
		)
			return;

		const itemDate = new Date(item.date).getTime();
		const daysSince = (now - itemDate) / (1000 * 60 * 60 * 24);

		// If their last known record in our DB is older than 60 days
		if (daysSince >= 60) {
			// Check if they have a newer record in the same array
			const hasRecentRecord = items.some((otherItem) => {
				if (otherItem.id === item.id || otherItem.author !== item.author || !otherItem.date)
					return false;
				return now - new Date(otherItem.date).getTime() < SIXTY_DAYS_MS;
			});

			if (!hasRecentRecord) {
				// Synthesize an inactivity departure alert
				inactiveItems.push({
					id: `inact-${item.id}`,
					author: item.author,
					role: item.role,
					avatar:
						item.avatar ||
						`https://ui-avatars.com/api/?name=${item.author}&background=dc3545&color=fff`,
					content: `👀 <strong>System Alert:</strong> ${item.author} has not published or updated their professional status in over 60 days. Added to watch list to monitor for potential coverage pivots or role transitions.`,
					time: 'Automated Alert',
					date: new Date().toISOString().split('T')[0], // Give it today's date
					source: 'System Tracker'
				});
			}
		}
	});

	return inactiveItems;
}

export function isWireNews(source: string) {
	return [
		'Press Release',
		'Publication',
		'Internal Memo',
		'News Reports',
		'Industry News',
		'Analysis',
		'LinkedIn',
		'X / Twitter'
	].includes(source);
}
