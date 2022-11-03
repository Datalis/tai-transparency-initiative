<script lang="ts">
	import type { Image } from '$lib/types/image';

	export let image: Image;

	export let size: 'thumbnail' | 'small' | 'medium' | 'large';

	export let priority: boolean = false;

	$: img = size && image?.formats ? image.formats[size] : image;
</script>

<svelte:head>
	{#if priority}
		<link rel="preconnect" href={img?.url} />
	{/if}
</svelte:head>

<img
	loading={ priority ? 'eager' : 'lazy' }
	decoding={ priority ? 'sync' : 'async' }
	name={img?.name}
	alt={img?.alternativeText}
	width={img?.width}
	height={img?.height}
	src={img?.url}
/>

<style lang="scss">
	img {
		background-size: cover;
		background-color: map-get($colors, 'blue');
	}
</style>