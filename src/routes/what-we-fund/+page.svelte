<script>
	import SpeakerIcon from '$lib/assets/icons/speaker.svg?component';
	import InternetIcon from '$lib/assets/icons/internet.svg?component';
	import TargetIcon from '$lib/assets/icons/target.svg?component';
	import SearchIcon from '$lib/assets/icons/search.svg?component';
	import CogsIcon from '$lib/assets/icons/cog.svg?component';
	import ChartIcon from '$lib/assets/icons/chart.svg?component';

	import PCImg from '$lib/assets/images/pc.png';
	import ResourceItem from '$lib/components/ResourceItem.svelte';
	import ArticleItem from '$lib/components/ArticleItem.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';

	import StrategyImg from '$lib/assets/images/strategy.svg?component';
</script>

<div id="what-we-fund" class="page">
	<section id="" class="landing_section bg_blue">
		<div class="container h-100">
			<div class="landing_section__content">
				<h1 class="text_green">What we fund</h1>
				<span class="divider divider_2 divider_light" />
				<p class="mt_4">
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
	<section class="funding_section">
		<div class="container">
			<h2 class="text_dark">What does TAI Funding look like?</h2>
			<span class="divider divider_2 divider_green my_4" />
			<div class="row mt_5">
				<div class="col_4">
					<div class="funding_item">
						<span class="funding_item__icon">
							<SpeakerIcon />
						</span>
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
				<div class="col_4 display_flex">
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
				<div class="col_4 display_flex">
					<div class="funding_item ml_auto">
						<span class="funding_item__icon">
							<TargetIcon class="ml_1 mb_1" />
						</span>
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
			</div>
			<div class="row mt_4">
				<div class="col_4">
					<div class="funding_item">
						<span class="funding_item__icon">
							<SearchIcon />
						</span>
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
				<div class="col_4 display_flex">
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
				<div class="col_4 display_flex">
					<div class="funding_item ml_auto">
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
		</div>
	</section>
	<section class="funding_data_section">
		<div class="container">
			<div class="row">
				<div class="col_7">
					<img class="w_100" src={PCImg} alt="" />
				</div>
				<div class="col_5 mt_5">
					<h2>Funding Data Library</h2>
					<div class="divider divider_green divider_2" />
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
	<section class="why_matters_section">
		<div class="container">
			<h2 class="text_dark mt_0">Why it matters</h2>
			<span class="divider divider_2 divider_gray mb_4" />
			<div class="display_flex align_center">
				<span class="w_75">
					<strong>TPA FULL DISCLOSURE</strong> Introducing the people behind funding and practice in
					the world of transparency, participation, and accountability.
				</span>
				<button class="btn btn_outline_gray text_dark ml_auto">See All</button>
			</div>
			<div class="articles_row row">
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
	<section class="participatory_section bg_blue_light">
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
	.landing_section {
		&__content {
			width: 42vw;
			p {
				font-weight: 300;
				font-size: 22px;
				line-height: 35px;
			}
		}
	}
	.funding_section {
		.funding_item {
			&__icon {
				position: absolute;
				top: 2rem;
				left: -35px;
				padding: 0.5rem;
				width: 70px;
				height: 70px;
				border-radius: 50%;
				background-color: $blue;
				display: flex;
				align-items: center;
				justify-content: center;
				font-size: 22px;
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
				font-weight: 300;
				font-size: 22px;
			}
		}
	}
	.why_matters_section {
		min-height: 95vh !important;
		background-color: #e4e8ef;
		display: flex !important;
		align-items: center;
		justify-content: center;
		.articles_row {
			margin-top: 3rem;
		}
	}
	.participatory_section {
		min-height: 100vh !important;
		.strategy_graph {
			margin-top: 5rem;
		}
		p {
			font-size: 22px;
			line-height: 32px;
			font-weight: 300;
		}
	}
</style>
