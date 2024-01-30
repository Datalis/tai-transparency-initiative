<script lang="ts">
	import { onMount } from 'svelte';
	import ConnectingDots from './ConnectingDots.svelte';
	import Image from './Image.svelte';

	export let data: any[] = [];

	onMount(() => {
		console.log(data);
	});
</script>

<section id="featured-topics" class="featured_topics_section section bg_white">
	<div class="connecting_dots">
		<ConnectingDots
			height={150}
			dotSpeed={0.1}
			dotRadius={4}
			dotCount={36}
			dotConnectionDistance={140}
			color={{ r: 229, g: 227, b: 255 }}
		/>
	</div>
	<div class="connecting_dots">
		<ConnectingDots
			height={200}
			dotSpeed={1}
			dotRadius={5}
			dotCount={16}
			dotConnectionDistance={230}
			color={{ r: 199, g: 197, b: 255 }}
		/>
	</div>
	<div class="container show_on_md_and_up">
		<h2 class="mt_0">Harnessing Trust, Accountability and Inclusion to Tackle Global Challenges</h2>
		<div class="divider divider_blue_light divider_2" />
		<div class="topics mt_4 mb_5">
			<div class="circles">
				<svg viewBox="0 0 200 200" id="rotating">
					<defs>
						<path
							id="circle1-path"
							d="
                            M 0,100
                            a 100 100 0 0 1 200 0
                            a 100 100 0 0 1 -200 0
                            "
						>
						</path>
						<!-- <path id="circle" d="M0,100 a 30 -30 0 1 0 190, 0 Z" /> -->
					</defs>
					<text dominant-baseline="hanging" textLength="620px">
						<textPath
							textLength="620px"
							spacing="auto"
							alignment-baseline="hanging"
							startOffset="0%"
							font-size="12px"
							xlink:href="#circle1-path"
							class="text"
						>
							Intersectional & interconnected locally led movement with voice at global level ·
						</textPath>
					</text>
				</svg>
				<svg id="circle2" viewBox="0 0 150 150">
					<defs>
						<path
							id="circle2-path"
							d="M 0, 75
                            a 75 75 0 0 1 150 0
                            a 75 75 0 0 1 -150 0
                            "
						>
						</path>
					</defs>
					<text dominant-baseline="text-before-edge" >
						<textPath
							startOffset="5%"
							spacing="auto"
							alignment-baseline="before-edge"
							xlink:href="#circle2-path"
							class="text"
						>
							People
						</textPath>
						<textPath
							startOffset="25%"
							spacing="auto"
							alignment-baseline="before-edge"
							xlink:href="#circle2-path"
							class="text"
						>
							Gender
						</textPath>
						<textPath
							startOffset="45%"
							spacing="auto"
							alignment-baseline="before-edge"
							xlink:href="#circle2-path"
							class="text"
						>
							Race
						</textPath>
						<textPath
							startOffset="60%"
							spacing="auto"
							alignment-baseline="before-edge"
							xlink:href="#circle2-path"
							class="text"
						>
							Indigenous
						</textPath>
						<textPath
							startOffset="80%"
							spacing="auto"
							alignment-baseline="before-edge"
							xlink:href="#circle2-path"
							class="text"
						>
							Vulnerable
						</textPath>
					</text>
				</svg>
				<div id="circle3"></div>
				<div id="circle4">
					<span> Equity </span>
					<span>
						Inclusive
						<br />
						Democracy
					</span>
					<span> Decolonizing </span>
				</div>
			</div>
			{#each data as item}
				<div class="topic_item">
					<div class="topic_image">
						<div class="overlay"></div>
						<Image image={item?.image}></Image>
					</div>
					<h3 class="topic_title">{item?.title}</h3>
				</div>
			{/each}
		</div>
	</div>
	<div class="container show_on_md_and_down">
		<h2 class="mt_0">Harnessing Trust, Accountability and Inclusion to Tackle Global Challenges</h2>
		<div class="divider divider_blue_light divider_2" />
		<div class="topics_list mt_5">
			{#each data as item}
				<div class="topic_item">
					<div class="topic_image">
						<div class="overlay"></div>
						<Image image={item?.image}></Image>
					</div>
					<h3 class="topic_title">{item?.title}</h3>
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	.featured_topics_section {
		position: relative;
		margin-top: -2px;
		min-height: 100vh !important;
		z-index: 1;

		.connecting_dots {
			position: absolute;
			bottom: -1rem;
			z-index: -1;
		}

		.topics {
			display: grid;
			grid-template-columns: 1fr 1fr;
			grid-template-columns: 1fr 1fr;
			border-radius: 15px;
			overflow: hidden;

			.circles {
				position: absolute;
				top: calc(50% - 175px);
				left: calc(50% - 200px);
				width: 400px;
				height: 400px;
				z-index: 2;
				background-color: #fafafa;
				border-radius: 50%;

				#rotating {
					position: absolute;
					width: 100%;
					height: 100%;
					padding: 0.8rem;
					animation-name: rotate-circle;
					animation-duration: 60s;
					animation-timing-function: linear;
					animation-iteration-count: infinite;
					will-change: transform;

					@keyframes rotate-circle {
						to {
							transform: rotate(1turn);
						}
					}

					text {
						font-weight: bold;
						fill: #212121;
						/* text-transform: uppercase; */
						/* letter-spacing: 2.1px; */
						font-family: 'Lato', sans-serif;
					}
				}

				#circle2 {
					position: absolute;
					width: 280px;
					height: 280px;
					left: calc(50% - 140px);
					top: calc(50% - 140px);
					background: #c7c5ff;
					border-radius: 50%;

					text {
						font-weight: bold;
						font-size: pxToRem(9);
						fill: #212121;
						text-transform: uppercase;
						letter-spacing: 1.2px;
						font-family: 'Lato', sans-serif;
					}
				}

				#circle3 {
					position: absolute;
					width: 220px;
					height: 220px;
					left: calc(50% - 110px);
					top: calc(50% - 110px);
					background: #fafafa;
					border-radius: 50%;
				}

				#circle4 {
					position: absolute;
					width: 180px;
					height: 180px;
					left: calc(50% - 90px);
					top: calc(50% - 90px);
					background: #c7c5ff;
					border-radius: 50%;
					display: flex;
					flex-direction: column;
					align-items: center;
					justify-content: space-evenly;
					padding: 1rem 1.4rem;
					span {
						font-size: pxToRem(11);
						text-align: center;
						padding: 0 0.5rem;
						border: 2px solid #212121;
						text-transform: uppercase;
						border-radius: 15px;
						font-weight: bold;
						width: 100%;
					}
				}
			}

			.topic_item {
				position: relative;
				aspect-ratio: 3/1.4;
				&:nth-child(3) {
					.topic_title {
						left: unset;
						right: 1.5rem;
                        text-align: right;
					}
				}
				&:nth-child(4) {
					.topic_title {
						top: unset;
						bottom: 1.5rem;
					}
				}
				&:nth-child(5) {
					.topic_title {
						top: unset;
						left: unset;
						right: 1.5rem;
						bottom: 1.5rem;
                        text-align: right;
					}
				}
			}
			.topic_item .topic_image {
				position: absolute;
				width: 100%;
				height: 100%;
				top: 0;
				left: 0;
				.overlay {
					position: absolute;
					width: 100%;
					height: 100%;
					/* background-color: rgba(0,0,0,0.5); */
					background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.34));
					z-index: 1;
				}
				:global(img) {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
			.topic_item .topic_title {
				position: absolute;
				top: 1.5rem;
				left: 1.5rem;
				color: white;
				margin: 0;
                z-index: 1;
                max-width: 60%;
			}
		}

		.topics_list {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			.topic_item {
				position: relative;
				aspect-ratio: 5/3;
				border-radius: 15px;
				overflow: hidden;
				.topic_image {
					position: absolute;
					width: 100%;
					height: 100%;
					.overlay {
						position: absolute;
						width: 100%;
						height: 100%;
						/* background-color: rgba(0,0,0,0.5); */
						background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.34));
						z-index: 1;
					}
					:global(img) {
						width: 100%;
						height: 100%;
						object-fit: cover;
					}
				}
				.topic_title {
					z-index: 1;
					position: absolute;
					bottom: 1.5rem;
					left: 1.5rem;
					color: white;
					margin: 0;
					word-break: break-word;
					max-width: 100%;
				}
			}
		}
	}
</style>
