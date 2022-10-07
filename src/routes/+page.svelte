<script lang="ts">
	import HeroImgLayer0 from '$lib/assets/images/home/group_3.webp';
	import HeroImgLayer1 from '$lib/assets/images/home/group_1.webp';
	import HeroImgLayer2 from '$lib/assets/images/home/group_2.webp';

	import PlaceHolderImg from '$lib/assets/images/placeholder.png';
	import MacArthurLogo from '$lib/assets/icons/mac-arthur.svg?component';
	import FordLogo from '$lib/assets/icons/ford.svg?component';
	import HewlettLogo from '$lib/assets/icons/hewlett.svg?component';
	import LuminateLogo from '$lib/assets/icons/luminate.svg?component';
	import OpenSocietyLogo from '$lib/assets/icons/open-s.svg?component';
	import SkollLogo from '$lib/assets/icons/skoll.svg?component';

	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';
	import JoinSection from '$lib/components/JoinSection.svelte';

	import { gsap } from 'gsap/dist/gsap';
	// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	// gsap.registerPlugin(ScrollTrigger);

	let brandSlide: HTMLElement;
	let windowWidth: number;

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
		// .to('.cards_section .wrapper', {
		// 	y: '-10%',
		// 	scrollTrigger: {
		// 		trigger: '.cards_section',
		// 		pin: true,
		// 		scrub: true,
		// 		start: 'center +=55%'
		// 		// end: 'bottom -=20%'
		// 	}
		// });

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
	<link rel="preconnect" href={HeroImgLayer1} />
	<link rel="preconnect" href={HeroImgLayer2} />
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div id="home" class="page">
	<section class="landing_section section bg_blue">
		<div class="landing_section__hero">
			<img class="parallax" data-depth="-0.25" src={HeroImgLayer0} alt="" />
			<img class="parallax" data-depth="0.10" src={HeroImgLayer1} alt="" />
			<img class="parallax" data-depth="0.20" src={HeroImgLayer2} alt="" />
		</div>
		<div class="container">
			<div class="landing_section__content">
				<h1 class="text_green mb_4">Who we are?</h1>
				<span class="divider divider_2 divider_light" />
				<p class="mt_4 font_light">
					The Transparency and Accountability Initiative (TAI) is a donor collaborative working
					toward a democratic world where power and resources are more equally distributed; people
					are informed and empowered, governments and the corporate sector are open and responsive,
					and collective action advances the public good
				</p>
				<a href="/" class="btn btn_outline_green mt_4 mb_4">Read More</a>
			</div>
		</div>
	</section>
	<section class="brands_section section bg_blue show_on_lg_and_up">
		<div class="wrapper" bind:this={brandSlide}>
			<MacArthurLogo width="300" />
			<FordLogo width="300" />
			<HewlettLogo width="300" />
			<LuminateLogo width="300" />
			<OpenSocietyLogo width="300" />
			<SkollLogo height="80" />
		</div>
	</section>
	<section class="brands_section_mobile section bg_blue show_on_lg_and_down">
		<div class="wrapper">
			<MacArthurLogo height="50" width="50%" />
			<FordLogo height="50" width="50%" />
			<HewlettLogo height="50" width="50%" class="mt_4" />
			<LuminateLogo height="50" width="50%" class="mt_4" />
			<OpenSocietyLogo height="50" width="50%" class="mt_4" />
			<SkollLogo height="50" width="50%" class="mt_4" />
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
								<h3 class="text_dark">What we fund</h3>
								<div class="divider divider_light divider_2" />
								<div class="content__text">
									<strong class="text_dark mb_1">What does TPA funding look like?</strong>
									<span class="text_dark display_block">Funding Data Library</span>
									<span class="text_dark display_block">Why it matters</span>
									<span class="text_dark display_block">Pathways to change</span>
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
								<h3 class="text_dark">How we fund</h3>
								<div class="divider divider_light divider_2" />
								<div class="content__text">
									<strong class="text_dark mb_1">What does TPA funding look like?</strong>
									<span class="text_dark display_block">Funding Data Library</span>
									<span class="text_dark display_block">Why it matters</span>
									<span class="text_dark display_block">Pathways to change</span>
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
								<h3 class="text_dark">How we work</h3>
								<div class="divider divider_light divider_2" />
								<div class="content__text">
									<strong class="text_dark mb_1">What does TPA funding look like?</strong>
									<span class="text_dark display_block">Funding Data Library</span>
									<span class="text_dark display_block">Why it matters</span>
									<span class="text_dark display_block">Pathways to change</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<JoinSection />
	<ResourcesSection />
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
		padding-bottom: 6.125rem !important;

		@media (max-width: $md) {
			padding-top: 0 !important;
		}

		&__hero {
			position: absolute;
			right: 0;
			top: -180px;
			height: 100vh;
			width: 60%;
			// max-width: 900px;

			@media (max-width: $lg) {
				width: 85% !important;
			}

			@media (max-width: $xl) {
				width: 75% !important;
				img:nth-child(3) {
					height: 70% !important;
				}
				img:nth-child(2) {
					// top: unset !important;
					bottom: 0;
					height: auto !important;
					z-index: 10;
					left: 200px !important;
				}
			}

			@media (max-width: $md) {
				top: -15px;
				position: relative;
				height: 50vh;
				width: auto !important;
				img {
					&:nth-child(1) {
						height: auto !important;
						width: 100% !important;
					}
					&:nth-child(2) {
						top: unset !important;
						bottom: 0;
						height: auto !important;
						z-index: 10;
						left: 0 !important;
					}
					&:nth-child(3) {
						top: -50px !important;
						height: 80% !important;
						left: 0 !important;
						right: 0 !important;
						margin: auto !important;
					}
				}
			}

			img {
				object-fit: cover;
				image-rendering: optimizeQuality;
				position: absolute;
				max-width: 100%;
				z-index: 9;

				&:nth-child(1) {
					top: 25%;
					height: 50%;
					width: auto;
					max-width: unset;
				}
				&:nth-child(2) {
					top: 40%;
					height: 50%;
					z-index: 10;
					left: 150px;
				}
				&:nth-child(3) {
					top: 25px;
					height: 70%;
					left: 100px;
				}
			}
		}

		&__content {
			height: 100%;
			width: 45%;
			position: relative;
			z-index: 12;

			p {
				width: 75%;
			}

			@media (max-width: $md) {
				width: 100%;
				margin-top: 3rem;
				p {
					width: 100%;
				}
				a {
					width: 100%;
				}
			}
		}
	}

	.brands_section {
		background: map-get($colors, 'blue');
		position: relative;
		z-index: 1;

		.wrapper {
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

		// // padding: 0 !important;
		// padding-right: 2rem !important;
		// padding-left: 2rem !important;

		// perspective: 1px;
		display: flex !important;
		align-items: center;
		justify-content: space-around;
		z-index: 1;
		position: relative;

		@media (max-width: $md) {
			padding-right: 0 !important;
			padding-left: 0 !important;
			// padding-bottom: 2rem;
		}

		.wrapper {
			// height: 90%;
			width: 100%;

			.card {
				cursor: pointer;
				border: none;
				overflow: hidden;
				padding: 0;
				background: $card-green;
				border-radius: 15px;
				height: calc(100vh - pxToRem(150));
				margin: auto;

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
					height: 100px;
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
					}
				}
				.content h3 {
					line-height: 100px;
					margin: 0;
				}

				@media (hover: hover) {
					&:hover {
						.content,
						.overlay {
							height: 50%;
						}
						.content .divider {
							width: 100px !important;
						}
					}
				}

				@media (hover: none) {
					.content,
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
