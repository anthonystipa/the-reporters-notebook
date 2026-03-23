<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import NavBar from '$components/NavBar.svelte';
	import NewsTicker from '$components/NewsTicker.svelte';
	import WatchListRoster from '$components/WatchListRoster.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<NewsTicker />
<NavBar newsFeedUrl={'/social'} currentSection={'social'} currentUser={data.user} />

<!-- Main Content Area -->
<main class="container">
	<header class="page-header">
		<span class="header-badge">Latest from the Frontlines of Healthcare Reporting</span>
		<h2>Reducing spam, spin, and PR ignorance since 2026</h2>
	</header>
	<!-- SPECIAL FEATURE: WATCH LIST -->
	<section class="special-feature glass-effect">
		<div class="feature-header">
			<span class="pulse-dot"></span>
			<h3>Watch List Alerts</h3>
			<span class="badge watch-badge" style="border:none">System Generated</span>
		</div>
		<p class="feature-desc">Monitoring potentially inactive journalists closely.</p>
		<WatchListRoster />
	</section>

	<div class="filter-pills">
		<a href="/" class="badge">All Updates</a>
		<a href="/jobs" class="badge">Job Moves</a>
		<a href="/layoffs" class="badge">Layoffs & Leaves</a>
		<a href="/social" class="badge active">Watch List Alerts</a>
	</div>
</main>
<Footer />
