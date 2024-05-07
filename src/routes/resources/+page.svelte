<script lang="ts">
	import ResourceFilters from '$lib/components/ResourceFilters.svelte';
	import ResourceItemLarge from '$lib/components/ResourceItemLarge.svelte';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import SearchThick from '$lib/assets/icons/search_thick.svg?component';
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { afterNavigate, goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import ResourceFiltersMobile from '$lib/components/ResourceFiltersMobile.svelte';
	import ResourceLibraryItem from '$lib/components/ResourceLibraryItem.svelte';
	import Pagination from '$lib/components/Pagination.svelte';
	import Seo from '$lib/components/Seo.svelte';

	let showSearchInput = true;

	function toggleSearch() {
		showSearchInput = !showSearchInput;
	}

	export let data: PageData;

	let typeParam = $page.url.searchParams.get('type');
	let searchParam: string | null = $page.url.searchParams.get('search');
	let sortByParam: string | null = $page.url.searchParams.get('sortBy');

	let currentTopic: number | null = null;

	$: resources = data.resources.data || [];
	$: resourcesPagination = data.resources?.meta?.pagination;

	const topics = [
		{
			id: 1,
			title: 'Civic Space and human rights context'
		},
		{
			id: 2,
			title: 'System change'
		},
		{
			id: 3,
			title: 'Localization'
		},
		{
			id: 4,
			title: 'Gender and Racial Equity'
		},
		{
			id: 5,

			title: 'Learning, Monitoring and Evaluation'
		}
	];

	$: libTopics = topics /* data.libraryTopics.data || [] */;

	let currentPage = resourcesPagination?.page || 1;

	$: pageSize = resourcesPagination?.pageSize || 6;

	$: types = data.types.data || [];

	$: typeDescription = types?.find((t) => t.id.toString() == typeParam)?.description;

	afterNavigate(() => {
		let current = $page.url.searchParams.get('type');
		if (current !== typeParam) {
			typeParam = current;
		}
	});

	$: {
		let params = new URLSearchParams();
		if (typeParam) params.set('type', typeParam.toString());
		params.set('page', currentPage.toString());
		params.set('pageSize', pageSize.toString());

		if (typeParam && +typeParam == 7 && currentTopic) {
			params.set('topic', currentTopic.toString());
		}

		if (searchParam) params.set('search', searchParam);
		if (sortByParam) params.set('sortBy', sortByParam);

		if (browser) goto('/resources?' + params.toString(), { replaceState: true });
	}

	function onSearch(e: any) {
		let s = e.target.value;
		if (e.key == 'Enter') searchParam = s;
		else if (s == '') searchParam = null;
	}

	function filterByTopic(topic: number) {
		if (currentTopic == topic) currentTopic = null;
		else currentTopic = topic;
	}
</script>

<svelte:head>
	<Seo title="Trust, Accountability and Inclusion Collaborative - Resources" url="/resources" />
</svelte:head>

<div id="resources" class="page">
	<div class="resource_filters bg_blue pb_2 show_on_md_and_up">
		<div class="container">
			<ResourceFilters
				options={types}
				bind:currentFilter={typeParam}
				on:onChange={() => (currentPage = 1)}
			/>
		</div>
	</div>
	<div class="resource_filters_mobile bg_blue pb_2 show_on_md_and_down">
		<ResourceFiltersMobile
			options={types}
			bind:currentFilter={typeParam}
			on:onChange={() => (currentPage = 1)}
		/>
	</div>
	<section class="resource_list_section section">
		{#if typeParam}
			<div class="library_summary py_2">
				<div class="container display_flex align_center">
					<p class="m_0">
						{typeDescription}
					</p>
				</div>
			</div>
		{/if}
		<div class="container">
			<div class="display_flex flex_column pt_4">
				<div class="toolbar_wrapper display_flex align_end mb_4">
					<div class="filters_wrapper display_flex align_center flex-grow_1">
						<!-- <h4 class="sort_by_btn mb_1 mr_3 mt_1">Sort By</h4>
						<ArrowThick width="24" height="24" /> -->

						{#if typeParam && +typeParam == 7}
							{#each libTopics as topic}
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<small
									class="chip"
									class:active={currentTopic == topic.id}
									on:click={() => filterByTopic(topic.id)}>{topic.title}</small
								>
							{/each}
						{/if}
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

	#resources {
		padding-bottom: 3rem;
	}
	.resource_filters {
		padding-top: calc(100px + 1rem);
	}

	.resource_filters_mobile {
		padding-top: 100px;
	}

	.resource_list_section {
		padding-top: 0 !important;
		// @media screen and (max-width: $md) {
		// 	padding-top: 1rem !important;
		// }

		.library_summary p {
			line-height: 1.5 !important;
			font-size: pxToRem(14);
			@media screen and (max-width: $md) {
				line-height: 1.2 !important;
				font-size: pxToRem(12);
			}
		}

		/* .divider {
			width: 100% !important;
			opacity: 0.65 !important;
		} */

		.toolbar_wrapper {
			@media screen and (max-width: $md) {
				flex-direction: column;

				.search_control {
					margin-top: 1rem;
					width: 100%;
				}
			}
		}

		.library_summary {
			background-color: map-get($colors, 'gray_light');
			small {
				font-size: pxToRem(12);
				line-height: 1.45;
			}
		}

		.filters_wrapper {
			flex-wrap: wrap;

			.chip {
				margin: 0.15rem;
				padding: 0.25rem 0.5rem;
				font-size: pxToRem(12);
				line-height: 1;
				// background-color: map-get($colors, 'green_light');
				border-radius: 25px;
				border: 1px solid map-get($colors, 'green');
				font-weight: 600;
				cursor: pointer;
				transition: all 0.1s cubic-bezier(0.075, 0.82, 0.165, 1);
				&.active {
					background-color: map-get($colors, 'green');
					color: map-get($colors, 'light');
					transform: scale(1.02);
				}
				&:hover {
					transform: scale(1.01);
				}
			}
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
