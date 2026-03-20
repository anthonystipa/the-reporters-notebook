<script lang="ts">
	import Footer from "../../components/Footer.svelte";
	import NavBar from "../../components/NavBar.svelte";

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

<NavBar newsFeedUrl={'/#feed'} currentSection={'layoffs'}/>

<!-- Main Content Area -->
<main class="container">
    <header class="page-header">
        <span class="header-badge">Latest from the Frontlines of Healthcare Reporting</span>
        <h2>Reducing spam, spin, and PR ignorance since 2026</h2>
    </header>

    <div class="filter-pills">
        <a href="/" class="badge">All Updates</a>
        <a href="jobs" class="badge">Job Moves</a>
        <a href="layoffs" class="badge active">Layoffs & Leaves</a>
        <a href="social" class="badge">Watch List Alerts</a>
    </div>
    
    <p style="color: var(--text-secondary); text-align: center; max-width: 600px; margin: 0 auto 32px auto; font-size: 0.95rem; line-height: 1.5; font-style: italic;">This section tracks reporters who have been temporarily let go or have transitioned away from the industry altogether.</p>

    <!-- Unified Feed Container -->
    <section class="feed-grid unified-feed" id="main-feed">
        <!-- Feed cards injected via JS -->
    </section>

</main>

<Footer />
