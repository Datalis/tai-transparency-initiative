<script lang="ts">
	import HeroImgLayer0 from '$lib/assets/images/home/map.png';
	// import HeroImgLayer1 from '$lib/assets/images/home/group_1.webp';
	import HeroImgLayer1 from '$lib/assets/images/home/people.webp';
	import HeroImgLayer1Mobile from '$lib/assets/images/home/group_1_sm.webp';
	import HeroImgLayer2 from '$lib/assets/images/home/group_2.png';
	import HeroImgLayer2Mobile from '$lib/assets/images/home/group_2.png';

	import MacArthurLogo from '$lib/assets/icons/mac-arthur.svg?component';
	import FordLogo from '$lib/assets/icons/ford.svg?component';
	import HewlettLogo from '$lib/assets/icons/hewlett.svg?component';
	import LuminateLogo from '$lib/assets/icons/luminate.svg?component';
	import OpenSocietyLogo from '$lib/assets/icons/open-s.svg?component';
	import HiltonFoundationLogo from '$lib/assets/icons/hilton.svg?component';
	import HumanityUnitedLogoImage from '$lib/assets/images/humanity-united.png';
	import Packard from '$lib/assets/icons/Packard.svg?component';

	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';
	import JoinSection from '$lib/components/JoinSection.svelte';

	import { gsap } from 'gsap/dist/gsap';

	gsap.registerPlugin(ScrollTrigger);

	import { onMount } from 'svelte';
	import type { ActionData, PageData } from './$types';
	import CardsSection from '$lib/components/CardsSection.svelte';
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';
	import Seo from '$lib/components/Seo.svelte';
	import Popup from '$lib/components/Popup.svelte';
	import KnowledgeHubSection from '$lib/components/KnowledgeHubSection.svelte';

	let brandSlide: HTMLElement;
	let windowWidth: number;

	$: hero1_img = windowWidth > 768 ? HeroImgLayer1 : HeroImgLayer1Mobile;
	$: hero2_img = windowWidth > 768 ? HeroImgLayer2 : HeroImgLayer2Mobile;

	export let data: PageData;
	export let form: ActionData;

	$: hero = data.hero;
	$: knowledgeHub = data.knowledgehub;
	// $: resources = data.ResourcesSection;
	$: res = data.resources;

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
					start: '+=150px bottom',
					end: 'bottom -100px',
					scrub: true
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
	<link rel="preconnect" as="image" href={HeroImgLayer0} />
	<link rel="preconnect" as="image" href={hero1_img} />
	<link rel="preconnect" as="image" href={hero2_img} />

	<Seo />
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div id="home" class="page bg_white">
	<section class="landing_section section bg_white">
		<div class="container">
			<div class="row">
				<div class="landing_section__hero--wrapper col col_12 show_on_md_and_down">
					<div class="landing_section__hero landing_section__hero--mobile">
						<img class="parallax" loading="eager" data-depth="0.15" src={HeroImgLayer0} alt="" />
						<img class="parallax" loading="eager" data-depth="-0.15" src={hero2_img} alt="" />
						<img class="parallax" loading="eager" data-depth="0.10" src={hero1_img} alt="" />
					</div>
				</div>

				<div class="col col_5 col_md_12">
					<div class="landing_section__content">
						<h1 class="text_blue_light mb_3 mt_0">{hero?.title}</h1>
						<span class="divider divider_2 divider_blue_light" />
						<div class="landing_section__content__message font_light">
							{@html hero?.message}
						</div>
						<a href="/about-us" class="btn btn_dark mt_4 mb_4">Read More</a>
					</div>
				</div>

				<div class="col col_7 hide_on_md_and_down">
					<div class="landing_section__hero">
						<img class="parallax" data-depth="0.15" src={HeroImgLayer0} alt="" />
						<img class="parallax" data-depth="0.20" src={hero2_img} alt="" />
						<img class="parallax" data-depth="-0.15" src={hero1_img} alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="brands_section section bg_white show_on_lg_and_up">
		<div class="container">
			<span class="brands_section__title">OUR MEMBERS</span>
		</div>
		<p class="container">
			Bilateral donors with a track record of funding participatory governance, such as the United
			Kingdom Foreign, Commonwealth and Development Office, regularly participate in TAI
			conversations as official observers.
		</p>
		<div class="wrapper" bind:this={brandSlide}>
			<a href="https://www.macfound.org/" target="blank"><MacArthurLogo width="300" /></a>
			<a href="https://www.fordfoundation.org/" target="blank"><FordLogo width="300" /></a>
			<a href="https://hewlett.org/" target="blank"><HewlettLogo width="300" /></a>
			<a href="https://luminategroup.com/" target="blank"><LuminateLogo width="300" /></a>
			<a href="https://www.opensocietyfoundations.org/" target="blank"
				><OpenSocietyLogo width="300" /></a
			>
			<a href="https://www.hiltonfoundation.org/">
				<HiltonFoundationLogo width="300" />
			</a>
			<a href="https://humanityunited.org/" class="logo_image" target="blank">
				<img src={HumanityUnitedLogoImage} alt="Humanity United" />
			</a>
			<a href="https://www.packard.org/" target="blank">
				<Packard width="300" class="mt_4" />
			</a>
		</div>
	</section>
	<section class="brands_section_mobile section bg_white show_on_lg_and_down">
		<div class="container">
			<span class="brands_section__title">OUR MEMBERS</span>
		</div>
		<p class="container">
			Bilateral donors with a track record of funding participatory governance, such as the United
			Kingdom Foreign, Commonwealth and Development Office, regularly participate in TAI
			conversations as official observers.
		</p>
		<div class="brands_grid show_on_md_and_down pb_4 container">
			<a href="https://www.macfound.org/" target="blank"><MacArthurLogo width="150" /></a>
			<a href="https://www.fordfoundation.org/" target="blank"><FordLogo width="150" /></a>
			<a href="https://hewlett.org/" target="blank"><HewlettLogo width="150" /></a>
			<a href="https://luminategroup.com/" target="blank"><LuminateLogo width="150" /></a>
			<a href="https://www.opensocietyfoundations.org/" target="blank"
				><OpenSocietyLogo width="150" /></a
			>
			<a href="https://www.hiltonfoundation.org/">
				<HiltonFoundationLogo width="150" />
			</a>
			<a href="https://humanityunited.org/" class="logo_image" target="blank">
				<img src={HumanityUnitedLogoImage} alt="Humanity United" />
			</a>
			<a href="https://www.packard.org/" target="blank" class="span_2">
				<Packard width="150" height="60" class="mt_4" />
			</a>
		</div>
	</section>
	<CardsSection />
	<div class="gradient_sm_gray_light">
		<KnowledgeHubSection data={knowledgeHub} />
		<JoinSection {form} />
		<SubscribeSection />
		<ResourcesSection resources={res} />
	</div>
