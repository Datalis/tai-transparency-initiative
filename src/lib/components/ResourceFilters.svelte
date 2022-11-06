<script lang="ts">
	import type { ResourceType } from '$lib/types/resources';

	export let currentFilter = 1;

	export let options: ResourceType[] = [];
</script>

<div class="resource_filters">
	{#each options as opt}
		<div class="form_control form_control_radio">
			<label>
				<input type="radio" bind:group={currentFilter} name="" value={opt.id} />
				{opt.label}
			</label>
		</div>
	{/each}
</div>

<style lang="scss" scoped>
	.resource_filters {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		label {
			font-size: pxToRem(12);
		}
	}
</style>
