<script lang="ts">
	import type { UserProfile } from '$types/user';

	interface Props {
		currentSection?: string;
		newsFeedUrl?: string;
		currentUser?: UserProfile;
	}

	let { currentUser, currentSection = '', newsFeedUrl = '/' }: Props = $props();

	function verifySubmitUpdate() {
		window.location.href = 'mailto:anthonystipa@gmail.com';
	}

	function isNewsFeedSection(currentSection: string) {
		// These are all the sections considered news feed
		return (
			currentSection === '' ||
			currentSection === 'social' ||
			currentSection === 'layoffs' ||
			currentSection === 'jobs'
		);
	}
</script>

<nav class="navbar glass-effect">
	<div class="nav-content">
		<h1 class="logo">Reporter's <span>Notebook</span></h1>
		<div class="nav-links">
			{#if currentUser}
				<a href={newsFeedUrl} class:active={isNewsFeedSection(currentSection)}>News Feed</a>
			{:else}
				<a href="/signin" class:active={currentSection === 'signin'}>Signin</a>
				<a href="/subscribe" class:active={currentSection === 'subscribe'}>Subscribe Now</a>
			{/if}
			<a href="/about" class:active={currentSection === 'about'}>Who We Are</a>
			{#if currentUser}
				<button class="primary-btn" onclick={verifySubmitUpdate}> Verify/Submit Update </button>
				<form method="POST" action="/signout">
					<button class="primary-btn" type="submit">Signout</button>
				</form>
			{/if}
		</div>
	</div>
</nav>

<style>
	/* Navigation */
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
</style>
