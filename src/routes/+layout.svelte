<script>
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';

	import NProgress from 'nprogress';
	// import 'nprogress/nprogress.css';

	import { navigating } from '$app/stores';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	NProgress.configure({
		minimum: 0.16
	});

	$: {
		if ($navigating) {
			NProgress.start();
		} else {
			NProgress.done();
		}
	}
</script>

<svelte:head />

<Navbar />
<PageTransition>
	<slot />
</PageTransition>
<Footer />
<ScrollToTop />

<style lang="scss" global>
	@import '../lib/theme/index.scss';

	html,
	body {
		overflow-x: hidden;
		scroll-behavior: unset !important;
		scrollbar-color: #999 #333;

		-moz-osx-font-smoothing: grayscale;
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

	/* Make clicks pass-through */
	#nprogress {
		pointer-events: none;
	}

	#nprogress .bar {
		background: map-get($colors, 'green');

		position: fixed;
		z-index: 1031;
		top: 0;
		left: 0;

		width: 100%;
		height: 2px;
	}

	/* Fancy blur effect */
	#nprogress .peg {
		display: block;
		position: absolute;
		right: 0px;
		width: 100px;
		height: 100%;
		box-shadow: 0 0 10px map-get($colors, 'green'), 0 0 5px map-get($colors, 'green');
		opacity: 1;

		-webkit-transform: rotate(3deg) translate(0px, -4px);
		-ms-transform: rotate(3deg) translate(0px, -4px);
		transform: rotate(3deg) translate(0px, -4px);
	}

	/* Remove these to get rid of the spinner */
	#nprogress .spinner {
		display: block;
		position: fixed;
		z-index: 1031;
		top: 15px;
		right: 15px;
	}

	#nprogress .spinner-icon {
		width: 18px;
		height: 18px;
		box-sizing: border-box;

		border: solid 2px transparent;
		border-top-color: map-get($colors, 'green');
		border-left-color: map-get($colors, 'green');
		border-radius: 50%;

		-webkit-animation: nprogress-spinner 400ms linear infinite;
		animation: nprogress-spinner 400ms linear infinite;
	}

	.nprogress-custom-parent {
		overflow: hidden;
		position: relative;
	}

	.nprogress-custom-parent #nprogress .spinner,
	.nprogress-custom-parent #nprogress .bar {
		position: absolute;
	}

	@-webkit-keyframes nprogress-spinner {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes nprogress-spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	#app {
		font-family: 'Lato', sans-serif;
		background: map-get($colors, 'light');

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
			transition: all 0.25s ease;

			&:hover {
				background-color: map-get($colors, 'green');
				border: 1px solid map-get($colors, 'green');
				svg {
					fill: map-get($colors, 'blue') !important;
				}
			}

			svg {
				fill: map-get($colors, 'green') !important;
			}
		}
	}
</style>
