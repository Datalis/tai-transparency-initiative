<script lang="ts">
	import JoinImg from '$lib/assets/images/join-tai-2.webp';
	import IntersectionObserver from './IntersectionObserver.svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	export let form: any;
</script>

<section id="join" class="join_section section">
	<IntersectionObserver let:top>
		<div class="wrapper" class:pinned={false}>
			<div class="container">
				<div class="row">
					<div class="col col_7 col_lg_12">
						<div class="display_flex flex_column align_center h_100">
							<img class="join_img my_auto" src={JoinImg} alt="" />
						</div>
					</div>
					<div class="col col_5 col_lg_12">
						<div class="display_flex flex_column justify_center h_100">
							<h2 class="mb_4 font_bold mt_0 text_dark">Join TAI</h2>
							<img class="join_img__mobile my_auto" src={JoinImg} alt="" />
							<div class="divider divider_blue_light divider_2" />
							<p class="mt_4 font_light text_dark">
								The TAI secretariat is here to help and can explain all that is on offer. If you are new to this field, scoping potential new investments, looking for evidence of what's working, or simply looking for a space to compare notes with fellow funders of all types, please reach out.
							</p>
							<h6 class="mb_4 text_dark">Let the TAI Secretariat know how we can help</h6>
							<form action="{$page.url.pathname}?/join" method="post" use:enhance>
								<div class="form_control">
									<input
										type="text"
										class="form_control__input"
										name="name"
										id="name"
										placeholder="Full name"
										value={form?.name ?? ''}
									/>
									{#if form?.nameError}
										<small class="text_danger">The name field is required</small>
									{/if}
								</div>
								<div class="form_control mt_4">
									<input
										type="email"
										class="form_control__input"
										name="email"
										id="email"
										placeholder="Email"
										value={form?.email ?? ''}
									/>
									{#if form?.emailError}
										<small class="text_danger">The email field is required</small>
									{/if}
								</div>
								<div class="form_control form_control_check mt_4 text_dark">
									<label for="subscribe">
										<input
											name="subscribe"
											class="form_control__input"
											id="subscribe"
											type="checkbox"
										/>
										Subscribe to TAI's Weekly
									</label>
								</div>
								<button class="btn btn_dark mt_4" type="submit">Get in Touch</button>
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
		//background: #59ebcf;
		position: relative;
		z-index: 0;
		padding-top: 0 !important;
		padding-bottom: 0 !important;
		min-height: 100vh;
	}
	.join_section .wrapper {
		// background: #59ebcf;
		padding-top: pxToRem(10);
		padding-bottom: pxToRem(25);
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100%;
		min-height: 100vh;
		z-index: -1;
		display: flex;
		flex-direction: column;
		align-items: center;

		.container {
			margin: auto !important;
		}

		.join_img {
			width: 100%;
			display: none;
			padding-right: 2rem;

			@media (min-width: $lg){
				display: block;
			}
		}

		.join_img__mobile {
			width: 100%;
			display: block;

			@media (min-width: $lg){
				display: none;
			}
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
