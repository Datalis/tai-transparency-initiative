<script>
	// Create a function to add the email address to the subscrition url
	function gotoSub() {
		// Get the email address from the input field
		// Add the email address to the subscription url
		let URI = "https://transparency-initiative.us8.list-manage.com/subscribe?u=3225c2c32fc6c7023ca721588&id=1a5ff28f1e"
		// @ts-ignore
		const subemail = document?.getElementById("subemail").value;
		if(subemail){
			URI = URI + "&MERGE0=" + subemail
		}
		// Open the subscription url in a new tab
		window.open(URI, '_blank');
	}
</script>
<section class="subscribe_section section bg_light">
	<div class="container">
		<div class="subscribe_section__panel">
			<h2 class="text_center">Keep updated with <br /> TAI WEEKLY</h2>
			<span class="font_light text_center"
				>Everything you need to know about transparency, accountability <br /> and participation, delivered
				to your inbox.</span
			>

			<form class="mt_5">
				<div class="form_control mb_0">
					<input type="email" placeholder="Email" name="" id="subemail" />
				</div>
				<button on:click={gotoSub} style="cursor: pointer" class="btn btn_blue">Subscribe</button>
			</form>
		</div>
	</div>
</section>

<style lang="scss">
	$md: map-get($grid-breakpoints, 'md');

	.subscribe_section {
		min-height: 400px;

		@media (max-width: $md) {
			height: auto;
		}

		&__panel {
			background-color: map-get($colors, 'gray_light');
			height: 100%;
			min-height: 400px;
			border-radius: 15px;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			padding-top: pxToRem(50);
			padding-bottom: pxToRem(50);

			@media screen and (max-width: $md) {
				padding-left: 1rem;
				padding-right: 1rem;
			}

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
					padding: 0.56rem 1.25rem;
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
