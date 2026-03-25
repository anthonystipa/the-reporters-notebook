<script lang="ts">
	import { onMount } from 'svelte';
	import { getRecentItems } from '$lib/feed-utils';
	import type { TickerFeedItem } from '$types/feed';

	interface Props {
		tickerItems: TickerFeedItem[];
	}
	let { tickerItems = [] }: Props = $props();

	function initTicker() {
		const content = document.getElementById('ticker-content');
		const clone = document.getElementById('ticker-content-clone');

		if (!content || !clone) return;

		const recentTickerItems = getRecentItems(tickerItems);

		let html = '';
		recentTickerItems.forEach((item) => {
			const tagClass = item.type === 'move' ? 'tag-move' : 'tag-story';
			const tagLabel = item.type === 'move' ? 'Job Move' : 'New Story';

			html += `
                <div class="ticker-item">
                    <span class="ticker-tag ${tagClass}">${tagLabel}</span>
                    <strong>UPDATE:</strong> ${item.text}
                </div>
            `;
		});

		// Populate actual content and duplicate for seamless scrolling loop
		content.innerHTML = html;
		clone.innerHTML = html;

		// Calculate total width and set animation duration based on length
		// (A rough calculation to ensure consistent speed regardless of content length)
		const totalItems = recentTickerItems.length;
		const duration = Math.max(20, totalItems * 10); // Minimum duration to prevent blazing fast speeds on few items

		content.style.animationDuration = `${duration}s`;
		clone.style.animationDuration = `${duration}s`;
	}
	onMount(() => {
		initTicker();
	});
</script>

<div class="ticker-wrapper">
	<div class="ticker-label">BREAKING MOVES</div>
	<div class="ticker-container">
		<div class="ticker-content" id="ticker-content">
			<!-- Ticker items dynamically injected via JS -->
		</div>
		<!-- Duplicated class for seamless infinite scroll -->
		<div class="ticker-content" id="ticker-content-clone"></div>
	</div>
</div>
