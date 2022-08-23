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
				<span class="divider divider_4 divider_light" />
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
			<h3 class="text_dark">What does TAI Funding look like?</h3>
			<span class="divider divider_4 divider_green my_4" />
			<div class="row">
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
						<span class="funding_item__icon" />
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
				<div class="col_4 display_flex">
					<div class="funding_item ml_auto">
						<span class="funding_item__icon" />
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
						<span class="funding_item__icon" />
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
				<div class="col_4 display_flex">
					<div class="funding_item mx_auto">
						<span class="funding_item__icon" />
						<p>
							<strong>ADVOCATES</strong> partnering with communities to monitor and fight for the maternal
							health services they were promised and deserve
						</p>
					</div>
				</div>
				<div class="col_4 display_flex">
					<div class="funding_item ml_auto">
						<span class="funding_item__icon" />
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
				<div class="col_6">
					<img src={PCImg} alt="" />
				</div>
				<div class="col_6">
					<h3>Funding Data Library</h3>
					<div class="divider divider_green divider_4" />
					<p>
						You can explore data related to over $500 million in active transparency and
						accountability grants in TAI’s member funding database.
					</p>
					<p>
						GRANTMAKERS find peers to engage around new portfolio thinking and new partners you
						might want to connect with.
					</p>
					<p>
						GRANT SEEKERS find out which funders are supporting your issues, or identify new peer
						groups you might want to meet.
					</p>
					<button class="btn btn_outline_green text_dark mt_4">Read More</button>
				</div>
			</div>
		</div>
	</section>
	<section class="why_matters_section">
		<div class="container">
			<h3 class="text_dark">Why it matters</h3>
			<span class="divider divider_4 divider_gray mb_4" />
			<div class="display_flex align_center">
				<span class="w_75">
					<strong>TPA FULL DISCLOSURE</strong> Introducing the people behind funding and practice in
					the world of transparency, participation, and accountability.
				</span>
				<button class="btn btn_outline_gray text_dark ml_auto">See All</button>
			</div>
			<div class="row mt_5">
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
			<h3>Participatory Strategy</h3>
			<div class="divider divider_green divider_4" />
			<p class="mt_4">
				This represents critical causal pathways common to TAI donor members’ theories of change. <br
				/> It is in no way a representation of pathways to change for the TAP field as a whole.
			</p>
			<div class="mt_5">
				<StrategyImg width="100%" height="auto" />
			</div>
		</div>
	</section>
	<ResourcesSection />
	<SubscribeSection />
</div>

<style lang="scss">
	$green: map-get($colors, 'green');
	$blue: map-get($colors, 'blue');
	.landing_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
		&__content {
			width: 30vw;
		}
	}
	.funding_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
		.funding_item {
			&__icon {
				position: absolute;
				top: 3rem;
				left: -25px;
				padding: 0.5rem;
				width: 50px;
				height: 50px;
				border-radius: 50%;
				background-color: $blue;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			width: 90%;
			position: relative;
			border-radius: 25px;
			padding: 2rem 3rem;
			background-color: $green;
		}
	}
	.funding_data_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
	}
	.why_matters_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
	}
	.participatory_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
	}
</style>
