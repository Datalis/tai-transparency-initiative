<script lang="ts">
	import JoinImg from '$lib/assets/images/join.png';
	import { onDestroy, onMount } from 'svelte';
	import { useViewportScroll } from 'svelte-motion';

	export let backgroundClass = 'bg_green';

	let showFixed = false;
	let ref: HTMLElement;

	const onScroll = () => {
		// const top = ref?.getBoundingClientRect().top;
		// showFixed = top > 0;
	};
</script>

<svelte:window on:scroll={onScroll} />

<section class="join_section" bind:this={ref}>
	<div class="wrapper" class:fixed={showFixed}>
		<div class="container ">
			<div class="row">
				<div class="col col_7">
					<div class="h_100 display_flex flex_column">
						<img class="join_section__img my_auto" src={JoinImg} alt="" />
					</div>
				</div>
				<div class="col col_5">
					<div class="display_flex flex_column justify_center h_100">
						<h2 class="mb_4 font_bold">Join TAI</h2>
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
	.join_section {
		min-height: 100vh !important;
		position: relative;
		.divider {
			width: 100px;
			margin-left: 0;
		}
		p {
			line-height: 35px;
		}
	}
	.join_section .wrapper {
		background: #59ebcf;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
		padding-bottom: 2rem;
	}
	.join_section .wrapper.fixed {
		position: fixed !important;
	}
</style>
