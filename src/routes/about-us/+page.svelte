<script lang="ts">
	import WorldImg from '$lib/assets/images/home/map-about-us.png';
	import LogoIcon from '$lib/assets/images/logo-footer.svg?component';

	import EnvisionImg1 from '$lib/assets/images/envision_1.webp';
	import EnvisionImg2 from '$lib/assets/images/envision_2.webp';
	import EnvisionImg3 from '$lib/assets/images/envision_3.webp';
	import MemberItem from '$lib/components/MemberItem.svelte';
	import JoinSection from '$lib/components/JoinSection.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import StaffItem from '$lib/components/StaffItem.svelte';
	import type { ActionData, PageData } from './$types';
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import gsap from 'gsap/dist/gsap';
	import Seo from '$lib/components/Seo.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';


	export let data: PageData;
	export let form: ActionData;

	let activeStaff = -1;
	let activeCommittee = -1;

	$: res = data.resources || [];

	$: members = data?.Members;
	$: memberList = members?.MemberItem || [];

	$: staff = data?.Staff;
	$: staffList = staff.StaffItem || [];

	$: commitee = data?.SteeringCommittee;
	$: commiteeList = commitee?.StaffItem || [];

	// onMount(() => {
	// 	gsap.timeline().to(window, {
	// 		scrollTo: $page.url.hash,
	// 		duration: 0.5
	// 	});
	// });
</script>

<svelte:head>
	<Seo title="Trust, Accountability and Inclusion Collaborative - About Us" url="/about-us" />
</svelte:head>

