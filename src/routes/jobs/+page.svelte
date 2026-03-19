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
<nav class="navbar glass-effect">
    <div class="nav-content">
        <h1 class="logo">Reporter's <span>Notebook</span></h1>
        <div class="nav-links">
            <a href="#feed" class="active">News Feed</a>
            <a href="subscribe">Subscribe Now</a>
            <a href="about">Who We Are</a>
            <button class="primary-btn pulse-glow"
                    onclick={()=>window.location.href='mailto:anthonystipa@gmail.com'}>
                Verify/Submit Update
            </button>
        </div>
    </div>
</nav>

<!-- Main Content Area -->
<main class="container">
    <header class="page-header">
        <span class="header-badge">Latest from the Frontlines of Healthcare Reporting</span>
        <h2>Reducing spam, spin, and PR ignorance since 2026</h2>
    </header>
    <div class="filter-pills">
        <a href="/" class="badge">All Updates</a>
        <a href="jobs" class="badge active">Job Moves</a>
        <a href="layoffs" class="badge">Layoffs & Leaves</a>
        <a href="social" class="badge">Watch List Alerts</a>
    </div>

    <!-- Unified Feed Container -->
    <section class="feed-grid unified-feed" id="main-feed">
        <!-- Feed cards injected via JS -->
    </section>
</main>


<footer class="site-footer">
    <p>This website is property of Quickstudy Consulting, LLC. Any reproduction, counterfeit, or unauthorized copying or distribution is prohibited.</p>
</footer>

<!--<script src="app.js"></script>-->