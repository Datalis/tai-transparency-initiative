<script lang="ts">
	import FacebookIcon from '$lib/assets/icons/facebook-simple.svg?component';
	import type { Resource } from '$lib/types/resources';
	import Image from './Image.svelte';

	export let data: Resource;
</script>

<div class="resource_item">
	<a href="/resources/{data?.id}" class="resource_item__wrapper">
		<div class="resource_item__wrapper--left">
			<div class="img_wrapper">
				<!-- <span class="category_tag category_{data?.type?.id}">{data?.type?.label}</span> -->
				<Image size="small" image={data?.image} />
			</div>
			{#if data?.links}
				<div class="social_links">
					{#each data.links as link}
						<span class="icon">
							<FacebookIcon width="18" height="18" fill="white" />
						</span>
					{/each}
					<!-- <span class="icon">
					<FacebookIcon width="18" height="18" fill="white" />
				</span>
				<span class="icon">
					<FacebookIcon width="18" height="18" fill="white" />
				</span>
				<span class="icon">
					<FacebookIcon width="18" height="18" fill="white" />
				</span> -->
				</div>
			{/if}
		</div>
		<div class="resource_item__wrapper--right">
			<small class="text_gray text_uppercase font_regular"
				>{new Date(data?.date).toDateString()}</small
			>
			<h3 class="text_green mt_2 mb_2">{data?.title}</h3>
			<small class="text_gray font_regular"
				>By <a href="/" class="text_gray">{data?.author?.name}</a> ({data?.author?.role})</small
			>
			<p class="text_dark">
				{data?.summary}
			</p>
		</div>
	</a>
</div>

<style lang="scss" scoped>
	$md: map-get($grid-breakpoints, 'md');

	.resource_item {
		&__wrapper {
			display: flex;
			align-items: stretch;
			padding-top: 1rem;
			padding-bottom: 1rem;

			@media (max-width: $md) {
				flex-direction: column;

				&--left {
					width: 100% !important;
					height: 250px;
				}

				&--right {
					margin-top: 1rem;
					padding-left: 0 !important;
				}
			}

			&--left {
				width: 30%;
				flex-shrink: 0;
				display: flex;
				flex-direction: column;
				.img_wrapper {
					position: relative;
					background-color: map-get($colors, 'panel');
					height: 100%;
					border-radius: 15px;
					height: 240px;
					overflow: hidden;

					:global {
						img {
							height: 100%;
							width: 100%;
							object-fit: contain;
							max-height: 100%;
						}
					}

					// .category_tag {
					// 	min-width: 140px;
					// 	position: absolute;
					// 	left: 0;
					// 	top: 0;
					// 	background-color: map-get($colors, 'green');
					// 	padding: 0.25rem 1rem;
					// 	text-transform: uppercase;
					// 	font-weight: 800 !important;
					// 	font-size: pxToRem(12);
					// 	color: #fafafa;
					// 	display: flex;
					// 	justify-content: center;
					// 	&.category_1 {
					// 		background-color: map-get($colors, 'green');
					// 	}
					// 	&.category_2 {
					// 		background-color: map-get($colors, 'gray');
					// 	}
					// 	&.category_3 {
					// 		background-color: map-get($colors, 'dark');
					// 	}
					// 	&.category_4 {
					// 		background-color: map-get($colors, 'danger');
					// 	}
					// 	&.category_5 {
					// 		background-color: map-get($colors, 'blue_light');
					// 	}
					// 	&.category_6 {
					// 		background-color: #bcbc00;
					// 	}
					// }
				}
				.social_links {
					display: flex;
					align-items: center;
					margin-top: 1rem;
					.icon {
						background-color: map-get($colors, 'gray');
						border-radius: 50%;
						width: 32px;
						height: 32px;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					.icon + .icon {
						margin-left: 0.5rem;
					}
				}
			}
			&--right {
				padding-left: 2rem;
				flex-grow: 1;
				h3 {
					line-height: 1;
					text-align: justify;
					text-justify: distribute;
				}

				a {
					text-decoration: underline;
				}
				p {
					// font-size: pxToRem(14);
					// line-height: 1.2;
					// display: -webkit-box;
					// -webkit-box-orient: vertical;
					// -webkit-line-clamp: 4;
					// overflow: hidden;

					font-size: pxToRem(14);
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 3;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			}
		}
	}
</style>
