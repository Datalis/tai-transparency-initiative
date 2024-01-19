<script lang="ts">
	import WebIcon from '$lib/assets/icons/funding/1.svg?component';
	import HandsIcon from '$lib/assets/icons/funding/2.svg?component';
	import CogsIcon from '$lib/assets/icons/funding/3.svg?component';
	import SearchIcon from '$lib/assets/icons/funding/4.svg?component';
	import LightBulbIcon from '$lib/assets/icons/funding/5.svg?component';
	import ChartIcon from '$lib/assets/icons/funding/6.svg?component';
	import FundingImg from '$lib/assets/images/funding_data_library.webp';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';
	import HeroImg from '$lib/assets/images/heroes/what-we-fund-inside.png?webp';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination } from 'swiper';
	import PathwaysSection from '$lib/components/PathwaysSection.svelte';
	import type { PageData } from '.svelte-kit/types/src/routes/$types';
	import WhyItMattersSection from '$lib/components/WhyItMattersSection.svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap/dist/gsap';

	import 'swiper/css';
	import 'swiper/css/pagination';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;

	let windowWidth = 0;

	$: hero = data?.hero;
	$: resources = data?.resources;
	$: whyItMatters = data?.WhyItMatters;

	onMount(() => {
		if (windowWidth > 768) {
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
						rotate: 5,
						ease: 'none'
					},
					0
				);
			});
		}
	});
</script>

<svelte:head>
	<link rel="preload" as="image" href={HeroImg} />
	<Seo title="Trust, Accountability and Inclusion Collaborative - What we fund" url="/what-we-fund" />
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div id="what-we-fund" class="page">
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
		
	</section>
	<section id="funding" class="funding_section section">
		<div class="container">
			<h2 class="text_dark mt_0">What does TAI funding look like?</h2>
			<span class="divider divider_2 divider_blue_light mb_5" />
			<div class="show_on_md_and_up row">
				<div class="col_4 col_lg_12">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<WebIcon class="web_icon" />
						</span>
						<p>
							<strong>ADVOCATES</strong> partnering with communities and other stakeholders to ensure
							tax and budget policies realize rights and reduce inequalities
						</p>
					</div>
				</div>
				<div class="col_4 col_lg_12">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<HandsIcon class="hands_icon" />
						</span>
						<p>
							<strong>GRASSROOTS ORGANIZERS</strong> working with indigenous groups to document the plunder
							of their lands and assert their rights in the courts.
						</p>
					</div>
				</div>
				<div class="col_4 col_lg_12">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<CogsIcon class="cogs_icon" />
						</span>
						<p>
							<strong>INVESTIGATIVE JOURNALISTS</strong> uncovering dodgy deals that favor the politically
							connected.
						</p>
					</div>
				</div>
			</div>
			<div class="show_on_md_and_up row mt_5">
				<div class="col_4 col_lg_12">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<SearchIcon class="search_icon" />
						</span>
						<p>
							<strong>RESEARCHERS</strong> proving the value of inclusive participatory processes in
							shaping government policy.
						</p>
					</div>
				</div>
				<div class="col_4 col_lg_12">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<LightBulbIcon class="light_bulb_icon" />
						</span>
						<p>
							<strong>TECHNOLOGISTS</strong> guiding civil society groups to use data from multiple sources
							to back up their policy asks.
						</p>
					</div>
				</div>
				<div class="col_4 col_lg_12">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<ChartIcon class="chart_icon" />
						</span>
						<p>
							<strong>THINK TANKS</strong> pinpointing government revenues lost due to loopholes in international
							tax agreements.
						</p>
					</div>
				</div>
			</div>
			<div class="show_on_md_and_down swiper_container">
				<Swiper
					class="slider"
					pagination={{ clickable: true }}
					modules={[Pagination]}
					spaceBetween={25}
				>
					<SwiperSlide>
						<div class="funding_item mx_auto">
							<span class="funding_item__icon">
								<WebIcon class="web_icon" />
							</span>
							<p>
								<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
								health services they were promised and deserve
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="funding_item mx_auto">
							<span class="funding_item__icon">
								<HandsIcon class="hands_icon" />
							</span>
							<p>
								<strong>GRASSROOTS ORGANIZERS</strong> working with indigenous groups to document the
								plunder of their lands and assert their rights in the courts.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="funding_item mx_auto">
							<span class="funding_item__icon">
								<CogsIcon class="cogs_icon" />
							</span>
							<p>
								<strong>INVESTIGATIVE JOURNALISTS</strong> uncovering dodgy deals that favor the politically
								connected.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="funding_item mx_auto">
							<span class="funding_item__icon">
								<SearchIcon class="search_icon" />
							</span>
							<p>
								<strong>RESEARCHERS</strong> proving the value of inclusive participatory processes in
								shaping government policy.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="funding_item mx_auto">
							<span class="funding_item__icon">
								<LightBulbIcon class="light_bulb_icon" />
							</span>
							<p>
								<strong>TECHNOLOGISTS</strong> guiding civil society groups to use data from multiple
								sources to back up their policy asks.
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="funding_item mx_auto">
							<span class="funding_item__icon">
								<ChartIcon class="chart_icon" />
							</span>
							<p>
								<strong>THINK TANKS</strong> pinpointing government revenues lost due to loopholes in
								international tax agreements.
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</section>
	<div class="gradient_lg_gray_light">
		<WhyItMattersSection data={whyItMatters} />
	</div>
	<PathwaysSection />
	<ResourcesSection {resources} />
