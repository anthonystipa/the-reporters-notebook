<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	onMount(() => {
		const timer = setTimeout(() => {
			goto('/signin');
		}, 10000);

		return () => clearTimeout(timer);
	});
</script>

<main class="container">
	<header class="page-header">
		<span class="header-badge">Almost There</span>
		<h2>Check your inbox.</h2>
	</header>
	<section class="confirm-section">
		<div class="confirm-card glass-effect">
			<div class="icon-ring">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="28"
					height="28"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.5"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<rect x="2" y="4" width="20" height="16" rx="2" />
					<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
				</svg>
			</div>

			<h3>Confirm your email to get started</h3>

			<p class="message">
				We've sent a confirmation link to
				{#if data.email}
					<span class="email-chip">{data.email}</span>.
				{:else}
					your email address.
				{/if}
				Click the link in that email to activate your account.
			</p>

			<a href="/signin" class="cta-btn">Go to sign in</a>

			<p class="help-text">
				Didn't receive it? Check your spam folder or
				<a href="/subscribe" class="inline-link">try signing up again</a>.
			</p>
		</div>
	</section>
</main>

<style>
	.confirm-section {
		display: flex;
		justify-content: center;
		padding: 20px 20px 100px;
	}

	.confirm-card {
		border-radius: 16px;
		padding: 56px 48px;
		text-align: center;
		max-width: 520px;
		width: 100%;
	}

	.icon-ring {
		width: 64px;
		height: 64px;
		margin: 0 auto 28px;
		background: rgba(246, 173, 85, 0.12);
		border: 1px solid rgba(246, 173, 85, 0.3);
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--accent-color);
	}

	.confirm-card h3 {
		font-size: 1.6rem;
		color: var(--text-primary);
		margin: 0 0 20px;
		font-weight: 700;
		letter-spacing: -0.02em;
	}

	.message {
		margin: 0 0 32px;
		color: var(--text-secondary);
		font-size: 1rem;
		line-height: 1.7;
	}

	.email-chip {
		display: inline-block;
		color: var(--text-primary);
		font-weight: 600;
		background: rgba(246, 173, 85, 0.1);
		border: 1px solid rgba(246, 173, 85, 0.25);
		border-radius: 4px;
		padding: 1px 7px;
	}

	.cta-btn {
		display: inline-block;
		background: var(--accent-color);
		color: white;
		text-decoration: none;
		padding: 12px 32px;
		border-radius: 6px;
		font-size: 1rem;
		font-weight: 600;
		transition: all 0.3s ease;
		margin-bottom: 28px;
	}

	.cta-btn:hover {
		background: var(--accent-hover);
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(246, 173, 85, 0.4);
	}

	.help-text {
		margin: 0;
		color: var(--text-secondary);
		font-size: 0.875rem;
		line-height: 1.6;
	}

	.inline-link {
		color: var(--accent-color);
		text-decoration: none;
		font-weight: 500;
		border-bottom: 1px solid rgba(246, 173, 85, 0.4);
		transition: var(--transition-smooth);
	}

	.inline-link:hover {
		color: var(--accent-hover);
		border-bottom-color: var(--accent-hover);
	}
</style>
