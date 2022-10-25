<script lang="ts">
	import ResourceItem from "./ResourceItem.svelte";

	export let data: any;

	$: resources = data?.resources || [];
</script>

<section id="why-it-matters" class="why_matters_section section">
	<div class="container">
		<h2 class="text_dark mt_0 mb_4">Why it matters</h2>
		<span class="divider divider_2 divider_gray" />
		<div class="row mt_3">
			<div class="why_matters_section__message col col_8 col_md_12 mt_0">
				{@html data.message}
			</div>
			<div class="col col_4 col_md_12">
				<a href="/resources?type=4" class="btn btn_outline_gray text_dark ml_auto">See All</a>
			</div>
		</div>
		<div class="articles_row row">
			{#each resources as res}
				<div class="col col_4 col_md_12">
					<ResourceItem data={res}></ResourceItem>
				</div>
			{/each}
		</div>
	</div>
</section>
<style lang="scss" scoped>
	$md: map-get($grid-breakpoints, 'md');
	.why_matters_section {
		min-height: 100vh !important;
		background-color: #e4e8ef;
		display: flex !important;
		align-items: center;
		justify-content: center;
		padding-top: 3rem !important;

		&__message {
			:global {
				p {
					margin: 0;
				}
			}
		}

		.articles_row {
			margin-top: 2rem;
		}
		@media (max-width: $md) {
			button {
				width: 100%;
			}
		}
	}
</style>