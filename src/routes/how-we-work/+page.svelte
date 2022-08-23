<script>
	import PartnerImg1 from '$lib/assets/images/partner1.png';
	import PartnerImg2 from '$lib/assets/images/partner2.png';
	import PartnerImg3 from '$lib/assets/images/partner3.png';

	import FeaturedImg from '$lib/assets/images/featured-1.jpg';

	import PartnerDecorImg from '$lib/assets/images/decor1.png';
	import ResourceItem from '$lib/components/ResourceItem.svelte';
	import HorizontalScroller from '$lib/components/HorizontalScroller.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';

	import ChevronRightIcon from '$lib/assets/icons/chevron-right.svg?component';
	import ArticleItem from '$lib/components/ArticleItem.svelte';
</script>

<div id="how-we-fund" class="page">
	<section class="landing_section bg_blue">
		<div class="container h-100">
			<div class="landing_section__content">
				<h1 class="text_green">How we work</h1>
				<span class="divider divider_4 divider_light" />
				<p class="mt_4">
					Our members use TAI as a space to strategize, interrogate evidence and develop joint
					actions. We do this through working groups, coffee hours, research, bringing in expert
					voices and other funders across a wide range of issues areas. We share knowledge and
					insights, build new alliances, and help to align funding to increase the impact of
					members’ grantmaking.
				</p>
			</div>
		</div>
	</section>
	<section class="_6Cs_section">
		<!-- <img class="partners_section--dec" src={PartnerDecorImg} alt="" /> -->
		<div class="container">
			<div class="_6Cs_wrapper">
				<h3 class="font_bold mb_4 mt_0">Our 6Cs of funder support</h3>
				<div class="divider divider_4 divider_light" />
				<HorizontalScroller clazz="mt_4">
					<div class="_6Cs_item">
						<div class="display_flex align_center">
							<span class="_6Cs_item__count mr_3">1</span>
							<span class="text_uppercase font_light">Collaborate</span>
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
							<span class="text_uppercase font_light">Collaborate</span>
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
							<span class="text_uppercase font_light">Collaborate</span>
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
							<span class="text_uppercase font_light">Collaborate</span>
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
							<span class="text_uppercase font_light">Collaborate</span>
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
							<span class="text_uppercase font_light">Collaborate</span>
						</div>
						<p class="_6Cs_item__text mt_1">
							with diverse practitioners, researchers, and allies to pinpoint learnings and act on
							new ideas and insights. Multi-Stakeholder Initiatives Internationally, and National
							Chapters
						</p>
					</div>
				</HorizontalScroller>
			</div>
		</div>
	</section>
	<section class="progress_model_section">
		<div class="container">
			<h3>Our Model for Field-Level Progress</h3>
			<div class="divider divider_green divider_4" />
			<span class="mt_4 display_block"
				>At every stage, we monitor and evaluate what works, when, how and why.</span
			>
			<div class="display_flex align_center justify_evenly mt_5">
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
							<span class="display_block mt_1">evidence based</span>
						</div>
						<div>
							<span class="display_block font_bold">GENERATE</span>
							<span class="display_block mt_1">evidence based</span>
						</div>
					</div>
				</div>
				<div class="display_flex flex_column">
					<ChevronRightIcon width="42" height="42" />
				</div>
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
							<span class="display_block mt_1">evidence based</span>
						</div>
						<div>
							<span class="display_block font_bold">GENERATE</span>
							<span class="display_block mt_1">evidence based</span>
						</div>
					</div>
				</div>
				<div class="display_flex flex_column">
					<ChevronRightIcon width="42" height="42" />
				</div>
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
							<span class="display_block mt_1">evidence based</span>
						</div>
						<div>
							<span class="display_block font_bold">GENERATE</span>
							<span class="display_block mt_1">evidence based</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="featured_section bg_blue_light">
		<div class="container">
			<h3>Featured topics</h3>
			<div class="divider divider_green divider_4" />
			<p class="w_75 mt_4">
				TAI members evolve their priorities in line with the global context and TAI collective
				conversations evolve similarly. We scope out funding opportunities or look back at the
				effectiveness of programming on specific topics that inform member thinking and investment
				choices. We then move on to new topics.
			</p>
			<p class="w_75">
				One current priority is how to strengthen transparency, participation and accountability
				dimensions of responses to the climate crisis. Technical solutions are essential, but we
				know from experience that they are hard to implement effectively without underlying good
				governance. TAI is exploring ways to strengthen climate governance and draw on lessons from
				past governance funding, such as on natural resource management, taxation or fighting
				disinformation.
			</p>
			<div class="px_5 text_center mt_5">
				<h3 class="text_green">
					How can Transparency, Participation and Accountability strengthen climate action?
				</h3>
				<img src={FeaturedImg} class="w_100" alt="" />
			</div>
		</div>
	</section>
	<section class="past_funding_section bg_gray_light">
		<div class="container">
			<h3>Past Funding Exploration</h3>
			<div class="divider divider_white divider_4" />
			<div class="row mt_4">
				<div class="col_4">
					<ArticleItem />
				</div>
				<div class="col_4">
					<ArticleItem />
				</div>
				<div class="col_4">
					<ArticleItem />
				</div>
			</div>
		</div>
	</section>
	<section class="other_groups_section bg_gray_light">
		<div class="container">
			<h3>Working with other groups</h3>
			<div class="divider divider_white divider_4" />
			<p class="w_75 mt_4">
				Transparency, participation and accountability are essential to deliver positive societal
				outcomes, be that a stellar education service, effective regulation of new technologies or
				accessible, affordable renewable energy. Our work is intersectional in its nature and it is
				important we work with those championing change on related issues. That includes partnering
				with other funder networks.
			</p>
			<p class="w_75">
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
	$green_light: map-get($colors, 'green_light');
	$blue: map-get($colors, 'blue');
	$light: map-get($colors, 'light');

	.landing_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
		&__content {
			width: 30vw;
		}
	}

	._6Cs_section {
		position: relative;
		min-height: unset !important;
		._6Cs_wrapper {
			background-color: $green_light;
			border-radius: 15px;
			padding: 2rem;
		}

		._6Cs_item {
			width: 30vw;
			display: block;
			flex-shrink: 0;
			&__count {
				width: 35px;
				height: 35px;
				background-color: $blue;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				color: $green_light;
				font-size: 24px;
			}
			&__text {
				padding-left: calc(35px + 1rem);
			}
		}

		.divider {
			width: 100px;
			margin-left: 0;
		}
	}

	.progress_model_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
		.model_item {
			width: 250px;
			height: 300px;
			display: flex;
			flex-direction: column;
			border-radius: 15px;
			overflow: hidden;
			&_body {
				flex-grow: 1;
			}
		}
	}

	.featured_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
	}
	.past_funding_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
	}
	.other_groups_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
	}
</style>
