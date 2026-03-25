<script lang="ts">
	import { onMount } from 'svelte';
	import { getRecentItems } from '$lib/feed-utils';

	import type { NewsFeedItem } from '$types/feed';

	interface Props {
		newsFeedItems: NewsFeedItem[];
	}
	let { newsFeedItems = [] }: Props = $props();

	function initFeed() {
		const mainGrid = document.getElementById('main-feed');
		if (!mainGrid) return;

		// Determine current page to set active pill and filter data
		const currentPath = window.location.pathname.split('/').pop() || '/';
		let recentFeedItems = getRecentItems(newsFeedItems);

		// Filter Feed based on category
		if (currentPath === 'jobs') {
			recentFeedItems = recentFeedItems.filter((item) =>
				/join|hire|new role|new gig|promot/i.test(item.content)
			);
		} else if (currentPath === 'layoffs') {
			recentFeedItems = recentFeedItems.filter((item) =>
				/layoff|laid off|retir/i.test(item.content)
			);
		} else if (currentPath === 'social') {
			recentFeedItems = recentFeedItems.filter(
				(item) =>
					['X / Twitter', 'LinkedIn', 'Personal News'].includes(item.source) ||
					/personal news/i.test(item.content)
			);
		}

		// Sort Chronologically (Newest first)
		recentFeedItems.sort((a, b) => {
			const dateA = a.date ? new Date(a.date).getTime() : 0;
			const dateB = b.date ? new Date(b.date).getTime() : 0;
			return dateB - dateA;
		});

		let html = '';

		recentFeedItems.forEach((item, index) => {
			// Evaluate categories for the badges
			const isSystemAlert = item.id && item.id.toString().startsWith('inact');
			const isDirectSource =
				item.author === 'Cynthia Koons' ||
				item.author === 'Anjalee Khemlani' ||
				item.author === 'Meeri Kim' ||
				item.author === 'Brianna Abbott';
			const isWireNews = [
				'Press Release',
				'Publication',
				'Internal Memo',
				'News Reports',
				'Industry News',
				'Analysis',
				'LinkedIn',
				'X / Twitter'
			].includes(item.source);

			let badgeHtml = '';
			if (isSystemAlert) {
				badgeHtml = `<span class="category-badge watch-badge" title="System Generator">👀 WATCH LIST</span>`;
			} else if (isDirectSource) {
				badgeHtml = `<a href="/" class="category-badge direct-badge" title="Go to Direct from the Source">🎯 DIRECT FROM THE SOURCE</a>`;
			} else if (isWireNews) {
				badgeHtml = `<a href="/" class="category-badge wire-badge" title="Go to Wire News">🗞️ WIRE</a>`;
			} else {
				badgeHtml = `<a href="/" class="category-badge gossip-badge" title="Go to Gossip Mill">☕ GOSSIP</a>`;
			}

			const jumpLink = item.link
				? `<a class="jump-link" href="${item.link}" target="_blank" rel="noopener noreferrer" title="View Post">↗</a>`
				: '';

			html += `
				<article class="feed-card glass-effect" style="animation-delay: ${index * 0.1}s">
					<div class="card-header">
						<img src="${item.avatar}" alt="${item.author}" class="avatar">
						<div class="author-info">
							<h4>${item.author} ${badgeHtml}</h4>
							<p>${item.role}</p>
						</div>
					</div>
					<div class="card-body">
						<p>${item.content}</p>
					</div>
					<div class="card-footer">
						<span>${item.time}</span>
						<div class="source-icon">
							${item.source} ${jumpLink}
						</div>
					</div>
				</article>
			`;
		});

		mainGrid.innerHTML = html;
	}
	onMount(() => {
		initFeed();
	});
</script>

<!-- Unified Feed Container -->
<section class="feed-grid unified-feed" id="main-feed">
	<!-- Feed cards injected via JS -->
</section>
