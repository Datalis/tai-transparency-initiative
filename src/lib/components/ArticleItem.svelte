<script lang="ts">
	import LinkIcon from '$lib/assets/icons/link.svg?component';
	// import ArticleImg from '$lib/assets/images/blue_placeholder.webp';
	import Image from './Image.svelte';

	export let data: any;
</script>

<div class="article_item">
	<div class="article_item__image">
		<Image image={data?.image} />
	</div>
	<h6 class="my_3">{data?.name}</h6>
	<div class="divider divider_green" style="width: 100%" />
	<p class="article_item__resume mt_3">
		{data?.summary}
	</p>
	<a href={data?.url} class="article_item__link font_bold mt_2 display_flex align_center"
		><small>Read More</small>
		<LinkIcon class="ml_1" width="18" height="18" style="fill: #8f8bff!important" /></a
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
			color: map-get($colors, "blue_light" );

			&:hover{
				color: map-get($colors, "green" );
			}
		}

		&__image {
			min-height: 250px;
			background-color: map-get($colors, 'blue');
			:global {
				img {
					aspect-ratio: 4/2;
					height: 100%;
					width: 100%;
					object-fit: cover;
					object-position: center;
				}
			}
		}
	}
</style>
