<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
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
<main>
	<slot />
</main>
<Footer />

<style lang="scss" global>
	@import '../lib/theme/index.scss';

	#app {
		font-family: 'Lato', sans-serif;
		section {
			min-height: 500px;
			padding: 3rem 0;
			.divider {
				width: 100px;
			}
		}
	}
</style>
