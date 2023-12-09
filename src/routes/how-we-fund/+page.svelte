<script lang="ts">
	import PartnerImg1 from '$lib/assets/images/partner_support/1.webp';
	import PartnerImg2 from '$lib/assets/images/partner_support/2.webp';
	import PartnerImg3 from '$lib/assets/images/partner_support/3.webp';
	import PartnerImg4 from '$lib/assets/images/partner_support/4.webp';
	import PartnerImg5 from '$lib/assets/images/partner_support/5.webp';
	import PartnerImg6 from '$lib/assets/images/partner_support/6.webp';

	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';

	import { gsap } from 'gsap/dist/gsap';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import FoundersExitsSection from '$lib/components/FoundersExitsSection.svelte';
	import type { PageData } from '.svelte-kit/types/src/routes/$types';

	import HeroImg from '$lib/assets/images/heroes/how-we-fund-inside.png?webp';
	// import HeroImg2 from '$lib/assets/images/hero/2.2.png'

	import ParticipatoryVideoPoster from '$lib/assets/images/participatory-video-poster.webp';
	import Seo from '$lib/components/Seo.svelte';
	import type { ActionData } from './$types';

	let partnersSlide: HTMLElement;
	let windowWidth: number;
	let videoPlayer: HTMLVideoElement;

	let partnersSlideWidth = 0;

	export let data: PageData;
	export let form: ActionData;

	$: hero = data?.hero;
	$: resources = data?.resources;

	onMount(() => {
		let sliderOffset = partnersSlide.getBoundingClientRect().left;
		let toScroll = windowWidth - partnersSlide.offsetWidth - 2 * sliderOffset;

		partnersSlideWidth = partnersSlide.getBoundingClientRect().width + sliderOffset;

		if (windowWidth > 768) {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '.partners_section',
						scrub: 1,
						start: 'top -100px',
						end: 'bottom center',
						pin: true
					}
				})
				.to('.partners_section .partners_section__slide', {
					x: toScroll
				});

			gsap
				.timeline({
					scrollTrigger: {
						trigger: '.participatory_section',
						pin: true,
						scrub: true,
						start: 'top top',
						end: '+=200%',
						onUpdate: ({ progress }: any) => {
							if (videoPlayer && progress > 0.8) {
								videoPlayer.play();
							}
						},
						onLeave: () => {
							if (videoPlayer) {
								videoPlayer.pause();
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
								videoPlayer.pause();
							}
						}
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

		// if ($page.url.hash) {
		// 	gsap.timeline().to(window, {
		// 		scrollTo: $page.url.hash
		// 	});
		// }
	});
</script>

<svelte:head>
	<link rel="preload" href={HeroImg} as="image" />
	<Seo title="Transparency & Accountability Initiative - How we fund" url="/how-we-fund" />
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div id="how-we-fund" class="page">
	<section class="landing_section section">
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
				<div class="col col_5 col_md_12">
					<div class="display_flex flex_column h_100 justify_center">
						<h1 class="text_green mb_4">{hero?.title}</h1>
						<span class="divider divider_2 divider_light" />
						<div class="mt_4 mb_2 font_light">
							{@html hero?.message}
						</div>
					</div>
				</div>
				<div class="img_wrapper col col_7 col_md_12 h_100">
					<img
						class="parallax"
						data-depth="-0.15"
						decoding="sync"
						loading="eager"
						src={HeroImg1}
						alt="How we fund"
					/>
				</div>
			</div>
		</div> -->
	</section>
	<section id="partner-support" class="partners_section section">
		<div class="container">
			<h2 class="font_bold mb_4 mt_0">Partner support</h2>
			<div class="divider divider_2 divider_blue_light" />
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
							Collaborate on selected projects, initiatives, and campaigns that require greater
							collective action and attention.
						</p>
					</div>
					<div class="partners_section__item">
						<img src={PartnerImg2} alt="" />
						<p class="mt_4">
							Enhance diversity, equity and inclusion practices in our own foundations and in our
							partners.
						</p>
					</div>
					<div class="partners_section__item">
						<img src={PartnerImg3} alt="" />
						<p class="mt_4">
							Exchange experiences and test ways to enable more equitable funder-grantee
							relationships.
						</p>
					</div>
					<div class="partners_section__item">
						<img src={PartnerImg4} alt="" />
						<p class="mt_4">Expand the proportion of our grantees receiving flexible support.</p>
					</div>
					<div class="partners_section__item">
						<img src={PartnerImg5} alt="" />
						<p class="mt_4">
							Improve our use of both financial and nonfinancial tools<!-- , such as dedicated
							organizational health funds and strategic communications, to strengthen grantee
							organizational effectiveness and agency. -->
						</p>
					</div>
					<div class="partners_section__item">
						<img src={PartnerImg6} alt="" />
						<p class="mt_4">
							Learn from each other (and other nonmember funders) to inform our strategy designs,
							explore complementarities, and test assumptions<!-- , for example, around entering and
							exiting fields. -->
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<FoundersExitsSection {form} />
	<section id="participatory-strategy">
		<div class="participatory_section section">
			<div class="container">
				<div class="participatory_section__content">
					<div class="content_wrapper pl_3">
						<h2 class="font_bold mb_4">Participatory Strategy</h2>
						<div class="divider divider_2 divider_blue_light" />
						<p class="mt_4">
							TAI offers a platform for candid, constructive exchange around grantmaking practices.
							Our members learn from each other and hold each other accountable to be more
							inclusive, equitable, innovative, and effective grantmakers.
						</p>
						<a
							href="https://participatorystrategy.org/"
							target="blank"
							class="btn btn_dark mt_4 show_on_md_and_up"
						>
							Learn more
						</a>
					</div>
					<div class="video_wrapper">
						<video
							bind:this={videoPlayer}
							muted
							loop
							class="w_100"
							src="https://api.tai.datalis.dev/uploads/participatory_strategy_d1cb234e94.webm"
							poster={ParticipatoryVideoPoster}
						>
							<track kind="captions" />
						</video>
					</div>
					<a
						href="https://participatorystrategy.org/"
						target="blank"
						class="btn btn_dark mt_4 show_on_md_and_down"
					>
						Learn more
					</a>
				</div>
			</div>
		</div>
	</section>
	<ResourcesSection {resources} />
</div>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');
	$lg: map-get($grid-breakpoints, 'lg');
	$xl: map-get($grid-breakpoints, 'xl');

	/* .landing_section {
		z-index: 1;
		padding-top: 100px !important;
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
			@media screen and (max-width: $md) {
				margin-top: 0 !important;
			}
		}

		.container,
		.col {
			margin-top: 0;
			margin-bottom: 0;
		}

		.img_wrapper {
			margin: auto !important;
		}
		.img_wrapper img {
			margin: auto;
			
			position: absolute;
			top: 0;
			bottom: 0;
			right: -14%;
			@media screen and (max-width: $lg) {
				right: -30%;
			}
			@media screen and (max-width: $md) {
				position: relative;
				right: 0;
			}
		}

		:global(p) {
			text-align: left;
		}
	} */

	.landing_section {
		//background-image: url(/src/lib/assets/images/hero.webp);
		background-size: cover;
		z-index: 1;

		height: 100vh;
		padding-top: 0 !important;
		padding-bottom: 0 !important;
		display: flex !important;
		flex-direction: column;

		@media screen and (max-width: $md) {
			height: unset !important;
		}

		.container {
			flex-grow: 1;
			display: flex;
			flex-direction: column;
		}
		.content {
			margin: auto;
			height: 100%;
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 100%;
			grid-gap: 1rem;
			padding-top: 100px;

			@media screen and (max-width: $md) {
				padding-bottom: 2rem;
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
				height: 100%;
				object-fit: contain;
			}

			@media screen and (min-width: $md) {
				margin-top: -8rem;
				padding-top: 8rem;
				margin-right: -100vw;
				padding-right: 100vw;
				height: 100svh;
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

			@media screen and (max-width: $md) {
				width: 100%;
				flex-direction: column;
				align-items: center;
			}

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
				background: url(/src/lib/assets/images/blue_line.svg);
				background-repeat: no-repeat;
				background-size: 110% 120%;
				background-attachment: local;
				background-position-x: left;
				-webkit-overflow-scrolling: touch;
				margin-top: -30px;

				@media screen and (max-width: $md) {
					display: none;
				}
			}
		}

		&__item {
			flex-shrink: 0;
			display: flex;
			flex-direction: column;
			align-items: center;
			transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
			position: relative;

			width: calc(33.3333vw - 4rem);
			max-width: calc(1400px / 3 - 4rem);

			img {
				width: 90%;
				object-fit: cover;
				object-position: center;
				border-radius: 15px;
				overflow: hidden;
			}

			@media (max-width: $md) {
				width: 100% !important;
				// max-width: unset !impo;

				img {
					width: 100% !important;
					height: auto !important;
					max-height: 250px;
				}

				p {
					text-align: left !important;
				}
			}

			p {
				margin-top: 1rem;
				text-align: center;
				font-size: pxToRem(14);
				font-weight: 600;
			}
		}

		&__item + &__item {
			margin-left: 4rem;
			//margin-right: 2rem;
			@media (max-width: $md) {
				margin-left: 0;
			}
		}
	}

	.participatory_section {
		min-height: 105vh;
		display: flex !important;
		flex-direction: column;
		justify-content: center;

		@media screen and (max-width: $md) {
			min-height: auto;
			padding-bottom: 0 !important;
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
			transform: translate3d(0, 0, 0);
			flex: 1 0 auto;

			@media screen and (max-width: $md) {
				flex-direction: column;
			}

			.content_wrapper {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				padding-right: 4rem;
				p {
					max-width: 70%;
					@media screen and (max-width: $md) {
						max-width: 100%;
					}
				}
			}

			.content_wrapper,
			.video_wrapper {
				flex-shrink: 0;
				flex-basis: 65%;
				@media screen and (max-width: $md) {
					flex-basis: 100%;
					padding-right: 0 !important;
					padding: 0;
				}
			}

			.video_wrapper {
				display: flex;
				flex-direction: column;

				video {
					@media screen and (max-width: $md) {
						margin-top: 2rem;
					}
					height: 90%;
					margin: auto;
					max-width: 100%;
					object-fit: cover;
					border-radius: 25px;
				}
			}
		}

		@media (max-width: $md) {
			.btn {
				width: 100%;
			}
		}
	}
</style>
