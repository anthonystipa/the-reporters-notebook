<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import NavBar from '$components/NavBar.svelte';
</script>

<NavBar newsFeedUrl={'/#feed'} currentSection={'about'} />

<!-- Main Content Area -->
<main class="container">
	<header class="page-header">
		<span class="header-badge">Beyond the 'Book</span>
		<h2>Who We Are</h2>
	</header>
	<section
		class="bio-section glass-effect"
		style="max-width: 800px; margin: 0 auto; padding: 40px; text-align: center; border-radius: 12px;"
	>
		<img
			src="https://ui-avatars.com/api/?name=Anthony+Stipa&background=f6ad55&color=fff&size=200"
			alt="Anthony Stipa"
			style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; margin-bottom: 24px; border: 4px solid var(--surface-border); box-shadow: 0 4px 12px rgba(0,0,0,0.2);"
		/>
		<h3 style="font-size: 1.8rem; margin-bottom: 8px; color: var(--text-primary);">
			Anthony Stipa
		</h3>
		<h4
			style="color: var(--accent-color); font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 24px;"
		>
			Principal, Quickstudy Consulting, LLC
		</h4>

		<p style="color: var(--text-secondary); line-height: 1.8; font-size: 1.1rem; text-align: left;">
			Anthony is academically trained in both broadcast media and journalism, with a degree from
			Temple University. He began his formal career working in the news division of CBS, identifying
			stories and writing copy. After a career pivot to PR, he's spent the last 10 years in various
			capacities, writing and shaping communications strategies for creative agencies, universities,
			and a city's tourism marketing organization. Today, he spends most of his time cooking up
			media strategies and campaigns for tech startups around the country.
		</p>
	</section>
</main>

<Footer />
