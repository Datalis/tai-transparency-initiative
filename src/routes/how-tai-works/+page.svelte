 <script lang="ts">
	import MacArthurLogo from '$lib/assets/icons/mac-arthur.svg?component';
	import FordLogo from '$lib/assets/icons/ford.svg?component';
	import HewlettLogo from '$lib/assets/icons/hewlett.svg?component';
	import LuminateLogo from '$lib/assets/icons/luminate.svg?component';
	import OpenSocietyLogo from '$lib/assets/icons/open-s.svg?component';
	import SkollLogo from '$lib/assets/icons/skoll.svg?component';
	import ChandlerLogo from '$lib/assets/images/chandler.svg?component';
	import FCDOLogo from '$lib/assets/images/fcdo.svg?component';
	import Packard from '$lib/assets/icons/Packard.svg?component';

	import ClimateVideoPoster from '$lib/assets/images/climate-video-poster.webp';

	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';
	import ChevronRightIcon from '$lib/assets/icons/chevron-right-thin.svg?component';
	import type { PageData } from '.svelte-kit/types/src/routes/$types';
	import PastFundingSection from '$lib/components/PastFundingSection.svelte';
	import Six6csSection from '$lib/components/Six6csSection.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import SpeakerIcon from '$lib/assets/icons/Speaker_Icon.svg?component';
	// import Image from '$lib/components/Image.svelte';

	import HeroImg from '$lib/assets/images/heroes/how-tai-works-inside.png';
	import Seo from '$lib/components/Seo.svelte';
	import ConnectingDots from '$lib/components/ConnectingDots.svelte';
	// import HeroImg1 from '$lib/assets/images/hero/3.2.png';
	// import HeroImg2 from '$lib/assets/images/hero/3.1.png';
	let videoPlayer: HTMLVideoElement;
	let windowWidth: number;

	export let data: PageData;

	$: hero = data.hero;
	$: resources = data.resources;
	$: past_funding = data.past_funding;
	$: six_data = data.six_cs;

	let isVideoMuted = true;

	function toggleVideoMuted() {
		isVideoMuted = !isVideoMuted;
		videoPlayer.muted = !videoPlayer.muted;
	}

	onMount(() => {
		if (windowWidth > 768) {
			const isVideoPlaying = (video: HTMLVideoElement) =>
				!!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '.featured_section',
						pin: true,
						scrub: true,
						start: 'top top',
						end: '+=200%',
						onUpdate: ({ progress }: any) => {
							if (videoPlayer && progress > 0.8) {
								videoPlayer.play();
								// set visible to false
							}
							// get if video html component is playing
							if (videoPlayer) {
								if (isVideoPlaying(videoPlayer)) {
									// set visible to false
									if (document.querySelector('.muted'))
										document?.querySelector('.muted')?.classList.remove('hidden');
								} else {
									if (document.querySelector('.muted'))
										document?.querySelector('.muted')?.classList.add('hidden');
								}
							}
						},
						onLeave: () => {
							if (videoPlayer) {
								videoPlayer.pause();
								if (document.querySelector('.muted'))
									document?.querySelector('.muted')?.classList.add('hidden');
							}
						},
						onEnterBack: () => {
							if (videoPlayer) {
								videoPlayer.play();
							}
						},
						onLeaveBack: () => {
							//reset video to end
							if (videoPlayer) {
								if (videoPlayer.duration && videoPlayer.duration > 0) {
									videoPlayer.currentTime = videoPlayer.duration;
								}
								if (document.querySelector('.muted'))
									document?.querySelector('.muted')?.classList.add('hidden');
								videoPlayer.pause();
							}
						}
						// pinReparent: true,
						// markers: {startColor: "green", endColor: "red", fontSize: "12px"}
					}
				})
				// .to('.featured_section .featured_section__content', {
				// 	yPercent: -3
				// })
				.to('.featured_section .featured_section__content .video_wrapper ', {
					xPercent: -65,
					flexBasis: '100%'
					// ease: 'none'
				})
				// .to('.featured_section .featured_section__content .video_wrapper .video_overlay_muted_button', {
				// 	opacity: 1
				// })
				.to('.featured_section .featured_section__content .content_wrapper', {
					// xPercent: 10,
					opacity: 0
				})
				.to('.featured_section .featured_section__content .video_wrapper video', {
					scale: 1.05
				});

			const parallax = gsap.timeline({
				scrollTrigger: {
					trigger: '.landing_section',
					start: 'top 90px',
					end: 'bottom top',
					scrub: true
				}
			});

			gsap.utils.toArray('.landing_section .parallax').forEach((layer: any) => {
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
		} else {
			videoPlayer?.play();
		}
	});
</script>

