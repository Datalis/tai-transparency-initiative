<script>
	import LinkIcon from '$lib/assets/icons/link.svg?component';
	import FordImg from '$lib/assets/images/ford.png';
</script>

<div class="member_item">
	<div class="img_wrapper">
		<img src={FordImg} alt="" />
	</div>
	<div class="content_wrapper">
		<div class="display_flex">
			<button class="btn btn_small btn_blue mr_4"> STRATEGY </button>
			<button class="btn btn_small mr_4"> FEATURED PROJECT </button>
			<button class="btn btn_small"> CONTACT </button>
		</div>
		<p>
			Itʼs only when people become aware, have pathways for action, and engage, that governments are
			held in account. Our three interconnected strategies focus on expanded participation,
			equitable resources and powerful engagement.
		</p>
		<a href="/" class="text_dark mt_auto"
			>Learn more <LinkIcon class="ml_2" width="12" height="12" />
		</a>
	</div>
</div>

<style lang="scss" scoped>
	$blue: map-get($colors, 'blue');
	.member_item {
		display: flex;
		height: 200px;
		.img_wrapper {
			background-color: $blue;
			width: 30%;
			height: 100%;
			border-radius: 15px;
			display: flex;
			img {
				height: 100%;
				margin: auto;
			}
		}
		.content_wrapper {
			width: 70%;
			height: 100%;
			display: flex;
			flex-direction: column;
			padding-bottom: 1rem;
			padding-left: 2rem;
		}
	}
</style>
