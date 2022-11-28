<script lang="ts">
	import WorldImg from '$lib/assets/images/home/group_3.webp';
	import LogoIcon from '$lib/assets/images/logo_icon.svg?component';

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

	export let data: PageData;
	export let form: ActionData;

	let activeStaff = -1;
	let activeCommittee = -1;

	$: members = data?.Members;
	$: memberList = members?.MemberItem || [];

	$: staff = data?.Staff;
	$: staffList = staff.StaffItem || [];

	$: commitee = data?.SteeringCommittee;
	$: commiteeList = commitee?.StaffItem || [];

	onMount(() => {
		gsap.timeline().to(window, {
			scrollTo: $page.url.hash,
			duration: 0.5
		});
	});
</script>

<div class="about_us_page page">
	<section class="landing_section section bg_blue">
		<div class="container">
			<img class="wrapper_bg" alt="" src={WorldImg} />
			<div class="wrapper display_flex flex_column align_center justify_center">
				<LogoIcon width="72" height="72" />
				<h1 class="text_green mt_4">About Us</h1>
				<div class="divider divider_light divider_2 w_15 mt_4" />
			</div>
		</div>
	</section>
	<section id="goals" class="envision_section section bg_light">
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
							Governments are open and responsive
						</span>
					</div>
				</div>
				<div class="col col_4 col_md_12">
					<div class="envision_section__item display_flex flex_column align_center">
						<img src={EnvisionImg3} alt="" class="w_75" />
						<span class="mt_5 text_center text_dark font_light">
							Public good is enhanced through civic engagement
						</span>
					</div>
				</div>
			</div>
			<div class="text_center mt_5">
				<a href="https://api.tai.datalis.dev/uploads/tai_strategy_document_2020_2024_45f7b393f2.pdf" target="blank" class="btn btn_outline_green text_dark"> Read More </a>
			</div>
		</div>
	</section>
	<section id="members" class="members_section section">
		<div class="container">
			<h3 class="mb_4">{members.title}</h3>
			<div class="divider divider_green divider_2" />
			<p class="mt_4 w_75">
				{@html members.message}
			</p>
			<div class="member_list mt_4 display_flex flex_column">
				{#each memberList as member}
					<MemberItem data={member} />
					<div class="divider divider_blue divider_1 my_5" />
				{/each}
			</div>
		</div>
	</section>
	<section id="team" class="team_section section bg_light">
		<div class="container">
			<h3 class="mt_0">{staff.title}</h3>
			<div class="divider divider_green divider_2" />
			<p class="mt_4 w_75">
				{@html staff.message}
			</p>
			<div class="staff_list mt_4">
				<h4 class="mb_4">Staff</h4>
				{#each staffList as staffItem, index}
					<div class="divider divider_blue divider_1" />
					<StaffItem
						data={staffItem}
						on:toggle={() => (index == activeStaff ? (activeStaff = -1) : (activeStaff = index))}
						isExpanded={index == activeStaff}
					/>
				{/each}
			</div>
		</div>
	</section>
	<section class="committee_section section bg_panel">
		<div class="container">
			<div class="committee_list mt_4">
				<h4 class="mb_4 mt_4">Steering Committee</h4>
				{#each commiteeList as commiteeItem, index}
					<div class="divider divider_blue divider_1" />
					<StaffItem
						data={commiteeItem}
						on:toggle={() => (index == activeCommittee ? (activeCommittee = -1) : (activeCommittee = index))}
						isExpanded={index == activeCommittee}
					/>
				{/each}
			</div>
		</div>
	</section>
	<JoinSection {form} />
	<SubscribeSection />
</div>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');

	.landing_section {
		padding: 0 !important;
		min-height: 100vh;
		position: relative;
		z-index: 1;
		padding-top: 100px !important;
		display: flex !important;
		flex-direction: column !important;
		justify-content: center;
		.wrapper_bg {
			z-index: -1;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			object-fit: contain;
			margin: auto;
			width: 70%;
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
		background: #f2f4f7;
		position: relative;
		z-index: 1;
		padding-bottom: 0 !important;
		.member_list {
			margin-top: 3rem;
			// margin-bottom: 3rem;
			.divider {
				width: 100% !important;
			}
			.divider.divider_blue {
				opacity: 0.5;
			}
		}
	}
	.team_section {
		padding-top: 2rem !important;
		position: relative;
		z-index: 1;
		.staff_list {
			.divider {
				width: 100% !important;
				margin-top: 0.5rem !important;
				margin-bottom: 0.5rem !important;
			}
			.divider.divider_blue {
				opacity: 0.5;
			}
		}
	}
	.committee_section {
		background-color: #f2f4f7;
		position: relative;
		z-index: 1;
		.divider {
			width: 100% !important;
			margin-top: 0.5rem !important;
			margin-bottom: 0.5rem !important;
		}
		.divider.divider_blue {
			opacity: 0.5;
		}
	}
	.about_us_page {
		:global {
			.join_section {
				background-color: map-get($colors, 'light') !important;
				.divider {
					background-color: map-get($colors, 'green');
				}
			}
		}
	}
</style>
