<script lang="ts">
	import JoinImg from '$lib/assets/images/join-tai-2.webp';
	import IntersectionObserver from './IntersectionObserver.svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import Logo from '$lib/assets/images/logo.svg?component';

	export let form: any;

	let showPopup = false;
</script>

{#if showPopup}
	<div id="popup" class="popup">
		<div class="popup-inner">
			<div class="logo navbar_brand display_flex mr_auto">
				<Logo />
			</div>
			<h1 class="title-popup">Our community!</h1>
			<p>
				As a funder collaborative, TAI members want to improve the effectiveness of current funding
				and scale investments in trust, accountability and inclusion around the globe. We invite all
				interested funders to join our conversations.If you are focused on climate action, join our
				discussions on climate accountability.
			</p>
			<p>
				If you focus on democracy, come to our conversations on citizen engagement and fostering
				accountable political leadership. Interested in accountable public finance? Sit in on one of
				our tax or sovereign debt working group sessions.
			</p>
			<p>
				The TAI secretariat is here to help and can explain all that is on offer. If you are new to
				this field, scoping potential new investments, looking for evidence of what's working, or
				simply looking for a space to compare notes with fellow funders of all types, please reach
				out.
			</p>
			<button class="close-button" on:click={() => (showPopup = false)}>
				<svg
					width="12"
					height="12"
					viewBox="0 0 14 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 13L13 1M1 1L13 13"
						stroke="#565656"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
	</div>
{/if}

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
						<div class="display_flex flex_column justify_center align_start h_100">
							<h2 class="mb_4 font_bold mt_0 text_dark">Join TAI</h2>
							<img class="join_img__mobile my_auto" src={JoinImg} alt="" />
							<div class="divider divider_2" />
							<p class="mt_4 font_light text_dark">
								The TAI secretariat is here to help and can explain all that is on offer. If you are
								new to this field, scoping potential new investments, looking for evidence of what's
								working, or simply looking for a space to compare notes with fellow funders of all
								types, please reach out. We offer core and associate membership options.
							</p>
							<button type="button" on:click={() => (showPopup = true)} class="more pl_0"
								>More details <svg
									width="11"
									height="11"
									viewBox="0 0 11 11"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M4.20412 9.61035L5.26462 10.6709L10.2949 5.6406L5.26462 0.610352L4.20412 1.67085L7.42387 4.8906H0.234375V6.3906H7.42387L4.20412 9.61035Z"
										fill="#736EFF"
									/>
								</svg></button
							>
							<h6 class="mb_4 mt_4 text_dark">Let the TAI Secretariat know how we can help</h6>
							<form action="{$page.url.pathname}?/join" method="post" class="w_100" use:enhance>
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
								<div class="form_control form_control_check mt_2 text_dark">
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
								<div class="actions mt_5">
									<button class="btn btn_dark" type="submit">Get in Touch</button>
								</div>
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

	.logo {
		width: 100px;
		margin: 0 auto;
		z-index: 9999;
	}

	.popup {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.7);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1001;
		overflow-y: auto;
	}

	.popup-inner {
		position: relative;
		background: white;
		padding: 40px 70px;
		width: 70%;
		max-width: 816px;
		border-radius: 8px;
		text-align: left;
	}

	.title-popup {
		font-family: Lato;
		font-size: 40px;
		font-weight: 600;
		/* line-height: 62px; */
		letter-spacing: -0.035em;
		text-align: center;
		margin: 20px auto 20px;
		color: #736eff;
	}

	.popup p {
		font-family: Lato;
		text-align: center;
		font-size: 17px;
		line-height: 1.5;
		letter-spacing: 0em;
		text-align: center;
		@media (max-width: 767px) {
			font-size: 14px;
		}

		@media (max-width: 479px) {
			font-size: 12px;
		}
	}

	.close-button {
		cursor: pointer;
		display: block;
		position: absolute;
		top: 1rem;
		right: 1rem;
	}

	@media (max-width: 767px) {
		.popup {
			overflow-y: auto; /* Habilita el desplazamiento para el popup */
		}

		.popup-inner {
			height: auto; /* O cualquier altura que desees para el contenido interno */
			overflow-y: scroll; /* Asegura que el contenido interno tenga desplazamiento */
			-webkit-overflow-scrolling: touch; /* Permite un desplazamiento suave en iOS */
			width: 90%;
			padding: 20px;
		}
	}

	.join_section {
		//background: #59ebcf;
		position: relative;
		z-index: 0;
		padding-top: 0 !important;
		padding-bottom: 0 !important;
		min-height: 100vh;

		.divider {
			background-color: #736eff !important;
		}
	}

	.more {
		color: #736eff;
		font-size: 16px;
	}

	.join_section .actions {
		display: flex;
		align-items: center;
		gap: 1rem;
		.btn.btn_dark {
			min-width: 100px;
		}
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


		p {
			font-size: pxToRem(14);
			font-weight: 300;
		}

		.join_img {
			width: 100%;
			display: none;
			padding-right: 2rem;

			@media (min-width: $lg) {
				display: block;
			}
		}

		.join_img__mobile {
			width: 100%;
			display: block;

			@media (min-width: $lg) {
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
