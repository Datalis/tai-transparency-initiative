<script>
	export let height = 200;
	export let clazz = '';
</script>

<div id="scroller" class={clazz} style="height: {height}px;">
	<div class="wrapper" style="height: {height + 30}px;">
		<slot />
	</div>
</div>

<style>
	#scroller {
		width: 100%;
		overflow: hidden;
	}
	#scroller .wrapper {
		width: 100%;
		padding: 1rem;
		overflow-x: scroll;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;
		display: inline-flex;
	}
</style>
