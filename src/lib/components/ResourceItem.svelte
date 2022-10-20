<script lang="ts">
	import LinkIcon from '$lib/assets/icons/link.svg?component';
	import ResourceImg from '$lib/assets/images/r1.webp';
	import Image from './Image.svelte';

	export let data: any;
</script>

<div class="resource_item resource_item_{data?.type?.id}">
	<div class="resource_item__image">
		<Image image={data?.image} size="thumbnail" />
	</div>
	<small class="resource_item__type text_gray text_uppercase mt_2 font_regular">{data?.type?.label || '-'}</small>
	<h6 class="resource_item__title font_bold mb_3 mt_2">Strengthening Pandemic Governance</h6>
	<div class="divider divider_2 divider_gray" />
	<p class="resource_item__summary">
		{data?.summary}
	</p>
	<a href="/resources/{data?.id}" class="text_gray font_bold display_flex align_center"
		><small>Read More </small><LinkIcon
			class="ml_1"
			width="18"
			height="18"
			style="fill: var(--gray)"
		/></a
	>
</div>

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
	}

	.resource_item {
		display: flex;
		flex-direction: column;

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

		&__title {
			font-size: pxToRem(20);
			letter-spacing: normal;
		}

		&__image {
			overflow: hidden;
			border-radius: 15px;
		}
		&__image {
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
