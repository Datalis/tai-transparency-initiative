<script lang="ts">
	import ResourceFilters from '$lib/components/ResourceFilters.svelte';
	import ResourceItemLarge from '$lib/components/ResourceItemLarge.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import SearchThick from '$lib/assets/icons/search_thick.svg?component';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import ResourceFiltersMobile from '$lib/components/ResourceFiltersMobile.svelte';
	import ResourceLibraryItem from '$lib/components/ResourceLibraryItem.svelte';
	import Pagination from '$lib/components/Pagination.svelte';

	let showSearchInput = false;

	function toggleSearch() {
		showSearchInput = !showSearchInput;
	}

	export let data: PageData;

	let typeParam: number = +($page.url.searchParams.get('type') || 1);
	let searchParam: string | null = $page.url.searchParams.get('search');
	let sortByParam: string | null = $page.url.searchParams.get('sortBy');

	$: resources = data.resources.data || [];
	$: resourcesPagination = data.resources?.meta?.pagination;

	let currentPage = resourcesPagination?.page || 1;

	$: pageSize = resourcesPagination?.pageSize || 6;

	$: types = data.types.data || [];

	$: {
		let params = new URLSearchParams();
		params.set('type', typeParam.toString());
		params.set('page', currentPage.toString());
		params.set('pageSize', pageSize.toString());
		if (searchParam) params.set('search', searchParam);
		if (sortByParam) params.set('sortBy', sortByParam);
		if (browser) goto('/resources?' + params.toString());
	}

	let timer: string | number | NodeJS.Timeout | undefined;
	const debounce = (v: any) => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			searchParam = v;
		}, 300);
	};
</script>

<div id="resources" class="page">
	<div class="resource_filters bg_blue pb_2 show_on_md_and_up">
		<div class="container">
			<ResourceFilters options={types} bind:currentFilter={typeParam} />
		</div>
	</div>
	<div class="resource_filters_mobile bg_blue pb_2 show_on_md_and_down">
		<ResourceFiltersMobile options={types} bind:currentFilter={typeParam} />
	</div>
	<section class="resource_list_section section bg_light">
		<div class="container">
			<div class="display_flex flex_column">
				<div class="display_flex align_center show_on_md_and_up">
					<div class="display_flex align_center flex-grow_1">
						<!-- <h4 class="sort_by_btn mb_1 mr_3 mt_1">Sort By</h4>
						<ArrowThick width="24" height="24" /> -->
					</div>

					<div class="search_control form_control mb_0" class:show={showSearchInput}>
						<div class="search_control_toggler mt_1" on:click={toggleSearch}>
							<SearchThick width="24" height="24" />
						</div>
						<input
							type="search"
							placeholder="Search..."
							value={searchParam}
							on:keyup={({
								target: {
									// @ts-ignore
									value
								}
							}) => debounce(value)}
						/>
					</div>
				</div>
				<div class="divider divider_blue divider_1 my_2	" />
				{#if !resources.length}
					<h6 class="w_100 text_center text_green">No results found</h6>
				{/if}
				{#each resources as resource}
					{#if resource?.type?.id == 7}
						<ResourceLibraryItem data={resource} />
					{:else}
						<ResourceItemLarge data={resource} />
					{/if}
					<!-- <div class="divider divider_blue divider_1 my_2" /> -->
				{/each}
			</div>
			<div class="display_flex align_center justify_center mt_5">
				<!-- <button class="btn btn_outline_green text_dark">Load More</button> -->
				<Pagination bind:currentPage bind:pageSize totalItems={resourcesPagination?.total} />
			</div>
		</div>
	</section>
	<SubscribeSection />
</div>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');
	.resource_filters {
		padding-top: calc(100px + 1rem);
	}

	.resource_filters_mobile {
		padding-top: 100px;
	}

	.resource_list_section {
		.divider {
			width: 100% !important;
			opacity: 0.65 !important;
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
				border: none;
				background: #f2f4f7;
			}
			// input::placeholder {
			// 	font-style: italic;
			// }
		}
	}
</style>
