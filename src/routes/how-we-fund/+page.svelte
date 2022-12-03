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
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	gsap.registerPlugin(ScrollTrigger);
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import FoundersExitsSection from '$lib/components/FoundersExitsSection.svelte';
	import type { PageData } from '.svelte-kit/types/src/routes/$types';

	import HeroImg1 from '$lib/assets/images/hero/art1.png';
	// import HeroImg2 from '$lib/assets/images/hero/2.2.png'

	import ParticipatoryVideoPoster from '$lib/assets/images/participatory-video-poster.webp';

	let partnersSlide: HTMLElement;
	let windowWidth: number;
	let videoPlayer: HTMLVideoElement;

	let partnersSlideWidth = 0;

	export let data: PageData;

	$: hero = data?.hero;
	$: resources = data?.resources;

	onMount(() => {
		let sliderOffset = partnersSlide.getBoundingClientRect().left;
		let toScroll = windowWidth - partnersSlide.offsetWidth - 2 * sliderOffset;

		partnersSlideWidth = partnersSlide.getBoundingClientRect().width + sliderOffset;
		//Play video on scroll and pause when out of view
		ScrollTrigger.create({
			trigger: videoPlayer,
			start: '+=200%',
			end: '+=110%',
			onEnter: () => {
				videoPlayer.play();
			},
			onLeave: () => {
				videoPlayer.pause();
			},
			onEnterBack: () => {
				videoPlayer.play();
			},
			onLeaveBack: () => {
				//reset video to end
				videoPlayer.currentTime = videoPlayer.duration;
				videoPlayer.pause();
			},
		});
		if (windowWidth > 768) {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '.partners_section',
						scrub: true,
						start: 'top top',
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
				<div class="col col_5 col_md_12">
					<div class="display_flex flex_column h_100 justify_end">
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
						preload=""
						src={HeroImg1}
						alt=""
					/>
					<!-- <img class="img_wrapper_2 parallax" decoding="sync" loading="eager" src={HeroImg2} alt=""> -->
					<!-- <Image image={hero?.image} size="medium" priority /> -->
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
						<a
							href="https://participatorystrategy.org/"
							target="blank"
							class="btn btn_outline_green text_dark mt_4"
						>
							Learn more
						</a>
					</div>
					<div class="video_wrapper">
						<video
							bind:this={videoPlayer}
							muted
							loop
							decoding="async"
							class="w_100"
							src="https://api.tai.datalis.dev/uploads/participatory_strategy_d1cb234e94.webm"
							type="webm"
							poster={ParticipatoryVideoPoster}
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
	$lg: map-get($grid-breakpoints, 'lg');
	$xl: map-get($grid-breakpoints, 'xl');

	.landing_section {
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
			@media screen and (max-width: $md) {
				position: relative;
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
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				padding-right: 4rem;
				p {
					max-width: 70%;
				}
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
			.btn {
				width: 100%;
			}
		}
	}
</style>
