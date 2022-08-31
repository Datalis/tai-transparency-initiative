<script>
	import FacebookIcon from '$lib/assets/icons/facebook-simple.svg?component';
</script>

<div class="resource_item">
	<div class="resource_item__wrapper">
		<div class="resource_item__wrapper--left">
			<div class="img_wrapper">
				<span class="category_tag">Some</span>
				<img src="" alt="" class="image" />
			</div>
			<div class="social_links">
				<span class="icon">
					<FacebookIcon width="18" height="18" fill="white" />
				</span>
				<span class="icon">
					<!-- <FacebookIcon width="18" height="18" fill="white" /> -->
				</span>
				<span class="icon">
					<!-- <FacebookIcon width="18" height="18" fill="white" /> -->
				</span>
			</div>
		</div>
		<div class="resource_item__wrapper--right">
			<small class="text_gray text_uppercase">March 29, 2022</small>
			<h3 class="text_green mt_3 mb_4">Who receives over $500m in TPA grants?</h3>
			<small class="text_gray">By <a href="/" class="text_gray">Author name</a> (Role at TAI)</small
			>
			<p>
				We also wanted to share with you our updated TAIʼs grants database, covering our memberʼs
				TPA-related grants active in 2021. We are working on a short series of blogs related funding
				trends, both of TAI and more broadly. Here is the first!
			</p>
		</div>
	</div>
</div>

<style lang="scss" scoped>
	.resource_item {
		&__wrapper {
			display: flex;
			align-items: stretch;
			padding-top: 1rem;
			padding-bottom: 1rem;
			&--left {
				width: 30%;
				flex-shrink: 0;
				display: flex;
				flex-direction: column;
				.img_wrapper {
					position: relative;
					background-color: map-get($colors, 'panel');
					height: 100%;
					border-radius: 15px;
					.category_tag {
						position: absolute;
						left: 0;
						top: 0;
						background-color: map-get($colors, 'green');
						padding: 0.5rem 2rem;
						text-transform: uppercase;
						font-weight: 700;
						font-size: 14px;
						color: #fafafa;
					}
				}
				.social_links {
					display: flex;
					align-items: center;
					margin-top: 1rem;
					.icon {
						background-color: map-get($colors, 'gray');
						border-radius: 50%;
						width: 32px;
						height: 32px;
						display: flex;
						align-items: center;
						justify-content: center;
					}
					.icon + .icon {
						margin-left: 0.5rem;
					}
				}
			}
			&--right {
				padding-left: 3rem;
				flex-grow: 1;
				a {
					text-decoration: underline;
				}
			}
		}
	}
</style>
