<script>
	import LinkIcon from '$lib/assets/icons/link.svg?component';
	import ArticleImg from '$lib/assets/images/blue_placeholder.png';
</script>

<div class="article_item">
	<div class="article_item__image">
		<img src={ArticleImg} alt="" />
	</div>
	<span class="mt_3">
		Accountability Initiative on building capacity towards responsive government
	</span>
	<a href="/" class="text_dark font_bold mt_4"
		>Read More <LinkIcon class="ml_1" width="12" height="12" /></a
	>
</div>

<style lang="scss">
	.article_item {
		display: flex;
		flex-direction: column;
		//padding: 1rem;
		&__image {
			overflow: hidden;
			border-radius: 15px;
		}
		&__image img {
			width: 100%;
			height: auto;
			object-fit: cover;
			object-position: center;
		}
	}
</style>
