<script lang="ts">
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { gsap } from 'gsap/dist/gsap';
	import { onMount } from 'svelte';
	import LinkIcon from '$lib/assets/icons/link.svg?component';
	import Image from './Image.svelte';

	import 'swiper/css';
	import 'swiper/css/pagination';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination } from 'swiper';

	export let data: any = [];

	$: websites = data?.websites || [];

	onMount(() => {
		// console.log('websites', websites)

		let ctx = gsap.context((g: typeof gsap) => {
			gsap.registerPlugin(ScrollTrigger);

			const wrapper = document.querySelector('.kh_section') as HTMLDivElement;
			const container = document.querySelector('.kh_section-container') as HTMLDivElement;
			const containerOffset = container?.offsetLeft;
			const scroller = document.querySelector('.scroller') as HTMLDivElement;

			

			const mm = gsap.matchMedia();

			mm.add("(min-width: 1024px)", () => {
				scroller.style.gridAutoColumns = container?.offsetWidth / 2 - 220 + 'px';
				gsap.to(scroller, {
				x: () => wrapper?.offsetWidth - scroller?.offsetWidth - containerOffset * 2 - 32,
				scrollTrigger: {
					trigger: '.kh_section-container',
					pin: true,
					invalidateOnRefresh: true,
					start: '-50 top',
					end: 'bottom top',
					// markers: true,
					scrub: true
				}
			});
			})

			
		});

		return () => ctx.revert();
	});
</script>

<section id="knowledge-hub" class="kh_section section">
	<div class="kh_section-container container">
		<h2 class="mt_0">{data?.title}</h2>
		<div class="divider divider_blue_light divider_2" />
		<div class="mt_5 display_flex">
			<div class="slider-container">
				<Swiper class="slider" pagination={true} modules={[Pagination]}>
					{#each websites as website}
						<SwiperSlide>
							<div class="scroller_item">
								<a href={website.url} class="image" target="_blank" rel="noopener">
									<!-- <img src={website.image} alt={website.title} /> -->
									<Image image={website.image} width={400} />
								</a>
								<a class="mt_3" href={website.url} target="_blank" rel="noopener">
									<span class="text_dark">{website.title}</span>
								</a>
								<p>{website.description}</p>
								<a
									target="_blank"
									rel="noopener"
									href={website.url}
									class="text_gray display_flex align_center blue_light_text"
									>Read More <LinkIcon
										width={20}
										height={20}
										class="ml_1"
										style="fill: #8f8bff"
									/></a
								>
							</div>
						</SwiperSlide>
					{/each}
				</Swiper>
			</div>
			<div class="scroller">
				{#each websites as website}
					<div class="scroller_item">
						<a href={website.url} class="image" target="_blank" rel="noopener">
							<!-- <img src={website.image} alt={website.title} /> -->
							<Image image={website.image} width={400} />
						</a>
						<a class="mt_3" href={website.url} target="_blank" rel="noopener">
							<span class="text_dark">{website.title}</span>
						</a>
						<p>{website.description}</p>
						<a
							target="_blank"
							rel="noopener"
							href={website.url}
							class="text_gray display_flex align_center blue_light_text"
							>Read More <LinkIcon width={20} height={20} class="ml_1" style="fill: #8f8bff" /></a
						>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');
	.blue_light_text {
		color: map-get($colors, 'blue_light');
	}
	.blue_light_text:hover {
		color: #adaaf3;
	}
	#knowledge-hub {

		@media (max-width: $md) {
			padding-bottom: 0;
		}

		.slider-container {
			overflow: hidden;
			@media (min-width: $md) {
				display: none;
			}

			:global(.swiper-pagination){
				--swiper-pagination-color: #736EFF;
				position: relative;
				margin-top: 1rem;
			}
		}
		.scroller {
			display: grid;
			grid-auto-flow: column;
			grid-auto-columns: 400px;
			gap: 4rem;
			@media (max-width: $md) {
				display: none;
			}
		}
		.scroller_item {
			width: 100%;
			height: 100%;
			display: flex;
			/* justify-content: center; */
			align-items: center;
			display: flex;
			flex-direction: column;
			align-items: start;
			span {
				font-weight: 700;
				font-size: 1rem;
			}
			p {
				font-size: 0.85rem;
				line-height: 28px;
				color: #222222;
			}
			a {
				font-size: 0.85rem;
			}
			.image {
				border-radius: 20px;
				overflow: hidden;
				aspect-ratio: 5/3;
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
	}
</style>
