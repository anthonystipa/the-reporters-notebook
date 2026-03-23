<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import NavBar from '$components/NavBar.svelte';

	let { form } = $props();
</script>

<NavBar currentSection="signin" />
<!-- Main Content Area -->
<main class="container">
	<header class="page-header">
		<span class="header-badge">Member Access</span>
		<h2>Sign in to your account</h2>
		<p
			style="color: var(--text-secondary); max-width: 600px; margin: 16px auto 0 auto; line-height: 1.6;"
		>
			Use the email address and password associated with your existing account to access the full
			Reporter's Notebook experience.
		</p>
	</header>
	<section class="signin-section">
		<div class="signin-card glass-effect">
			<h3>Welcome back</h3>
			<form method="POST" class="signin-form">
				{#if form?.message}
					<p class="form-message" aria-live="polite">{form.message}</p>
				{/if}
				<div>
					<label for="sub-email">Email Address</label>
					<input
						type="email"
						id="sub-email"
						name="email"
						required
						placeholder="name@company.com"
						value={form?.email ?? ''}
						autocomplete="email"
						style="width: 100%; box-sizing: border-box;"
					/>
				</div>
				<div>
					<label for="sub-password">Password</label>
					<input
						type="password"
						id="sub-password"
						name="password"
						required
						placeholder="••••••••"
						autocomplete="current-password"
						style="width: 100%; box-sizing: border-box;"
					/>
				</div>
				<button type="submit" class="signin-btn pulse-glow">Sign in</button>
			</form>
		</div>
	</section>
</main>

<Footer />

<style>
	.signin-section {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px 20px;
	}
	.signin-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid var(--surface-border);
		border-radius: 12px;
		padding: 40px;
		text-align: center;
		max-width: 400px;
		width: 100%;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
	}
	.signin-card h3 {
		font-size: 2rem;
		color: var(--text-primary);
		margin-bottom: 10px;
	}
	.signin-form {
		display: flex;
		flex-direction: column;
		gap: 15px;
		text-align: left;
	}
	.signin-form label {
		color: var(--text-primary);
		font-size: 0.9rem;
		font-weight: 500;
		margin-bottom: 4px;
	}
	.form-message {
		margin: 0;
		padding: 10px 12px;
		border: 1px solid rgba(246, 173, 85, 0.5);
		border-radius: 6px;
		background: rgba(246, 173, 85, 0.12);
		color: var(--text-primary);
		font-size: 0.9rem;
	}
	.signin-form input {
		padding: 12px;
		border-radius: 6px;
		border: 1px solid var(--surface-border);
		background: rgba(0, 0, 0, 0.4);
		color: white;
		font-family: inherit;
	}
	.signin-form input:focus {
		outline: none;
		border-color: var(--accent-color);
	}
	.signin-btn {
		background: var(--accent-color);
		color: white;
		border: none;
		padding: 14px;
		border-radius: 6px;
		font-size: 1.1rem;
		font-weight: 600;
		cursor: pointer;
		transition: all 0.3s ease;
		margin-top: 10px;
	}
	.signin-btn:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 15px rgba(246, 173, 85, 0.4);
	}
</style>
