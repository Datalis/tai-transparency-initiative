<script lang="ts">
	import Logo from '$lib/assets/images/logo.svg?component';
	import LogoFooter from '$lib/assets/images/logo-footer.svg?component';
	import FacebookIcon from '$lib/assets/icons/facebook.svg?component';
	import TwitterIcon from '$lib/assets/icons/twitter.svg?component';
	import LinkedInIcon from '$lib/assets/icons/linkedin.svg?component';
	import MenuIcon from '$lib/assets/icons/menu.svg?component';
	import CloseIcon from '$lib/assets/icons/close.svg?component';
	import ArrowRightIcon from '$lib/assets/icons/arrow-right.svg?component';
	import { page } from '$app/stores';
	import { afterNavigate, goto } from '$app/navigation';
	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

	// import ResourceFilters from './ResourceFilters.svelte';

	// gsap.registerPlugin(ScrollTrigger);

	// let menuAnim = gsap.timeline({ paused: true });

	// let navbarAnim = gsap.timeline({
	// 	scrollTrigger: {
	// 		trigger: '.header',
	// 		start: 'top -100px',
	// 		scrub: 1
	// 	}
	// });

	// const toggleMenu = () => {
	// 	isMenuOpen = !isMenuOpen;
	// };

	// $: currentFilter = +($page.url.searchParams.get('type') || 0);

	// const onFilterChange = (/** @type {any} */ e) => {
	// 	goto(`/resources?type=${e.target.value}`, { replaceState: false });
	// };

	// $: {
	// 	isMenuOpen ? menuAnim.play() : menuAnim.reverse();
	// 	if (typeof document !== 'undefined') {
	// 		isMenuOpen
	// 			? document.documentElement.classList.add('--menu-open')
	// 			: document.documentElement.classList.remove('--menu-open');
	// 	}
	// }

	// beforeNavigate(() => {
	// 	isMenuOpen = false;
	// });

	// afterNavigate(() => {
	// 	isMenuOpen = false;
	// 	navbarAnim.seek(0);
	// });

	// onMount(() => {
	// 	menuAnim
	// 		.to('.navbar .navbar_menu', {
	// 			y: 0,
	// 			opacity: 1,
	// 			duration: 0.2,
	// 			ease: 'power2'
	// 		})
	// 		.from('.navbar .navbar_menu .container', {
	// 			opacity: 0,
	// 			y: '-1%',
	// 			scale: 0.99,
	// 			duration: 0.1,
	// 			delay: 0.1
	// 		});

	// 	// TODO

	// 	navbarAnim
	// 		.to('.header', {
	// 			backgroundColor: 'rgba(250, 250, 250, 0.95)',
	// 			boxShadow: '0 0 1px rgba(0,0,0,0.1)',
	// 			backdropFilter: 'blur(3px)'
	// 		})
	// 		.to('.header .navbar .navbar_brand svg', { height: 35 })
	// 		.to('.header .navbar', { padding: '0.4rem 0' })
	// 		.to('.header .navbar .navbar_nav', { opacity: 0 });
	// });

	let isMenuOpen = false;
	let currentFilter = 0;
	let lastScrollY = 0;
	let isPinned = false;
	let isHidden = false;

	const onScroll = () => {
		const _scrollY = window.scrollY;
		isPinned = _scrollY > 100;
		isHidden = _scrollY > 100 && _scrollY > lastScrollY;
		lastScrollY = _scrollY;
	};

	onMount(() => {});

	afterNavigate(() => {
		isMenuOpen = false;
		enableBodyScroll(document.body);
	})

	const onFilterChange = (e: any) => {
		goto(`/resources?type=${e.target.value}`, { replaceState: false });
	};

	const toggleMenu = () => {
		isMenuOpen = !isMenuOpen;
		if (isMenuOpen) {
			disableBodyScroll(document.body);
		} else {
			enableBodyScroll(document.body);
		}
	};
</script>

<svelte:window on:scroll={onScroll} />

