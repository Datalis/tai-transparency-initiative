<script lang="ts">
	import { onMount } from 'svelte';

	import { gsap } from 'gsap/dist/gsap';

	import 'swiper/css';
	import 'swiper/css/pagination';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination } from 'swiper';

	let _6CsSectionSlider: HTMLElement;

	export let data: any;

	$: items = data.Item || [];

	onMount(() => {
		gsap
			.timeline()
			.to('._6Cs_section', {
				scrollTrigger: {
					trigger: '._6Cs_section',
					pin: true,
					scrub: true,
					start: 'center center',
					end: 'bottom -100%'
				}
			})
			.to('._6Cs_section ._6Cs_wrapper', {
				scrollTrigger: {
					trigger: '._6Cs_section',
					start: 'top bottom',
					end: 'bottom -300%',
					scrub: 0.5
				},
				y: '-5%'
			});

		let parentWidth = _6CsSectionSlider.parentElement?.getBoundingClientRect().width || 0;
		let marginOffset = _6CsSectionSlider.getBoundingClientRect().left;
		let toScroll =
			parentWidth - _6CsSectionSlider.getBoundingClientRect().right + marginOffset * 1.1;

		gsap.timeline().to('._6Cs_section ._6Cs_section_slide', {
			x: toScroll,
			scrollTrigger: {
				trigger: '._6Cs_section',
				scrub: 1,
				start: 'top top',
				end: 'bottom -100%'
			}
		});
	});
</script>

<section id="sixcs" class="_6Cs_section section bg_light show_on_md_and_up">
	<div class="container">
		<div class="_6Cs_wrapper">
			<div class="_6Cs_section_title">
				<h3 class="font_regular mb_4 mt_0 text_light">{data?.title}</h3>
				<div class="divider divider_2 divider_green_light" />
			</div>
			<div class="_6Cs_section_slide" bind:this={_6CsSectionSlider}>
				{#each items as item}
					<div class="_6Cs_item">
						<div class="display_flex align_center">
							<span class="_6Cs_item__count mr_3">{item?.order}</span>
							<span class="_6Cs_item__title text_uppercase font_light text_light"
								>{item?.title}</span
							>
						</div>
						<p class="_6Cs_item__text mt_1 text_light">
							{item?.message}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
<section class="_6Cs_section _6Cs_section__mobile section bg_light show_on_md_and_down">
	<div class="_6Cs_section_title">
		<h2 class=" mb_4 mt_0 text_dark">{data?.title}</h2>
		<div class="divider divider_2 divider_green_light" />
	</div>
	<Swiper class="slider" pagination={true} modules={[Pagination]}>
		{#each items as item}
			<SwiperSlide>
				<div class="_6Cs_item bg_blue_light">
					<span class="_6Cs_item__count">{item?.order}</span>
					<span class="_6Cs_item__title text_uppercase font_bold text_light my_3">{item?.title}</span>
					<p class="_6Cs_item__text text_light">
						{item?.message}
					</p>
				</div>
			</SwiperSlide>
		{/each}
	</Swiper>
</section>

<style lang="scss" scoped>
	$green_light: map-get($colors, 'green_light');
	$blue_light: map-get($colors, 'blue_light');
	$blue: map-get($colors, 'blue');
	$light: map-get($colors, 'light');

	$md: map-get($grid-breakpoints, 'md');
	._6Cs_section {
		position: relative;
		// height: 100vh;
		min-height: 100vh !important;
		z-index: 1;
		> .container {
			// height: 70% !important;
			display: flex;
			align-items: center;
		}

		&__mobile {
			._6Cs_item {
				width: 90% !important;
				margin: auto;
				border-radius: 25px;
				max-width: 100% !important;
				height: 50vh;
				padding: 2rem;
				display: flex !important;
				flex-direction: column;
				justify-content: center;
				margin-bottom: 3rem;
				&__text {
					padding-left: 0 !important;
					margin-top: 0 !important;
				}
			}
		}

		._6Cs_wrapper {
			background-color: $blue_light;
			border-radius: 15px;
			//padding: 2rem;
			max-height: 85vh;
			min-height: 55vh;
			padding-bottom: 100px;
			width: 100%;
			display: flex;
			flex-direction: column;
			overflow: hidden;
		}

		._6Cs_section_title {
			padding: 3rem;
			@media (max-width: $md) {
				padding: 2rem;
			}
		}

		._6Cs_section_slide {
			width: max-content;
			display: flex;
			// flex-grow: 1;
			align-items: flex-start;
			padding-top: 1rem;
			padding-left: 3rem;
			background: url(/src/lib/assets/images/purple_line.svg);
			background-repeat: no-repeat;
			background-size: 110% auto;
			background-position: center;
			background-attachment: local;
			@media (max-width: $md) {
				padding-left: 1rem;
			}
		}

		._6Cs_item + ._6Cs_item {
			margin-left: 3rem;
		}

		._6Cs_item {
			width: 42.7777vw;
			max-width: calc(96vw / 4);
			display: block;
			flex-shrink: 0;

			@media (max-width: $md) {
				width: 90vw;
			}

			&__count {
				width: 60px;
				height: 60px;
				background-color: $green_light;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
				color: $blue_light;
				font-size: pxToRem(38);
				line-height: 1;
				font-weight: 900;
			}
			&__title {
				font-size: pxToRem(24);
				font-weight: 700;
				letter-spacing: 1.75px;
			}
			&__text {
				padding-left: calc(35px + 2.3rem);
				// font-size: 22px;
				font-weight: 400;
				margin-top: 1rem;
			}
		}

		.divider {
			width: 100px;
			margin-left: 0;
		}
	}
</style>
