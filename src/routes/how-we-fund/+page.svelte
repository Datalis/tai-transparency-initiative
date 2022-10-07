<script>
	import PartnerImg1 from '$lib/assets/images/partner_support/1.png';
	import PartnerImg2 from '$lib/assets/images/partner_support/2.png';
	import PartnerImg3 from '$lib/assets/images/partner_support/3.png';
	import PartnerImg4 from '$lib/assets/images/partner_support/4.png';
	import PartnerImg5 from '$lib/assets/images/partner_support/5.png';

	import ParticipatoryStrategyVideo from '$lib/assets/video/movie.webm';

	// import PartnerDecorImg from '$lib/assets/images/decor1.png';
	// import ResourceItem from '$lib/components/ResourceItem.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';
	// import HorizontalScroller from '$lib/components/HorizontalScroller.svelte';

	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';

	/**
	 * @type {HTMLElement}
	 */
	let partnersSlide;
	/**
	 * @type {number}
	 */
	let windowWidth;

	$: partnersSlideWidth = partnersSlide?.getBoundingClientRect()?.width || 0;

	onMount(() => {
		// gsap.registerPlugin(ScrollTrigger);

		// @ts-ignore
		gsap.to('.partners_section', {
			scrollTrigger: {
				trigger: '.partners_section',
				start: 'center center',
				end: 'bottom -100%',
				pin: true,
				scrub: true
			}
		});

		// @ts-ignore
		gsap.to('.partners_section .container', {
			scrollTrigger: {
				trigger: '.partners_section',
				start: 'top bottom',
				end: 'bottom -300%',
				scrub: 0.5
			},
			y: '-15%'
		});

		let sliderOffset = partnersSlide.getBoundingClientRect().left;
		console.log(sliderOffset);
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
				<h1 class="text_green mb_4">How we fund</h1>
				<span class="divider divider_2 divider_light" />
				<p class="mt_4 font_light">
					TAI offers a platform for candid, constructive exchange around grantmaking practices. Our
					members learn from each other and hold each other accountable to be more inclusive,
					equitable, innovative, and effective grantmakers.
				</p>
				<p class="font_light">
					We supports partners to harness transparency, participation and accountability for the
					public good, and these are also our values we want to live by.
				</p>
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
	<section class="founders_section section bg_light">
		<div class="container">
			<h2 class="mt_0">Funder exits</h2>
			<div class="divider divider_green divider_4" />
			<p class="mt_4">
				Funders regularly adapt their strategies, which often prompt investment in new issue areas,
				but also the tough decision to scale back or fully wind down funding for existing
				portfolios. These funding “exits” are a painful reality, especially for impacted grantees,
				but also other funders of that field. However, they can be managed in responsible ways.
			</p>
			<p>
				TAI members use our platform to regularly discuss how to handle exits, to encourage good
				practice, and to manage the knock on effects for a field. We have been trying to document
				learnings as in this blog. Are you planning a funding exit? Interested in how other funder
				approaches? Donʼt hesitate to get in touch.
			</p>
		</div>
	</section>
	<section class="participatory_section section">
		<div class="container">
			<div class="row">
				<div class="col col_4 col_md_12">
					<h2 class="font_bold mb_4 mt_0">Participatory Strategy</h2>
					<div class="divider divider_2 divider_green" />
					<p class="mt_4">
						TAI offers a platform for candid, constructive exchange around grantmaking practices.
						Our members learn from each other and hold each other accountable to be more inclusive,
						equitable, innovative, and effective grantmakers.
					</p>
					<button class="btn btn_green btn_bordered mt_4"> Learn more </button>
				</div>
				<div class="col col_8 col_md_12">
					<video muted controls={false} preload="none" autoplay width="100%" height="100%" loop>
						<source type="video/webm" src={ParticipatoryStrategyVideo} />
					</video>
				</div>
			</div>
		</div>
	</section>
	<ResourcesSection />
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
				margin-top: pxToRem(100);
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
			width: calc(100vw / 3);
			max-width: calc(1140px / 3 - 2rem);
			height: calc(100vw / 3);
			display: flex;
			flex-direction: column;
			align-items: center;
			transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);

			img {
				height: 60%;
				width: 100%;
				min-height: 300px;
				min-width: 100%;
				object-fit: cover;
				object-position: center;
				border-radius: 15px;
				overflow: hidden;
			}

			@media (max-width: $md) {
				width: 100vw !important;
			}

			// p {
			// 	text-align: center;
			// }
		}

		&__item + &__item {
			margin-left: 4rem;
			//margin-right: 2rem;
		}
	}

	.founders_section {
		padding-top: 0 !important;
		p {
			width: 75%;
			@media (max-width: $md) {
				width: 100%;
			}
		}
	}

	.participatory_section {
		background: #e4e8ef;
		min-height: 80vh !important;
		display: flex !important;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		@media (max-width: $md) {
			button {
				width: 100%;
			}
		}
	}
</style>
