<script lang="ts">
	import ArticleItem from './ArticleItem.svelte';

	export let data: any;

	$: items = data?.PastFundingItem || [];
</script>

<section id="past-funding" class="past_funding_section section">
	<div class="container">
		<h2>{data?.title}</h2>
		<div class="divider divider_white divider_2" />
		<div class="row mt_4">
			{#each items as item}
				<div class="col col_4 col_md_12">
					<ArticleItem data={item} />
				</div>
			{/each}
		</div>
	</div>
</section>

<style lang="scss">
.past_funding_section {
	background-color: #f2f4f7;
	min-height: 100vh;
	z-index: 1;
}
</style>
