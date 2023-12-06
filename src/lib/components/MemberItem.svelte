<script lang="ts">
	import LinkIcon from '$lib/assets/icons/link.svg?component';

	import 'swiper/css';
	import 'swiper/css/pagination';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import type { Member } from '$lib/types/member';

	import { Pagination } from 'swiper';
	import Image from './Image.svelte';

	let selectedTab = 'strategy';
	let showSwipe = false;

	export let data: Member;

	function setCurrentTab(tab: string) {
		selectedTab = tab;
	}

	function toggleSwipe() {
		showSwipe = !showSwipe;
	}
</script>

<div class="member_item">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div class="img_wrapper" on:click={toggleSwipe}>
		<!-- <img src={FordImg} alt="" /> -->
		<Image image={data?.image} width={400} />
	</div>

	<div class="content_wrapper">
		<div class="content_wrapper__slider" class:show={showSwipe}>
			<Swiper modules={[Pagination]} pagination={true}>
				<SwiperSlide>
					<div class="content_wrapper__slider--item">
						<button
							class="btn btn_small mr_3"
							class:btn_blue={selectedTab == 'strategy'}
							on:click={() => setCurrentTab('strategy')}
						>
							STRATEGY
						</button>
						<p>
							Itʼs only when people become aware, have pathways for action, and engage, that
							governments are held in account. Our three interconnected strategies focus on expanded
							participation, equitable resources and powerful engagement.
						</p>
						<a href="/" class="display_flex align_center text_blue_light font_bold"
							>Learn more <LinkIcon class="ml_2" width="24" height="24" style="fill: #736EFF" />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="content_wrapper__slider--item">
						<button
							class="btn btn_small mr_3"
							class:btn_blue={selectedTab == 'project'}
							on:click={() => setCurrentTab('project')}
						>
							FEATURED PROJECT
						</button>
						<p>
							Itʼs only when people become aware, have pathways for action, and engage, that
							governments are held in account. Our three interconnected strategies focus on expanded
							participation, equitable resources and powerful engagement.
						</p>
						<a href="/" class="display_flex align_center text_blue_light font_bold"
							>Learn more <LinkIcon class="ml_2" width="24" style="fill: #736EFF" height="24" />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="content_wrapper__slider--item">
						<button
							class="btn btn_small mr_3"
							class:btn_blue={selectedTab == 'contact'}
							on:click={() => setCurrentTab('contact')}
						>
							CONTACT
						</button>
						<p>
							Itʼs only when people become aware, have pathways for action, and engage, that
							governments are held in account. Our three interconnected strategies focus on expanded
							participation, equitable resources and powerful engagement.
						</p>
						<a href="/" class="display_flex align_center text_blue_light font_bold"
							>Learn more <LinkIcon class="ml_2" width="24" height="24" style="fill: #736EFF" />
						</a>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="content_wrapper__tabs px_5">
			{@html data[selectedTab]}
			<a
				href={data?.url}
				target="blank"
				class="display_flex align_center text_blue_light font_bold mt_auto"
				><small>Learn more </small><LinkIcon
					class="ml_2"
					width="18"
					height="18"
					style="fill: #736EFF"
				/>
			</a>
		</div>
	</div>
</div>

<style lang="scss" scoped>
	$blue: map-get($colors, 'blue');

	$lg: map-get($grid-breakpoints, 'lg');
	$md: map-get($grid-breakpoints, 'md');

	.member_item {
		display: flex;

		@media (max-width: $md) {
			flex-direction: column;
		}
		.text_blue_light:hover {
			color: map-get($colors, "green" );
		}
		.img_wrapper {
			flex-grow: 1;
			background-color: $blue;
			min-width: 400px;
			max-width: 400px;
			height: 100%;
			display: flex;
			border-radius: 25px;
			overflow: hidden;
			position: relative;
			height: 250px;

			:global {
				img {
					width: 100%;
					object-fit: cover;
				}
			}

			@media (max-width: $lg) {
				width: 40%;
				/* min-width: 280px; */
			}

			@media (max-width: $md) {
				min-width: 100%;
				height: 250px;
			}
		}
		.content_wrapper {
			&__slider {
				// display: none;
				--swiper-pagination-color: #c7ccd6;
				display: none;
				opacity: 0;
				max-height: 0;
				overflow: hidden;
				transition: max-height 0.5s ease, opacity 0.3s ease;

				@media (max-width: $md) {
					display: inherit;
				}

				&.show {
					opacity: 1;
					max-height: 100vh;
				}

				&--item {
					margin-top: 2rem;
					background: #e4e8ef;
					padding: 1rem;
					border-radius: 25px;
					margin-bottom: 3rem;
				}
			}
			&__tabs {
				flex-shrink: 1;
				padding-left: 3rem;
				height: 100%;
				display: flex;
				flex-direction: column;
				// padding-bottom: 1rem;

				@media (max-width: $md) {
					display: none !important;
				}

				.btn {
					transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
				}
				.btn.btn_blue:hover {
					color: map-get($colors, 'light');
				}

				a {
					font-size: pxToRem(18);
				}
			}
		}
	}
</style>
