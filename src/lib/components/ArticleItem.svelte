<script>
	import LinkIcon from '$lib/assets/icons/link.svg?component';
	import ArticleImg from '$lib/assets/images/blue_placeholder.png';
</script>

<div class="article_item">
	<div class="article_item__image">
		<img src={ArticleImg} alt="" />
	</div>
	<span class="article_item__resume mt_3">
		Accountability Initiative on building capacity towards responsive government
	</span>
	<a href="/" class="text_gray font_bold mt_4 display_flex align_center"
		><small>Read More</small>
		<LinkIcon class="ml_1" width="18" height="18" style="fill: var(--gray)" /></a
	>
</div>

<style lang="scss">
	$gray: map-get($colors, 'gray');

	.article_item {
		display: flex;
		flex-direction: column;
		//padding: 1rem;

		--gray: #{$gray};

		&__image {
			overflow: hidden;
			border-radius: 15px;
		}

		&__resume {
			font-size: 22px;
			line-height: 35px;
			font-weight: 400;
		}

		&__image img {
			width: 100%;
			height: auto;
			object-fit: cover;
			object-position: center;
		}
	}
</style>