<header class="header" class:pinned={isPinned} class:white_pinned={isPinned && !$page.url.pathname.includes('resources')} class:blue_pinned={$page.url.pathname.includes('resources')} class:hidden={isHidden}>
	<div class="container">
		<div class="navbar">
			<a href="/" class="navbar_brand display_flex mr_auto">
				{#if $page.url.pathname.includes('resources')}
				<LogoFooter class="logo" />
				{:else}
				<Logo class="logo" />
				{/if}
			</a>
			<nav class="navbar_nav hide_on_md_and_down">
				<a href="https://www.facebook.com/TAInitiative/" target="_blank" class="link-icon">
					<FacebookIcon width="20" height="20" />
				</a>
				<a href="https://twitter.com/TAInitiative" target="_blank" class="link-icon">
					<TwitterIcon width="20" height="20" />
				</a>
				<a
					href="https://www.linkedin.com/organization-guest/company/transparency-and-accountability-initiative"
					target="_blank"
					class="link-icon"
				>
					<LinkedInIcon width="20" height="20" />
				</a>
			</nav>
			<button type="button" aria-label="menu" class="navbar_toggler" on:click={() => toggleMenu()}>
				<MenuIcon width="50" height="40" />
			</button>
			<div class="navbar_menu bg_blue" class:open={isMenuOpen}>
				<div class="container">
					<div class="display_flex align_center mt_3">
						<a href="/" class="navbar_menu_brand">
							<LogoFooter class="logo" />
						</a>
						<button class="navbar_menu__close ml_auto" on:click={() => toggleMenu()}>
							<CloseIcon width="24" height="24" />
						</button>
					</div>
					<nav class="navbar_menu__nav">
						<a
							href="/what-we-fund"
							class="display_flex align_center text_white mt_2"
							class:active={$page.url.pathname.includes('what-we-fund')}
						>
							<h2 class=" m_0">What we fund and why</h2>
							<ArrowRightIcon width="42" height="42" class="ml_auto" />
						</a>
						<div class="divider divider_gray divider_1 my_4" />
						<a
							href="/how-we-fund"
							class="display_flex align_center text_white"
							class:active={$page.url.pathname.includes('how-we-fund')}
						>
							<h2 class=" m_0">How we fund</h2>
							<ArrowRightIcon width="42" height="42" class="ml_auto" />
						</a>
						<div class="divider divider_gray divider_1 my_4" />
						<a
							href="/how-tai-works"
							class="display_flex align_center text_white"
							class:active={$page.url.pathname.includes('how-tai-works')}
						>
							<h2 class=" m_0">How TAI works</h2>
							<ArrowRightIcon width="42" height="42" class="ml_auto" />
						</a>
						<div class="divider divider_gray divider_1 my_4" />
						<a
							href="/about-us"
							class="display_flex align_center text_white"
							class:active={$page.url.pathname.includes('about-us')}
						>
							<h2 class="m_0">About us</h2>
							<ArrowRightIcon width="42" height="42" class="ml_auto" />
						</a>
						<div class="divider divider_gray divider_1 my_4" />
						<a
							href="/resources"
							class="display_flex align_center text_white"
							class:active={$page.url.pathname.includes('resources')}
						>
							<h2 class=" m_0">Resources</h2>
							<ArrowRightIcon width="42" height="42" class="ml_auto" />
						</a>
						<div class="divider divider_gray divider_1 my_4" />
						<div class="navbar_menu__nav__filters display_flex bg_blue pb_2 show_on_md_and_up mx_2">
							<div class="form_control form_control_radio mr_4">
								<label>
									<input
										type="radio"
										bind:group={currentFilter}
										name=""
										value={1}
										on:change={onFilterChange}
									/>
									TAI Weekly
								</label>
							</div>
							<div class="form_control form_control_radio mr_4">
								<label>
									<input
										type="radio"
										bind:group={currentFilter}
										name=""
										value={3}
										on:change={onFilterChange}
									/>
									Collaboration case note
								</label>
							</div>
							<div class="form_control form_control_radio mr_4">
								<label>
									<input
										type="radio"
										bind:group={currentFilter}
										name=""
										value={5}
										on:change={onFilterChange}
									/>
									Think pieces
								</label>
							</div>
							<div class="form_control form_control_radio mr_4">
								<label>
									<input
										type="radio"
										bind:group={currentFilter}
										name=""
										value={8}
										on:change={onFilterChange}
									/>
									Blogs
								</label>
							</div>
							<div class="form_control form_control_radio mr_4">
								<label>
									<input
										type="radio"
										bind:group={currentFilter}
										name=""
										value={16}
										on:change={onFilterChange}
									/>
									Reports
								</label>
							</div>
							<div class="form_control form_control_radio mr_4">
								<label>
									<input
										type="radio"
										bind:group={currentFilter}
										name=""
										value={18}
										on:change={onFilterChange}
									/>
									Full Disclosure Series
								</label>
							</div>
							<div class="form_control form_control_radio mr_4">
								<label>
									<input
										type="radio"
										bind:group={currentFilter}
										name=""
										value={7}
										on:change={onFilterChange}
									/>
									Library
								</label>
							</div>
						</div>
						<!-- <div class="resource_filters_mobile bg_blue pb_2 show_on_md_and_down">
							<ResourceFiltersMobile
								options={types}
								bind:currentFilter={typeParam}
								on:onChange={() => (currentPage = 1)}
							/>
						</div> -->
					</nav>
					<nav class="navbar_menu__links mt_5">
						<a href="https://www.facebook.com/TAInitiative/" class="mr_3 link-icon">
							<FacebookIcon width="20" height="20" />
						</a>
						<a href="https://twitter.com/TAInitiative" class="mr_3 link-icon">
							<TwitterIcon width="20" height="20" />
						</a>
						<a
							href="https://www.linkedin.com/organization-guest/company/transparency-and-accountability-initiative?challengeId=AQFexlD2lTMqaAAAAXDvHIOa1MJGYXZxIQdXCoyqun-gbymyAqHKYz4JTJMObstoYl_5nPPpDIzLiS_jaiczyjYN6ze8lOTtlQ&submissionId=ec1285b6-8c7c-fd15-bcd2-b963fa594427"
							class="mr_3 link-icon"
						>
							<LinkedInIcon width="20" height="20" />
						</a>
					</nav>
				</div>
			</div>
		</div>
	</div>
</header>

<style lang="scss">
	$blue: map-get($colors, 'blue');
	$green: map-get($colors, 'green');
	$sm: map-get($grid-breakpoints, 'sm');

	.header {
		// background-color: $blue;
		position: fixed;
		z-index: 14;
		max-height: 100px;
		width: 100%;
		transition: all 0.3s ease-in-out;

		.navbar,
		.navbar .navbar_nav {
			transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
		}

		.navbar {
			display: flex;
			align-items: center;
			padding: 1rem 0rem;
			z-index: 9;
			position: relative;
			width: 100%;
		}

		.navbar .navbar_brand {
			width: 200px;
			height: 50px;
			transition: all 0.3s ease-in-out;
			:global(svg) {
				//width: 100%;
				height: 100%;
				:global(.cls-2){
					fill: #1e3653;
				}
			}
		}

		.navbar .navbar_nav {
			margin-left: auto;
			display: inline-flex;
			list-style: none;
			padding: 0;
			margin-right: 2rem;
			align-items: center;

			a {
				margin-right: 1rem;
			}
		}

		.navbar .navbar_menu {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			z-index: 15;
			height: 100vh;
			overflow: hidden;
			will-change: transform;
			transition: all 0.7s cubic-bezier(0.075, 0.82, 0.165, 1);
			/* transition-delay: 0.1s; */
			transform: translate3d(0, -100%, 0);
			opacity: 0;

			.container {
				transition: all 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
				opacity: 0;
				transform: scale(0.99) translate3d(0, -1%, 0);
			}

			&.open {
				transition: all 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
				transform: translate3d(0, 0, 0);
				opacity: 1;
				.container {
					transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
					transition-delay: 0.2s;
					opacity: 1;
					transition-duration: 0;
					transform: scale(1) translate3d(0, 1%, 0);
				}
			}

			&_brand {
				width: 200px;
				height: 50px;
				transition: all 0.3s ease-in-out;
				:global(svg) {
					//width: 100%;
					height: 100%;
				}
			}

			&__nav {
				margin-top: 3rem;
				.divider {
					margin-top: 1rem !important;
					margin-bottom: 1rem !important;
				}
				a {
					:global(svg) {
						min-width: 42px;
					}
					:global(svg path) {
						stroke: map-get($colors, "white" ) !important;
						stroke-width: 1px !important;
					}
					h2 {
						font-weight: 499 !important;
						transition: all 0.15s ease;
						letter-spacing: normal !important;
					}
				}
				a:hover,
				a.active {
					h2 {
						font-weight: 600 !important;
						color: map-get($colors, "blue_light" );
					}
					:global(svg path) {
						transition: all 0.1s ease;
						stroke-width: 2px !important;
						stroke: map-get($colors, "blue_light" ) !important;
					}
				}
				@media (max-width: $sm) {
					a h2 {
						font-size: 1.2rem !important;
					}
					a {
						:global(svg) {
							width: 24px !important;
							height: 24px !important;
						}
					}
				}
				@media screen and (max-width: $sm) {
					margin-top: 2rem;
				}
				&__filters {
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 2rem;
					label {
						cursor: pointer;
						font-size: pxToRem(12);
					}
				}
			}

			&__links {
				display: none;
				align-items: center;
				@media screen and (max-width: $sm) {
					display: flex;
					margin-top: 1.5rem;
					justify-content: center;
				}
			}

			
		}

		.navbar_toggler{
			:global(path){
				stroke: map-get($colors, "blue_light" ) !important;
			}
		}

		&.hidden {
			transition-duration: 0.4s;
			transform: translate3d(0, -100%, 0);
		}

		&.white_pinned{
			background-color: rgba(white, 0.9);
		}
		&.blue_pinned{
			background-color: rgba(30, 54, 83, 0.9);
		}

		&.pinned {
			//background-color: rgba(white, 0.9);
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
			max-height: 70px;
			backdrop-filter: blur(10px);

			.navbar {
				padding: 0.5rem 0;
			}
			.navbar .navbar_brand {
				height: 45px;
			}
			.navbar .navbar_nav {
				opacity: 0;
			}
		}
	}
</style>
