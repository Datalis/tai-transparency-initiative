<script lang="ts">
	import LinkIcon from '$lib/assets/icons/link.svg?component';
	// import ArticleImg from '$lib/assets/images/blue_placeholder.webp';
	import Image from './Image.svelte';

	export let data: any;
</script>

<div class="article_item">
	<div class="article_item__image">
		<!-- <div class="article_item__image--title">
			<h6 class="my_2 text_green">{data?.name}</h6>
		</div> -->
		<Image size="small" image={data?.image} />
	</div>
	<h6 class="my_3 text_dark">{data?.name}</h6>
	<p class="article_item__resume mt_0">
		{data?.summary}
	</p>
	<a href="/" class="article_item__link text_gray font_bold mt_2 display_flex align_center"
		><small>Read More</small>
		<LinkIcon class="ml_1" width="18" height="18" style="fill: var(--gray)" /></a
	>
</div>

<style lang="scss">
	$gray: map-get($colors, 'gray');

	.article_item {
		display: flex;
		flex-direction: column;
		height: 100%;

		--gray: #{$gray};

		p {
			font-size: pxToRem(14);
		}

		&__image {
			overflow: hidden;
			border-radius: 15px;
		}

		&__link {
			margin-top: auto;
		}

		&__image {
			min-height: 250px;
			background-color: map-get($colors, 'blue');
			// &--title {
			// 	display: flex;
			// 	align-items: center;
			// 	justify-content: center;
			// 	h6 {
			// 		font-size: pxToRem(14);
			// 	}
			// }
			:global {
				img {
					height: 100%;
					width: 100%;
					object-fit: cover;
					object-position: center;
				}
			}
		}
	}
</style>
