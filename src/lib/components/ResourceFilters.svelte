<script>
	export let currentFilter = 1;

	let options = [
		{ label: 'TAI Weekly', value: 1 },
		{ label: 'Reports', value: 2 },
		{ label: 'Collaboration Test Notes', value: 3 },
		{ label: 'TPA Full Disclosure', value: 4 },
		{ label: 'Think pieces', value: 5 },
		{ label: 'Blogs', value: 6 },
		{ label: 'Library', value: 7 }
	];
</script>

<div class="resource_filters">
	{#each options as opt}
		<div class="form_control form_control_radio">
			<label>
				<input type="radio" bind:group={currentFilter} name="filter" value={opt.value} />
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
