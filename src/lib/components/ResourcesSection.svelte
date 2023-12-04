<script lang="ts">
	import ResourceItem from './ResourceItem.svelte';

	export let resources: any;
</script>

<section id="resources" class="resources_section section">
	<div class="container">
		<div class="title align_center">
			<div class="flex-grow_1">
				<h2 class="mb_4 w_75">Transparency and Accountability Initiative Resources</h2>
			</div>
			<a href="/resources" class="btn bg_dark">Explore Our Resources</a>
		</div>
		<div class="divider divider_2 divider_blue_light" />
		<div class="row mt_4">
			{#each resources as resItem}
				<div class="col col_4 col_md_6 col_sm_12">
					<ResourceItem data={resItem} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
	$sm: map-get($grid-breakpoints, 'sm');

	.resources_section {
		display: flex;

		.title {
			display: flex;
		}

		@media (max-width: $sm) {
			.title {
				flex-direction: column;
				margin-bottom: 2rem;
				align-items: start;
			}

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
