<script lang="ts">
	import FeaturedImg from '$lib/assets/images/featured-1.jpg';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';

	import ChevronRightIcon from '$lib/assets/icons/chevron-right-thin.svg?component';
	
	import type { PageData } from '.svelte-kit/types/src/routes/$types';
	import PastFundingSection from '$lib/components/PastFundingSection.svelte';
	import Six6csSection from '$lib/components/Six6csSection.svelte';


	let windowWidth: number;

	export let data: PageData;

	$: hero = data.hero;
	$: resources = data.resources;
	$: past_funding = data.past_funding;
	$: six_data = data.six_cs;

</script>

<svelte:window bind:innerWidth={windowWidth} />

<div id="how-we-fund" class="page">
	<section class="landing_section section bg_blue">
		<div class="container h-100">
			<div class="landing_section__content">
				<h1 class="text_green mb_4">{hero?.title}</h1>
				<span class="divider divider_2 divider_light" />
				<p class="mt_4 font_light">
					{@html hero?.message}
				</p>
			</div>
		</div>
	</section>
	<Six6csSection data={six_data} />
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
							<span class="display_block mt_1">transaction costs <!-- and test new approaches --></span>
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
				conversations evolve similarly. One current priority is how to strengthen transparency,
				participation and accountability dimensions of responses to the climate crisis
			</p>

			<div class="video_wrapper text_center">
				<img src={FeaturedImg} class="w_100" alt="" />
			</div>
		</div>
	</section>
	<PastFundingSection data={past_funding} />
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
	<ResourcesSection data={resources} />
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

	

	.progress_model_section {
		margin-top: -2px;
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
