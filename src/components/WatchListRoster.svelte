<script lang="ts">
	import { getInactivityRecords } from '$lib/feed-utils';
	import { FeedItems } from '$data/feed-items';
	import { onMount } from 'svelte';

	function initWatchList() {
		const roster = document.getElementById('watch-list-roster');
		if (!roster) return;

		const inactiveItems = getInactivityRecords(FeedItems);

		// Hide the entire section if no alerts exist
		if (inactiveItems.length === 0) {
			// TODO: Have this handled in the social section and pass in the feeds items to this component
			roster.closest('.special-feature').style.display = 'none';
			return;
		}

		let html = '';
		inactiveItems.forEach((item) => {
			html += `
                <div class="roster-card">
                    <img src="${item.avatar}" alt="${item.author}" class="avatar" style="width:40px;height:40px">
                    <div class="roster-info">
                        <strong>${item.author}</strong>
                        <span>${item.role}</span>
                        <small>Inactive > 60 Days</small>
                    </div>
                </div>
            `;
		});

		roster.innerHTML = html;
	}

	onMount(() => {
		initWatchList();
	});
</script>

<div class="attendee-grid" id="watch-list-roster">
	<!-- Data injected via JS -->
</div>

<style>
</style>
