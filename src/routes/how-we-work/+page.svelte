<script>
	// import PartnerImg1 from '$lib/assets/images/partner1.png';
	// import PartnerImg2 from '$lib/assets/images/partner2.png';
	// import PartnerImg3 from '$lib/assets/images/partner3.png';

	import FeaturedImg from '$lib/assets/images/featured-1.jpg';

	// import PartnerDecorImg from '$lib/assets/images/decor1.svg?component';
	// import ResourceItem from '$lib/components/ResourceItem.svelte';
	// import HorizontalScroller from '$lib/components/HorizontalScroller.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';

	import ChevronRightIcon from '$lib/assets/icons/chevron-right-thin.svg?component';
	import ArticleItem from '$lib/components/ArticleItem.svelte';
	import { onMount } from 'svelte';

	import { gsap } from 'gsap/dist/gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

	gsap.registerPlugin(ScrollTrigger);

	/** @type {number} */
	let windowWidth;

	/** @type {HTMLElement} */
	let _6CsSectionSlider;

	onMount(() => {
		gsap
			.timeline()
			.to('._6Cs_section', {
				scrollTrigger: {
					trigger: '._6Cs_section',
					pin: true,
					scrub: true,
					start: 'center center',
					end: 'bottom -100%'
				}
			})
			.to('._6Cs_section ._6Cs_wrapper', {
				scrollTrigger: {
					trigger: '._6Cs_section',
					start: 'top bottom',
					end: 'bottom -300%',
					scrub: 0.5
				},
				y: '-10%'
			});

		let parentWidth = _6CsSectionSlider.parentElement?.getBoundingClientRect().width || 0;
		let marginOffset = _6CsSectionSlider.getBoundingClientRect().left;
		let toScroll =
			parentWidth - _6CsSectionSlider.getBoundingClientRect().right + marginOffset * 1.1;

		gsap.timeline().to('._6Cs_section ._6Cs_section_slide', {
			x: toScroll,
			scrollTrigger: {
				trigger: '._6Cs_section',
				scrub: 1,
				start: 'top top',
				end: 'bottom -100%'
			}
		});
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div id="how-we-fund" class="page">
	<section class="landing_section section bg_blue">
		<div class="container h-100">
			<div class="landing_section__content">
				<h1 class="text_green mb_4">How we work</h1>
				<span class="divider divider_2 divider_light" />
				<p class="mt_4 font_light">
					Our members use TAI as a space to strategize, interrogate evidence and develop joint
					actions. We do this through working groups, coffee hours, research, bringing in expert
					voices and other funders across a wide range of issues areas. We share knowledge and
					insights, build new alliances, and help to align funding to increase the impact of
					members’ grantmaking.
				</p>
			</div>
		</div>
	</section>
	<section class="_6Cs_section section bg_light">
		<div class="container">
			<div class="_6Cs_wrapper">
				<div class="_6Cs_section_title">
					<h3 class="font_regular mb_4 mt_0">Our 6Cs of funder support</h3>
					<div class="divider divider_2 divider_light" />
				</div>
				<div class="_6Cs_section_slide" bind:this={_6CsSectionSlider}>
					<div class="_6Cs_item">
						<div class="display_flex align_center">
							<span class="_6Cs_item__count mr_3">1</span>
							<span class="_6Cs_item__title text_uppercase font_light">Collaborate</span>
						</div>
						<p class="_6Cs_item__text mt_1">
							with diverse practitioners, researchers, and allies to pinpoint learnings and act on
							new ideas and insights. Multi-Stakeholder Initiatives Internationally, and National
							Chapters
						</p>
					</div>
					<div class="_6Cs_item">
						<div class="display_flex align_center">
							<span class="_6Cs_item__count mr_3">2</span>
							<span class="_6Cs_item__title text_uppercase font_light">Collaborate</span>
						</div>
						<p class="_6Cs_item__text mt_1">
							with diverse practitioners, researchers, and allies to pinpoint learnings and act on
							new ideas and insights. Multi-Stakeholder Initiatives Internationally, and National
							Chapters
						</p>
					</div>
					<div class="_6Cs_item">
						<div class="display_flex align_center">
							<span class="_6Cs_item__count mr_3">3</span>
							<span class="_6Cs_item__title text_uppercase font_light">Collaborate</span>
						</div>
						<p class="_6Cs_item__text mt_1">
							with diverse practitioners, researchers, and allies to pinpoint learnings and act on
							new ideas and insights. Multi-Stakeholder Initiatives Internationally, and National
							Chapters
						</p>
					</div>
					<div class="_6Cs_item">
						<div class="display_flex align_center">
							<span class="_6Cs_item__count mr_3">4</span>
							<span class="_6Cs_item__title text_uppercase font_light">Collaborate</span>
						</div>
						<p class="_6Cs_item__text mt_1">
							with diverse practitioners, researchers, and allies to pinpoint learnings and act on
							new ideas and insights. Multi-Stakeholder Initiatives Internationally, and National
							Chapters
						</p>
					</div>
					<div class="_6Cs_item">
						<div class="display_flex align_center">
							<span class="_6Cs_item__count mr_3">5</span>
							<span class="_6Cs_item__title text_uppercase font_light">Collaborate</span>
						</div>
						<p class="_6Cs_item__text mt_1">
							with diverse practitioners, researchers, and allies to pinpoint learnings and act on
							new ideas and insights. Multi-Stakeholder Initiatives Internationally, and National
							Chapters
						</p>
					</div>
					<div class="_6Cs_item">
						<div class="display_flex align_center">
							<span class="_6Cs_item__count mr_3">6</span>
							<span class="_6Cs_item__title text_uppercase font_light">Collaborate</span>
						</div>
						<p class="_6Cs_item__text mt_1">
							with diverse practitioners, researchers, and allies to pinpoint learnings and act on
							new ideas and insights. Multi-Stakeholder Initiatives Internationally, and National
							Chapters
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="progress_model_section section bg_light">
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
							<span class="display_block mt_1">new insights on content and practice</span>
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
							<span class="display_block mt_1">rapid response and collective voice/resources</span>
						</div>
						<div>
							<span class="display_block font_bold">REDUCE</span>
							<span class="display_block mt_1">transaction costs and test new approaches</span>
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
	<section class="featured_section section bg_blue_light">
		<div class="container">
			<h2>Featured topics</h2>
			<div class="divider divider_green divider_2" />
			<p class="mt_4">
				TAI members evolve their priorities in line with the global context and TAI collective
				conversations evolve similarly. We scope out funding opportunities or look back at the
				effectiveness of programming on specific topics that inform member thinking and investment
				choices. We then move on to new topics.
			</p>
			<p class="">
				One current priority is how to strengthen transparency, participation and accountability
				dimensions of responses to the climate crisis. Technical solutions are essential, but we
				know from experience that they are hard to implement effectively without underlying good
				governance. TAI is exploring ways to strengthen climate governance and draw on lessons from
				past governance funding, such as on natural resource management, taxation or fighting
				disinformation.
			</p>
			<div class="video_wrapper text_center">
				<h3 class="text_green">
					How can Transparency, Participation and Accountability strengthen climate action?
				</h3>
				<img src={FeaturedImg} class="w_100" alt="" />
			</div>
		</div>
	</section>
	<section class="past_funding_section section bg_gray_light">
		<div class="container">
			<h2>Past Funding Exploration</h2>
			<div class="divider divider_white divider_2" />
			<div class="row mt_4">
				<div class="col col_4 col_md_12">
					<ArticleItem />
				</div>
				<div class="col col_4 col_md_12">
					<ArticleItem />
				</div>
				<div class="col col_4 col_md_12">
					<ArticleItem />
				</div>
			</div>
		</div>
	</section>
	<section class="other_groups_section section bg_gray_light">
		<div class="container">
			<h2>Working with other groups</h2>
			<div class="divider divider_white divider_2" />
			<p class="mt_5">
				Transparency, participation and accountability are essential to deliver positive societal
				outcomes, be that a stellar education service, effective regulation of new technologies or
				accessible, affordable renewable energy. Our work is intersectional in its nature and it is
				important we work with those championing change on related issues. That includes partnering
				with other funder networks.
			</p>
			<p class="">
				The good news is that there is a growing list of progressive funder groups to connect with.
				TAI is in regular dialogue with other groups – sharing learnings, exploring overlapping
				interests across our memberships and promoting responsible funder practices. We are hugely
				grateful for the insights and advice of those running peer networks.
			</p>
		</div>
	</section>
	<ResourcesSection />
	<SubscribeSection />
</div>

<style lang="scss">
	$green_light: #59ebcf;
	$blue: map-get($colors, 'blue');
	$light: map-get($colors, 'light');

	$md: map-get($grid-breakpoints, 'md');

	.landing_section {
		&__content {
			width: 42vw;
			@media (max-width: $md) {
				width: 100%;
				margin-top: 40vh;
			}
		}
	}

	._6Cs_section {
		position: relative;
		// height: 100vh;
		min-height: 100vh !important;
		> .container {
			// height: 70% !important;
			display: flex;
			align-items: center;
		}

		._6Cs_wrapper {
			background-color: $green_light;
			border-radius: 15px;
			//padding: 2rem;
			height: 70vh;
			width: 100%;
			display: flex;
			flex-direction: column;
			overflow: hidden;
		}

		._6Cs_section_title {
			padding: 3rem;
			@media (max-width: $md) {
				padding: 2rem;
			}
		}

		._6Cs_section_slide {
			width: max-content;
			display: flex;
			flex-grow: 1;
			align-items: center;
			padding-left: 3rem;
			background: url(/src/lib/assets/images/decor1.svg);
			background-repeat: no-repeat;
			background-size: 110% auto;
			background-position: center;
			background-attachment: local;
			@media (max-width: $md) {
				padding-left: 1rem;
			}
		}

		._6Cs_item + ._6Cs_item {
			margin-left: 3rem;
		}

		._6Cs_item {
			width: 30vw;
			display: block;
			flex-shrink: 0;

			@media (max-width: $md) {
				width: 90vw;
			}

			&__count {
				width: 60px;
				height: 60px;
				background-color: $blue;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				color: $green_light;
				font-size: pxToRem(38);
				line-height: 1;
				font-weight: 900;
			}
			&__title {
				font-size: pxToRem(24);
				font-weight: 700;
				letter-spacing: 1.75px;
			}
			&__text {
				padding-left: calc(35px + 2.3rem);
				// font-size: 22px;
				font-weight: 400;
				margin-top: 1rem;
			}
		}

		.divider {
			width: 100px;
			margin-left: 0;
		}
	}

	.progress_model_section {
		min-height: 100vh !important;

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
			height: 450px;
			display: flex;
			flex-direction: column;
			border-radius: 15px;
			overflow: hidden;

			@media (max-width: $md) {
				width: 100% !important;
				height: 350px;
			}

			&__header {
				h5 {
					font-weight: 500;
					letter-spacing: 2.5px;
				}
			}
			&_body {
				padding-top: 2rem;
				padding-bottom: 2rem;
				flex-grow: 1;
				justify-content: space-between;
				background-color: #c7ccd6 !important;
				span {
					font-size: pxToRem(17);
					font-weight: 400;
				}
			}
		}
	}

	.featured_section {
		padding-top: 2.5rem;
		padding-bottom: 4rem !important;
		p {
			font-weight: 300;
			width: 75vw;
			@media (max-width: $md) {
				width: 100%;
			}
		}
		.video_wrapper {
			padding-left: 4rem;
			padding-right: 4rem;
			margin-top: 4rem;
			@media (max-width: $md) {
				padding-left: 1rem;
				padding-right: 1rem;
			}
		}
	}
	// .past_funding_section {
	// }
	.other_groups_section {
		p {
			width: 75vw;
			@media (max-width: $md) {
				width: 100%;
			}
		}
	}
</style>