<svelte:head>
	<link rel="preload" as="image" href={HeroImg} />
	<Seo title="Trust, Accountability and Inclusion Collaborative - How TAI works" url="/how-tai-works" />
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div id="how-we-fund" class="page">
	<section class="landing_section section bg_white">
		<div class="container">
			<div class="content">
				<div class="content-left">
					<h1 class="text_blue_light mb_4">{hero?.title}</h1>
					<span class="divider divider_2 divider_blue_light mb_3" />
					<div class="font_light">
						{@html hero?.message}
					</div>
				</div>
				<div class="content-right gradient_sm_green_light">
					<img
						src={HeroImg}
						class="img_wrapper_2"
						alt="How TAI works"
						decoding="sync"
						loading="eager"
					/>
				</div>
			</div>
		</div>
		<!-- <div class="container h-100">
			<div class="row">
				<div class="col col_5 col_md_12 pb_5">
					<div class="display_flex flex_column h_100 justify_center">
						<h1 class="text_green mb_4">{hero?.title}</h1>
						<span class="divider divider_2 divider_light mb_3" />
						<div class="font_light">
							{@html hero?.message}
						</div>
					</div>
				</div>
				<div class="img_wrapper col col_7 col_md_12 h_100">
					<img
						src={HeroImg1}
						class="img_wrapper_2"
						alt="How TAI works"
						decoding="sync"
						loading="eager"
					/>
				</div>
			</div>
		</div> -->
	</section>
	<Six6csSection data={six_data} />
	<section id="progress-model" class="progress_model_section section bg_white">
		<div class="connecting_dots">
			<ConnectingDots height={200} dotSpeed={0.1} dotRadius={5} dotCount={36} dotConnectionDistance={140} color={{r: 229, g: 227, b: 255}}/>
		</div>
		<div class="connecting_dots">
			<ConnectingDots height={200} dotSpeed={1} dotRadius={4} dotCount={16} dotConnectionDistance={230} color={{r: 199, g: 197, b: 255}}/>
		</div>

		<div class="container">
			<h2 class="mt_0">Our Model for Field-Level Progress</h2>
			<div class="divider divider_blue_light divider_2" />
			<span class="mt_4 display_block"
				>At every stage, we monitor and evaluate what works, when, how and why.</span
			>
			<div class="model_items mt_5">
				
				<div class="model_item">
					<div class="model_item__header bg_blue_dark py_3 px_4">
						<h5 class="text_uppercase text_blue_light m_0">Learning</h5>
					</div>
					<div class="model_item_body bg_surface p_4 display_flex flex_column justify_evenly">
						<div>
							<span class="display_block font_bold">CONSOLIDATE</span>
							<span class="display_block mt_1">evidence base</span>
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
					<div class="model_item__header bg_blue_dark py_3 px_4">
						<h5 class="text_uppercase text_blue_light m_0">Collaboration</h5>
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
					<div class="model_item__header bg_blue_dark py_3 px_4">
						<h5 class="text_uppercase text_blue_light m_0">Impact</h5>
					</div>
					<div class="model_item_body bg_gray p_4 display_flex flex_column justify_evenly">
						<div>
							<span class="display_block font_bold">GROWING</span>
							<span class="display_block mt_1">grantees resilience</span>
						</div>
						<div>
							<span class="display_block font_bold">BUILD</span>
							<span class="display_block mt_1">cross-sectoral advocacy</span>
						</div>
						<div>
							<span class="display_block font_bold">STRENGTHEN</span>
							<span class="display_block mt_1">collective action</span>
						</div>
					</div>
				</div>
			</div>
			<div class="display_flex align_center justify_center mt_5">
				<a
					href="https://api.tai.datalis.dev/uploads/tai_strategy_document_2020_2024_45f7b393f2.pdf"
					target="blank"
					class="btn btn_dark">Full 2020-2024 Strategy</a
				>
			</div>
		</div>
	</section>
	<section id="featured-topics" class="featured_section section bg_gray_light">
		<div class="container">
			<div class="featured_section__content">
				<div class="content_wrapper">
					<h2>Featured topics</h2>
					<div class="divider divider_blue_light divider_2" />
					<p class="mt_4 w_75">
						TAI members evolve their priorities in line with the global context and TAI collective
						conversations evolve similarly. One current priority is how to strengthen transparency,
						participation and accountability dimensions of responses to the climate crisis
					</p>
				</div>
				<div class="video_wrapper text_center">
					<!-- <img src={FeaturedImg} class="w_100" alt="" /> -->
					<video
						bind:this={videoPlayer}
						muted
						loop
						poster={ClimateVideoPoster}
						src="https://api.tai.datalis.dev/uploads/climate_TAI_7c23ce0f47.webm"
						playsinline
					>
						<track kind="captions" />
					</video>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div
						class="video_overlay_muted_button muted hidden"
						class:mute={!isVideoMuted}
						on:click={toggleVideoMuted}
					>
						<SpeakerIcon width="22" height="22" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<PastFundingSection data={past_funding} />
	<section id="working-with-others" class="other_groups_section section gradient_sm_green_light">
		<IntersectionObserver let:top>
			<div class="wrapper" class:pinned={top > 0}>
				<div class="brands_container show_on_md_and_up">
					<div class="brands_container__left" />
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
									<Packard width="300" />

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
									<Packard width="300" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col col_6 col_md_12 display_flex flex_column justify_center text_dark py_5">
							<h2>Working with other groups</h2>
							<div class="divider divider_blue_light divider_2" />
							<p class="mt_4">
								Our work is intersectional and we must work with those championing change on related issues. That includes partnering with other funder networks.
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
								<Packard width="150" height="100"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</IntersectionObserver>
	</section>
	<ResourcesSection {resources} />
	<!--<SubscribeSection />-->
