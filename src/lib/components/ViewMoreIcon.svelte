<script>
	import CrossIcon from '$lib/assets/icons/cross.svg?component';

	export let isOpen = false;
</script>

<div class="view_more" class:is-open={isOpen}>
	<CrossIcon class="view_more__icon" width="24" height="24" />
</div>

<style lang="scss">
	$panel: map-get($colors, 'panel');
	$blue: map-get($colors, 'blue');
	$light: map-get($colors, 'light');
	.view_more {
		width: 35px;
		height: 35px;
		background-color: #389A9D;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
		:global(.view_more__icon) {
			transition: all 0.6s cubic-bezier(0.075, 0.82, 0.165, 1);
			scale: 0.85;
		}
		:global(.view_more__icon path) {
			stroke: #73C5C7 !important;
			stroke-width: 1px !important;
		}
		&.is-open {
			background-color: map-get($colors, "green" );
			:global(.view_more__icon) {
				transform: rotate(45deg) !important;
			}
		}
	}
</style>
