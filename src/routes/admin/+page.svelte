<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import NavBar from '$components/NavBar.svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<NavBar currentSection="admin" currentUser={data.user} />

<main class="container">
	<header class="page-header">
		<span class="header-badge">Admin</span>
		<h2>Admin Console</h2>
		<p>Admin-only area for moderation and operational tools.</p>
	</header>

	<section class="admin-card glass-effect">
		<h3>Access Confirmed</h3>
		<p>Signed in as <strong>{data.adminEmail}</strong>.</p>
	</section>
</main>

<Footer />

<style>
	.admin-card {
		max-width: 760px;
		margin: 0 auto 40px;
		padding: 28px;
		border-radius: 14px;
	}

	.admin-card h3 {
		margin-bottom: 12px;
	}

	.admin-card p {
		color: var(--text-secondary);
	}
</style>
