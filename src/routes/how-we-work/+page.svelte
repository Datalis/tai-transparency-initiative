<script lang="ts">
	import MacArthurLogo from '$lib/assets/icons/mac-arthur.svg?component';
	import FordLogo from '$lib/assets/icons/ford.svg?component';
	import HewlettLogo from '$lib/assets/icons/hewlett.svg?component';
	import LuminateLogo from '$lib/assets/icons/luminate.svg?component';
	import OpenSocietyLogo from '$lib/assets/icons/open-s.svg?component';
	import SkollLogo from '$lib/assets/icons/skoll.svg?component';
	import ChandlerLogo from '$lib/assets/images/chandler.svg?component';
	import FCDOLogo from '$lib/assets/images/fcdo.svg?component';

	import ClimateVideoPoster from '$lib/assets/images/climate-video-poster.webp';

	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';
	import ChevronRightIcon from '$lib/assets/icons/chevron-right-thin.svg?component';
	import type { PageData } from '.svelte-kit/types/src/routes/$types';
	import PastFundingSection from '$lib/components/PastFundingSection.svelte';
	import Six6csSection from '$lib/components/Six6csSection.svelte';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import gsap from 'gsap/dist/gsap';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import Image from '$lib/components/Image.svelte';

	let windowWidth: number;

	export let data: PageData;

	$: hero = data.hero;
	$: resources = data.resources;
	$: past_funding = data.past_funding;
	$: six_data = data.six_cs;

	onMount(() => {
		if (windowWidth > 768) {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '.featured_section',
						pin: true,
						scrub: true,
						start: 'top top',
						end: '+=200%'
						// pinReparent: true,
						// markers: {startColor: "green", endColor: "red", fontSize: "12px"}
					}
				})
				// .to('.featured_section .featured_section__content', {
				// 	yPercent: -3
				// })
				.to('.featured_section .featured_section__content .video_wrapper', {
					xPercent: -65,
					flexBasis: '100%'
					// ease: 'none'
				})
				.to('.featured_section .featured_section__content .video_wrapper video', {
					scale: 1.1
				});
		}
		gsap.timeline().to(window, {
			scrollTo: $page.url.hash || 0
		});
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div id="how-we-fund" class="page">
	<section class="landing_section section bg_blue">
		<div class="container h-100">
			<div class="row">
				<div class="col col_5 col_sm_12">
					<div class="display_flex flex_column h_100 justify_end">
						<h1 class="text_green mb_4">{hero?.title}</h1>
						<span class="divider divider_2 divider_light mb_3" />
						<div class="font_light">
							{@html hero?.message}
						</div>
					</div>
				</div>
				<div class="img_wrapper col col_7 col_sm_12 h_100">
					<Image size="medium" image={hero?.image} priority />
				</div>
			</div>
		</div>
	</section>
	<Six6csSection data={six_data} />
	<section id="progress-model" class="progress_model_section section bg_light">
		<div class="container">
			<h2 class="mt_0">Our Model for Field-Level Progress</h2>
			<div class="divider divider_green divider_2" />
			<span class="mt_4 display_block"
				>At every stage, we monitor and evaluate what works, when, how and why.</span
			>
			<div class="model_items mt_5">
				<div class="model_item">
					<div class="model_item__header bg_blue py_3 px_4">
						<h5 class="text_uppercase text_green m_0">Learning</h5>
					</div>
					<div class="model_item_body bg_gray p_4 display_flex flex_column justify_evenly">
						<div>
							<span class="display_block font_bold">CONSOLIDATE</span>
							<span class="display_block mt_1">evidence based</span>
						</div>
						<div>
							<span class="display_block font_bold">FACILITATE</span>
							<span class="display_block mt_1">knowledge exchange</span>
						</div>
						<div>
							<span class="display_block font_bold">GENERATE</span>
							<span class="display_block mt_1">new insights <!-- on content and practice --></span>
						</div>
					</div>
				</div>
				<div class="model_item_arrow display_flex flex_column">
					<ChevronRightIcon width="52" height="52" />
				</div>
				<div class="model_item">
					<div class="model_item__header bg_blue py_3 px_4">
						<h5 class="text_uppercase text_green m_0">Collaboration</h5>
					</div>
					<div class="model_item_body bg_gray p_4 display_flex flex_column justify_evenly">
						<div>
							<span class="display_block font_bold">ALIGN</span>
							<span class="display_block mt_1">strategies and funding</span>
						</div>
						<div>
							<span class="display_block font_bold">LEVERAGE</span>
							<span class="display_block mt_1"
								>rapid response <!-- and collective voice/resources --></span
							>
						</div>
						<div>
							<span class="display_block font_bold">REDUCE</span>
							<span class="display_block mt_1"
								>transaction costs <!-- and test new approaches --></span
							>
						</div>
					</div>
				</div>
				<div class="model_item_arrow display_flex flex_column">
					<ChevronRightIcon width="52" height="52" />
				</div>
				<div class="model_item">
					<div class="model_item__header bg_blue py_3 px_4">
						<h5 class="text_uppercase text_green m_0">Impact</h5>
					</div>
					<div class="model_item_body bg_gray p_4 display_flex flex_column justify_evenly">
						<div>
							<span class="display_block font_bold">INFLUENCE</span>
							<span class="display_block mt_1">grantee behavior</span>
						</div>
						<div>
							<span class="display_block font_bold">BUILD</span>
							<span class="display_block mt_1">evidence based</span>
						</div>
						<div>
							<span class="display_block font_bold">STRENGTHEN</span>
							<span class="display_block mt_1">collective action</span>
						</div>
					</div>
				</div>
			</div>
			<div class="display_flex align_center justify_center mt_5">
				<button class="btn btn_outline_green text_dark">Full 2020-2024 Strategy</button>
			</div>
		</div>
	</section>
	<section id="featured-topics" class="featured_section section bg_blue_light">
		<div class="container">
			<div class="featured_section__content">
				<div class="content_wrapper">
					<h2>Featured topics</h2>
					<div class="divider divider_green divider_2" />
					<p class="mt_4 w_75">
						TAI members evolve their priorities in line with the global context and TAI collective
						conversations evolve similarly. One current priority is how to strengthen transparency,
						participation and accountability dimensions of responses to the climate crisis
					</p>
				</div>
				<div class="video_wrapper text_center">
					<!-- <img src={FeaturedImg} class="w_100" alt="" /> -->
					<video
						src="https://api.tai.datalis.dev/uploads/climate_TAI_7c23ce0f47.webm"
						preload="auto"
						autoplay
						muted
						loop
						poster={ClimateVideoPoster}
					>
						<track kind="captions" />
					</video>
				</div>
			</div>
		</div>
	</section>
	<PastFundingSection data={past_funding} />
	<section id="working-with-others" class="other_groups_section section bg_gray">
		<IntersectionObserver let:top>
			<div class="wrapper" class:pinned={top > 0}>
				<div class="brands_container show_on_md_and_up">
					<div class="brands_container__left bg_gray_light" />
					<div class="brands_container__right">
						<div class="wrapper">
							<div class="marquee">
								<div class="marquee_item">
									<MacArthurLogo width="300" />
									<FordLogo width="300" />
									<HewlettLogo width="300" />
									<LuminateLogo width="300" />
									<OpenSocietyLogo width="300" />
									<SkollLogo width="200" />
									<FCDOLogo width="300" />
									<ChandlerLogo width="300" />
									<MacArthurLogo width="300" />
								</div>
								<div class="marquee_item">
									<MacArthurLogo width="300" />
									<FordLogo width="300" />
									<HewlettLogo width="300" />
									<LuminateLogo width="300" />
									<OpenSocietyLogo width="300" />
									<SkollLogo width="200" />
									<FCDOLogo width="300" />
									<ChandlerLogo width="300" />
									<MacArthurLogo width="300" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col col_6 col_md_12">
							<h2>Working with other groups</h2>
							<div class="divider divider_white divider_2" />
							<p class="mt_4">
								Transparency, participation and accountability are essential to deliver positive
								societal outcomes, be that a stellar education service, effective regulation of new
								technologies or accessible, affordable renewable energy. Our work is intersectional
								in its nature and it is important we work with those championing change on related
								issues. That includes partnering with other funder networks.
							</p>
							<p class="">
								The good news is that there is a growing list of progressive funder groups to
								connect with. TAI is in regular dialogue with other groups – sharing learnings,
								exploring overlapping interests across our memberships and promoting responsible
								funder practices. We are hugely grateful for the insights and advice of those
								running peer networks.
							</p>
						</div>
						<div class="col col_6 col_md_12">
							<div class="brands_grid show_on_md_and_down pb_4">
								<MacArthurLogo width="150" />
								<FordLogo width="150" />
								<HewlettLogo width="150" />
								<LuminateLogo width="150" />
								<OpenSocietyLogo width="150" />
								<SkollLogo width="150" />
								<FCDOLogo width="150" />
								<ChandlerLogo width="150" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</IntersectionObserver>
	</section>
	<ResourcesSection data={resources} />
	<SubscribeSection />
