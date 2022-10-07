<script>
	import ResourceItem from './ResourceItem.svelte';
</script>

<section class="resources_section section bg_light">
	<div class="container">
		<h2 class="mb_4">Transparency and Accountability Initiative Resources</h2>
		<div class="divider divider_2 divider_green" />
		<div class="row mt_4">
			<div class="col col_4 col_md_6 col_sm_12">
				<ResourceItem />
			</div>
			<div class="col col_4 col_md_6 col_sm_12">
				<ResourceItem />
			</div>
			<div class="col col_4 col_md_12 col_sm_12">
				<ResourceItem />
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	$sm: map-get($grid-breakpoints, 'sm');

	.resources_section {
		display: flex;
		@media (max-width: $sm) {
			.col + .col {
				margin-top: 2rem;
			}
		}

		.divider {
			width: 100px;
			margin-left: 0;
		}
	}
</style>
