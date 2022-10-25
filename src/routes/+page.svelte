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

		if (windowWidth > 992) {
			gsap.timeline().from('.cards_section .wrapper', {
				y: '5%',
				scrollTrigger: {
					trigger: '.cards_section',
					pin: true,
					scrub: 1,
					start: 'center center',
					end: 'bottom top'
					// end: 'bottom -=20%'
				}
			});
		}

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
	<section class="cards_section section bg_blue">
		<div class="wrapper">
			<div class="container">
				<div class="row">
					<div class="col col_4 col_lg_12">
						<div class="card">
							<div class="overlay">
								<img src={PlaceHolderImg} alt="" />
							</div>
							<div class="content">
								<a href="/what-we-fund"><h3 class="text_dark">What we fund</h3></a>
								<div class="divider divider_light divider_2" />
								<div class="content__text">
									<a href="/what-we-fund#funding" class="text_dark display_block">What does TPA funding look like?</a>
									<a href="/what-we-fund#funding-data-library" class="text_dark display_block">Funding Data Library</a>
									<a href="/what-we-fund#why-it-matters" class="text_dark display_block">Why it matters</a>
									<a href="/what-we-fund#pathways-to-change" class="text_dark display_block">Pathways to change</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col col_4 col_lg_12">
						<div class="card">
							<div class="overlay">
								<img src={PlaceHolderImg} alt="" />
							</div>
							<div class="content">
								<a href="/how-we-fund">
									<h3 class="text_dark">How we fund</h3>
								</a>
								<div class="divider divider_light divider_2" />
								<div class="content__text">
									<a href="/how-we-fund#partner-support" class="text_dark display_block">Partner Support</a>
									<a href="/how-we-fund#founders-exits" class="text_dark display_block">Funder exits</a>
									<a href="/how-we-fund#participatory-strategy" class="text_dark display_block">Participatory Strategy</a>
								</div>
							</div>
						</div>
					</div>
					<div class="col col_4 col_lg_12">
						<div class="card">
							<div class="overlay">
								<img src={PlaceHolderImg} alt="" />
							</div>
							<div class="content">
								<a href="/how-we-work">
									<h3 class="text_dark">How we work</h3>
								</a>
								<div class="divider divider_light divider_2" />
								<div class="content__text">
									<a href="/how-we-work#6cs" class="text_dark display_block">Our 6Cs of funder support</a>
									<a href="/how-we-work#progress-model" class="text_dark display_block">Our Model for Field-Level Progress</a>
									<a href="/how-we-work#featured-topics" class="text_dark display_block">Featured topics</a>
									<a href="/how-we-work#past-funding" class="text_dark display_block">Past Funding Explorations</a>
									<a href="/how-we-work#working-with-others" class="text_dark display_block">Working with other groups</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
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

	.cards_section {
		$card-blue: map-get($colors, 'blue');
		$card-green: #59ebcf;

		min-height: 105vh;
		display: flex !important;
		align-items: center;
		justify-content: space-around;
		z-index: 1;
		position: relative;

		@media (max-width: $md) {
			padding-right: 0 !important;
			padding-left: 0 !important;
		}

		.wrapper {
			width: 100%;

			.card {
				border: none;
				overflow: hidden;
				padding: 0;
				background: $card-green;
				border-radius: 15px;
				height: calc(100% - pxToRem(20));
				margin: auto;
				position: relative;

				@media (max-width: $md) {
					height: 85vh;
				}

				.overlay,
				.content {
					transition: height 1s cubic-bezier(0.075, 0.82, 0.165, 1);
				}

				.overlay {
					height: calc(100% - 100px);
					border-bottom-left-radius: 15px;
					border-bottom-right-radius: 15px;
					overflow: hidden;
					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}

				.content {
					padding-left: 1rem;
					padding-right: 1rem;
					height: 50%;
					display: flex;
					flex-direction: column;
					.divider {
						width: 0 !important;
						transition: width 1s cubic-bezier(0.075, 0.82, 0.165, 1);
					}
					&__text {
						flex-grow: 1;
						margin-top: 25px;
						margin-bottom: 25px;
						display: flex;
						flex-direction: column;
						justify-content: space-evenly;
						a {
							font-weight: bold;
							&:hover {
								font-weight: 900 !important;
							}
						}
					}
				}
				.content h3 {
					margin: 0;
					line-height: 100px;
					font-weight: 600;
				}

				@media (hover: hover) {
					&:hover {
						.overlay {
							height: 50%;
						}
						.content .divider {
							width: 100px !important;
						}
					}
				}

				@media (hover: none) {
					.overlay {
						height: 50%;
					}
					.content .divider {
						width: 100px !important;
					}
				}
			}
		}
	}
</style>
