<script lang="ts">
	import Footer from "../../components/Footer.svelte";
	import NavBar from "../../components/NavBar.svelte";

    function handleSubscribe(e: { preventDefault: () => void; }) {
        e.preventDefault(); 
        alert('Redirecting to secure payment portal...');
    }
</script>

<NavBar newsFeedUrl={'/#feed'} currentSection={'subscribe'}/>

<!-- Main Content Area -->
<main class="container">
    <header class="page-header">
        <span class="header-badge">Premium Access</span>
        <h2>Get the Full Story</h2>
        <p style="color: var(--text-secondary); max-width: 600px; margin: 16px auto 0 auto; line-height: 1.6;">
            Unlock exclusive real-time updates, complete journalist tracking, and in-depth analysis of healthcare media trends.
        </p>
    </header>
    <section class="pricing-section">
        <div class="pricing-card glass-effect">
            <h3>Monthly Pass</h3>
            <div class="price">$49<span>/mo</span></div>
            
            <ul class="pricing-features">
                <li>Real-time role changes and updates</li>
                <li>Full journalist directory access</li>
                <li>Exclusive industry trend reports</li>
                <li>Cancel anytime</li>
            </ul>

            <form class="subscribe-form" onsubmit={handleSubscribe}>
                <div>
                    <label for="sub-email">Email Address</label>
                    <input type="email" id="sub-email" required placeholder="name@company.com" style="width: 100%; box-sizing: border-box;">
                </div>
                <div>
                    <label for="sub-name">Full Name</label>
                    <input type="text" id="sub-name" required placeholder="Jane Doe" style="width: 100%; box-sizing: border-box;">
                </div>
                <button type="submit" class="subscribe-btn pulse-glow">Proceed to Payment</button>
            </form>
        </div>
    </section>
</main>

<Footer />

<style>
    .pricing-section {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 20px;
    }
    .pricing-card {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid var(--surface-border);
        border-radius: 12px;
        padding: 40px;
        text-align: center;
        max-width: 400px;
        width: 100%;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        backdrop-filter: blur(10px);
    }
    .pricing-card h3 {
        font-size: 2rem;
        color: var(--text-primary);
        margin-bottom: 10px;
    }
    .pricing-card .price {
        font-size: 3rem;
        font-weight: 700;
        color: var(--accent-color);
        margin-bottom: 20px;
    }
    .pricing-card .price span {
        font-size: 1.2rem;
        color: var(--text-secondary);
        font-weight: 400;
    }
    .pricing-features {
        list-style: none;
        padding: 0;
        margin: 0 0 30px 0;
        text-align: left;
        color: var(--text-secondary);
    }
    .pricing-features li {
        margin-bottom: 12px;
        display: flex;
        align-items: center;
    }
    .pricing-features li::before {
        content: '✓';
        color: var(--success-color);
        font-weight: bold;
        margin-right: 10px;
    }
    .subscribe-form {
        display: flex;
        flex-direction: column;
        gap: 15px;
        text-align: left;
    }
    .subscribe-form label {
        color: var(--text-primary);
        font-size: 0.9rem;
        font-weight: 500;
        margin-bottom: 4px;
    }
    .subscribe-form input {
        padding: 12px;
        border-radius: 6px;
        border: 1px solid var(--surface-border);
        background: rgba(0, 0, 0, 0.4);
        color: white;
        font-family: inherit;
    }
    .subscribe-form input:focus {
        outline: none;
        border-color: var(--accent-color);
    }
    .subscribe-btn {
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
    .subscribe-btn:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(246, 173, 85, 0.4);
    }
</style>