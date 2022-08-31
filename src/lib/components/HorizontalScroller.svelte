<script>
	export let height = 300;
	export let px = 0;
	export let variant = 'white';
</script>

<div id="scroller" class="scroller--{variant}" style="height: {height}px;">
	<div class="wrapper" style="height: {height + 30}px;">
		<div class="container">
			<div class="display_flex px_{px}">
				<slot />
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	#scroller {
		width: 100%;
		overflow: hidden;
		padding: 2rem 0;
	}
	#scroller .wrapper {
		width: 100%;
		//padding: 1rem;
		overflow-x: scroll;
		overflow-y: hidden;
		-webkit-overflow-scrolling: touch;
		background: url(/src/lib/assets/images/decor1.svg);
		background-repeat: no-repeat;
		background-size: 105% auto;
		background-position-x: center;
		background-attachment: local;
	}

	#scroller.scroller--green .wrapper {
		background: url(/src/lib/assets/images/decor1--green.svg);
		background-repeat: no-repeat;
		background-size: 105% auto;
		background-position-x: center;
		background-attachment: local;
	}
</style>
