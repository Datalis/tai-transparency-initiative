<script lang="ts">
	import { PaginationNav } from 'svelte-paginate';
	import ArrowLeft from '$lib/assets/icons/arrow-large-left.svg?component';
	import ArrowRight from '$lib/assets/icons/arrow-large-right.svg?component';

	export let totalItems = 0;
	export let currentPage = 1;
	export let pageSize = 10;
</script>

<div class="pagination_wrapper">
	<PaginationNav
		{totalItems}
		{pageSize}
		{currentPage}
		limit={1}
		showStepOptions={true}
		on:setPage={(e) => (currentPage = e.detail.page)}
	>
		<span slot="prev">
			<ArrowLeft class="mr_2" width="24" />
			Previous
		</span>
		<span slot="next">
			Next
			<ArrowRight class="ml_2" width="24" />
		</span>
	</PaginationNav>
</div>

<style lang="scss">
	.pagination_wrapper {
		width: 100%;
		:global {
			.pagination-nav {
				box-shadow: none;
				background-color: transparent;
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				border-top: 1px solid map-get($colors, 'gray_light');
			}
			.pagination-nav .option {
				cursor: pointer;
				padding: 0.5rem 0.8rem;
				font-weight: 600;
				font-size: pxToRem(14);

				color: map-get($colors, 'gray');

				svg path {
					stroke: map-get($colors, 'gray') !important;
				}
			}
			.pagination-nav .option.prev {
				margin-right: auto;
			}
			.pagination-nav .option.next {
				margin-left: auto;
			}
			.pagination-nav .option.active {
				border-top: 2px solid map-get($colors, 'green');
				color: map-get($colors, 'green');
			}
			.pagination-nav .option.disabled {
				cursor: auto;
				color: map-get($colors, 'gray_light');
				svg path {
					stroke: map-get($colors, 'gray_light') !important;
				}
			}
		}
	}
</style>
