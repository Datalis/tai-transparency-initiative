<script lang="ts">
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import FacebookIcon from '$lib/assets/icons/facebook.svg?component';
	import TwitterIcon from '$lib/assets/icons/twitter.svg?component';
	import LinkedInIcon from '$lib/assets/icons/linkedin.svg?component';
	import WhatsappIcon from '$lib/assets/icons/whatsapp.svg?component';
	import LinkIcon from '$lib/assets/icons/link.svg?component';
	import Image from '$lib/components/Image.svelte';
	import type { PageData } from './$types';
	import Seo from '$lib/components/Seo.svelte';
	import { onMount } from 'svelte';
	import Swiper, { Pagination, Navigation } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/pagination';
	import 'swiper/css/navigation';
	import { parseTwitterText } from '$lib/utils/twitter';

	export let data: PageData;

	$: resource = data.resource;
	$: related = data.related;
	$: social = data.social;
	$: share_url = `https://www.transparency-initiative.org/${resource.slug}`;

	function gotoSub() {
		// Get the email address from the input field
		// Add the email address to the subscription url
		let URI =
			'https://transparency-initiative.us8.list-manage.com/subscribe?u=3225c2c32fc6c7023ca721588&id=1a5ff28f1e';
		// @ts-ignore
		const subemail = document?.getElementById('subemail').value;
		if (subemail) {
			URI = URI + '&MERGE0=' + subemail;
		}
		// Open the subscription url in a new tab
		window.open(URI, '_blank');
	}

	onMount(() => {
		new Swiper('.swiper', {
			autoHeight: true,
			slidesPerView: 1,
			spaceBetween: 50,
			modules: [Navigation, Pagination],
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets'
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			}
		});
	});
</script>

<svelte:head>
	<Seo
		title={resource.title}
		img="https://www.transparency-initiative.org{resource?.image?.url}"
		description={resource.summary}
		url="/{resource.slug}"
		type="article"
	/>
</svelte:head>

