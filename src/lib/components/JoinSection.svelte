<script>
	import JoinImg from '$lib/assets/images/join.png';

	export let backgroundClass = 'bg_green';
</script>

<section class="join_section {backgroundClass}">
	<div class="container">
		<div class="row">
			<div class="col col_7">
				<img class="join_section__img" src={JoinImg} alt="" />
			</div>
			<div class="col col_5">
				<h3 class="mb_4 font_bold">Join TAI</h3>
				<div class="divider divider_light divider_4" />
				<p class="mt_4">
					We invite FUNDERS o join our conversations. If you are new to this field or looking to
					complement your portfolio, we are here to help. The TAI secretariat can orient you to the
					current landscape and match your interests with individuals and organizations leading
					relevant programming.
				</p>
				<h6 class="mb_4">Let the TAI Secretariat know how we can help.</h6>
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
					<div class="form_control form_control--inline mt_4">
						<label for="subscribe">Subscribe to TAI's Weekly</label>
						<input
							name="subscribe"
							class="form_control__input"
							id="subscribe"
							type="checkbox"
							checked
						/>
					</div>
					<button class="btn btn_blue mt_4">Get in Touch</button>
				</form>
			</div>
		</div>
	</div>
</section>

<style lang="scss" scoped>
	.join_section {
		.divider {
			width: 100px;
			margin-left: 0;
		}
	}
</style>
