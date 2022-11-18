<script lang="ts">
	import type { ResourceType } from '$lib/types/resources';
	import { createEventDispatcher } from 'svelte';

	let emit = createEventDispatcher();

	export let currentFilter = 1;

	function onFilterChange(e: any) {
		emit('onChange', e.target.value);
	}

	export let options: ResourceType[] = [];
</script>

<div class="resource_filters">
	{#each options as opt}
		<div class="form_control form_control_radio">
			<label>
				<input type="radio" bind:group={currentFilter} name="" value={opt.id} on:change={onFilterChange} />
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
