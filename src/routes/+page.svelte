<script>
    import Footer from '../components/Footer.svelte';
	import NavBar from '../components/NavBar.svelte';
</script>
<!-- Dynamic Ticker Component -->
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

<!-- Main Navigation/Header -->
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

    <!-- Unified Feed Container -->
    <section class="feed-grid unified-feed" id="main-feed">
        <!-- Feed cards injected via JS -->
    </section>
</main>

<Footer />