<script>
	import ResourceItem from './ResourceItem.svelte';
</script>

<section class="resources_section">
	<div class="container">
		<h3 class="mb_4">Transparency and Accountability Initiative Resources</h3>
		<div class="divider divider_4 divider_green" />
		<div class="row mt_5">
			<div class="col_4">
				<ResourceItem />
			</div>
			<div class="col_4">
				<ResourceItem />
			</div>
			<div class="col_4">
				<ResourceItem />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	.resources_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
	}
</style>
