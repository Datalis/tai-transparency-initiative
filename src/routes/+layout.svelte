<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
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
		overflow-x: hidden;
		scroll-behavior: smooth;
		scrollbar-color: #999 #333;
		&::-webkit-scrollbar {
			width: 10px;
			height: 10px;
		}
		&::-webkit-scrollbar-thumb {
			background: #999;
		}
		&::-webkit-scrollbar-track {
			background: #333;
		}
	}

	#app {
		font-family: 'Lato', sans-serif;
		background: map-get($colors, 'blue');

		.section {
			position: relative;
			display: block;
			padding-top: pxToRem(50);
			padding-bottom: pxToRem(50);
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
