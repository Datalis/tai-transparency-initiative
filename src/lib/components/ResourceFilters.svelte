<script lang="ts">
	import type { ResourceType } from '$lib/types/resources';
	import { createEventDispatcher } from 'svelte';

	let emit = createEventDispatcher();

	export let currentFilter: string | null = null;

	function onFilterChange(e: any) {
		emit('onChange', e.target.value);
	}

	export let options: ResourceType[] = [];
</script>

<div class="resource_filters">
	{#each options as opt}
		{#if opt.id !== 7}
			<div class="form_control form_control_radio">
				<label>
					<input type="radio" bind:group={currentFilter} name="" value={opt.id?.toString()} on:change={onFilterChange} />
					{opt.label}
				</label>
			</div>
		{/if}
	{/each}
	<div class="form_control form_control_radio">
		<label>
			<input type="radio" bind:group={currentFilter} name="" value={7} on:change={onFilterChange} />
			Library
		</label>
	</div>
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
