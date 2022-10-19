<script lang="ts">
	import JoinImg from '$lib/assets/images/news.webp';
	import IntersectionObserver from './IntersectionObserver.svelte';
</script>

<section class="join_section section">
	<IntersectionObserver let:top>
		<div class="wrapper" class:pinned={top > 0}>
			<div class="container">
				<div class="row">
					<div class="col col_7 col_lg_12">
						<div class="display_flex flex_column align_center h_100">
							<img class="join_img my_auto" src={JoinImg} alt="" />
						</div>
					</div>
					<div class="col col_5 col_lg_12">
						<div class="display_flex flex_column justify_center">
							<h2 class="mb_4 font_bold mt_0">Join TAI</h2>
							<div class="divider divider_light divider_2" />
							<p class="mt_4 font_light">
								We invite <strong>FUNDERS</strong> to join our conversations. If you are new to this
								field or looking to complement your portfolio, we are here to help. The TAI secretariat
								can orient you to the current landscape and match your interests with individuals and
								organizations leading relevant programming.
							</p>
							<h6 class="mb_4">Let the TAI Secretariat know how we can help</h6>
							<form action="">
								<div class="form_control">
									<input
										type="text"
										class="form_control__input"
										name="name"
										id="name"
										placeholder="Full name"
									/>
								</div>
								<div class="form_control mt_4">
									<input
										type="email"
										class="form_control__input"
										name="name"
										id="name"
										placeholder="Email"
									/>
								</div>
								<div class="form_control form_control_check mt_4">
									<label for="subscribe">
										<input
											name="subscribe"
											class="form_control__input"
											id="subscribe"
											type="checkbox"
											checked
										/>
										Subscribe to TAI's Weekly
									</label>
								</div>
								<button class="btn btn_blue mt_4">Get in Touch</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</IntersectionObserver>
</section>

<style lang="scss" scoped>
	$lg: map-get($grid-breakpoints, 'lg');

	.join_section {
		background: #59ebcf;
		position: relative;
		z-index: 0;
		padding-top: 0 !important;
		padding-bottom: 0 !important;
		min-height: 100vh;
	}
	.join_section .wrapper {
		// background: #59ebcf;
		padding-top: pxToRem(50);
		padding-bottom: pxToRem(50);
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		min-height: 100vh;
		z-index: -1;

		.join_img {
			width: 75%;
		}

		&.pinned {
			position: fixed;
		}

		@media (max-width: $lg) {
			height: auto;

			.col {
				margin-top: 2rem;
			}

			button {
				width: 100%;
			}
		}
	}
</style>
