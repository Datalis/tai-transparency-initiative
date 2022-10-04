<script lang="ts">
	import HeaderImg from '$lib/assets/images/header.png';

	import HeroImgLayer0 from '$lib/assets/images/home/home_layer_0@4x.png';
	import HeroImgLayer1 from '$lib/assets/images/home/home_layer_1@4x.png';
	import HeroImgLayer2 from '$lib/assets/images/home/home_layer_2@4x.png';

	import PlaceHolderImg from '$lib/assets/images/placeholder-1.png';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';
	import JoinSection from '$lib/components/JoinSection.svelte';

	import MacArthurLogo from '$lib/assets/icons/mac-arthur.svg';
	import FordLogo from '$lib/assets/icons/ford.svg';
	import HewlettLogo from '$lib/assets/icons/hewlett.svg';
	import LuminateLogo from '$lib/assets/icons/luminate.svg';
	import OpenSocietyLogo from '$lib/assets/icons/open-s.svg';
	import SkollLogo from '$lib/assets/icons/skoll.svg?component';

	import { Motion, useViewportScroll, useTransform } from 'svelte-motion';

	let { scrollY } = useViewportScroll();
	let scrollBrandParallax = useTransform(scrollY, (n) => (n - 250) * -1.2);

	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';

	gsap.registerPlugin(ScrollTrigger);

	onMount(() => {
		// gsap.to('.cards_section', {
		// 	// y: '-10%',
		// 	scrollTrigger: {
		// 		trigger: '.cards_section',
		// 		pin: true,
		// 		scrub: 0.5,
		// 		start: 'center center',
		// 		end: 'bottom -20%',
		// 		ease: 'power2'
		// 	}
		// });

		gsap.set('.join_section .wrapper', {
			position: 'fixed',
			zIndex: -1
		});
		gsap.to('.join_section .wrapper', {
			position: 'absolute',
			// yPercent: -10,
			ease: 'none',
			stagger: 0.5,
			scrollTrigger: {
				trigger: '.join_section',
				start: 'top top',
				end: '+=300%',
				scrub: true
				// pin: true
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

		gsap.utils.toArray('.landing_section__hero-img .parallax').forEach((layer: HTMLElement) => {
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
	});
</script>

<div id="home" class="page">
	<section class="landing_section bg_blue">
		<!-- <img src={HeaderImg} class="landing_section--bg" alt="" /> -->
		<div class="landing_section__hero-img">
			<img class="parallax" data-depth="0.10" src={HeroImgLayer0} alt="" />
			<img class="parallax" data-depth="0.30" src={HeroImgLayer1} alt="" />
			<img class="parallax" data-depth="0.60" src={HeroImgLayer2} alt="" />
		</div>
		<div class="container h-100">
			<div class="landing_section__content">
				<h1 class="text_green">Who we are?</h1>
				<span class="divider divider_2 divider_light" />
				<p class="mt_4 font_light">
					The Transparency and Accountability Initiative (TAI) is a donor collaborative working
					toward a democratic world where power and resources are more equally distributed; people
					are informed and empowered, governments and the corporate sector are open and responsive,
					and collective action advances the public good
				</p>
				<button class="btn btn_outline_green mt_4 mb_4">Read More</button>
			</div>
		</div>
	</section>
	<Motion style={{ x: scrollBrandParallax }} let:motion>
		<section class="brands_section bg_blue">
			<div class="parallax" use:motion>
				<MacArthurLogo />
				<FordLogo />
				<HewlettLogo />
				<LuminateLogo />
				<OpenSocietyLogo />
				<SkollLogo height="80" />
			</div>
		</section>
	</Motion>
	<section class="cards_section bg_blue">
		<div class="cards_wrapper">
			<div class="container container_fluid">
				<div class="row">
					<div class="col_4">
						<div class="card">
							<div class="overlay">
								<img src={PlaceHolderImg} alt="" />
							</div>
							<div class="content">
								<h1 class="text_dark">What we fund</h1>
								<div class="divider divider_light divider_4" />
								<strong class="text_dark mb_1 mt_4">What does TPA funding look like?</strong>
								<span class="text_dark display_block">Funding Data Library</span>
								<span class="text_dark display_block">Why it matters</span>
								<span class="text_dark display_block">Pathways to change</span>
							</div>
						</div>
					</div>
					<div class="col_4">
						<div class=" card">
							<div class="overlay">
								<img src={PlaceHolderImg} alt="" />
							</div>
							<div class="content">
								<h1 class="text_dark">How we fund</h1>
								<div class="divider divider_light divider_4" />
								<strong class="text_dark mb_1 mt_4">What does TPA funding look like?</strong>
								<span class="text_dark display_block">Funding Data Library</span>
								<span class="text_dark display_block">Why it matters</span>
								<span class="text_dark display_block">Pathways to change</span>
							</div>
						</div>
					</div>
					<div class="col_4">
						<div class="card">
							<div class="overlay">
								<img src={PlaceHolderImg} alt="" />
							</div>
							<div class="content">
								<h1 class="text_dark">How we work</h1>
								<div class="divider divider_light divider_4" />
								<strong class="text_dark mb_1 mt_4">What does TPA funding look like?</strong>
								<span class="text_dark display_block">Funding Data Library</span>
								<span class="text_dark display_block">Why it matters</span>
								<span class="text_dark display_block">Pathways to change</span>
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
	.landing_section {
		min-height: calc(100vh - 82px) !important;
		display: flex !important;
		flex-direction: column;
		justify-content: flex-end;

		$md: map-get($grid-breakpoints, 'md');

		&__hero-img {
			position: absolute;
			right: 0;
			height: 100vh;
			width: 100%;
			max-width: 900px;

			@media (max-width: $md) {
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

		&--bg {
			z-index: 0;
			position: absolute;
			height: 80vh;
			object-fit: cover;
			max-width: 900px;
			top: 0;
			right: 0;
			image-rendering: optimizeQuality;
		}

		&__content {
			height: 100%;
			width: 45%;
			position: relative;
			z-index: 12;
			p {
				font-weight: 300;
				font-size: 22px;
				line-height: 35px;
			}
		}
	}

	.brands_section {
		// padding: 0 !important;
		// margin: 0 !important;
		min-height: unset !important;
		.parallax {
			display: flex;
		}
	}
	:global(.brands_section .parallax svg) {
		flex-shrink: 0;
		max-width: 350px;
		padding-left: 2rem;
		padding-right: 3rem;
	}

	.cards_section {
		$card-blue: map-get($colors, 'blue');
		$card-green: #59ebcf;

		height: 100vh !important;
		padding-top: 0 !important;

		perspective: 1px;
		display: flex !important;
		align-items: center;
		justify-content: space-around;

		.cards_wrapper {
			height: 90%;
			width: 100%;
			position: absolute;
			.card {
				cursor: pointer;
				border: none;
				overflow: hidden;
				padding: 0;
				background: $card-green;
				border-radius: 25px;

				&:hover .overlay {
					height: 50%;
				}
				.overlay {
					transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
					background-color: $card-blue;
					height: calc(100% - 5rem);
					border-radius: 15px;
					overflow: hidden;
					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
				.content {
					padding: 2rem;
					padding-top: 0;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					height: 50%;
					h1 {
						margin: 0;
						line-height: 5rem;
						font-weight: 600;
						margin-top: -0.3rem;
					}
					span,
					strong {
						font-size: 23px !important;
						letter-spacing: normal !important;
					}
				}
			}
		}
	}
</style>
