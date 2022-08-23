<script>
	import HeaderImg from '$lib/assets/images/header.png';

	import PlaceHolderImg from '$lib/assets/images/placeholder-1.png';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ResourcesSection from '$lib/components/ResourcesSection.svelte';
	import JoinSection from '$lib/components/JoinSection.svelte';
</script>

<div id="home" class="page">
	<section class="landing_section bg_blue">
		<img src={HeaderImg} class="landing_section--bg" alt="" />
		<div class="container h-100">
			<div class="landing_section__content">
				<h1 class="text_green">Who we are?</h1>
				<span class="divider divider_4 divider_light" />
				<p class="mt_4 font_light">
					The Transparency and Accountability Initiative (TAI) is a donor collaborative working
					toward a democratic world where power and resources are more equally distributed; people
					are informed and empowered, governments and the corporate sector are open and responsive,
					and collective action advances the public good
				</p>
				<button class="btn btn_outline_green mt_4">Read More</button>
			</div>
		</div>
	</section>
	<section class="cards_section bg_blue">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="cards_section__card card">
						<div class="cards_section__card--overlay">
							<img src={PlaceHolderImg} alt="" />
						</div>
						<div class="cards_section__card--content">
							<h3 class="text_dark">What we fund</h3>
							<div class="divider divider_light divider_4" />
							<p class="text_dark mb_1">What does TPA funding look like?</p>
							<strong class="text_dark display_block">Funding Data Library</strong>
							<strong class="text_dark display_block">Why it matters</strong>
							<strong class="text_dark display_block">Pathways to change</strong>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="cards_section__card card">
						<div class="cards_section__card--overlay">
							<img src={PlaceHolderImg} alt="" />
						</div>
						<div class="cards_section__card--content">
							<h3 class="text_dark">How we fund</h3>
							<div class="divider divider_light divider_4" />
							<p class="text_dark mb_1">What does TPA funding look like?</p>
							<strong class="text_dark display_block">Funding Data Library</strong>
							<strong class="text_dark display_block">Why it matters</strong>
							<strong class="text_dark display_block">Pathways to change</strong>
						</div>
					</div>
				</div>
				<div class="col">
					<div class="cards_section__card card">
						<div class="cards_section__card--overlay">
							<img src={PlaceHolderImg} alt="" />
						</div>
						<div class="cards_section__card--content">
							<h3 class="text_dark">How we work</h3>
							<div class="divider divider_light divider_4" />
							<p class="text_dark mb_1">What does TPA funding look like?</p>
							<strong class="text_dark display_block">Funding Data Library</strong>
							<strong class="text_dark display_block">Why it matters</strong>
							<strong class="text_dark display_block">Pathways to change</strong>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<JoinSection />
	<ResourcesSection />
	<SubscribeSection />
</div>

<style lang="scss">
	.landing_section {
		min-height: 75vh !important;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		&--bg {
			z-index: 0;
			position: absolute;
			//width: 100vw;
			height: 80vh;
			object-fit: cover;
			max-width: 900px;
			top: 0;
			right: 0;
			image-rendering: optimizeQuality;
			// $xl: map-get($grid-breakpoints, 'xl');
			// $lg: map-get($grid-breakpoints, 'lg');
			// $margin: calc((100vw - $xl) / 2 - 150px);
			// @media (min-width: $xl) {
			// 	right: $margin;
			// }
		}

		&__content {
			height: 100%;
			width: 30vw;
			.divider {
				width: 100px;
				margin-left: 0;
			}

			p {
				line-height: 1.5;
			}
		}
	}

	.cards_section {
		$green: map-get($colors, 'green');
		$blue: map-get($colors, 'blue');
		&__card {
			cursor: pointer;
			border: none;
			height: 500px;
			overflow: hidden;
			padding: 0;
			background-color: $green;
			&:hover &--overlay {
				height: 50%;
			}
			&--overlay {
				transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
				background-color: $blue;
				height: calc(100% - 4rem);
				img {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			&--content {
				padding: 0 2rem;
				h3 {
					margin: 0;
					line-height: 4rem;
				}
				.divider {
					width: 100px;
				}
			}
		}
	}
</style>
