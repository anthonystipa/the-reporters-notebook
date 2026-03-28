<script lang="ts">
	import type { NewsFeedItem } from '$types/feed';

	interface Props {
		watchListItems: NewsFeedItem[];
	}
	let { watchListItems = [] }: Props = $props();
</script>

<div class="attendee-grid" id="watch-list-roster">
	{#each watchListItems as item}
		<div class="roster-card">
			<img src={item.avatar} alt={item.author} class="avatar" style="width:40px;height:40px" />
			<div class="roster-info">
				<strong>{item.author}</strong>
				<span>{item.role}</span>
				<small>Inactive > 60 Days</small>
			</div>
		</div>
	{/each}
</div>

<style>
</style>
