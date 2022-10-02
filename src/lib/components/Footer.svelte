<script>
	import LogoIcon from '$lib/assets/images/logo_icon.svg?component';
	import FacebookIcon from '$lib/assets/icons/facebook.svg?component';
	import TwitterIcon from '$lib/assets/icons/twitter.svg?component';
	import LinkedInIcon from '$lib/assets/icons/linkedin.svg?component';
	import XIcon from '$lib/assets/icons/x.svg?component';
	import LinkIcon from '$lib/assets/icons/link.svg?component';
</script>

<footer class="footer container">
	<div class="footer_content">
		<div class="row">
			<div class="col col_2">
				<LogoIcon width="72" height="72" />
			</div>
			<div class="col col_2">
				<h6 class="text_uppercase mt_0 mb_4">
					<a href="/" class="text_blue">Who we are</a>
				</h6>
				<ul>
					<li>
						<a href="/" class="text_gray">Goals</a>
					</li>
					<li>
						<a href="/" class="text_gray">Members</a>
					</li>
					<li>
						<a href="/" class="text_gray">Strategy</a>
					</li>
					<li>
						<a href="/" class="text_gray">TAI Team</a>
					</li>
					<li>
						<a href="/" class="text_gray">Join TAI</a>
					</li>
					<li>
						<a href="/faq" class="text_gray">FAQ's</a>
					</li>
				</ul>
			</div>
			<div class="col">
				<h6 class="text_uppercase text_blue mt_0 mb_4">What we fund and why</h6>
				<ul>
					<li class="">
						<a href="/" class="text_gray">What does TPA funding look like?</a>
					</li>
					<li>
						<a href="/" class="text_gray">Funding Data Library</a>
					</li>
					<li>
						<a href="/" class="text_gray">Why it matters</a>
					</li>
					<li>
						<a href="/" class="text_gray">Pathways to change</a>
					</li>
				</ul>
				<h6 class="text_uppercase text_blue mb_4">
					<a href="/how-we-fund" class="text_blue">How we fund</a>
				</h6>
				<ul>
					<li>
						<a href="/" class="text_gray">Our values</a>
					</li>
					<li>
						<a href="/" class="text_gray">Partner Support</a>
					</li>
					<li>
						<a href="/" class="text_gray">Funder Exits</a>
					</li>
					<li>
						<a href="/" class="text_gray">Participatory strategy</a>
					</li>
				</ul>
			</div>
			<div class="col">
				<h6 class="text_uppercase text_blue mt_0 mb_4">
					<a href="/how-we-work" class="text_blue">How we work together</a>
				</h6>
				<ul>
					<li>
						<a href="/" class="text_gray">Our model</a>
					</li>
					<li>
						<a href="/" class="text_gray">Featured Topic</a>
					</li>
					<li>
						<a href="/" class="text_gray">Past Topics</a>
					</li>
					<li>
						<a href="/" class="text_gray">Working with other groups</a>
					</li>
				</ul>
				<h6 class="text_uppercase text_blue mb_4">Resources</h6>
				<ul>
					<li>
						<a href="/" class="text_gray">Blogs</a>
					</li>
					<li>
						<a href="/" class="text_gray">Reports</a>
					</li>
					<li>
						<a href="/" class="text_gray">Collaboration Cases</a>
					</li>
					<li>
						<a href="/" class="text_gray">Think Piecces</a>
					</li>
				</ul>
			</div>
			<div class="col">
				<h6 class="text_uppercase text_blue mt_0 mb_4">Contact Us</h6>
				<span class="display_block text_gray">contact@transparency-initiative.org</span>
				<span class="display_block mt_4 text_gray"
					>1100 13th St NW, Suite 800 Washington, DC 20005, United States</span
				>
				<a href="/" class="display_flex align_center mt_2 text_dark mt_3 font_bold"
					><strong>View larger map</strong> <LinkIcon class="ml_2" fill="#212121" /></a
				>
				<div class="display_flex mt_4">
					<FacebookIcon class="mr_2" width="32" height="32" />
					<TwitterIcon class="mr_2" width="32" height="32" />
					<LinkedInIcon class="mr_2" width="32" height="32" />
					<!-- <XIcon width="32" height="32" /> -->
				</div>
			</div>
		</div>
	</div>
	<div class="footer_copyright">
		<div class="display_flex">
			<a href="/" class="text_dark font_bold">Privacy Policy / Photo Credits</a>
			<small class="text_gray ml_auto"
				>&copy; 2020 Transparency and Accountability Initiative, some rights reserved</small
			>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		&_content {
			padding: 2rem 0rem;
			ul li {
				margin-top: 0.25rem;
			}
			h6 a,
			h6 {
				font-size: 14px;
				line-height: 1;
				letter-spacing: normal;
				font-weight: 600;
			}
			a,
			span {
				font-size: 16px;
				line-height: 24px;
				font-weight: 400;
			}
		}
		&_copyright {
			padding: 1rem 0;
			a {
				font-size: 14px;
			}
		}
	}
</style>
