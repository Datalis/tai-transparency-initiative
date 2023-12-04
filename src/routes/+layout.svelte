<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import NProgress from 'nprogress';
	import { navigating } from '$app/stores';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import PushNotificationSubscription from '$lib/components/PushNotificationSubscription.svelte';
	import type { NavigationTarget } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import { onMessagingListener } from '$lib/api/firebase';

	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	NProgress.configure({
		minimum: 0.16,
		showSpinner: false
	});

	$: {
		if ($navigating) {
			NProgress.start();
		} else {
			NProgress.done();
		}
	}

	let scrollHistory: {
		to: NavigationTarget | null;
		from: NavigationTarget | null;
		scrollY: number | undefined;
	}[] = [];

	beforeNavigate((navigation) => {
		scrollHistory.push({
			to: navigation.to,
			from: navigation.from,
			scrollY: window.scrollY
		});
	});

	afterNavigate((navigation) => {
		const routeHistory = scrollHistory.find((history) => {
			return history?.from?.url.pathname === navigation?.to?.url.pathname;
		});

		if (navigation.to?.url.hash) {
			gsap.to(window, {
				scrollTo: navigation.to?.url.hash
			});
		} else if (routeHistory && navigation.type == 'popstate') {
			// main?.scrollTo(0, routeHistory?.scrollY || 0);
			gsap.to(window, {
				scrollTo: routeHistory?.scrollY
			});
			scrollHistory = [];
		} else {
			// main?.scrollTo(0, 0);
			gsap.to(window, {
				scrollTo: 0
			});
		}
	});

	onMount(() => {
		const unsub = onMessagingListener((payload) => {
			const { notification, data } = payload;
			const n = new Notification(notification?.title ?? 'New content available', {
				body: notification?.body,
				icon: notification?.icon,
				image: notification?.image,
				data: data
			});
			n.onclick = function () {
				data?.url && window.open(data.url);
				n.close();
			};
		});
		return () => unsub();
	});
</script>

<svelte:head />

<Navbar />
<main>
	<slot />
</main>
<Footer />
<ScrollToTop />
<PushNotificationSubscription />

<style lang="scss" global>
	@import '../lib/theme/index.scss';

	/* html,
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
	} */

	html {
		-moz-osx-font-smoothing: grayscale;
	}

	body {
		overflow-x: hidden;
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
			border: 1px solid map-get($colors, "dark");
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: all 0.25s ease;

			&:hover {
				background-color: map-get($colors, "blue_light");
				border: 1px solid map-get($colors, "blue_light");
				svg {
					fill: map-get($colors, 'dark') !important;
				}
			}

			svg {
				fill: map-get($colors, "blue_light") !important;
			}
		}
	}
</style>
