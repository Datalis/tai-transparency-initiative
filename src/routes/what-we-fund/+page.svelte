<script lang="ts">
	import WebIcon from '$lib/assets/icons/funding/1.svg?component';
	import HandsIcon from '$lib/assets/icons/funding/2.svg?component';
	import CogsIcon from '$lib/assets/icons/funding/3.svg?component';
	import SearchIcon from '$lib/assets/icons/funding/4.svg?component';
	import LightBulbIcon from '$lib/assets/icons/funding/5.svg?component';
	import ChartIcon from '$lib/assets/icons/funding/6.svg?component';

	import FundingImg from '$lib/assets/images/funding_data_library.webp';

	import ArticleItem from '$lib/components/ArticleItem.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';

	import 'swiper/css';
	import 'swiper/css/pagination';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination } from 'swiper';
	import PathwaysSection from '$lib/components/PathwaysSection.svelte';
	import type { PageData } from '.svelte-kit/types/src/routes/$types';
	import WhyItMattersSection from '$lib/components/WhyItMattersSection.svelte';

	export let data: PageData;

	$: hero = data?.hero;
	$: resources = data?.resources;
	$: whyItMatters = data?.WhyItMatters;

</script>

<div id="what-we-fund" class="page">
	<section class="landing_section section bg_blue">
		<div class="container">
			<div class="landing_section__content">
				<h1 class="text_green mb_4">What we fund</h1>
				<span class="divider divider_2 divider_light" />
				<p class="mt_4 font_light">
					When TAI started in 2010, there was no established transparency and accountability field.
					The number and capacity of organizations working on these issues has grown fast, many with
					support from TAI members. Today, our members support a broad range of organizations at
					global and local level that work at the intersection of rights and transparency,
					participation, and accountability to advance more just, equal, inclusive, open, and green
					societies.
				</p>
			</div>
		</div>
	</section>
	<section class="funding_section section bg_light">
		<div class="container">
			<h2 class="text_dark">What does TAI Funding look like?</h2>
			<span class="divider divider_2 divider_green my_4" />
			<div class="show_on_md_and_up row mt_5">
				<div class="col_4 col_lg_6 mt_4">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<WebIcon class="web_icon" />
						</span>
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
				<div class="col_4 col_lg_6 mt_4">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<HandsIcon class="hands_icon" />
						</span>
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
				<div class="col_4 col_lg_6 mt_4">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<CogsIcon class="cogs_icon" />
						</span>
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
				<div class="col_4 col_lg_6 mt_4">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<SearchIcon class="search_icon" />
						</span>
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
				<div class="col_4 col_lg_6 mt_4">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<LightBulbIcon class="light_bulb_icon" />
						</span>
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
				<div class="col_4 col_lg_6 mt_4">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon">
							<ChartIcon class="chart_icon" />
						</span>
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
			</div>
			<div class="show_on_md_and_down">
				<Swiper class="slider" pagination={true} modules={[Pagination]}>
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
								<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
								health services they were promised and deserve
							</p>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div class="funding_item mx_auto">
							<span class="funding_item__icon">
								<CogsIcon class="cogs_icon" />
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
								<SearchIcon class="search_icon" />
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
								<LightBulbIcon class="light_bulb_icon" />
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
								<ChartIcon class="chart_icon" />
							</span>
							<p>
								<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
								health services they were promised and deserve
							</p>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	</section>
	<section class="funding_data_section section bg_light">
		<div class="container">
			<div class="row">
				<div class="show_on_md_and_down col col_12">
					<h2>Funding Data Library</h2>
					<div class="divider divider_green divider_2" />
				</div>
				<div class="col col_7 col_md_12">
					<img class="w_100" src={FundingImg} alt="" />
				</div>
				<div class="col col_5 col_md_12">
					<div class="show_on_md_and_up">
						<h2>Funding Data Library</h2>
						<div class="divider divider_green divider_2" />
					</div>
					<p class="mt_4">
						You can explore data related to over $500 million in active transparency and
						accountability grants in TAI’s member funding database.
					</p>
					<p>
						<strong>GRANTMAKERS</strong> find peers to engage around new portfolio thinking and new partners
						you might want to connect with.
					</p>
					<p>
						<strong>GRANT SEEKERS</strong> find out which funders are supporting your issues, or identify
						new peer groups you might want to meet.
					</p>
					<button class="btn btn_outline_green text_dark mt_4">Read More</button>
				</div>
			</div>
		</div>
	</section>
	<WhyItMattersSection data={whyItMatters} />
	<PathwaysSection />
	<ResourcesSection data={resources} />
	<SubscribeSection />
</div>

<style lang="scss">
	$green: #59ebcf;
	$blue: map-get($colors, 'blue');

	$md: map-get($grid-breakpoints, 'md');

	.landing_section {
		// min-height: 100vh;
		&__content {
			width: 42vw;

			@media (max-width: $md) {
				width: 100%;
				margin-top: 30vh;
			}
		}
	}
	.funding_section {
		:global {
			.slider {
				height: 335px;
				--swiper-pagination-color: #7a879f;
				.funding_item {
					margin-top: 35px;
					padding: 1rem !important;
					padding-top: 1.5rem !important;
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

		.row {
			margin: 0;
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
			position: relative;
			border-radius: 15px;
			padding-top: 0.5rem;
			padding-bottom: 0.5rem;
			padding-left: 3rem;
			padding-right: 1rem;
			background-color: $green;

			p {
				letter-spacing: normal;
				font-size: pxToRem(14) !important;
			}
		}
	}

	.funding_data_section {
		@media (max-width: $md) {
			button {
				width: 100%;
			}
		}
	}
	
</style>
