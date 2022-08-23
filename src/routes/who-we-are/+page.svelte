<script>
	import { Accordion, AccordionItem } from 'svelte-collapsible';

	import WorldImg from '$lib/assets/images/world.png';
	import LogoIcon from '$lib/assets/images/logo_icon.svg?component';

	import EnvisionImg1 from '$lib/assets/images/envision-1.png';
	import EnvisionImg2 from '$lib/assets/images/envision-2.png';
	import EnvisionImg3 from '$lib/assets/images/envision-3.png';
	import MemberItem from '$lib/components/MemberItem.svelte';
	import JoinSection from '$lib/components/JoinSection.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
</script>

<div>
	<section class="landing_section bg_blue">
		<div class="container">
			<div
				class="wrapper display_flex flex_column align_center justify_center"
				style:background-image="url({WorldImg})"
			>
				<LogoIcon width="72" height="72" />
				<h1 class="text_green mt_4">Who we are?</h1>
				<div class="divider divider_light divider_4 w_15 mt_4" />
			</div>
		</div>
	</section>
	<section class="envision_section">
		<div class="container">
			<h3>We envision a society where</h3>
			<div class="divider divider_green divider_4" />
			<div class="row mt_4">
				<div class="col_4">
					<div class="display_flex flex_column align_center">
						<img src={EnvisionImg1} alt="" class="h_50 w_50" />
						<span class="mt_4 text_dark font_light"> Citizens are informed and empowered </span>
					</div>
				</div>
				<div class="col_4">
					<div class="display_flex flex_column align_center">
						<img src={EnvisionImg2} alt="" class="h_50 w_50" />
						<span class="mt_4 text_dark font_light"> Citizens are informed and empowered </span>
					</div>
				</div>
				<div class="col_4">
					<div class="display_flex flex_column align_center">
						<img src={EnvisionImg3} alt="" class="h_50 w_50" />
						<span class="mt_4 text_dark font_light"> Citizens are informed and empowered </span>
					</div>
				</div>
			</div>
			<div class="text_center mt_5">
				<button class="btn btn_outline_green text_dark"> Read More </button>
			</div>
		</div>
	</section>
	<section class="members_section bg_gray">
		<div class="container">
			<h3>Our members</h3>
			<div class="divider divider_green divider_4" />
			<p class="mt_4">
				Our members - both private foundations and public funders - recognize that governance <br />
				challenges are complex and cross-cutting. They warrant a collaborative approach. TAI donors
				<br />
				work together to strengthen accountability around the world. Learn more about each member
				<br />
				below.
			</p>
			<div class="member_list mt_4 display_flex flex_column">
				<MemberItem />
				<div class="divider divider_blue divider_4 my_4" />
			</div>
		</div>
	</section>
	<section class="team_section">
		<div class="container">
			<h3 class="">Our Team</h3>
			<div class="divider divider_green divider_4" />
			<p class="mt_4">
				TAIʼs small and nimble team helps donors identify new opportunities for <br />
				collaboration, supports design of out-of-the-box solutions and helps <br />
				produce and share knowledge.
			</p>
			<div class="staff_list mt_4">
				<h5 class="mb_2">Staff</h5>
				<div class="divider divider_blue divider_4" />
				<Accordion>
					<AccordionItem>
						<div slot="header" class="" />
						<div slot="body" class="" />
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	</section>
	<JoinSection backgroundClass="none" />
	<SubscribeSection />
</div>

<style lang="scss">
	section .divider {
		width: 100px;
		margin-left: 0;
	}
	.landing_section {
		padding: 0 !important;
		height: 400px;
		min-height: unset !important;
		.container {
			height: 400px;
		}
		.wrapper {
			height: 100%;
			background-repeat: no-repeat;
			background-position: center;
			background-size: contain;
		}
	}
	.members_section {
		.member_list {
			.divider {
				width: 100% !important;
			}
		}
	}
	.team_section {
		.staff_list {
			.divider {
				width: 100% !important;
			}
		}
	}
</style>
