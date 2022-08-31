<script>
	import PlaceholderImg from '$lib/assets/images/placeholder-1.png';
	import ArticleImg from '$lib/assets/images/article-img.jpg';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import FacebookIcon from '$lib/assets/icons/facebook-simple.svg?component';
	import LinkIcon from '$lib/assets/icons/link.svg?component';
</script>

<article id="resource" class="page">
	<section class="heading_section bg_blue">
		<div class="container">
			<div class="row">
				<div class="col_7">
					<span class="text_light text_uppercase">TPA FULL DISCLOSURE</span>
					<h1 class="text_green">
						World Justice Project Team talks expanding access to justice and strengthening the rule
						of law
					</h1>
					<small class="text_gray font_light">
						By <a href="/" class="text_gray">Oluwabusayomi Sotunde</a> (Communications fellow at TAI)
					</small>
				</div>
				<div class="col_5">
					<img src={PlaceholderImg} class="" alt="" />
				</div>
			</div>
		</div>
	</section>
	<section class="content_section">
		<div class="container">
			<div class="row">
				<div class="col_8">
					<p>
						<a href="/" class="text_gray">World Justice Project</a> the convener of the World
						Justice Challenge, a global competition that identifies, recognize, and support
						innovative rule of law changemakers at the local level and bring them together to share
						ideas, strategies, and tactics for reform. Two of key people working on this program are
						Killian Dorier, WJPʼs Senior Program Associate for Engagement at WJP and Ted Piccone, an
						expert on global democracy and human rights policies and WJPʼs Chief Engagement Officer.
						<br />
						<br />
						We caught up with Killian and Ted and spoke on advancing and stimulating global rule of law
						change, opportunities and gaps in expanding access to justice and strengthening the rule
						of law, and the importance of collaboration among field actors on legislative reforms and
						the rule of law.
						<br />
						<br />
						<strong>
							Please tell us more about yourself, your interests (the issues you care about), and
							motivation for working in the transparency, participation, and accountability (TPA)
							field?
						</strong>
						<img src={ArticleImg} class="w_100" alt="" />
						<strong>
							How important is collaboration to the work you do around legislative reforms and the
							rule of law?
						</strong>
						<br />
						<br />
						<em class="text_green mr_1">Ted:</em> Collaboration is essential to our entire theory of
						change and work program. As a promoter and convenor of initiatives on the rule of law, our
						approach is centered on multidisciplinary collaboration with a specific focus on people-centered
						justice. We do this in two principal ways. First, our methodology for collecting data on
						the rule of law for our Rule of Law Index seeks to capture how justice, rights and accountable
						and open governance are experienced in peopleʼs daily lives through household surveys and
						practitioner expert questionnaires, not by reading legal codes and regulations. This people-centered
						approach is a hallmark of all of WJPʼs data products, which also include research focused
						on access to civil justice globally, criminal justice in Mexico, and rule of aw in Afghanistan
						to name just a few.
					</p>
					<div class="connect_block mt_5">
						Love to hear more from Killian and Ted? Connect with Killian on Twitter at
						@dorier_killian and Ted at @piccone_ted. You can also follow-up with World Justice
						Project on Twitter at @The WJP
					</div>
					<div class="share_block">
						<h5 class="mr_3">Share this article</h5>
						<div class="divider divider_dark divider_4 mr_3" />
						<span class="share_icon">
							<FacebookIcon width="14" height="14" fill="#fff" />
						</span>
						<span class="share_icon ml_2">
							<FacebookIcon width="14" height="14" fill="#fff" />
						</span>
						<span class="share_icon ml_2">
							<FacebookIcon width="14" height="14" fill="#fff" />
						</span>
					</div>
				</div>
				<div class="col_4">
					<div class="subscribe_block">
						<h5 class="font_regular mb_3 mt_0">Keep updated with TAI weekly</h5>
						<p>
							Everything you need to know about transparency, accountability and participation,
							delivered to your inbox.
						</p>
						<div class="form_control mt_4">
							<input type="email" placeholder="Email Address" />
						</div>
						<button class="btn btn_blue mt_3">Subscribe</button>
					</div>
					<h5 class="mt_5 mb_4">You may also like</h5>
					<div class="divider divider_green divider_4 mb_4" />
					<div class="related_articles_list">
						<a href="/" class="related_article_item">
							<div class="img_wrapper">
								<img alt="" />
							</div>
							<span class="text_dark my_3 font_bold">
								Katharine Knox on movement- building in the TPA (transparency, participation, and
								accountability) sector
							</span>
							<small>
								<a href="/" class="text_green">Read More <LinkIcon class="ml_1" stroke="green" /></a
								>
							</small>
						</a>
						<a href="/" class="related_article_item">
							<div class="img_wrapper">
								<img alt="" />
							</div>
							<span class="text_dark my_3 font_bold">
								Katharine Knox on movement- building in the TPA (transparency, participation, and
								accountability) sector
							</span>
							<small>
								<a href="/" class="text_green">Read More <LinkIcon class="ml_1" stroke="green" /></a
								>
							</small>
						</a>
					</div>
				</div>
			</div>
		</div>
	</section>
	<SubscribeSection />
</article>

<style lang="scss">
	.heading_section {
		min-height: unset !important;
	}
	.heading_section a {
		text-decoration: underline;
	}
	.heading_section .row {
		align-items: center;
	}
	.content_section a {
		text-decoration: underline;
	}
	.content_section img {
		margin-top: 2rem;
		margin-bottom: 2rem;
		box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.075);
	}
	.content_section .connect_block {
		padding: 2rem;
		background-color: map-get($colors, 'green');
		border-radius: 10px;
	}
	.content_section .share_block {
		margin-top: 2rem;
		display: flex;
		align-items: center;
		.share_icon {
			width: 24px;
			height: 24px;
			background-color: map-get($colors, 'gray');
			border-radius: 50%;
			display: flex;
			align-items: center;
			justify-content: center;
		}
		.divider {
			flex-grow: 1;
		}
	}
	.content_section .subscribe_block {
		margin-top: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		background-color: map-get($colors, 'green');
		padding: 2rem;
		border-radius: 15px;
		.form_control,
		.btn {
			width: 100%;
		}
		.form_control input {
			border-radius: 25px;
		}
		.form_control input::placeholder {
			font-style: italic;
			text-align: center;
		}
	}
	.content_section .related_articles_list {
		.related_article_item {
			margin-top: 1.5rem;
			display: flex;
			flex-direction: column;
			text-decoration: none;
			a {
				text-decoration: none;
			}
			.img_wrapper {
				border-radius: 10px;
				height: 150px;
				background-color: map-get($colors, 'panel');
			}
		}
	}
</style>
