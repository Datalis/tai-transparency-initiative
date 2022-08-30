<script>
	import ResourceFilters from '$lib/components/ResourceFilters.svelte';
	import ResourceItemLarge from '$lib/components/ResourceItemLarge.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
</script>

<div id="resources" class="page">
	<div class="bg_blue pt_3 pb_2">
		<div class="container">
			<ResourceFilters />
		</div>
	</div>
	<section class="resource_list_section">
		<div class="container">
			<div class="display_flex flex_column">
				<div class="display_flex align_center mb_2">
					<button class="sort_by_btn flex-grow_1"> Sort By </button>
				</div>
				<ResourceItemLarge />
				<ResourceItemLarge />
				<ResourceItemLarge />
				<ResourceItemLarge />
			</div>
		</div>
	</section>
	<SubscribeSection />
</div>

<style lang="scss">
	// .resource_list_section {
	// }
</style>
