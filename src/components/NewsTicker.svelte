<script lang="ts">
	import { getRecentItems } from '$lib/feed-utils';
	import type { TickerFeedItem } from '$types/feed';

	interface Props {
		tickerItems: TickerFeedItem[];
	}
	let { tickerItems = [] }: Props = $props();
	let recentTickerItems = $derived.by(() => {
		return getRecentItems(tickerItems);
	});

	function calculateAnimationDuration(recentTickerItems: TickerFeedItem[]) {
		const totalItems = recentTickerItems.length;
		const duration = Math.max(20, totalItems * 10); // Minimum duration to prevent blazing fast speeds on few items
		return `${duration}s`;
	}
</script>

{#snippet tickerContent(recentTickerItems: TickerFeedItem[])}
	<div
		class="ticker-content"
		style="animation-duration: {calculateAnimationDuration(recentTickerItems)};"
	>
		{#each recentTickerItems as item}
			<div class="ticker-item">
				<span class="ticker-tag {item.type === 'move' ? 'tag-move' : 'tag-story'}"
					>{item.type === 'move' ? 'Job Move' : 'New Story'}</span
				>
				<strong>UPDATE:</strong>
				{item.text}
			</div>
		{/each}
	</div>
{/snippet}

<div class="ticker-wrapper">
	<div class="ticker-label">BREAKING MOVES</div>
	<div class="ticker-container">
		{@render tickerContent(recentTickerItems)}
		{@render tickerContent(recentTickerItems)}
	</div>
</div>