</div>

<style lang="scss">
	$green: #59ebcf;
	$blue: map-get($colors, 'blue');
	$lg: map-get($grid-breakpoints, 'lg');
	$xl: map-get($grid-breakpoints, 'xl');
	$md: map-get($grid-breakpoints, 'md');

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

				object-fit: contain;
			}

			@media screen and (min-width: $md) {
				margin-top: -8rem;
				padding-top: 8rem;
				margin-right: -100vw;
				padding-right: 100vw;
				height: 100vh;

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

			position: relative;


			img {

				position: absolute;
				max-width: 75%;

				left: 0;
				right: 0;
				bottom: 0;
				top: 0;

				margin: auto;

				@media screen and (max-width: $md) {
					position: relative;
					max-width: 100%;
					margin-top: 1rem;
				}
			}
		}

		:global(p) {
			text-align: left;
		}
	} */
	.funding_section {
		display: flex !important;
		flex-direction: column !important;
		min-height: 100vh;

		@media screen and (max-width: $md) {
			min-height: unset;
		}

		:global {
			.slider {
				height: 400px;
				--swiper-pagination-color: #7a879f;
				.funding_item {
					margin-top: 35px;
					padding: 1rem !important;
					padding-top: 3rem !important;

					&__icon {
						position: absolute;
						top: -35px !important;
						left: 0 !important;
						right: 0 !important;
						margin: auto !important;
					}
				}
			}
		}

		.container {
			height: 100% !important;
			flex-grow: 1 !important;
			display: flex;
			flex-direction: column;
			.col_4 {
				margin-top: 1rem;
			}

			@media screen and (max-width: $lg) {
				.row {
					margin-top: 0;
				}
			}

			.swiper_container {
				.funding_item {
					width: 100% !important;
					margin-left: 0 !important;
					margin-right: 0 !important;
					height: 80%;

					p{
						font-size: 22px !important;
					}
				}

			}
		}

		.funding_item {
			&__icon {
				position: absolute;
				top: 1.5rem;
				left: -35px;
				padding: 0.65rem;
				width: pxToRem(60);
				height: pxToRem(60);
				border-radius: 50%;
				background-color: $blue;
				display: flex;
				align-items: center;
				justify-content: center;
				:global {
					svg {
						width: 100%;
						height: 100%;
					}
					svg path {
						stroke: unset;
						stroke-width: unset;
						fill: #c8ccd5;
					}

					.hands_icon {
						padding: 0.1rem;
						margin-bottom: 0.1rem;
					}
					.search_icon {
						padding: 0.25rem;
					}
					.light_bulb_icon {
						padding: 0.25rem;
						margin-bottom: 0.2rem;
					}
				}
			}

			width: 90%;
			min-height: 220px;
			height: 100%;

			position: relative;
			border-radius: 15px;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
			padding-left: 3rem;
			padding-right: 2.3rem;
			background-color: map-get($colors, "gray_light" );

			@media screen and (max-width: $md) {
				height: 75%;
			}

			@media screen and (max-width: $lg) {
				margin-right: 0 !important;
			}

			p {
				letter-spacing: normal;
				font-size: pxToRem(15) !important;
			}
		}
	}

	.funding_data_section {
		min-height: 100vh;
		display: flex !important;
		flex-direction: column !important;

		.container {
			height: 100% !important;
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			.row {
				flex-grow: 1;
				height: 100%;
				align-items: center;
			}
		}

		@media (max-width: $md) {
			a {
				width: 100%;
			}
		}
	}
</style>
