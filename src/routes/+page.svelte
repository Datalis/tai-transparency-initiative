<script lang="ts">
	import HeroImgLayer0 from '$lib/assets/images/home/group_3.webp';
	import HeroImgLayer1 from '$lib/assets/images/home/group_1.webp';
	import HeroImgLayer1Mobile from '$lib/assets/images/home/group_1_sm.webp';
	import HeroImgLayer2 from '$lib/assets/images/home/group_2.webp';

	import PlaceHolderImg from '$lib/assets/images/placeholder.png';
	import MacArthurLogo from '$lib/assets/icons/mac-arthur.svg?component';
	import FordLogo from '$lib/assets/icons/ford.svg?component';
	import HewlettLogo from '$lib/assets/icons/hewlett.svg?component';
	import LuminateLogo from '$lib/assets/icons/luminate.svg?component';
	import OpenSocietyLogo from '$lib/assets/icons/open-s.svg?component';
	import SkollLogo from '$lib/assets/icons/skoll.svg?component';
	import ChandlerLogo from '$lib/assets/images/chandler.svg?component';
	import FCDOLogo from '$lib/assets/images/fcdo.svg?component';

	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';
	import JoinSection from '$lib/components/JoinSection.svelte';

	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types';
	import CardsSection from '$lib/components/CardsSection.svelte';

	let brandSlide: HTMLElement;
	let windowWidth: number;

	$: hero1_img = windowWidth > 768 ? HeroImgLayer1 : HeroImgLayer1Mobile;

	export let data: PageData;
	export let form: ActionData;

	$: hero = data.hero;
	$: resources = data.ResourcesSection;

	function setupAnimations() {
		const offset = brandSlide.getBoundingClientRect().left - 100;
		const scrollBy = windowWidth - brandSlide.getBoundingClientRect().right + offset;

		gsap
			.timeline()
			.from('.brands_section .wrapper', {
				x: 300
			})
			.to('.brands_section .wrapper', {
				x: scrollBy,
				scrollTrigger: {
					trigger: '.brands_section',
					start: 'top bottom',
					end: 'bottom -100px',
					scrub: true
				}
			});

		
		const parallax = gsap.timeline({
			scrollTrigger: {
				trigger: '.landing_section',
				start: 'top 90px',
				end: 'bottom top',
				scrub: true
			}
		});

		gsap.utils.toArray('.landing_section__hero .parallax').forEach((layer: any) => {
			const d = +(layer.dataset.depth || 0);
			const movement = -(layer.offsetHeight * d);
			parallax.to(
				layer,
				{
					y: movement,
					ease: 'none'
				},
				0
			);
		});
	}

	onMount(() => {
		setupAnimations();
	});
</script>

<svelte:head>
	<link rel="preconnect" href={HeroImgLayer0} />
	<link rel="preconnect" href={hero1_img} />
	<link rel="preconnect" href={HeroImgLayer2} />
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div id="home" class="page">
	<section class="landing_section section bg_blue">
		<div class="container">
			<div class="row">
				<div class="col col_12 show_on_md_and_down">
					<div class="landing_section__hero landing_section__hero--mobile">
						<img class="parallax" data-depth="0.15" src={HeroImgLayer0} alt="" />
						<img class="parallax" data-depth="-0.15" src={HeroImgLayer2} alt="" />
						<img class="parallax" data-depth="0.10" src={hero1_img} alt="" />
					</div>
				</div>

				<div class="col col_5 col_md_12">
					<div class="landing_section__content">
						<h1 class="text_green mb_0 mt_0">{hero?.title}</h1>
						<span class="divider divider_1 divider_light" />
						<div class="font_light">
							{@html hero?.message}
						</div>
						<a href="/about-us" class="btn btn_outline_green mt_4 mb_4">Read More</a>
					</div>
				</div>

				<div class="col col_7 hide_on_md_and_down">
					<div class="landing_section__hero">
						<img class="parallax" data-depth="0.15" src={HeroImgLayer0} alt="" />
						<img class="parallax" data-depth="0.20" src={HeroImgLayer2} alt="" />
						<img class="parallax" data-depth="-0.15" src={hero1_img} alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="brands_section section bg_blue show_on_lg_and_up">
		<div class="container">
			<span class="brands_section__title">OUR MEMBERS</span>
		</div>
		<div class="wrapper" bind:this={brandSlide}>
			<MacArthurLogo width="300" />
			<FordLogo width="300" />
			<HewlettLogo width="300" />
			<LuminateLogo width="300" />
			<OpenSocietyLogo width="300" />
			<SkollLogo height="80" />

			<FCDOLogo width="300" />
			<ChandlerLogo width="300" />
		</div>
	</section>
	<section class="brands_section_mobile section bg_blue show_on_lg_and_down">
		<div class="container">
			<span class="brands_section__title">OUR MEMBERS</span>
		</div>
		<div class="wrapper">
			<MacArthurLogo height="50" width="50%" />
			<FordLogo height="50" width="50%" />
			<HewlettLogo height="50" width="50%" class="mt_4" />
			<LuminateLogo height="50" width="50%" class="mt_4" />
			<OpenSocietyLogo height="50" width="50%" class="mt_4" />
			<SkollLogo height="50" width="50%" class="mt_4" />

			<FCDOLogo height="50" width="50%" class="mt_4" />
			<ChandlerLogo height="50" width="50%" class="mt_4" />
		</div>
	</section>
	<CardsSection />
	<JoinSection {form} />
	<ResourcesSection data={resources} />
	<SubscribeSection />
