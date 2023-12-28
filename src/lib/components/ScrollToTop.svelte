<script lang="ts">
	import { onMount } from 'svelte';
	import ScrollToTopIcon from '$lib/assets/icons/chevron-up.svg?component';

	let scrollTotal;
	let show = false;

	function handleScroll() {
		let rootElement = document.documentElement;
		// Do something on scroll
		var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
		show = rootElement.scrollTop / scrollTotal > 0.7;
	}

	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<button class="scroll_to_top" class:visible={show} on:click={scrollToTop}>
	<ScrollToTopIcon />
</button>

<style lang="scss">
	.scroll_to_top {
		border-radius: 50%;
		width: 42px;
		height: 42px;
		position: fixed;
		bottom: 6%;
		right: 2.5%;
		z-index: 9;
		cursor: pointer;
		background-color: map-get($colors, 'blue_light');
		visibility: collapse;
		display: flex;
		justify-content: center;
		align-items: center;
		&.visible {
			visibility: visible;
		}
		:global {
			svg {
				fill: map-get($colors, 'white') !important;
			}
		}
	}
</style>
