<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import NavBar from '$components/NavBar.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<NavBar currentUser={data.user} currentSection="unlock" />

<main class="container">
	<header class="page-header">
		<span class="header-badge">Account Status</span>
		<h2>Thank you for signing up!</h2>
		<p
			style="color: var(--text-secondary); max-width: 600px; margin: 16px auto 0 auto; line-height: 1.6;"
		>
			Your Reporter's Notebook account is being set up. To unlock full access and begin exploring our news, please contact us.
		</p>
	</header>

	<section class="unlock-section">
		<div class="unlock-card glass-effect">
			<div class="unlock-content">
				<h3>Account Pending Activation</h3>
				<p class="status-message">
					We're excited to have you on board! Your account is currently pending activation.
				</p>

				<div class="contact-info">
					<h4>Get in touch</h4>
					<p>To unlock your account and start accessing premium content, please reach out to us:</p>
					<div class="contact-links">
						<a href="mailto:anthonystipa@gmail.com" class="contact-btn">
							<span class="icon">✉️</span>
							Email us
						</a>
						<!--<a href="https://reportersnotebook.com/contact" class="contact-btn">
							<span class="icon">💬</span>
							Contact form
						</a>-->
					</div>
				</div>

				<div class="info-box">
					<p>
						In the meantime, feel free to explore our <a href="/about">about page</a> to learn more
						about what Reporter's Notebook offers.
					</p>
				</div>

				<a href="/signout" class="signout-link">Sign out</a>
			</div>
		</div>
	</section>
</main>

<Footer />

<style>
	.unlock-section {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 40px 20px;
		min-height: calc(100vh - 400px);
	}

	.unlock-card {
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid var(--surface-border);
		border-radius: 12px;
		padding: 60px 40px;
		text-align: center;
		max-width: 500px;
		width: 100%;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(10px);
	}

	.unlock-content h3 {
		font-size: 2rem;
		color: var(--text-primary);
		margin-bottom: 16px;
	}

	.status-message {
		color: var(--text-secondary);
		margin-bottom: 40px;
		font-size: 1.1rem;
		line-height: 1.6;
	}

	.contact-info {
		margin-bottom: 40px;
		padding: 24px;
		background: rgba(246, 173, 85, 0.05);
		border: 1px solid rgba(246, 173, 85, 0.2);
		border-radius: 8px;
	}

	.contact-info h4 {
		font-size: 1.3rem;
		color: var(--text-primary);
		margin-bottom: 12px;
	}

	.contact-info > p {
		color: var(--text-secondary);
		margin-bottom: 20px;
	}

	.contact-links {
		display: flex;
		gap: 12px;
		justify-content: center;
		flex-wrap: wrap;
	}

	.contact-btn {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 12px 24px;
		background: var(--accent-color);
		color: #000;
		border: none;
		border-radius: 8px;
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
		transition: var(--transition-smooth);
		font-size: 0.95rem;
	}

	.contact-btn:hover {
		background: var(--accent-hover);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(246, 173, 85, 0.3);
	}

	.contact-btn .icon {
		font-size: 1.2rem;
	}

	.info-box {
		padding: 20px;
		background: rgba(104, 211, 145, 0.05);
		border: 1px solid rgba(104, 211, 145, 0.2);
		border-radius: 8px;
		margin-bottom: 32px;
	}

	.info-box p {
		color: var(--text-secondary);
		font-size: 0.95rem;
		line-height: 1.6;
	}

	.info-box a {
		color: var(--accent-color);
		text-decoration: none;
		font-weight: 600;
		transition: var(--transition-smooth);
	}

	.info-box a:hover {
		color: var(--accent-hover);
		text-decoration: underline;
	}

	.signout-link {
		display: inline-block;
		color: var(--text-secondary);
		text-decoration: none;
		font-size: 0.9rem;
		transition: var(--transition-smooth);
	}

	.signout-link:hover {
		color: var(--text-primary);
	}
</style>
