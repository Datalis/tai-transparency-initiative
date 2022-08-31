<script>
	import ResourceFilters from '$lib/components/ResourceFilters.svelte';
	import ResourceItemLarge from '$lib/components/ResourceItemLarge.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';

	import ArrowThick from '$lib/assets/icons/arrow_right_thick.svg?component';
	import SearchThick from '$lib/assets/icons/search_thick.svg?component';
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
				<div class="display_flex align_center mb_1">
					<div class="display_flex align_center flex-grow_1">
						<h4 class="sort_by_btn mb_1 mr_3 mt_1 ">Sort By</h4>
						<ArrowThick width="24" height="24" />
					</div>
					<SearchThick width="24" height="24" />
				</div>
				<div class="divider divider_dark divider_4 my_2	" />
				<ResourceItemLarge />
				<div class="divider divider_dark divider_4 my_2" />
				<ResourceItemLarge />
				<div class="divider divider_dark divider_4 my_2" />
				<ResourceItemLarge />
				<div class="divider divider_dark divider_4 my_2" />
				<ResourceItemLarge />
			</div>
			<div class="display_flex align_center justify_center mt_5">
				<button class="btn btn_outline_green text_dark">Load More</button>
			</div>
		</div>
	</section>
	<SubscribeSection />
</div>

<style lang="scss">
	.resource_list_section {
		.divider {
			width: 100% !important;
		}
	}
</style>