</div>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');
	$lg: map-get($grid-breakpoints, 'lg');
	$xl: map-get($grid-breakpoints, 'xl');

	.landing_section {
		min-height: calc(100vh - 82px);
		display: flex !important;
		flex-direction: column;
		justify-content: flex-end;
		z-index: 1;
		padding-top: 0 !important;
		padding-bottom: 2rem !important;

		.container {
			height: 100%;
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			.row {
				flex-grow: 1;
				height: 100%;
			}
		}

		@media (max-width: $md) {
			padding-top: 0 !important;
		}

		@media screen and (max-width: $xl) {
			padding-bottom: 4rem !important;
		}

		&__hero {
			position: relative;
			height: 100%;

			&--mobile {
				min-height: 60vh;
			}

			@media (max-width: $md) {
				img {
					&:nth-child(3) {
						top: unset;
						bottom: 0;
					}
				}
			}

			@media screen and (max-width: $xl) {
			}

			img {
				position: absolute;
				width: 100%;
				&:nth-child(1) {
					top: 0;
					bottom: 0;
					margin: auto;
				}
				&:nth-child(2) {
					top: -100px;
					max-width: 550px;
					left: 0;
					right: 0;
					margin: auto;
				}
				&:nth-child(3) {
					top: calc(100% - 400px);
					max-width: 700px;
					// left: 0;
					right: 0;
					margin: auto;
				}
			}
		}

		&__content {
			height: 100%;
			position: relative;
			z-index: 12;
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			justify-content: flex-end;
			@media (max-width: $md) {
				a {
					width: 100%;
				}
			}

			.divider {
				width: 0 !important;
				transition: all 0.20s ease;
			}

			&:hover {
				.divider {
					width: 265px !important;
				}

				.btn {
					background-color: map-get($colors, 'green');
					color: map-get($colors, 'dark');
				}

				// h1 {
				// 	text-decoration: underline;
				// }
			}

			// @media (max-width: $md) {
			// 	width: 100%;
			// 	margin-top: 3rem;
			// 	p {
			// 		width: 100%;
			// 	}
			// 	a {
			// 		width: 100%;
			// 	}
			// }
		}
	}

	.brands_section {
		padding-top: 4rem !important;
		padding-bottom: 0 !important;
		background: map-get($colors, 'blue');
		position: relative;
		z-index: 1;

		&__title {
			font-size: pxToRem(14);
			font-weight: 500;
			color: map-get($colors, 'green');
			display: block;
		}

		.wrapper {
			margin-top: 2rem;
			width: max-content;
			display: flex;
			:global(svg) {
				flex-shrink: 0;
				max-width: 350px;
				padding-left: 2rem;
				padding-right: 3rem;
			}
		}

		&_mobile {
			min-height: unset !important;
			position: relative;
			z-index: 1;
			padding-top: 0 !important;
			padding-bottom: 0 !important;

			.wrapper {
				display: flex;
				flex-wrap: wrap;
				padding: 1rem;
			}
		}
	}

	
</style>
