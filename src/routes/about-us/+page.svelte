<script lang="ts">
	import WorldImg from '$lib/assets/images/home/group_3.webp';
	import LogoIcon from '$lib/assets/images/logo_icon.svg?component';

	import EnvisionImg1 from '$lib/assets/images/envision-1.png';
	import EnvisionImg2 from '$lib/assets/images/envision-2.png';
	import EnvisionImg3 from '$lib/assets/images/envision-3.png';
	import MemberItem from '$lib/components/MemberItem.svelte';
	import JoinSection from '$lib/components/JoinSection.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import StaffItem from '$lib/components/StaffItem.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	$: members = []
	$: staff = []
	$: commitee = []
</script>

<div>
	<section class="landing_section section bg_blue">
		<div class="container">
			<div
				class="wrapper display_flex flex_column align_center justify_center"
				style:background-image="url({WorldImg})"
			>
				<LogoIcon width="72" height="72" />
				<h1 class="text_green mt_4">About Us</h1>
				<div class="divider divider_light divider_2 w_15 mt_4" />
			</div>
		</div>
	</section>
	<section class="envision_section section bg_light">
		<div class="container">
			<h2>We envision a society where</h2>
			<div class="divider divider_green divider_2" />
			<div class="row mt_5">
				<div class="col col_4 col_md_12">
					<div class="envision_section__item display_flex flex_column align_center">
						<img src={EnvisionImg1} alt="" class="w_75" />
						<span class="mt_5 text_center text_dark font_light">
							Citizens are informed and empowered
						</span>
					</div>
				</div>
				<div class="col col_4 col_md_12">
					<div class="envision_section__item display_flex flex_column align_center">
						<img src={EnvisionImg2} alt="" class="w_75" />
						<span class="mt_5 text_center text_dark font_light">
							Citizens are informed and empowered
						</span>
					</div>
				</div>
				<div class="col col_4 col_md_12">
					<div class="envision_section__item display_flex flex_column align_center">
						<img src={EnvisionImg3} alt="" class="w_75" />
						<span class="mt_5 text_center text_dark font_light">
							Citizens are informed and empowered
						</span>
					</div>
				</div>
			</div>
			<div class="text_center mt_5">
				<button class="btn btn_outline_green text_dark"> Read More </button>
			</div>
		</div>
	</section>
	<section class="members_section section bg_gray">
		<div class="container">
			<h2 class="mb_4">Our members</h2>
			<div class="divider divider_green divider_2" />
			<p class="mt_4">
				Our members - both private foundations and public funders - recognize that governance <br />
				challenges are complex and cross-cutting. They warrant a collaborative approach. TAI donors
				<br />
				work together to strengthen accountability around the world. Learn more about each member
				<br />
				below.
			</p>
			<div class="member_list mt_4 display_flex flex_column">
				<!-- <MemberItem />
				<div class="divider divider_blue divider_2 my_4" />
				<MemberItem />
				<div class="divider divider_blue divider_2 my_4" />
				<MemberItem /> -->
				{#each members as member}
					<MemberItem data={member} />
					<div class="divider divider_blue divider_2 my_5" />
				{/each}
			</div>
		</div>
	</section>
	<section class="team_section section bg_light">
		<div class="container">
			<h3 class="">Our Team</h3>
			<div class="divider divider_green divider_2" />
			<p class="mt_4">
				TAIʼs small and nimble team helps donors identify new opportunities for <br />
				collaboration, supports design of out-of-the-box solutions and helps <br />
				produce and share knowledge.
			</p>
			<div class="staff_list mt_4">
				<h4 class="mb_4">Staff</h4>
				{#each staff as staffItem}
					<div class="divider divider_blue divider_2" />
					<StaffItem data={staffItem} />
				{/each}

				<!-- <div class="divider divider_blue divider_2" />
				<StaffItem />
				<div class="divider divider_blue divider_2" />
				<StaffItem /> -->
			</div>
		</div>
	</section>
	<section class="committee_section section bg_panel">
		<div class="container">
			<div class="committee_list mt_4">
				<h4 class="mb_4 mt_4">Steering Committee</h4>
				{#each commitee as commiteeItem}
					<div class="divider divider_blue divider_2" />
					<StaffItem data={commiteeItem} />
				{/each}

				<!-- <div class="divider divider_blue divider_2" />
				<StaffItem />
				<div class="divider divider_blue divider_2" />
				<StaffItem /> -->
			</div>
		</div>
	</section>
	<JoinSection />
	<SubscribeSection />
</div>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');

	.landing_section {
		padding: 0 !important;
		height: 400px;
		min-height: unset !important;
		position: relative;
		z-index: 1;
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
	.envision_section {
		min-height: 100vh;
		position: relative;
		z-index: 1;

		&__item {
			max-width: 300px;
			margin: auto;
		}

		@media (max-width: $md) {
			button {
				width: 100%;
			}
		}
	}
	.members_section {
		position: relative;
		z-index: 1;
		.member_list {
			margin-top: 3rem;
			margin-bottom: 3rem;
			.divider {
				width: 100% !important;
			}
		}
	}
	.team_section {
		position: relative;
		z-index: 1;
		.staff_list {
			.divider {
				width: 100% !important;
				margin-top: 0.5rem !important;
				margin-bottom: 0.5rem !important;
			}
		}
	}
	.committee_section {
		position: relative;
		z-index: 1;
		.divider {
			width: 100% !important;
			margin-top: 0.5rem !important;
			margin-bottom: 0.5rem !important;
		}
	}
</style>
