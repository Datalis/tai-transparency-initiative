<script lang="ts">
	import LinkIcon from '$lib/assets/icons/link.svg?component';
	import Image from './Image.svelte';

	export let data: any;
</script>

<a href="/resources/{data?.id}" class="resource_item resource_item_{data?.type?.id}">
	<div class="resource_item__image">
		<Image image={data?.image} size="small" />
	</div>
	<a href="/resources?type={data?.type?.id}" class="mt_2"
		><small class="resource_item__type text_gray text_uppercase font_regular"
			>{data?.type?.label || '-'}</small
		></a
	>
	<h6 class="resource_item__title font_bold mb_3 mt_2 text_dark">{data?.title}</h6>
	<div class="divider divider_2 divider_gray" />
	<div class="resource_item__summary text_dark">
		{@html data?.summary}
	</div>
	<span class="resource_item__link font_bold display_flex align_center"
		><small>Read More </small><LinkIcon
			class="ml_1"
			width="18"
			height="18"
			style="fill: #00DEB3"
		/></span
	>
</a>

<style lang="scss">

	.resource_item.resource_item_4 {
		.divider,
		.resource_item__type,
		.resource_item__summary {
			display: none;
		}
		.resource_item__title {
			font-size: pxToRem(16) !important;
		}

		.resource_item__image {
			background: map-get($colors, 'blue');
			display: flex;
			align-items: center;
			:global {
				img {
					width: 95%;
					height: 95%;
					margin: auto;
					object-fit: contain;
				}
			}
		}
		.resource_item__link {
			margin-top: auto;
		}
	}

	.resource_item {
		display: flex;
		flex-direction: column;
		height: 100%;

		--gray: #{map-get($colors, 'gray')};

		// TPA Full Disclosure

		p {
			font-size: pxToRem(14);
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 4;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		.divider {
			width: 100% !important;
			margin-top: auto !important;
		}

		.resource_item__type:hover {
			color: map-get($colors, 'green');
		}
		&__link {
			color: #00DEB3;
		}
		&__link:hover {
			color: #43B79E;
		}

		&__type {
			font-weight: 400 !important;
			font-size: 14px !important;
		}

		&__title {
			font-size: pxToRem(16);
			text-align: left;
			letter-spacing: normal;
		}

		&__image {
			overflow: hidden;
			border-radius: 15px;
			min-height: 200px;
			:global(img) {
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center;
			}
		}
	}
</style>