</div>

<style lang="scss">
	$green_light: #59ebcf;
	$blue: map-get($colors, 'blue');
	$light: map-get($colors, 'light');
	$xl: map-get($grid-breakpoints, 'xl');
	$md: map-get($grid-breakpoints, 'md');

	.hidden {
		visibility: hidden;
	}

	.video_overlay_muted_button {
		position: absolute;
		z-index: 100;
		bottom: 60px;
		right: 48%;
		cursor: pointer;
		display: block;
		width: 45px;
		height: 45px;
		background-color: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(5px);
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;

		&.mute {
			:global {
				svg {
					scale: 1.2;
				}
			}
		}

		:global {
			svg {
				transition: all 0.2s ease;
			}
		}
	}

	.landing_section {
		//background-image: url(/src/lib/assets/images/hero.webp);
		background-size: cover;
		z-index: 1;

		min-height: 100vh;
		min-height: 100svh;

		padding-top: 100px !important;
		padding-bottom: 0 !important;
		display: flex !important;
		flex-direction: column;
		.container {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
		}
		.content {
			flex-grow: 1;
			height: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-gap: 1rem;

			@media screen and (max-width: $md) {
				display: flex;
				flex-direction: column;

				.content-right img {
					position: relative !important;
				}
			}
		}

		.content .content-right {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;

			img {
				object-fit: contain;
			}

			@media screen and (min-width: $md) {
				margin-top: -8rem;
				padding-top: 8rem;
				margin-right: -100vw;
				padding-right: 100vw;
				height: 100svh;

				img{
					height: 100%;
				}
			}
		}
		.content .content-left {
			max-width: 90%;
			display: flex;
			flex-direction: column;
			justify-content: center;

			@media screen and (max-width: $md) {
				max-width: 100% !important;
			}
		}
	}

	/* .landing_section {
		z-index: 1;
		padding-top: 100px !important;
		padding-bottom: 0 !important;
		// height: 80vh;
		min-height: 100vh;
		background-image: url(/src/lib/assets/images/hero.webp);
		background-size: cover;
		display: flex !important;
		flex-direction: column !important;

		@media screen and (max-width: $md) {
			height: unset;
		}

		@media screen and (min-width: $xl) {
			height: 80vh !important;
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
			// margin-bottom: 0 !important;
			position: relative;

			img {
				position: relative;
			}
		}

		:global(p) {
			text-align: left;
		}
	} */

	.progress_model_section {
		position: relative;
		margin-top: -2px;
		min-height: 100vh !important;
		z-index: 1;

		/* @media (max-width: $md) {
			button {
				width: 100%;
			}
		} */

		.model_items {
			display: flex;
			align-items: center;
			justify-content: space-between;
			@media (max-width: $md) {
				flex-direction: column;
			}
		}

		.connecting_dots{
			position: absolute;
			bottom: -1rem;
			z-index: -1;
		}

		.model_item_arrow {
			margin-top: 1rem;
			margin-bottom: 1rem;
			@media (max-width: $md) {
				transform: rotate(90deg);
			}

			:global(path){
				stroke: map-get($colors, "blue_light" ) !important;
			}
		}

		.model_item {
			width: 300px;
			height: 380px;

			display: flex;
			flex-direction: column;
			border-radius: 15px;
			overflow: hidden;

			@media (max-width: $md) {
				width: 100% !important;
				height: 300px;

				text-align: center;
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
				background-color: #E9E8FB !important;
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
					max-width: 95%;
					object-fit: cover;
					border-radius: 25px;
					@media screen and (max-width: $md) {
						height: unset;
						aspect-ratio: 1;
						width: 100%;
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

		.wrapper {
			display: flex !important;
			flex-direction: column !important;

			.container {
				display: flex;
				flex-direction: column;
				flex-grow: 1;
				.row {
					flex-grow: 1;
				}
			}
		}

		@media (max-width: 768px) {
			.wrapper .container p,
			.wrapper .container h2 {
				color: map-get($map: $colors, $key: 'dark');
			}
		}

		@media screen and (max-width: $md) {
			.wrapper .brands_grid {
				display: grid;
				grid-template-columns: repeat(2, auto);
				grid-template-rows: repeat(1, 1fr);
				justify-content: space-around;
				align-items: center;
				grid-gap: 1rem;

				:global(path){
					fill: map-get($colors, "dark" ) !important;
				}
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
				background-color: white;
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

							path{
								fill: map-get($colors, "dark") !important;
							}
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
