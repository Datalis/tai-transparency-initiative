<script lang="ts">
	import { CollapsibleCard } from 'svelte-collapsible';
	import FiltersIcon from '$lib/assets/icons/filters.svg?component';
	import type { ResourceType } from '$lib/types/resources';
	import { createEventDispatcher } from 'svelte';

	let emit = createEventDispatcher();

	export let currentFilter: string | null = null;

	export let options: ResourceType[] = [];

	let isOpen = false;

	$: current = options?.find(e => e.id?.toString() == currentFilter);

	function onFilterChange(e: any) {
		isOpen = false;
		emit('onChange', e.target.value)
	}

</script>

<div class="resource_filters px_4">
	<CollapsibleCard bind:open={isOpen}>
		<div class="resource_filters__menu header"  slot="header">
			<small class="text_green font_bold mr_2">{current?.label || 'Select a category'}</small>
			<FiltersIcon width="24" height="24" />
		</div>
		<div class="resource_filters__options body" slot="body">
			{#each options as opt}
				<div class="form_control form_control_radio">
					<label>
						<input type="radio" bind:group={currentFilter} name="filter" value={opt.id} on:change={onFilterChange} />
						{opt.label}
					</label>
				</div>
			{/each}
		</div>
	</CollapsibleCard>
</div>

<style lang="scss" scoped>
	.resource_filters {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;

		:global(.card) {
			padding: 0;
			box-shadow: none;
		}

		&__menu {
			display: flex;
			align-items: center;
			width: 100%;
			padding-bottom: 0.5rem;
			margin-bottom: 1rem;
			border-bottom: 1px solid #fafafa;

			small {
				flex-grow: 1;
			}
			:global(svg) {
				cursor: pointer;
				fill: map-get($colors, 'green') !important;
			}
		}

		&__options {
			display: flex;
			flex-direction: column;
			.form_control {
				margin-left: 0.5rem;
				margin-top: 0.5rem;
				label {
					font-size: pxToRem(12);
				}
			}
		}
	}
</style>