<div class="about_us_page page">
	<section class="landing_section section gradient_lg_gray_light">
		<div class="container">
			<img class="wrapper_bg" alt="" src={WorldImg} />
			<div class="wrapper display_flex flex_column align_center justify_center">
				<h1 class="text_blue mt_4 mb_3">About Us</h1>
				<p class="text_blue text_center mx_auto w_75">
					The Trust, Accountability, and Inclusion (TAI) Collaborative - Funders for Participatory Governance is a platform for funder learning and action in support of participation, openness and accountability around the world. Our members have over USD500 million in active grants in support of those goals. Join us!
				</p>
			</div>
		</div>
	</section>
	<section id="goals" class="envision_section section">
		<div class="container">
			<h3 class="text_dark text_center">We envision a society where</h3>
			<div class="divider divider_blue_light divider_2" />
			<div class="row mt_5">
				<div class="col col_4 col_md_12">
					<div class="envision_section__item display_flex flex_column align_center">
						<img src={EnvisionImg1} alt="" class="w_75" />
						<span class="mt_5 text_center text_dark font_light">
							People are informed and empowered
						</span>
					</div>
				</div>
				<div class="col col_4 col_md_12">
					<div class="envision_section__item display_flex flex_column align_center">
						<img src={EnvisionImg2} alt="" class="w_75" />
						<span class="mt_5 text_center text_dark font_light">
							Governments are open and responsive
						</span>
					</div>
				</div>
				<div class="col col_4 col_md_12">
					<div class="envision_section__item display_flex flex_column align_center">
						<img src={EnvisionImg3} alt="" class="w_75" />
						<span class="mt_5 text_center text_dark font_light">
							Public good is enhanced through civic engagement and collective action
						</span>
					</div>
				</div>
			</div>
			<div class="text_center mt_5">
				<a
					href="https://api.tai.datalis.dev/uploads/tai_strategy_document_2020_2024_45f7b393f2.pdf"
					target="blank"
					class="btn bg_blue"
				>
					TAI Strategy
				</a>
			</div>
		</div>
	</section>
	<section id="members" class="members_section section">
		<div class="container">
			<h3 class="mb_4">{members.title}</h3>
			<div class="divider divider_blue_light divider_2" />
			{@html members.message}
			<div class="member_list mt_4 display_flex flex_column">
				{#each memberList as member}
					<div class="divider divider_blue divider_1 my_5" />
					<MemberItem data={member} />
				{/each}
			</div>
		</div>
	</section>
	<section id="team" class="team_section section">
		<div class="container">
			<h3 class="mt_0">{staff.title}</h3>
			<div class="divider divider_white divider_2" />
			<p class="mt_4 w_75">
				{@html staff.message}
			</p>
			<div class="staff_list mt_4">
				<h4 class="mb_4">Staff</h4>
				{#each staffList as staffItem, index}
					<div class="divider divider_dark divider_1" />
					<StaffItem
						data={staffItem}
						on:toggle={() => (index == activeStaff ? (activeStaff = -1) : (activeStaff = index))}
						isExpanded={index == activeStaff}
					/>
				{/each}
			</div>
		</div>
	</section>
	<section class="committee_section section">
		<div class="container">
			<div class="committee_list mt_4">
				<h4 class="mb_4 mt_4 text_dark">Steering Committee</h4>
				{#each commiteeList as commiteeItem, index}
					<div class="divider divider_dark divider_1" />
					<StaffItem
						data={commiteeItem}
						on:toggle={() =>
							index == activeCommittee ? (activeCommittee = -1) : (activeCommittee = index)}
						isExpanded={index == activeCommittee}
					/>
				{/each}
			</div>
		</div>
	</section>
	<div class="gradient_sm_gray_light">
		<JoinSection {form} />
		<div class="purple_subscribe">
			<SubscribeSection />
		</div>
		<ResourcesSection resources={res} />
	</div>

</div>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');
	/* .green_text {
		color: #00deb3;
	} */

	.w_75{
		width: auto;
		@media (min-width: $md){
			width: 75%;
		}
	}
	.landing_section {
		min-height: 100vh;

		position: relative;
		z-index: 1;
		padding-top: 100px !important;
		padding-bottom: 600vh !important;
		margin-bottom: -600vh;
		display: flex !important;
		flex-direction: column !important;
		justify-content: center;
		height: fit-content;

		.container{
			height: calc(100svh - 10rem);
			position: relative;
			.wrapper_bg {
				z-index: -1;
				position: absolute;
				top: 0;
				bottom: 0;
				left: 0;
				right: 0;

				object-fit: contain;
				margin: auto;
				height: calc(100vh - 10rem);
				max-height: 30rem;
			}
			.wrapper {
				//height: calc(100vh - 4rem);
				height: 100%;
				margin-block: auto;
				//max-height: 30rem;
				//background-image: "lib/assets/images/home/group_3.webp";

				//background-repeat: no-repeat;
				//background-position: center;
				//background-size: contain;
			}
		}
	}
	.envision_section {
		min-height: 100svh;
		position: relative;
		z-index: 1;

		.divider{
			margin-inline: auto;
		}

		&__item {
			max-width: 300px;
			margin: auto;
			img {
				height: 300px;
				width: auto;
				object-fit: contain;
			}
		}

		@media (max-width: $md) {
			a {
				width: 100%;
			}
		}
	}
	.members_section {
		background: white;
		position: relative;
		z-index: 1;
		padding-bottom: 0 !important;
		.member_list {
			margin-top: 3rem;
			// margin-bottom: 3rem;
			padding-bottom: 120px;
			.divider {
				width: 100% !important;
			}
			.divider.divider_blue {
				opacity: 0.5;
			}

		}

	}
	.team_section {
		background-color: #73C5C7;
		padding-top: 120px !important;
		padding-bottom: 0 !important;
		@media (max-width: $md){
			padding-top: 2rem !important;
		}

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
		background-color: #73C5C7;
		position: relative;
		z-index: 1;
		.divider {
			width: 100% !important;
			margin-top: 0.5rem !important;
			margin-bottom: 0.5rem !important;
		}
	}

	.purple_subscribe{
		:global{
			.subscribe_section__panel{
				background-color: map-get($colors, "blue_light" ) !important;
			}
			h2, span, input{
				color: white;
				border-color: white;
			}
			button{
				color: map-get($colors, "blue_light" );
				background-color: map-get($colors, "dark" );
			}

		}
	}

	.about_us_page {
		:global {
			.join_section {
				//background-color: map-get($colors, 'light') !important;
				.divider {
					background-color: map-get($colors, 'green');
				}
			}
		}
	}
</style>
