<script lang="ts">
	import ResourceFilters from '$lib/components/ResourceFilters.svelte';
	import ResourceItemLarge from '$lib/components/ResourceItemLarge.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ArrowThick from '$lib/assets/icons/arrow_right_thick.svg?component';
	import SearchThick from '$lib/assets/icons/search_thick.svg?component';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';

	let showSearchInput = false;

	function toggleSearch() {
		showSearchInput = !showSearchInput;
	}

	export let data: PageData;

	let typeParam: number = +($page.url.searchParams.get('type') || 1);
	let searchParam: string | null = $page.url.searchParams.get('search');
	let sortByParam: string | null = $page.url.searchParams.get('sortBy');

	$: resources = data.resources.data || [];
	$: types = data.types.data || [];

	$: {
		let params = new URLSearchParams();
		params.set('type', typeParam.toString());
		if (searchParam) params.set('search', searchParam);
		if (sortByParam) params.set('sortBy', sortByParam);
		if (browser) goto('/resources?'+params.toString());
	}

</script>

<div id="resources" class="page">
	<div class="bg_blue pt_3 pb_2">
		<div class="container">
			<ResourceFilters options={types} bind:currentFilter={typeParam}  />
		</div>
	</div>
	<section class="resource_list_section section bg_light">
		<div class="container">
			<div class="display_flex flex_column">
				<div class="display_flex align_center">
					<div class="display_flex align_center flex-grow_1">
						<h4 class="sort_by_btn mb_1 mr_3 mt_1">Sort By</h4>
						<ArrowThick width="24" height="24" />
					</div>

					<div class="search_control form_control mb_0" class:show={showSearchInput}>
						<div class="search_control_toggler mt_1" on:click={toggleSearch}>
							<SearchThick width="24" height="24" />
						</div>
						<input type="search" placeholder="Search..." />
					</div>
				</div>
				<div class="divider divider_dark divider_2 my_2	" />
				
				{#each resources as resource}
					<ResourceItemLarge data={resource} />
					<div class="divider divider_dark divider_2 my_2" />
				{/each}
			</div>
			<div class="display_flex align_center justify_center mt_5">
				<button class="btn btn_outline_green text_dark">Load More</button>
			</div>
		</div>
	</section>
	<SubscribeSection />
</div>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');
	.resource_list_section {
		.divider {
			width: 100% !important;
		}

		.search_control {
			display: flex;
			align-items: center;
			justify-content: flex-end;

			&.show {
				input {
					max-width: 100%;
					padding: 0.9rem 1rem;
					opacity: 1;
					margin-left: 0.5rem;
				}
			}

			&_toggler {
				cursor: pointer;
			}
			
			input {
				transition: opacity 0.3s ease, margin 0.4s ease, max-width 0.3s ease;
				border-radius: 25px;
				max-width: 0;
				opacity: 0;
				padding: 0;
				height: 32px;
			}
			input::placeholder {
				font-style: italic;
			}
		}
	}
</style>
