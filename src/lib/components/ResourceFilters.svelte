<script lang="ts">
	import type { ResourceType } from "$lib/types/resources";

	export let currentFilter = 1;

	export let options: ResourceType[] = [];
</script>

<div class="resource_filters">
	{#each options as opt}
		<div class="form_control form_control_radio">
			<label>
				<input type="radio" bind:group={currentFilter} name="filter" value={opt.id} />
				{opt.label}
			</label>
		</div>
	{/each}
	<!-- <div class="form_control form_control_radio form_control_large">
		<label>
			<input type="radio" bind:group={currentFilter} name="filter" value={null} />
		</label>
	</div> -->
</div>

<style lang="scss" scoped>
	.resource_filters {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
</style>
