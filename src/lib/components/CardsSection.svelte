<script lang="ts">
	import CardBg from '$lib/assets/images/home/cards/fondo.webp';
	import Card1Img from '$lib/assets/images/home/cards/1.webp';
	import Card2Img from '$lib/assets/images/home/cards/2.webp';
	import Card3Img from '$lib/assets/images/home/cards/3.webp';


	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';

	let windowWidth: number = 0;

	onMount(() => {
		if (windowWidth > 992) {
			gsap.timeline().from('.cards_section .wrapper', {
				y: '5%',
				scrollTrigger: {
					trigger: '.cards_section',
					pin: true,
					scrub: 1,
					start: 'center center',
					end: 'bottom top'
					// end: 'bottom -=20%'
				}
			});
		}
	});
</script>

<svelte:head>
	
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<section class="cards_section section bg_blue">
	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="col col_4 col_lg_12">
					<div class="card" id="card-1">
						<a class="overlay" href="/what-we-fund">
							<img src={CardBg} alt="" />
							<img class="overlay__img" src={Card1Img} alt="" />
						</a>
						<div class="content">
							<a href="/what-we-fund"><h3 class="text_dark">What we fund</h3></a>
							<div class="divider divider_light divider_1" />
							<div class="content__text">
								<a href="/what-we-fund#funding" class="text_dark display_block"
									>What does TPA funding look like?</a
								>
								<a href="/what-we-fund#funding-data-library" class="text_dark display_block"
									>Funding Data Library</a
								>
								<a href="/what-we-fund#why-it-matters" class="text_dark display_block"
									>Why it matters</a
								>
								<a href="/what-we-fund#pathways-to-change" class="text_dark display_block"
									>Pathways to change</a
								>
							</div>
						</div>
					</div>
				</div>
				<div class="col col_4 col_lg_12">
					<div class="card" id="card-2">
						<a class="overlay" href="/how-we-fund">
							<img src={CardBg} alt="" />
							<img class="overlay__img" src={Card2Img} alt="" />
						</a>
						<div class="content">
							<a href="/how-we-fund">
								<h3 class="text_dark">How we fund</h3>
							</a>
							<div class="divider divider_light divider_1" />
							<div class="content__text">
								<a href="/how-we-fund#partner-support" class="text_dark display_block"
									>Partner Support</a
								>
								<a href="/how-we-fund#founders-exits" class="text_dark display_block"
									>Funder exits</a
								>
								<a href="/how-we-fund#participatory-strategy" class="text_dark display_block"
									>Participatory Strategy</a
								>
								<a href="/how-we-fund#resources" class="text_dark display_block">
									Transparency and Accountability Initiative Resources
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col col_4 col_lg_12">
					<div class="card" id="card-3">
						<a class="overlay" href="/how-we-work">
							<img src={CardBg} alt="" />
							<img class="overlay__img" src={Card3Img} alt="" />
						</a>
						<div class="content">
							<a href="/how-we-work">
								<h3 class="text_dark">How we work</h3>
							</a>
							<div class="divider divider_light divider_1" />
							<div class="content__text">
								<a href="/how-we-work#6cs" class="text_dark display_block"
									>Our 6Cs of funder support</a
								>
								<a href="/how-we-work#progress-model" class="text_dark display_block"
									>Our Model for Field-Level Progress</a
								>
								<a href="/how-we-work#featured-topics" class="text_dark display_block"
									>Featured topics</a
								>
								<a href="/how-we-work#past-funding" class="text_dark display_block"
									>Past Funding Explorations</a
								>
								<a href="/how-we-work#working-with-others" class="text_dark display_block"
									>Working with other groups</a
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	$card-blue: map-get($colors, 'blue');
	$card-green: #59ebcf;
	$md: map-get($grid-breakpoints, 'md');
	.cards_section {
		min-height: 105vh;
		display: flex !important;
		align-items: center;
		justify-content: space-around;
		z-index: 1;
		position: relative;

		@media (max-width: $md) {
			padding-right: 0 !important;
			padding-left: 0 !important;
		}

		.wrapper {
			width: 100%;
			height: 100%;
			max-height: 75vh;

			@media screen and (max-width: $md) {
				max-height: unset;
			}

			.card {
				border: none;
				overflow: hidden;
				padding: 0;
				background: $card-green;
				border-radius: 15px;
				height: calc(100% - pxToRem(20));
				margin: auto;
				position: relative;

				@media (max-width: $md) {
					height: 85vh;
				}

				.overlay,
				.content {
					transition: height 1s cubic-bezier(0.075, 0.82, 0.165, 1);
				}

				.overlay {
					display: block;
					transform-origin: center;
					height: calc(100% - 100px);
					border-bottom-left-radius: 15px;
					border-bottom-right-radius: 15px;
					overflow: hidden;
					position: relative;
					box-shadow: 1px 10px 22px -9px rgba(0,0,0,0.75);
					img {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
					&__img {
						object-fit: cover !important;
						position: absolute;
						left: 0;
						top: 0;
					}
				}

				.content {
					padding-left: 1rem;
					padding-right: 1rem;
					height: 50%;
					display: flex;
					flex-direction: column;
					.divider {
						margin: auto;
						flex-shrink: 0 !important;
						width: 0 !important;
						transition: width 1s cubic-bezier(0.075, 0.82, 0.165, 1);
					}
					&__text {
						flex-grow: 1;
						margin-top: 25px;
						margin-bottom: 25px;
						display: flex;
						flex-direction: column;
						justify-content: space-evenly;
						a {
							font-weight: 400;
							font-size: pxToRem(12);
							&:hover {
								font-weight: 600 !important;
							}
						}
					}
				}
				.content h3 {
					margin: 0;
					line-height: 80px;
					font-weight: 600;
					text-align: center;
					font-size: pxToRem(35);
				}

				@media (hover: hover) {
					&:hover {
						.overlay {
							height: 50%;
						}
						.content .divider {
							width: 100px !important;
						}
					}
				}

				@media (hover: none) {
					.overlay {
						height: 50%;
					}
					.content .divider {
						width: 100px !important;
					}
				}
			}
		}
	}
</style>
