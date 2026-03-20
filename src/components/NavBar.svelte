<script lang="ts">
	interface Props {
		currentSection?: string;
		newsFeedUrl?: string;
	}

	let { currentSection = '', newsFeedUrl = '#feed' }: Props = $props();

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
			<a href={newsFeedUrl} class:active={isNewsFeedSection(currentSection)}>News Feed</a>
			<a href="subscribe" class:active={currentSection === 'subscribe'}>Subscribe Now</a>
			<a href="about" class:active={currentSection === 'about'}>Who We Are</a>
			<button class="primary-btn pulse-glow" onclick={verifySubmitUpdate}>
				Verify/Submit Update
			</button>
		</div>
	</div>
</nav>
