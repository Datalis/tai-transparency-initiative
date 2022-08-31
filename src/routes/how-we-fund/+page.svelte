<script>
	import PartnerImg1 from '$lib/assets/images/partner1.png';
	import PartnerImg2 from '$lib/assets/images/partner2.png';
	import PartnerImg3 from '$lib/assets/images/partner3.png';

	import LaptopImg from '$lib/assets/images/laptop.png';

	import PartnerDecorImg from '$lib/assets/images/decor1.png';
	import ResourceItem from '$lib/components/ResourceItem.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';
	import HorizontalScroller from '$lib/components/HorizontalScroller.svelte';
</script>

<div id="how-we-fund" class="page">
	<section class="landing_section bg_blue">
		<div class="container h-100">
			<div class="landing_section__content">
				<h1 class="text_green">How we fund</h1>
				<span class="divider divider_4 divider_light" />
				<p class="mt_4">
					TAI offers a platform for candid, constructive exchange around grantmaking practices. Our
					members learn from each other and hold each other accountable to be more inclusive,
					equitable, innovative, and effective grantmakers.
				</p>
				<p>
					We supports partners to harness transparency, participation and accountability for the
					public good, and these are also our values we want to live by.
				</p>
			</div>
		</div>
	</section>
	<section class="partners_section">
		<!-- <img class="partners_section--dec" src={PartnerDecorImg} alt="" /> -->
		<div class="container">
			<h5 class="font_bold mb_4">Partner support</h5>
			<div class="divider divider_4 divider_green" />
			<p>
				We help donor members work together to improve grant making practice and <br />
				boost collective impact. Specifically, TAI aims to accomplish the following:
			</p>
		</div>
		<HorizontalScroller height={400} variant="green">
			<div class="partners_section__item">
				<img src={PartnerImg1} alt="" />
				<p class="mt_5">
					Enhance diversity, equity and inclusion practices in our own foundations and in our
					partners
				</p>
			</div>
			<div class="partners_section__item">
				<img src={PartnerImg1} alt="" />
				<p class="mt_5">
					Enhance diversity, equity and inclusion practices in our own foundations and in our
					partners
				</p>
			</div>
			<div class="partners_section__item">
				<img src={PartnerImg1} alt="" />
				<p class="mt_5">
					Enhance diversity, equity and inclusion practices in our own foundations and in our
					partners
				</p>
			</div>
			<div class="partners_section__item">
				<img src={PartnerImg1} alt="" />
				<p class="mt_5">
					Enhance diversity, equity and inclusion practices in our own foundations and in our
					partners
				</p>
			</div>
			<div class="partners_section__item">
				<img src={PartnerImg1} alt="" />
				<p class="mt_5">
					Enhance diversity, equity and inclusion practices in our own foundations and in our
					partners
				</p>
			</div>
			<div class="partners_section__item">
				<img src={PartnerImg1} alt="" />
				<p class="mt_5">
					Enhance diversity, equity and inclusion practices in our own foundations and in our
					partners
				</p>
			</div>
		</HorizontalScroller>
	</section>
	<section class="founders_section">
		<div class="container">
			<h3>Funder exits</h3>
			<div class="divider divider_green divider_4" />
			<p class="mt_4 w_75">
				Funders regularly adapt their strategies, which often prompt investment in new issue areas,
				but also the tough decision to scale back or fully wind down funding for existing
				portfolios. These funding “exits” are a painful reality, especially for impacted grantees,
				but also other funders of that field. However, they can be managed in responsible ways.
			</p>
			<p class="w_75">
				TAI members use our platform to regularly discuss how to handle exits, to encourage good
				practice, and to manage the knock on effects for a field. We have been trying to document
				learnings as in this blog. Are you planning a funding exit? Interested in how other funder
				approaches? Donʼt hesitate to get in touch.
			</p>
		</div>
	</section>
	<section class="participatory_section bg_gray">
		<div class="container">
			<div class="row">
				<div class="col col_4">
					<h5 class="font_bold mb_4">Participatory Strategy</h5>
					<div class="divider divider_4 divider_green" />
					<p class="mt_4">
						TAI offers a platform for candid, constructive exchange around grantmaking practices.
						Our members learn from each other and hold each other accountable to be more inclusive,
						equitable, innovative, and effective grantmakers.
					</p>
					<button class="btn btn_green btn_bordered mt_5"> Learn more </button>
				</div>
				<div class="col col_8">
					<img src={LaptopImg} alt="" />
				</div>
			</div>
		</div>
	</section>
	<ResourcesSection />
	<SubscribeSection />
</div>

<style lang="scss">
	.landing_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
		&__content {
			width: 30vw;
		}
	}
	.partners_section {
		position: relative;
		&__item {
			min-width: 33.333%;
			height: 400px;
			display: flex;
			flex-direction: column;
			align-items: center;
			img {
				height: 60%;
				width: 100%;
				object-fit: cover;
				object-position: center;
			}
		}

		&__item + &__item {
			margin-left: 4rem;
			//margin-right: 2rem;
		}
	}
</style>
