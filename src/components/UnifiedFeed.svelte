<script lang="ts">
	import { isWireNews, isSystemAlert } from '$lib/feed-utils';

	import type { NewsFeedItem } from '$types/feed';

	interface Props {
		newsFeedItems: NewsFeedItem[];
	}
	let { newsFeedItems = [] }: Props = $props();

	function generateAvatarInitials(author: string) {
		const cleaned = author.trim();
		if (!cleaned) return 'RN';

		// If only one word was found, limit the initials to 2 characters
		const words = cleaned.split(/\s+/).filter(Boolean);
		if (words.length === 1) {
			return words[0].slice(0, 2).toUpperCase();
		}

		const first = words[0]?.[0] ?? '';
		const last = words[words.length - 1]?.[0] ?? '';
		return `${first}${last}`.toUpperCase();
	}
</script>

{#snippet badgeItem(newsFeedItem: NewsFeedItem)}
	{#if isSystemAlert(newsFeedItem)}
		<span class="category-badge watch-badge" title="System Generator">👀 WATCH LIST</span>
	{:else if newsFeedItem.is_direct_from_source}
		<a href="/" class="category-badge direct-badge" title="Go to Direct from the Source"
			>🎯 DIRECT FROM THE SOURCE</a
		>
	{:else if isWireNews(newsFeedItem.source)}
		<a href="/" class="category-badge wire-badge" title="Go to Wire News">🗞️ WIRE</a>
	{:else}
		<a href="/" class="category-badge gossip-badge" title="Go to Gossip Mill">☕ GOSSIP</a>
	{/if}
{/snippet}

{#snippet avatar(newsFeedItem: NewsFeedItem)}
	<img
		src={newsFeedItem.avatar ??
			`https://ui-avatars.com/api/?name=${generateAvatarInitials(newsFeedItem.author)}&background=random`}
		alt={newsFeedItem.author}
		class="avatar"
	/>
{/snippet}

<section class="feed-grid unified-feed" id="main-feed">
	{#each newsFeedItems as newsFeedItem, index}
		<article class="feed-card glass-effect" style="animation-delay: {index * 0.1}s">
			<div class="card-header">
				{@render avatar(newsFeedItem)}
				<div class="author-info">
					<h4>{newsFeedItem.author} {@render badgeItem(newsFeedItem)}</h4>
					<p>{newsFeedItem.role}</p>
				</div>
			</div>
			<div class="card-body">
				<p>{@html newsFeedItem.content}</p>
			</div>
			<div class="card-footer">
				<span>{newsFeedItem.time}</span>
				<div class="source-icon">
					{newsFeedItem.source}
					{#if newsFeedItem.link}
						<a
							class="jump-link"
							href={newsFeedItem.link}
							target="_blank"
							rel="noopener noreferrer"
							title="View Post">↗</a
						>
					{/if}
				</div>
			</div>
		</article>
	{/each}
</section>

<style>
	/* Feed Grid */
.feed-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
	gap: 24px;
}

.feed-card {
	border-radius: 16px;
	padding: 24px;
	transition: var(--transition-smooth);
	display: flex;
	flex-direction: column;
	animation: fadeInUp 0.5s ease-out forwards;
	opacity: 0;
}

.feed-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
	border-color: rgba(255, 255, 255, 0.15);
}

.card-header {
	display: flex;
	align-items: center;
	margin-bottom: 16px;
}


.card-body p {
	font-size: 0.95rem;
	line-height: 1.5;
	margin-bottom: 16px;
	color: #8a8a8a;
}

.card-footer {
	margin-top: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.8rem;
	color: var(--text-secondary);
	border-top: 1px solid var(--surface-border);
	padding-top: 16px;
}

.jump-link {
	color: var(--accent-color);
	text-decoration: none;
	font-weight: 700;
	margin-left: 6px;
	padding: 2px 6px;
	background: rgba(246, 173, 85, 0.1);
	border-radius: 4px;
	transition: var(--transition-smooth);
}

.jump-link:hover {
	background: var(--accent-color);
	color: #fff;
	transform: scale(1.1);
}


.author-info h4 {
	font-size: 1rem;
	color: var(--text-primary);
	display: flex;
	align-items: center;
}

.author-info p {
	font-size: 0.8rem;
	color: var(--text-secondary);
}
</style>
