<script lang="ts">
	import PartnerImg1 from '$lib/assets/images/partner_support/1.webp';
	import PartnerImg2 from '$lib/assets/images/partner_support/2.webp';
	import PartnerImg3 from '$lib/assets/images/partner_support/3.webp';
	import PartnerImg4 from '$lib/assets/images/partner_support/4.webp';
	import PartnerImg5 from '$lib/assets/images/partner_support/5.webp';

	import ParticipatoryStrategyVideo from '$lib/assets/video/movie.webm';

	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';

	import { gsap } from 'gsap/dist/gsap';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import FoundersExitsSection from '$lib/components/FoundersExitsSection.svelte';
	import type { PageData } from '.svelte-kit/types/src/routes/$types';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

	let partnersSlide: HTMLElement;
	let windowWidth: number;
	let videoTime: any;

	$: partnersSlideWidth = partnersSlide?.getBoundingClientRect()?.width || 0;

	export let data: PageData;

	$: hero = data?.hero;
	$: resources = data?.resources;

	onMount(() => {
		gsap.timeline().to('.partners_section', {
			scrollTrigger: {
				trigger: '.partners_section',
				start: 'center center',
				end: 'bottom -100%',
				pin: true,
				scrub: true
			}
		});

		gsap.timeline().to('.partners_section .container', {
			scrollTrigger: {
				trigger: '.partners_section',
				start: 'top bottom',
				end: 'bottom -300%',
				scrub: 0.5
			},
			y: '-15%'
		});

		gsap.timeline().to('.participatory_section .container', {
			y: '-1%',
			scrollTrigger: {
				trigger: '.participatory_section',
				pin: true,
				scrub: 1,
				start: 'center center',
				end: 'bottom top'
				// end: 'bottom -=20%'
			}
		});

		let sliderOffset = partnersSlide.getBoundingClientRect().left;
		let toScroll = windowWidth - partnersSlide.offsetWidth - 2 * sliderOffset;

		// @ts-ignore
		gsap.to('.partners_section .partners_section__slide', {
			scrollTrigger: {
				trigger: '.partners_section',
				scrub: 1,
				start: 'top top',
				end: 'bottom -100%'
			},
			x: toScroll
		});

		// @ts-ignore
		gsap.to('.partners_section .partners_section__slide--decor', {
			scrollTrigger: {
				trigger: '.partners_section',
				scrub: 1,
				start: 'top top',
				end: 'bottom -100%'
			},
			x: toScroll + 2 * sliderOffset
		});
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div id="how-we-fund" class="page">
	<section class="landing_section section bg_blue">
		<div class="container h-100">
			<div class="landing_section__content">
				<h1 class="text_green mb_4">{hero?.title}</h1>
				<span class="divider divider_2 divider_light" />
				<div class="mt_4 font_light">
					{@html hero?.message}
				</div>
			</div>
		</div>
	</section>
	<section class="partners_section section bg_light">
		<!-- <img class="partners_section--dec" src={PartnerDecorImg} alt="" /> -->
		<div class="container">
			<h2 class="font_bold mb_4">Partner support</h2>
			<div class="divider divider_2 divider_green" />
			<p class="mt_4">
				We help donor members work together to improve grant making practice and <br />
				boost collective impact. Specifically, TAI aims to accomplish the following:
			</p>
		</div>
		<div class="partners_section__slide--wrapper">
			<div class="partners_section__slide--decor" style="width: {partnersSlideWidth}px;" />
			<div class="container">
				<div class="partners_section__slide" bind:this={partnersSlide}>
					<div class="partners_section__item">
						<img src={PartnerImg1} alt="" />
						<p class="mt_4">
							Enhance diversity, equity and inclusion practices in our own foundations and in our
							partners
						</p>
					</div>
					<div class="partners_section__item">
						<img src={PartnerImg2} alt="" />
						<p class="mt_4">
							Enhance diversity, equity and inclusion practices in our own foundations and in our
							partners
						</p>
					</div>
					<div class="partners_section__item">
						<img src={PartnerImg3} alt="" />
						<p class="mt_4">
							Enhance diversity, equity and inclusion practices in our own foundations and in our
							partners
						</p>
					</div>
					<div class="partners_section__item">
						<img src={PartnerImg4} alt="" />
						<p class="mt_4">
							Enhance diversity, equity and inclusion practices in our own foundations and in our
							partners
						</p>
					</div>
					<div class="partners_section__item">
						<img src={PartnerImg5} alt="" />
						<p class="mt_4">
							Enhance diversity, equity and inclusion practices in our own foundations and in our
							partners
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<FoundersExitsSection />
	<IntersectionObserver let:top>
		<section class="participatory_section section">
			<div class="video-container">
				<video
					muted
					controls={false}
					preload="none"
					autoplay
					width="100%"
					height="100%"
					bind:currentTime={videoTime}
				>
					<source type="video/webm" src={ParticipatoryStrategyVideo} />
				</video>
			</div>
			{#if videoTime > 45 || top > 100 || top < -600}
				<div class="content-container" transition:fade={{ duration: 800 }}>
					<div class="container">
						<div class="row">
							<div class="col col_6 col_md_12">
								<h2 class="font_bold mb_4 mt_0">Participatory Strategy</h2>
								<div class="divider divider_2 divider_green" />
								<p class="mt_4">
									TAI offers a platform for candid, constructive exchange around grantmaking
									practices. Our members learn from each other and hold each other accountable to be
									more inclusive, equitable, innovative, and effective grantmakers.
								</p>
								<a href="/" class="btn btn_green btn_bordered mt_4"> Learn more </a>
							</div>
							<div class="col col_6 col_md_12" />
						</div>
					</div>
				</div>
			{/if}
		</section>
	</IntersectionObserver>
	<ResourcesSection data={resources} />
	<SubscribeSection />
</div>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');

	.landing_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
		&__content {
			width: 42vw;
			@media (max-width: $md) {
				width: 100%;
				margin-top: 40vh;
			}
		}
	}
	.partners_section {
		position: relative;
		min-height: 100vh !important;

		.container {
			height: unset;
		}

		&__slide {
			display: flex;
			width: max-content;
			will-change: transform;
			&--wrapper {
				margin-top: pxToRem(60);
			}

			&--decor {
				content: ' ';
				position: absolute;
				top: auto;
				width: 100%;
				height: 300px;
				z-index: 1;
				background: url(/src/lib/assets/images/green_line.svg);
				background-repeat: no-repeat;
				background-size: 110% 100%;
				background-attachment: local;
				background-position-x: center;
				-webkit-overflow-scrolling: touch;
				margin-top: -30px;
			}
		}

		&__item {
			flex-shrink: 0;
			width: 20vw;
			display: flex;
			flex-direction: column;
			align-items: center;
			transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
			position: relative;

			img {
				height: 20vw;
				width: 100%;
				object-fit: cover;
				object-position: center;
				border-radius: 15px;
				overflow: hidden;
			}

			@media (max-width: $md) {
				width: 100vw !important;
			}

			p {
				margin-top: 1rem;
				text-align: center;
				font-size: pxToRem(14);
				font-weight: 400;
			}
		}

		&__item + &__item {
			margin-left: 4rem;
			//margin-right: 2rem;
		}
	}

	.participatory_section {
		background: #e4e8ef;
		min-height: 105vh !important;
		display: flex !important;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 0 !important;

		.content-container {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			background-color: rgba(#0a132d, 0.6);
			backdrop-filter: blur(5px);
			color: #fafafa;
			.container {
				margin: auto;
				height: auto;
			}
		}
		.video-container {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			video {
				object-fit: cover;
			}
		}

		@media (max-width: $md) {
			button {
				width: 100%;
			}
		}
	}
</style>
