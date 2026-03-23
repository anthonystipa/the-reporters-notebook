<script lang="ts">
	import type { User } from '@supabase/supabase-js';

	interface Props {
		currentSection?: string;
		newsFeedUrl?: string;
		currentUser?: User;
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
