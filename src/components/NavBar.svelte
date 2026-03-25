<script lang="ts">
	import type { UserProfile } from '$types/user';

	interface Props {
		currentSection?: string;
		newsFeedUrl?: string;
		currentUser?: UserProfile;
	}

	let { currentUser, currentSection = '', newsFeedUrl = '/' }: Props = $props();
	let menuOpen = $state(false);

	function verifySubmitUpdate() {
		window.location.href = 'mailto:anthonystipa@gmail.com';
	}

	function isNewsFeedSection(currentSection: string) {
		return (
			currentSection === '' ||
			currentSection === 'social' ||
			currentSection === 'layoffs' ||
			currentSection === 'jobs'
		);
	}

	function closeMenu() {
		menuOpen = false;
	}
</script>

<nav class="navbar glass-effect">
	<div class="nav-content">
		<h1 class="logo">Reporter's <span>Notebook</span></h1>

		<!-- Hamburger button (mobile only) -->
		<button
			class="hamburger"
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span class:open={menuOpen}></span>
			<span class:open={menuOpen}></span>
			<span class:open={menuOpen}></span>
		</button>

		<!-- Desktop links -->
		<div class="nav-links">
			{#if currentUser}
				<a href={newsFeedUrl} class:active={isNewsFeedSection(currentSection)}>News Feed</a>
			{:else}
				<a href="/signin" class:active={currentSection === 'signin'}>Sign in</a>
				<a href="/subscribe" class:active={currentSection === 'subscribe'}>Subscribe Now</a>
			{/if}
			<a href="/about" class:active={currentSection === 'about'}>Who We Are</a>
			{#if currentUser}
				<button class="primary-btn" onclick={verifySubmitUpdate}>Verify/Submit Update</button>
				<form method="POST" action="/signout">
					<button class="primary-btn" type="submit">Sign out</button>
				</form>
			{/if}
		</div>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="mobile-menu glass-effect">
			{#if currentUser}
				<a href={newsFeedUrl} class:active={isNewsFeedSection(currentSection)} onclick={closeMenu}>News Feed</a>
			{:else}
				<a href="/signin" class:active={currentSection === 'signin'} onclick={closeMenu}>Sign in</a>
				<a href="/subscribe" class:active={currentSection === 'subscribe'} onclick={closeMenu}>Subscribe Now</a>
			{/if}
			<a href="/about" class:active={currentSection === 'about'} onclick={closeMenu}>Who We Are</a>
			{#if currentUser}
				<button class="primary-btn mobile-btn" onclick={() => { closeMenu(); verifySubmitUpdate(); }}>Verify/Submit Update</button>
				<form method="POST" action="/signout">
					<button class="primary-btn mobile-btn" type="submit">Sign out</button>
				</form>
			{/if}
		</div>
	{/if}
</nav>

<style>
	.navbar {
		position: fixed;
		top: 40px;
		width: 100%;
		padding: 16px 0;
		z-index: 999;
	}

	.nav-content {
		max-width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 24px;
	}

	.logo {
		font-size: 1.5rem;
	}

	.logo span {
		color: var(--accent-color);
		font-weight: 300;
	}

	/* Desktop nav links */
	.nav-links {
		display: flex;
		align-items: center;
		gap: 32px;
	}

	.nav-links a {
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.9rem;
		font-weight: 500;
		transition: var(--transition-smooth);
	}

	.nav-links a:hover,
	.nav-links a.active {
		color: var(--text-primary);
	}

	/* Hamburger */
	.hamburger {
		display: none;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 4px;
	}

	.hamburger span {
		display: block;
		width: 22px;
		height: 2px;
		background: var(--text-primary);
		border-radius: 2px;
		transition: var(--transition-smooth);
		transform-origin: center;
	}

	.hamburger span.open:nth-child(1) {
		transform: translateY(7px) rotate(45deg);
	}
	.hamburger span.open:nth-child(2) {
		opacity: 0;
	}
	.hamburger span.open:nth-child(3) {
		transform: translateY(-7px) rotate(-45deg);
	}

	/* Mobile menu */
	.mobile-menu {
		display: none;
		flex-direction: column;
		gap: 4px;
		padding: 12px 24px 20px;
		border-top: 1px solid var(--surface-border);
	}

	.mobile-menu a {
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.95rem;
		font-weight: 500;
		padding: 10px 0;
		border-bottom: 1px solid var(--surface-border);
		transition: var(--transition-smooth);
	}

	.mobile-menu a:hover,
	.mobile-menu a.active {
		color: var(--text-primary);
	}

	.mobile-btn {
		width: 100%;
		margin-top: 8px;
		text-align: center;
	}

	@media (max-width: 768px) {
		.nav-links {
			display: none;
		}

		.hamburger {
			display: flex;
		}

		.mobile-menu {
			display: flex;
		}

		.logo {
			font-size: 1.2rem;
		}
	}
</style>
