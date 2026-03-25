<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import UnifiedFeed from '$components/UnifiedFeed.svelte';
	import NavBar from '$components/NavBar.svelte';
	import NewsTicker from '$components/NewsTicker.svelte';
	import type { PageProps } from './$types';
	import FilterPills from '$components/FilterPills.svelte';

	let { data }: PageProps = $props();
</script>

<NewsTicker tickerItems={data.tickerItems} />
<NavBar currentUser={data.user} />

<!-- Main Content Area -->
<main class="container">
	<header class="page-header">
		<span class="header-badge">Latest from the Frontlines of Healthcare Reporting</span>
		<h2>Reducing spam, spin, and PR ignorance since 2026</h2>
	</header>
	<FilterPills currentSection="/" />
	<UnifiedFeed newsFeedItems={data.newsFeedItems} />
</main>

<Footer />
