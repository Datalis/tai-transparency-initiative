<script>
	import ResourceItem from './ResourceItem.svelte';
</script>

<section class="resources_section">
	<div class="container">
		<h2 class="mb_4">Transparency and Accountability Initiative Resources</h2>
		<div class="divider divider_2 divider_green" />
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
