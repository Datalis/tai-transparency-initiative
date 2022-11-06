<script lang="ts">
	import type { Resource } from '$lib/types/resources';
	import { onMount } from 'svelte';

	export let data: Partial<Resource>;

	let preview: any;

	async function fetchPreview() {
		if (!data.url) return;
		const res = await fetch(`/preview/${encodeURIComponent(data.url)}`);
		preview = await res.json();
		console.log(preview);
	}

	onMount(() => {
		fetchPreview();
	});
</script>

<a href={data?.url} target="blank" class="resource_item">
	<div class="resource_item__left">
		<img src={preview?.image} alt={preview?.description} title={preview?.title} />
	</div>
	<div class="resource_item__right">
		<h3 class="text_green">{data?.title}</h3>
		<p class="text_dark">
			{data?.summary}
		</p>
	</div>
</a>

<style lang="scss">
	.resource_item {
		display: flex;
		align-items: stretch;
		justify-content: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
		&__left {
			flex-shrink: 0;
			width: 300px;
			img {
				border-radius: 15px;
				background-color: map-get($colors, 'blue');
				height: 100%;;
				width: 100%;
				object-fit: contain;
			}
		}
		&__right {
			flex-shrink: 1;
			padding-left: 2rem;
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
</style>
