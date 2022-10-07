<section class="subscribe_section section bg_light">
	<div class="container">
		<div class="subscribe_section__panel bg_panel p_4">
			<h2 class="text_center">Keep updated with <br /> TAI WEEKLY</h2>
			<span class="font_light text_center"
				>Everything you need to know about transparency, accountability <br /> and participation, delivered
				to your inbox.</span
			>

			<form class="mt_5">
				<div class="form_control mb_0">
					<input type="email" placeholder="Email" name="" id="" />
				</div>
				<button class="btn btn_blue">Subscribe</button>
			</form>
		</div>
	</div>
</section>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');

	.subscribe_section {
		min-height: 400px;
		padding-top: 2rem;

		@media (max-width: $md) {
			height: auto;
		}

		&__panel {
			height: 100%;
			min-height: 400px;
			border-radius: 15px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-top: 2rem;
			padding-bottom: 2rem;

			h2 {
				margin-top: 0;
			}

			form {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: center;

				.form_control {
					margin-right: 1rem;
				}
				.form_control input {
					border-radius: 35px;
					padding: 0.7rem 1.25rem;
				}

				@media (max-width: $md) {
					flex-direction: column;
					.form_control {
						margin-right: 0;
					}
					.form_control,
					.btn {
						flex-grow: 1;
						width: 100%;
					}
					.btn {
						margin-top: 1rem;
					}
				}
			}
		}
	}
</style>