</div>

<style lang="scss">
	$green_light: #59ebcf;
	$blue: map-get($colors, 'blue');
	$light: map-get($colors, 'light');

	$md: map-get($grid-breakpoints, 'md');

	.landing_section {
		z-index: 1;
		padding-top: 100px !important;
		// height: 80vh;
		min-height: 80vh;
		background-image: url(/src/lib/assets/images/hero.webp);
		background-size: cover;
		display: flex !important;
		flex-direction: column !important;

		@media screen and (max-width: $md) {
			height: unset;
		}

		.container {
			margin-top: auto !important;
		}

		.container,
		.col {
			margin-top: 0;
			margin-bottom: 0;
		}

		.img_wrapper {
			margin: auto !important;
		}

		:global {
			img {
				background-color: transparent;
				object-fit: contain;
				height: 100%;
				// max-height: 80vh;
				width: 100%;
			}
		}
	}

	.progress_model_section {
		margin-top: -2px;
		min-height: 100vh !important;
		z-index: 1;

		@media (max-width: $md) {
			button {
				width: 100%;
			}
		}

		.model_items {
			display: flex;
			align-items: center;
			justify-content: space-between;
			@media (max-width: $md) {
				flex-direction: column;
			}
		}

		.model_item_arrow {
			margin-top: 1rem;
			margin-bottom: 1rem;
			@media (max-width: $md) {
				transform: rotate(90deg);
			}
		}

		.model_item {
			width: 300px;
			height: 320px;

			display: flex;
			flex-direction: column;
			border-radius: 15px;
			overflow: hidden;

			@media (max-width: $md) {
				width: 100% !important;
				height: 300px;
			}

			&__header {
				h5 {
					font-weight: 500;
					letter-spacing: 2.5px;
				}
			}
			&_body {
				padding-top: 1rem;
				padding-bottom: 1rem;
				flex-grow: 1;
				justify-content: space-between;
				// background-color: #c7ccd6 !important;
				background-color: #e4e8ef !important;
				span {
					font-size: pxToRem(15);
					font-weight: 400;
				}
			}
		}
	}

	.featured_section {
		min-height: 105vh;
		display: flex !important;
		flex-direction: column;
		justify-content: center;
		z-index: 1;

		@media screen and (max-width: $md) {
			&__content {
				flex-direction: column;
			}

			.content_wrapper {
				padding: 0 !important;
			}

			.content_wrapper p {
				width: 100%;
			}

			.content_wrapper,
			.video_wrapper {
				flex-shrink: 1 !important;
				flex-basis: 100% !important;
			}

			.video_wrapper {
				margin-top: 2rem;
			}
		}

		.container {
			flex: 1 0 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
		}

		&__content {
			display: flex;
			justify-content: flex-start;
			align-items: stretch;
			// transform: translate3d(0, 0, 0);
			flex: 1 0 auto;
			max-height: 100%;

			.content_wrapper {
				padding-right: 4rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
			}

			.content_wrapper,
			.video_wrapper {
				flex-shrink: 0;
				flex-basis: 65%;
			}

			.video_wrapper {
				display: flex;
				flex-direction: column;
				video {
					background-color: map-get($colors, 'blue');
					height: 90%;
					margin: auto;
					max-width: 100%;
					object-fit: cover;
					border-radius: 25px;
					@media screen and (max-width: $md) {
						height: unset;
						aspect-ratio: 1;
					}
				}
			}
		}
	}

	.other_groups_section {
		min-height: 100vh;
		z-index: 0 !important;
		padding-top: 0 !important;
		padding-bottom: 0 !important;

		@media screen and (max-width: $md) {
			.wrapper .brands_grid {
				display: grid;
				grid-template-columns: repeat(2, auto);
				grid-template-rows: repeat(1, 1fr);
				justify-content: space-around;
				align-items: center;
				grid-gap: 1rem;
			}
		}

		.brands_container {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			&__left {
				width: 55%;
			}
			&__right {
				width: 45%;
				overflow: hidden;

				.wrapper {
					transform: rotate(-45deg);
				}

				.marquee {
					display: flex;
					flex-direction: column;
				}

				@keyframes marquee {
					0% {
						transform: translateY(0);
					}
					100% {
						transform: translateY(calc(300px * -4));
					}
				}

				.marquee_item {
					will-change: transform;
					animation: marquee 15s linear infinite;
					flex-shrink: 1;
					display: grid;
					grid-template-columns: repeat(3, 300px);
					grid-template-rows: repeat(3, 1fr);
					height: calc(300px * 4) !important;
					justify-content: center;
					align-items: center;

					:global {
						svg {
							transform: rotate(45deg);
							display: block;
						}
					}
				}
			}
		}
		.wrapper {
			min-height: 100vh;
			height: 100%;
			position: relative;
			top: 0;
			left: 0;
			bottom: 0;
			width: 100%;
			height: 100%;
			z-index: -2 !important;
			&.pinned {
				position: fixed;
				z-index: -1 !important;
			}
		}
	}
</style>
