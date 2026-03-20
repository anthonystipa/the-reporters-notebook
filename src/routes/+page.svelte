<script>
	import Footer from '$components/Footer.svelte';
	import UnifiedFeed from '$components/UnifiedFeed.svelte';
	import NavBar from '$components/NavBar.svelte';
	import NewsTicker from '$components/NewsTicker.svelte';
</script>

<NewsTicker />
<NavBar />

<!-- Main Content Area -->
<main class="container">
	<header class="page-header">
		<span class="header-badge">Latest from the Frontlines of Healthcare Reporting</span>
		<h2>Reducing spam, spin, and PR ignorance since 2026</h2>
	</header>
	<div class="filter-pills">
		<a href="/" class="badge active">All Updates</a>
		<a href="jobs" class="badge">Job Moves</a>
		<a href="layoffs" class="badge">Layoffs & Leaves</a>
		<a href="social" class="badge">Watch List Alerts</a>
	</div>
	<UnifiedFeed />
</main>

<Footer />
