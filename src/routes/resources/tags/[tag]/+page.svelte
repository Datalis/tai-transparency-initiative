<script lang="ts">
	import Pagination from '$lib/components/Pagination.svelte';
	import ResourceItemLarge from '$lib/components/ResourceItemLarge.svelte';
	import ResourceLibraryItem from '$lib/components/ResourceLibraryItem.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import SearchThick from '$lib/assets/icons/search_thick.svg?component';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Seo from '$lib/components/Seo.svelte';

	export let data: PageData;

	let showSearchInput = true;

	function toggleSearch() {
		showSearchInput = !showSearchInput;
	}

	let searchParam: string | null = $page.url.searchParams.get('search');

	$: tag = data.tag;
	$: resources = data?.resources?.data || [];
	$: resourcesPagination = data.resources?.meta?.pagination;

	let currentPage = resourcesPagination?.page || 1;
	$: pageSize = resourcesPagination?.pageSize || 6;

	$: {
		let params = new URLSearchParams();

		params.set('page', currentPage.toString());
		params.set('pageSize', pageSize.toString());

		if (searchParam) params.set('search', searchParam);

		if (browser) goto(`/resources/tags/${tag.slug}?` + params.toString());
	}

	function onSearch(e: any) {
		let s = e.target.value;
		if (e.key == 'Enter') searchParam = s;
		else if (s == '') searchParam = null;
	}
</script>

<svelte:head>
	<Seo
		title={`Trust, Accountability and Inclusion Collaborative - ${tag.title}`}
		url={`/resources/${tag.slug}`}
	/>
</svelte:head>

<div class="page">
	<section class="resource_list_section section">
		<div class="container">
			<div class="display_flex flex_column pt_4">
				<div class="toolbar_wrapper display_flex align_end mb_4">
					<div class="tag_title">
						<span>{tag.title}</span>
					</div>
					<div class="search_control form_control mb_0" class:show={showSearchInput}>
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div class="search_control_toggler mt_1" on:click={toggleSearch}>
							<SearchThick width="24" height="24" />
						</div>
						<input
							type="search"
							placeholder="Search..."
							value={searchParam}
							on:keyup={(e) => onSearch(e)}
						/>
					</div>
				</div>
				<!-- <div class="divider divider_blue divider_1 my_2	" /> -->
				{#if !resources.length}
					<h6 class="w_100 text_center text_blue_light">No results found</h6>
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

	.page {
		padding-bottom: 3rem;
		padding-top: calc(100px + 1rem);
	}

	.resource_list_section {
		padding-top: 0 !important;
		// @media screen and (max-width: $md) {
		// 	padding-top: 1rem !important;
		// }

		.toolbar_wrapper {
			@media screen and (max-width: $md) {
				flex-direction: column;

				.search_control {
					margin-top: 1rem;
					width: 100%;
				}
			}
		}

		.toolbar_wrapper .tag_title {
			flex-grow: 1;
			color: map-get($colors, 'blue_light');
			font-weight: 600;
			font-size: 1.5rem;
		}

		.search_control {
			// flex-grow: 1;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			width: 320px;
			min-width: 320px;

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
				:global(path) {
					stroke: map-get($colors, 'blue_light') !important;
				}
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