<article id="resource" class="page">
	<section class="heading_section section gradient_sm_gray_light">
		<div class="container">
			<div class="row m_auto">
				{#if resource.type.id == 2}
					<div class="header_block col col_7 col_sm_12">
						<span class="text_blue_light font_bold text_uppercase text_center">{resource.type.label}</span>
						<h1 class="text_blue text_center">
							{resource.title}
						</h1>
						<small class="text_gray font_light">
							By <a href="/" class="text_gray">{resource.author.name}</a> ({resource.author.role})
						</small>
					</div>
				{:else}
					<div class="header_block col col_7 col_sm_12">
						<span class="text_blue_light font_bold text_uppercase text_center">{resource.type.label}</span>
						<h1 class="text_blue text_center">
							{resource.title}
						</h1>
						<small class="text_gray font_light">
							By <a href="/" class="text_gray">{resource.author.name}</a> ({resource.author.role})
						</small>
					</div>
					<div class="col col_5 col_sm_12" style="margin-top: 0;margin-bottom: 0;">
						<!-- <Image size="medium" priority image={resource?.image} /> -->
					</div>
				{/if}
			</div>
		</div>
	</section>
	<section class="content_section section">
		<div class="container">
			<div class="row">
				<div class="col col_8 col_sm_12">
					<div class="content">
						<div class="content_img">
							<Image priority image={resource?.image} alt={resource?.image_alt} />
						</div>
		
						<div class="post_content">
							{@html resource.content}
						</div>
		
						<div class="share_block">
							<h5 class="mr_3">Share this article</h5>
							<div class="divider divider_dark divider_1 mr_3 show_on_md_and_up" />
		
							<div class="display_flex">
								<a
									href="https://api.whatsapp.com/send?text={share_url}"
									target="_blank"
									rel="noreferrer"
									class="share_icon"
								>
									<WhatsappIcon width="14" height="14" fill="#fff" />
								</a>
								<a
									href="https://www.facebook.com/sharer.php?u={share_url}"
									class="share_icon ml_2"
									target="_blank"
									rel="noreferrer"
								>
									<FacebookIcon width="14" height="14" fill="#fff" />
								</a>
								<a
									href="https://twitter.com/intent/tweet?url={share_url}"
									class="share_icon ml_2"
									target="_blank"
									rel="noreferrer"
								>
									<TwitterIcon width="14" height="14" fill="#fff" />
								</a>
								<a
									href="https://www.linkedin.com/sharing/share-offsite/?url={share_url}"
									class="share_icon ml_2"
									target="_blank"
									rel="noreferrer"
								>
									<LinkedInIcon width="14" height="14" fill="#fff" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div class="col col_4 col_sm_12">
					<aside class="releated">
						<div class="subscribe_block show_on_md_and_up">
							<h4 class="font_bold mb_3 mt_0">Keep updated with TAI weekly</h4>
							<p>
								Everything you need to know about accountability, inclusive participation and trust, delivered to your inbox.
							</p>
							<div class="form_control mt_4">
								<input type="email" placeholder="Email Address" id="subemail" />
							</div>
							<button class="btn btn_dark text_green_light mt_3" on:click={gotoSub}>Subscribe</button>
						</div>
						<h4 class="mt_5 mb_4">You may also like</h4>
						<div class="divider divider_blue_light divider_2 mb_4" />
						<div class="related_articles_list">
							{#each related as r}
								<a href="/{r.slug}" class="related_article_item">
									<div class="img_wrapper">
										<Image width={300} image={r.image} />
									</div>
									<span class="text_dark my_3 font_bold">
										{r.title}
									</span>
									<small>
										<a href="/resources/{r.id}" class="text_gray display_flex align_center blue_light_text"
											>Read More <LinkIcon class="ml_1" style="fill: #8f8bff" /></a
										>
									</small>
								</a>
							{/each}
						</div>
						
					</aside>
				</div>
			</div>
		</div>
	</section>
	<div class="bg_green_light">
		<SubscribeSection />
	</div>
	
</article>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');
	$green_light: #59ebcf;
	.blue_light_text {
		color: map-get($colors, "blue_light" );
	}
	.blue_light_text:hover {
		color: #adaaf3;
	}
	.heading_section {
		//min-height: 80vh !important;
		padding-top: 100px !important;
		display: flex !important;
		flex-direction: column !important;
		justify-content: flex-end !important;

		:global {
			img {
				background-color: transparent;
				object-fit: contain;
				height: 100%;
				// max-height: 80vh;
				width: 100%;
			}
		}
	}
	.heading_section a {
		text-decoration: underline;
	}
	.header_block {
		display: flex;
		flex-direction: column;
		flex-basis: 100%;
		align-items: center;
	}

	.content_section {

		@media (max-width: 576px) {
			.row {
				flex-direction: column;
			}
		}

		@media screen and (max-width: $md) {
			padding-top: 0 !important;
		}

		.col_8 {
			max-width: calc(66.666666% - 2.5rem);
			@media screen and (max-width: $md) {
				max-width: 100%;
			}

		}
	}

	:global(.content_section .swiper) {
		margin-top: 1rem;
		--swiper-navigation-size: 32px;
		--swiper-navigation-color: #{$green_light};
		--swiper-pagination-color: #{$green_light};
	}

	:global(.content_section .swiper img) {
		aspect-ratio: 4/3;
		object-fit: contain;
	}

	.content_section .row {
		display: flex;
		flex-wrap: nowrap !important;
	}

	/* .content_section .container {
		display: flex;

		@media screen and (max-width: $md) {
			flex-direction: column;
		}
	} */

	.content_section .content,
	.content_section .releated  {
		
		@media screen and (max-width: $md) {
			padding: 0 1rem;
		}
	}

	.content_section .content_img {
		/* @media screen and (max-width: $md) {
			padding: 0 1rem;
		} */
		:global {
			img {
				background-color: transparent;
				object-fit: contain;
				width: 100%;
			}
		}
	}

	.content_section a {
		text-decoration: underline;
	}
	// .content_section img {
	// 	margin-top: 2rem;
	// 	margin-bottom: 2rem;
	// 	box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.075);
	// }

	.content_section .post_content {
		/* @media screen and (max-width: $md) {
			padding: 0 1rem;
		} */

		:global {
			p {
				letter-spacing: normal;
			}
			a {
				color: map-get($colors, 'gray');
				font-weight: 500;
				text-decoration: underline;
			}

			i {
				color: map-get($colors, 'green');
				font-weight: 700;
			}

			strong {
				font-weight: 700;
			}

			img {
				width: 100%;
			}

			blockquote {
				background-color: map-get($colors, 'green_light');
				margin: 0;
				margin-top: 1rem;
				border-radius: 10px;
				padding: 0.25rem 2rem;
				font-weight: 500;
			}

			blockquote a {
				color: currentColor;
			}

			.pdf-viewer {
				min-height: 400px;
			}

			ul {
				list-style: disc;
				padding-left: 40px;
			}
			ol {
				list-style: decimal;
				padding-left: 40px;
			}

			ul,ol {
				p {
					margin: 0;
				}
			}

			iframe
			{
				width: 100%;
				height: auto;
				min-height: 650px;
			}

			.embed-pdf {
				width: 100%;
				height: auto;

				iframe {
					aspect-ratio: 8.5/11;
				}

				@media screen and (max-width: $md) {
					.tai-embed-pdf-iframe {
						display: none;
					}
				}
				.mobile-embed {
					position: relative;
					display: none;
					@media screen and (max-width: $md) {
						display: block;
					}

					.controls {
						background-color: rgba($color: #000000, $alpha: 0.6);
						position: absolute;
						left: 0;
						top: 0;
						height: 100%;
						width: 100%;
						display: flex;
						flex-direction: column;
						align-items: center;
						justify-content: center;
						img {
							width: 24px;
							height: 24px;
						}

						span {
							color:  map-get($colors, 'green_light');
							font-size: 14px;
							margin-top: 0.5rem;
							/* text-transform: uppercase; */
							text-decoration: underline;
						}
					}
				}
			}
		}
	}

	.content_section .share_block {
		padding: 0 1rem;
		display: flex;
		align-items: center;

		.share_icon {
			width: 42px;
			height: 42px;
			background-color: #8F8BFF;
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
			:global(svg) {
				width: 24px;
				height: 24px;
				:global(circle){
					fill: map-get($colors, "white") !important;
				}
				:global(path){
					fill: map-get($colors, "white") !important;
				}
			}
		}

		.divider {
			flex-grow: 1;
		}
		h5 {
			font-size: pxToRem(20);
			line-height: 1;

			@media (max-width: $md){
				margin-right: 0;
			}
		}

		@media (max-width: $md){
			flex-direction: column;
		}
	}

	.content_section .subscribe_block {
		// margin-top: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		background-color: map-get($colors, "green_light" );
		padding: 2rem;
		border-radius: 15px;
		.form_control,
		.btn {
			width: 100%;
		}
		.form_control input {
			border-radius: 30px;
			padding: 0.7rem 1.25rem !important;
		}
		.form_control input::placeholder {
			font-style: italic;
			text-align: center;
		}
	}
	.content_section .related_articles_list {
		.related_article_item {
			margin-top: 1.5rem;
			display: flex;
			flex-direction: column;
			text-decoration: none;
			--gray: #{map-get($colors, 'gray')};
			a {
				text-decoration: none;
			}
			.img_wrapper {
				overflow: hidden;
				
				/* background-color: map-get($colors, 'panel'); */
				:global {
					img {
						border-radius: 15px;
						aspect-ratio: 16/9;
						width: 100%;
						height: auto;
						object-fit: cover;
						object-position: center;
					}
				}
			}
		}
	}
	
	:global(.subscribe_section) {
		padding-top: 0 !important;
	}
</style>
