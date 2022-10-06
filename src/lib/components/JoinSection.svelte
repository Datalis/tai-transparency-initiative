<script lang="ts">
	import JoinImg from '$lib/assets/images/join.png';
</script>

<section class="join_section">
	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="col col_7 col_lg_12">
					<div class="h_100 display_flex flex_column">
						<img class="join_section__img my_auto" src={JoinImg} alt="" />
					</div>
				</div>
				<div class="col col_5 col_lg_12">
					<div class="display_flex flex_column justify_center h_100">
						<h2 class="mb_4 font_bold mt_0">Join TAI</h2>
						<div class="divider divider_light divider_2" />
						<p class="mt_4 font_light">
							We invite <strong>FUNDERS</strong> to join our conversations. If you are new to this field
							or looking to complement your portfolio, we are here to help. The TAI secretariat can orient
							you to the current landscape and match your interests with individuals and organizations
							leading relevant programming.
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
</section>

<style lang="scss" scoped>
	$sm: map-get($grid-breakpoints, 'sm');

	.join_section {
		min-height: 100vh !important;
		position: relative;
		padding: 0 !important;
		z-index: 0;

		.divider {
			width: 100px;
		}

		p {
			line-height: 1.4;
		}
	}
	.join_section .wrapper {
		// min-height: 100vh;
		background: #59ebcf;
		padding-top: 2rem;
		padding-bottom: 2rem;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: -1;
		padding-bottom: 2rem;

		@media (max-width: $sm) {
			.col {
				margin-top: 2rem;
			}

			button {
				width: 100%;
			}
		}
	}
</style>
