<script>
	import SpeakerIcon from '$lib/assets/icons/funding/1.svg?component';
	import InternetIcon from '$lib/assets/icons/funding/2.svg?component';
	import TargetIcon from '$lib/assets/icons/funding/3.svg?component';
	import SearchIcon from '$lib/assets/icons/funding/4.svg?component';
	import CogsIcon from '$lib/assets/icons/funding/5.svg?component';
	import ChartIcon from '$lib/assets/icons/funding/6.svg?component';

	import PCImg from '$lib/assets/images/funding_data_library.png';
	// import ResourceItem from '$lib/components/ResourceItem.svelte';
	import ArticleItem from '$lib/components/ArticleItem.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';

	// import StrategyImg from '$lib/assets/images/strategy.svg?component';

	import 'swiper/css';
	import 'swiper/css/pagination';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination } from 'swiper';
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
							<SpeakerIcon />
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
							<InternetIcon />
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
							<TargetIcon />
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
							<SearchIcon />
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
							<CogsIcon />
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
							<ChartIcon />
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
								<SpeakerIcon />
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
								<SpeakerIcon />
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
								<SpeakerIcon />
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
								<SpeakerIcon />
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
								<SpeakerIcon />
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
								<SpeakerIcon />
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
					<img class="w_100" src={PCImg} alt="" />
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
	<section class="why_matters_section section">
		<div class="container">
			<h2 class="text_dark mt_0 mb_4">Why it matters</h2>
			<span class="divider divider_2 divider_gray" />
			<div class="row mt_3">
				<span class="col col_8 col_md_12 mt_0">
					<strong>TPA FULL DISCLOSURE</strong> Introducing the people behind funding and practice in
					the world of transparency, participation, and accountability.
				</span>
				<div class="col col_4 col_md_12">
					<button class="btn btn_outline_gray text_dark ml_auto">See All</button>
				</div>
			</div>
			<div class="articles_row row">
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
	<section class="participatory_section section bg_blue_light">
		<div class="container">
			<h2>Participatory Strategy</h2>
			<div class="divider divider_green divider_2 my_4" />
			<p class="mt_4 w_50">
				This represents critical causal pathways common to TAI donor members’ theories of change. <br
				/> It is in no way a representation of pathways to change for the TAP field as a whole.
			</p>
			<div class="strategy_graph">
				<!-- <StrategyImg width="100%" height="auto" /> -->
			</div>
		</div>
	</section>
	<ResourcesSection />
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
				width: 80px;
				height: 80px;
				border-radius: 50%;
				background-color: $blue;
				display: flex;
				align-items: center;
				justify-content: center;

				:global {
					svg path {
						stroke-miterlimit: 1 !important;
						stroke-width: 1.2px !important;
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
	.why_matters_section {
		min-height: 95vh !important;
		background-color: #e4e8ef;
		display: flex !important;
		align-items: center;
		justify-content: center;
		padding-top: 3rem !important;
		.articles_row {
			margin-top: 2rem;
		}
		@media (max-width: $md) {
			button {
				width: 100%;
			}
		}
	}
	.participatory_section {
		min-height: 100vh !important;
		.strategy_graph {
			margin-top: 5rem;
		}
		p {
			font-weight: 300;
		}
	}
</style>
