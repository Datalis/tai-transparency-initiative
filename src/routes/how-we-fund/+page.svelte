<script lang="ts">
	import PartnerImg1 from '$lib/assets/images/partner_support/1.webp';
	import PartnerImg2 from '$lib/assets/images/partner_support/2.webp';
	import PartnerImg3 from '$lib/assets/images/partner_support/3.webp';
	import PartnerImg4 from '$lib/assets/images/partner_support/4.webp';
	import PartnerImg5 from '$lib/assets/images/partner_support/5.webp';

	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';

	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	import FoundersExitsSection from '$lib/components/FoundersExitsSection.svelte';
	import type { PageData } from '.svelte-kit/types/src/routes/$types';

	let partnersSlide: HTMLElement;
	let windowWidth: number;

	let partnersSlideWidth = 0;

	export let data: PageData;

	$: hero = data?.hero;
	$: resources = data?.resources;

	onMount(() => {
		let sliderOffset = partnersSlide.getBoundingClientRect().left;
		let toScroll = windowWidth - partnersSlide.offsetWidth - 2 * sliderOffset;

		partnersSlideWidth = partnersSlide.getBoundingClientRect().width + sliderOffset;

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '.partners_section',
					scrub: true,
					start: 'top top',
					end: 'bottom center'
					// pin: true
				}
			})
			.to('.partners_section .partners_section__slide', {
				x: toScroll
			});
		// .to('.partners_section .partners_section__slide--decor', {
		// 	x: toScroll,
		// });

		gsap
			.timeline({
				scrollTrigger: {
					trigger: '.participatory_section',
					pin: true,
					scrub: true,
					start: 'top top',
					end: '+=200%'
				}
			})
			.to('.participatory_section .participatory_section__content', {
				yPercent: -5
			})
			.to('.participatory_section .participatory_section__content .video_wrapper', {
				xPercent: -65,
				flexBasis: '100%'
				// ease: 'none'
			})
			.to('.participatory_section .participatory_section__content .video_wrapper video', {
				height: '100%'
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
	<section id="partner-support" class="partners_section section bg_light">
		<div class="container">
			<h2 class="font_bold mb_4 mt_0">Partner support</h2>
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
	<section id="participatory-strategy">
		<div class="participatory_section section">
			<div class="container">
				<div class="participatory_section__content">
					<div class="content_wrapper">
						<h2 class="font_bold mb_4">Participatory Strategy</h2>
						<div class="divider divider_2 divider_green" />
						<p class="mt_4">
							TAI offers a platform for candid, constructive exchange around grantmaking practices.
							Our members learn from each other and hold each other accountable to be more
							inclusive, equitable, innovative, and effective grantmakers.
						</p>
						<a href="/" class="btn btn_green btn_bordered mt_4"> Learn more </a>
					</div>
					<div class="video_wrapper">
						<video
							autoplay
							muted
							class="w_100"
							src="https://api.tai.datalis.dev/uploads/participatory_strategy_d1cb234e94.webm"
							preload="metadata"
						>
							<track kind="captions" />
						</video>
					</div>
				</div>
			</div>
		</div>
	</section>
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
			width: 30vh;
			display: flex;
			flex-direction: column;
			align-items: center;
			transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
			position: relative;

			img {
				height: 30vh;
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
				font-size: pxToRem(12);
				font-weight: 600;
			}
		}

		&__item + &__item {
			margin-left: 4rem;
			//margin-right: 2rem;
		}
	}

	.participatory_section {
		background: #e4e8ef;
		min-height: 105vh;
		display: flex !important;
		flex-direction: column;
		justify-content: center;

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
			transform: translate3d(0, 0, 0);
			flex: 1 0 auto;

			.content_wrapper {
				padding-right: 4rem;
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
					height: 90%;
					margin: auto;
					max-width: 100%;
					object-fit: cover;
					border-radius: 25px;
				}
			}
		}

		@media (max-width: $md) {
			button {
				width: 100%;
			}
		}
	}
</style>
