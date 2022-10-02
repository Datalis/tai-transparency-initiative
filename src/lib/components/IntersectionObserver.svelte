<script lang="ts">
	import { onMount } from 'svelte';

	let container: any;
	let intersecting = false;
	let top: number;
	let bottom: number;

	onMount(() => {
		// if (typeof IntersectionObserver !== 'undefined') {
		// 	const obsv = new IntersectionObserver((entries) => {
		// 		intersecting = entries[0].isIntersecting;
		// 	});
		// 	obsv.observe(container);
		// 	return () => obsv.unobserve(container);
		// }
		// Fallback
		function handler() {
			const bcr = container.getBoundingClientRect();
			top = bcr.top;
			bottom = bcr.bottom;
			intersecting =
				bcr.bottom > 0 &&
				bcr.right > 0 &&
				bcr.top < window.innerHeight &&
				bcr.left < window.innerWidth;
		}

		window.addEventListener('scroll', handler);

		return () => window.removeEventListener('scroll', handler);
	});
</script>

<div bind:this={container}>
	<slot {intersecting} {top} {bottom} />
</div>
