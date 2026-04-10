<script lang="ts">
	interface Props {
		currentSection?: string;
	}

	let { currentSection = '' }: Props = $props();
</script>

<div class="filter-pills">
	<a href="/" class="badge" class:active={currentSection === '/'}>All Updates</a>
	<a href="/jobs" class="badge" class:active={currentSection === '/jobs'}>Job Moves</a>
	<a href="/layoffs" class="badge" class:active={currentSection === '/layoffs'}>Layoffs & Leaves</a>
	<a href="/social" class="hidden badge" class:active={currentSection === '/social'}>Watch List Alerts</a>
</div>

<style>
	.filter-pills {
		display: flex;
		justify-content: center;
		gap: 12px;
	}

	.hidden {
		display: none;
	}
</style>
