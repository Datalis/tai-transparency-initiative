<script lang="ts">
	import ResourceItem from './ResourceItem.svelte';

	export let data: any;

	$: resources = data?.resources || [];

</script>

<section class="resources_section section bg_light">
	<div class="container">
		<h2 class="mb_4">{data?.title}</h2>
		<div class="divider divider_2 divider_green" />
		<div class="row mt_4">
			{#each resources as resItem}
				<div class="col col_4 col_md_6 col_sm_12">
					<ResourceItem data={resItem} />
				</div>
			{/each}
			<!-- <div class="col col_4 col_md_6 col_sm_12">
				<ResourceItem />
			</div>
			<div class="col col_4 col_md_6 col_sm_12">
				<ResourceItem />
			</div>
			<div class="col col_4 col_md_12 col_sm_12">
				<ResourceItem />
			</div> -->
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
