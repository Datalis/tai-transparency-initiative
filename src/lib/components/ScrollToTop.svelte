<script lang="ts">
	import { onMount } from 'svelte';

	let scrollTotal;
	let show = false;

	function handleScroll() {
		let rootElement = document.documentElement;
		// Do something on scroll
		var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
		show = rootElement.scrollTop / scrollTotal > 0.7;
	}

	onMount(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<button class="scroll_to_top" class:visible={show}> Scroll </button>

<style lang="scss">
	.scroll_to_top {
		border-radius: 50%;
		width: 42px;
		height: 42px;
		position: fixed;
		bottom: 5%;
		right: 2.5%;
		z-index: 999999;
		cursor: pointer;
		background-color: map-get($colors, 'green');
		visibility: collapse;
		&.visible {
			visibility: visible;
		}
	}
</style>
