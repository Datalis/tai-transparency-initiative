<script lang="ts">
	import type { Resource } from '$lib/types/resources';
	import { onMount } from 'svelte';
	import LinkIcon from '$lib/assets/icons/link.svg?component';

	export let data: Partial<Resource>;

	let preview: any;

	async function fetchPreview(url: string) {
		console.log(url);
		try {
			const res = await fetch(`/preview?data=${encodeURIComponent(url)}`);
			preview = await res.json();
		} catch (e) {
			console.error(e);
		}
	}

	$: {
		data.url && fetchPreview(data.url);
	}
</script>

<a href={data?.url} target="blank" class="resource_item">
	<div class="resource_item__left">
		<img src={preview?.image} alt={preview?.description} title={preview?.title} />
	</div>
	<div class="resource_item__right">
		<!-- <h3 class="text_green">{data?.title}</h3> -->
		<p class="text_dark">
			{data?.summary}
		</p>
		<small class="text_dark mt_auto text_gray font_bold"
			>Read More <LinkIcon class="ml_1" width="18" height="18" style="fill: var(--gray)" />
		</small>
	</div>
</a>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');

	.resource_item {
		display: flex;
		align-items: stretch;
		justify-content: center;
		padding-top: 1rem;
		padding-bottom: 1rem;

		--gray: #{map-get($colors, 'gray')};

		@media screen and (max-width: $md) {
			flex-direction: column;
		}

		&__left {
			flex-shrink: 0;
			width: 300px;
			height: 200px;
			border-radius: 15px;
			background-color: map-get($colors, 'blue');
			overflow: hidden;

			@media screen and (max-width: $md) {
				width: 100%;
			}

			img {
				background-color: map-get($colors, 'blue');
				height: 100%;
				width: 100%;
				object-fit: contain;
			}
		}
		&__right {
			flex-grow: 1;
			padding-left: 2rem;
			display: flex;
			flex-direction: column;
			padding-bottom: 1rem;

			@media screen and (max-width: $md) {
				padding-left: 0;
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
				-webkit-line-clamp: 4;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			small {
				display: flex;
				align-items: center;
			}
		}
	}
</style>
