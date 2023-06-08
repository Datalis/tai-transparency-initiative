<script lang="ts">
	import imageLoader from '$lib/utils/imageLoader';
	import { Image } from 'svelte-lazy-loader';

	export let image: any;
	export let alt: string | undefined = undefined;
	export let width: number | undefined = undefined;
	export let height: number | undefined = undefined;
	export let quality: number = 90;
	// export let size: 'thumbnail' | 'small' | 'medium' | 'large' = 'large';
	export let priority: boolean = false;
	export let sizes: string = '100vw';

	$: img = image;
	$: imgWidth = width || img?.width;
	$: imgHeight = height || img?.height;

	const getImage = (src: string, width: number, quality: number) =>
		imageLoader({ src, width, quality });

	const getSourceSet = (src: string, width: number, quality: number) => {
		return `${imageLoader({src, width, quality})} 1x, ${imageLoader({src, width: width*2, quality})} 2x`;
	}
</script>

<svelte:head>
	{#if priority}
		<link rel="preconnect" imagesrcset={getSourceSet(img?.url, imgWidth, quality)} as="image" href={getImage(img?.url, imgWidth, quality)} />
	{/if}
</svelte:head>

<Image
	sizes={sizes}
	src={getImage(img?.url, imgWidth, quality)}
	srcset={getSourceSet(img?.url, imgWidth, quality)}
	width={imgWidth}
	height={imgHeight}
	loading={priority ? 'eager' : 'lazy'}
	alt={alt ?? img?.alternativeText}
/>

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
	/* img {
		background-size: cover;
		background-color: map-get($colors, 'blue');
	} */
</style>
