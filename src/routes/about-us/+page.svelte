<script lang="ts">
	import WorldImg from '$lib/assets/images/home/map-about-us.png';
	import EnvisionImg1 from '$lib/assets/images/envision_1.webp';
	import EnvisionImg2 from '$lib/assets/images/envision_2.webp';
	import EnvisionImg3 from '$lib/assets/images/envision_3.webp';
	import MemberItem from '$lib/components/MemberItem.svelte';
	import JoinSection from '$lib/components/JoinSection.svelte';
	import StaffItem from '$lib/components/StaffItem.svelte';
	import type { ActionData, PageData } from './$types';
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
				<p class="text_blue mx_auto w_75">
					TAI connects and leverages the deep expertise and leadership of those who fund programming related to trust, accountability, and inclusion. We provide a space for them to learn from each other and build new thinking and action. Our members come together to strategize, evolve funder practices, and expand the funder ecosystem. TAI helps members serve disadvantaged communities and support their inclusive grantmaking, further enhancing the impact of their efforts. TAI also acts as a bridge with the field, assuring flows of knowledge and exchange on evidence, funding trends, and pain points in the funder ecosystem. Join us!
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
					href="https://taicollaborative.org/tai-strategic-framework-2025-2029"
					target="blank"
					class="btn bg_blue"
				>
					TAI Strategy
				</a>
			</div>
		</div>
	</section>
	<div class="container vission-mission-grid">
		<section class="members_section section">
			<div>
				<h3 class="mb_4">Our Vision</h3>
				<div class="divider divider_blue_light divider_2" />
				<p>
					A just world where trust, accountability, and inclusion are integrated into all systems of
					governance. These are the foundations of a healthy democracy, economy, and planet.
				</p>
			</div>
		</section>
		<section class="members_section section">
			<div>
				<h3 class="mb_4">Our Mission</h3>
				<div class="divider divider_blue_light divider_2" />
				<p>
					We learn, strategize, and collaborate to enhance the impact of participatory governance
					funding.
				</p>
			</div>
		</section>
	</div>
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
		<!-- <div class="container">
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
		</div> -->
	</section>
	<div class="gradient_sm_gray_light">
		<div class="pt_5">
			<JoinSection {form} />
		</div>
		<div class="container">
			<div class="collab_section">
				<h3 class="mt_0 mb_2 text_center">Do you want to know more/ <br /> collaborate with us?</h3>
				<p class="mt_2 mb_0 text_center font_light">
					Explore and download our publishing guidelines and brand assets <br /> from the links provided
					below.
				</p>
				<div class="mt_4 links">
					<a href="#">Editorial Policy</a>
					<!--<a href="">Style Guide</a>-->
					<a
						target="_blank"
						rel="noopener"
						href="https://drive.google.com/drive/folders/1gp1W1GmJUdJlKm3KlHH0yasyKrnFIboj?usp=sharing"
						>Brand Book</a
					>
				</div>
			</div>
		</div>
		<ResourcesSection resources={res} />
	</div>
</div>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');
	/* .green_text {
		color: #00deb3;
	} */

	.w_75 {
		width: auto;
		@media (min-width: $md) {
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

		.container {
			height: calc(100svh - 10rem);
			@media screen and (max-width: $md) {
				height: calc(60svh - 10rem);
			}
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

		.divider {
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

	.vission-mission-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
			grid-template-rows: auto;
			grid-gap: 1rem;
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
		background-color: #73c5c7;
		padding-top: 120px !important;
		padding-bottom: 0 !important;
		@media (max-width: $md) {
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
		background-color: #73c5c7;
		position: relative;
		z-index: 1;
		.divider {
			width: 100% !important;
			margin-top: 0.5rem !important;
			margin-bottom: 0.5rem !important;
		}
	}

	.collab_section {
		background-color: #c7c5ff;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		border-radius: 15px;
		padding-top: 3rem;
		padding-bottom: 3rem;
		margin-top: 3rem;
		margin-bottom: 1rem;

		.links {
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 1rem;
			flex-wrap: wrap;
		}

		.links a {
			padding: 0.65rem 1rem;
			min-width: 200px;
			font-size: 14px;
			border: 1px solid #1f1f24;
			color: #1f1f24;
			border-radius: 50px;
			line-height: 1;
			text-align: center;
			text-transform: uppercase;
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