</div>
<Popup />

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');
	$lg: map-get($grid-breakpoints, 'lg');
	$xl: map-get($grid-breakpoints, 'xl');

	.logo_image {
		padding-left: 2rem;
		padding-right: 3rem;

		@media (max-width: $md) {
			padding-inline: 0;
		}

		& img {
			max-height: 80px !important;
			object-fit: contain !important;
			max-height: 100%;
		}
	}

	.landing_section {
		min-height: 100vh;
		display: flex !important;
		flex-direction: column;
		justify-content: flex-end;
		z-index: 1;
		padding-top: 120px !important;
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
				margin-top: 80px;
				min-height: 50vh;
			}

			@media (max-width: $md) {
				img {
					&:nth-child(2) {
						top: unset !important;
						// bottom: 0;
					}
					&:nth-child(3) {
						top: -10px !important;
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
					top: -2rem;
					max-width: 550px;
					left: 0;
					right: 0;
					margin: auto;
				}
				&:nth-child(3) {
					top: calc(100% - 450px);
					max-width: 700px;
					// left: 0;
					right: 0;
					margin: auto;

					@media screen and (max-width: $lg) {
						top: calc(100% - 325px);
					}
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
			justify-content: center;

			&__message {
				:global {
					strong {
						font-weight: 900 !important;
					}
				}
			}

			@media (max-width: $md) {
				a {
					width: 100%;
				}
			}

			// .divider {
			// 	width: 0 !important;
			// 	transition: all 0.20s ease;
			// }

			// &:hover {
			// 	.divider {
			// 		width: 265px !important;
			// 	}

			// 	// h1 {
			// 	// 	text-decoration: underline;
			// 	// }
			// }

			.btn:hover {
				background-color: map-get($colors, 'blue_light');
				color: map-get($colors, 'white');
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
		padding-top: 0rem !important;
		padding-bottom: 0 !important;
		background: map-get($colors, 'white');
		position: relative;
		z-index: 1;

		&__title {
			font-size: pxToRem(14);
			font-weight: 500;
			color: map-get($colors, 'blue_light');
			display: block;
		}

		.wrapper {
			margin-top: 2rem;
			width: max-content;
			display: flex;
			align-items: center;
			height: 100px;
			:global(svg) {
				flex-shrink: 0;
				max-width: 350px;
				padding-left: 2rem;
				padding-right: 3rem;
			}

			:global(path) {
				fill: map-get($colors, 'gray') !important;
			}
		}

		&_mobile {
			min-height: unset !important;
			position: relative;
			z-index: 1;
			padding-top: 0 !important;
			padding-bottom: 0 !important;

			.brands_section__title {
				margin-inline: auto;
				width: fit-content;
			}

			.brands_grid {
				display: grid;
				grid-template-columns: repeat(2, auto);
				grid-template-rows: repeat(1, 1fr);
				justify-content: space-around;
				align-items: center;
				grid-gap: 1rem;
				padding-block: 1rem;

				:global(path) {
					fill: map-get($colors, 'gray') !important;
				}

				.span_2 {
					grid-column: span 2;
					justify-self: center;
				}
			}
		}
	}
</style>
