<script>
	import LinkIcon from '$lib/assets/icons/link.svg?component';
	import FordImg from '$lib/assets/images/ford.png';

	import 'swiper/css';
	import 'swiper/css/pagination';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination } from 'swiper';

	let selectedTab = 0;
	let showSwipe = false;

	/**
	 * @param {number} tabIndex
	 */
	function setCurrentTab(tabIndex) {
		selectedTab = tabIndex;
	}

	function toggleSwipe() {
		showSwipe = !showSwipe;
	}
</script>

<div class="member_item">
	<div class="img_wrapper" on:click={toggleSwipe}>
		<img src={FordImg} alt="" />
	</div>

	<div class="content_wrapper">
		<div class="content_wrapper__slider" class:show={showSwipe}>
			<Swiper modules={[Pagination]} pagination={true}>
				<SwiperSlide>
					<div class="content_wrapper__slider--item">
						<button
							class="btn btn_small mr_3"
							class:btn_blue={selectedTab == 0}
							on:click={() => setCurrentTab(0)}
						>
							STRATEGY
						</button>
						<p>
							Itʼs only when people become aware, have pathways for action, and engage, that
							governments are held in account. Our three interconnected strategies focus on expanded
							participation, equitable resources and powerful engagement.
						</p>
						<a href="/" class="display_flex align_center text_dark font_bold"
							>Learn more <LinkIcon class="ml_2" width="24" height="24" />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="content_wrapper__slider--item">
						<button
							class="btn btn_small mr_3"
							class:btn_blue={selectedTab == 0}
							on:click={() => setCurrentTab(0)}
						>
							FEATURED PROJECT
						</button>
						<p>
							Itʼs only when people become aware, have pathways for action, and engage, that
							governments are held in account. Our three interconnected strategies focus on expanded
							participation, equitable resources and powerful engagement.
						</p>
						<a href="/" class="display_flex align_center text_dark font_bold"
							>Learn more <LinkIcon class="ml_2" width="24" height="24" />
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div class="content_wrapper__slider--item">
						<button
							class="btn btn_small mr_3"
							class:btn_blue={selectedTab == 0}
							on:click={() => setCurrentTab(0)}
						>
							CONTACT
						</button>
						<p>
							Itʼs only when people become aware, have pathways for action, and engage, that
							governments are held in account. Our three interconnected strategies focus on expanded
							participation, equitable resources and powerful engagement.
						</p>
						<a href="/" class="display_flex align_center text_dark font_bold"
							>Learn more <LinkIcon class="ml_2" width="24" height="24" />
						</a>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
		<div class="content_wrapper__tabs">
			<div class="display_flex align_center">
				<button
					class="btn btn_small mr_3"
					class:btn_blue={selectedTab == 0}
					on:click={() => setCurrentTab(0)}
				>
					STRATEGY
				</button>
				<button
					class="btn btn_small mr_3"
					class:btn_blue={selectedTab == 1}
					on:click={() => setCurrentTab(1)}
				>
					FEATURED PROJECT
				</button>
				<button
					class="btn btn_small"
					class:btn_blue={selectedTab == 2}
					on:click={() => setCurrentTab(2)}
				>
					CONTACT
				</button>
			</div>
			<p>
				Itʼs only when people become aware, have pathways for action, and engage, that governments
				are held in account. Our three interconnected strategies focus on expanded participation,
				equitable resources and powerful engagement.
			</p>
			<a href="/" class="display_flex align_center text_dark font_bold"
				>Learn more <LinkIcon class="ml_2" width="24" height="24" />
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

		.img_wrapper {
			flex-grow: 1;
			background-color: $blue;

			min-width: 400px;
			height: 100%;
			display: flex;
			border-radius: 25px;
			position: relative;

			@media (max-width: $lg) {
				width: 40%;
				min-width: 280px;
			}

			@media (max-width: $md) {
				min-width: 100%;
				height: 250px;
			}

			img {
				height: 100%;
				width: 100%;
				margin: auto;
				overflow: hidden;
				border-radius: 25px;
				object-fit: cover;
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
				padding-left: 2rem;
				height: 100%;
				display: flex;
				flex-direction: column;
				padding-bottom: 1rem;

				@media (max-width: $md) {
					display: none !important;
				}

				.btn {
					transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
				}

				a {
					font-size: pxToRem(18);
				}
			}
		}
	}
</style>
