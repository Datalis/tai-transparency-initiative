<script lang="ts">
	// import type { Image } from '$lib/types/image';
	import { Image } from 'svelte-lazy-loader';

	export let image: any;
	export let alt: string | undefined = undefined;
	export let width: number | undefined = undefined;
	export let height: number | undefined = undefined;
	export let size: 'thumbnail' | 'small' | 'medium' | 'large' = 'large';
	export let priority: boolean = false;

	$: img = size && image?.formats ? image.formats[size] : image;
</script>

<svelte:head>
	{#if priority}
		<link rel="preconnect" as="image" href={img?.url} />
	{/if}
</svelte:head>

<Image
	sizes="100vw"
	src={img?.url}
	width={width?.toString() ?? img?.width}
	height={height?.toString() ?? img?.height}
	loading={priority ? 'eager' : 'lazy'}
	alt={alt ?? img?.alternativeText}/>

<!-- <img
	loading={ priority ? 'eager' : 'lazy' }q
	decoding={ priority ? 'sync' : 'async' }
	name={img?.name}
	alt={img?.alternativeText}
	width={img?.width}
	height={img?.height}
	src={img?.url}
/> -->

<style lang="scss">
	img {
		background-size: cover;
		background-color: map-get($colors, 'blue');
	}
</style>