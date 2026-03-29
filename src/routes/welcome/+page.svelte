<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let message = $state('Confirming your email...');

	onMount(() => {
		// Wait a moment, then redirect to home if session was established
		const timer = setTimeout(() => {
			goto('/signin');
		}, 3000);

		return () => clearTimeout(timer);
	});
</script>

<main class="container">
	<header class="page-header">
		<span class="header-badge">Email Confirmation</span>
		<h2>Welcome to the Reporter's Notebook! 🎉</h2>
	</header>
	<section class="welcome-section">
		<div class="welcome-card glass-effect">
			<h3>Confirming your email</h3>
			<p class="message">{message}</p>
			<p class="redirect-text">You'll be redirected shortly...</p>
		</div>
	</section>
</main>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 20px;
	}

	.page-header {
		text-align: center;
		margin-bottom: 60px;
		margin-top: 40px;
	}

	.header-badge {
		display: inline-block;
		background: var(--accent-color);
		color: white;
		padding: 8px 16px;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 600;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		margin-bottom: 16px;
	}

	.page-header h2 {
		font-size: 2.5rem;
		color: var(--text-primary);
		margin: 0;
		font-weight: 600;
	}

	.welcome-section {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px 20px 100px 20px;
	}

	.welcome-card {
		background: var(--surface-color);
		border: 1px solid var(--surface-border);
		border-radius: 12px;
		padding: 60px 40px;
		text-align: center;
		max-width: 500px;
		width: 100%;
	}

	.welcome-card h3 {
		font-size: 1.8rem;
		color: var(--text-primary);
		margin: 0 0 24px 0;
		font-weight: 600;
	}

	.message {
		margin: 0 0 16px 0;
		color: var(--text-primary);
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.redirect-text {
		margin: 0;
		color: var(--text-secondary);
		font-size: 0.95rem;
	}
</style>
