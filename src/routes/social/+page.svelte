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

<NavBar newsFeedUrl={'/#feed'} currentSection={'social'}/>

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
        <div class="attendee-grid" id="watch-list-roster">
            <!-- Data injected via JS -->
        </div>
    </section>

    <div class="filter-pills">
        <a href="/" class="badge">All Updates</a>
        <a href="jobs" class="badge">Job Moves</a>
        <a href="layoffs" class="badge">Layoffs & Leaves</a>
        <a href="social" class="badge active">Watch List Alerts</a>
    </div>
</main>
<Footer />