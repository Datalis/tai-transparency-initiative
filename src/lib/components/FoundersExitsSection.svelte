<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	import ConnectingDots from './ConnectingDots.svelte';

	export let form: any;
</script>

<section id="founders-exits" class="founders_section section mt_5 bg_gray_light text_dark">
	<div class="connecting_dots">
		<ConnectingDots height={200} dotSpeed={0.1} dotRadius={8} dotCount={16} dotConnectionDistance={210} color={{r: 169, g: 170, b: 189}}/>
	</div>
	<div class="connecting_dots">
		<ConnectingDots height={200} dotSpeed={1} dotRadius={5} dotCount={16} dotConnectionDistance={210} color={{r: 137, g: 134, b: 255}}/>
	</div> 

	<div class="wrapper">
		<div class="container">
			<div class="row">
				<div class="col col_6 col_lg_12">
					<div class="display_flex flex_column justify_center box bg_white">
						<h6 class="mb_4">Let the TAI Secretariat know how we can help.</h6>
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
							<button class="btn btn_blue_dark mt_4" type="submit">Get in Touch</button>
						</form>
					</div>
				</div>
				<div class="col col_6 col_lg_12">
					<h2 class="mt_0 text_blue_dark">Funder exits</h2>
					<div class="divider divider_white divider_2" />
					<p class="mt_4 text_blue_dark">
						Funders regularly adapt their strategies, which often prompt investment in new issue
						areas, but also the tough decision to scale back or fully wind down funding for existing
						portfolios. These funding “exits” are a painful reality, especially for impacted
						grantees, but also other funders of that field. However, they can be managed in
						responsible ways.
						<br />
						<br />
						TAI members use our platform to regularly discuss how to handle exits, to encourage good
						practice, and to manage the knock on effects for a field. We have been trying to document
						learnings as in this
						<a
							class="text_green font_regular"
							href="https://cep.org/heading-for-the-exit-5-considerations/">blog</a
						>. Are you planning a funding exit? Interested in how other funder approaches? Donʼt
						hesitate to get in touch.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style lang="scss" scoped>
	$lg: map-get($grid-breakpoints, 'lg');
	.box {
		//background-color: #00deb3;
		border-radius: 15px;
		padding: 2rem 4rem;
		color: #0a132d;
		margin: 0px 2rem 0px 0px;
		// shadow to box
		box-shadow: 7px 7px 0px map-get($colors, "dark" );
		@media (max-width: $lg) {
			height: auto;
			margin: 1rem;
			padding: 1rem 2rem;
			button {
				width: 100%;
			}
		}
	}
	.founders_section {
		// background: map-get($colors, 'light');
		//background: #5c4aff;
		position: relative;
		z-index: 0;
		/*padding-top: 0 !important;
		padding-bottom: 0 !important;*/
		padding-block: 15rem;
		min-height: 100vh;
		color: #fff;
		display: flex !important;
		flex-direction: column;
		justify-content: center;
		overflow-y: hidden;
	}
	.founders_section .wrapper {
		// background: #59ebcf;
		padding-top: pxToRem(10);
		padding-bottom: pxToRem(25);
		top: 0;
		left: 0;
		bottom: 0;
		width: 100%;
		// min-height: 100vh;
		z-index: -1;

		@media (max-width: $lg) {
			height: auto;

			.row{
				flex-direction: column-reverse;
				margin: 0rem;
			}
			.col {
				margin-top: 1rem;
				width: 100%;
			}

			.box{
				margin: 0;
			}

			button {
				width: 100%;
			}
		}
	}

	.connecting_dots{
		position: absolute;
		bottom: -2rem;
		z-index: -1;
	}
</style>
