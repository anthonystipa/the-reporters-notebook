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
<NavBar newsFeedUrl={'/layoffs'} currentSection={'layoffs'} currentUser={data.user} />

<!-- Main Content Area -->
<main class="container">
	<header class="page-header">
		<span class="header-badge">Latest from the Frontlines of Healthcare Reporting</span>
		<h2>Reducing spam, spin, and PR ignorance since 2026</h2>
	</header>

	<FilterPills currentSection="/layoffs" />

	<p
		style="color: var(--text-secondary); text-align: center; max-width: 600px; margin: 0 auto 32px auto; font-size: 0.95rem; line-height: 1.5; font-style: italic;"
	>
		This section tracks reporters who have been temporarily let go or have transitioned away from
		the industry altogether.
	</p>

	<UnifiedFeed newsFeedItems={data.newsFeedItems} />
</main>

<Footer />
