<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
</script>

<svelte:head>
	<title>Transparency & Accountability Initiative</title>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link
		href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Navbar />
<PageTransition>
	<slot />
</PageTransition>
<Footer />

<style lang="scss" global>
	@import '../lib/theme/index.scss';

	html,
	body {
		scroll-behavior: smooth;
		overflow-x: hidden;
	}

	#app {
		font-family: 'Lato', sans-serif;

		section {
			min-height: 500px;
			display: block;
			padding-top: 2rem;
			padding-bottom: 2rem;
			.divider {
				width: 100px;
			}
		}

		.link-icon {
			width: 40px;
			height: 40px;
			border: 1px solid #c8ccd5;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			svg {
				fill: map-get($colors, 'green') !important;
			}
		}
	}
</style>
