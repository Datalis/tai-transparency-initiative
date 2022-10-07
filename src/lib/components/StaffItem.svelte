<script>
	import PersonImg from '$lib/assets/images/person.png';
	import ViewMoreIcon from './ViewMoreIcon.svelte';

	export let isExpanded = false;

	const toggle = () => (isExpanded = !isExpanded);
</script>

<div class="staff_item_wrapper display_flex align_start">
	<div class="staff_item" class:expanded={isExpanded}>
		<div class="display_flex">
			<div class="img_wrapper">
				<img src={PersonImg} alt="" />
			</div>
			<div class="content_wrapper display_flex flex_column">
				<h4 class="text_dark mt_0 mb_2">Michael Jarvis</h4>
				<small class="text_dark text_uppercase">EXECUTIVE DIRECTOR</small>
				<p class="content_wrapper__text font_regular">
					Michael Jarvis joined TAI after almost two decades working on different aspects of the
					global good governance and development agenda. He has led the development of TAIʼs new
					strategy and approach, and directs engagement across the new priorities for the donor
					members. Prior to joining TAI in 2016, Michael was the Global Lead for Extractives
					Governance within the World Bank Groupʼs Governance Global Practice. <br /><br /> He led the
					institutionʼs programming to reinforce knowledge, learning and innovative approaches to strengthening
					good governance in the critical oil, gas and mining sectors. Overall, Michael worked over ten
					years with the World Bank in a variety of roles relating to anti corruption, private sector
					partnerships for development, and multi-stakeholder governance. This included a focus on contracting
					issues through which he helped shepherd development of a new global initiative on Open Contracting
					to promote better outcomes from the estimated $9.5 trillion in public-private contracts globally.
				</p>
			</div>
		</div>
		<p class="staff_item__text font_regular">
			Michael Jarvis joined TAI after almost two decades working on different aspects of the global
			good governance and development agenda. He has led the development of TAIʼs new strategy and
			approach, and directs engagement across the new priorities for the donor members. Prior to
			joining TAI in 2016, Michael was the Global Lead for Extractives Governance within the World
			Bank Groupʼs Governance Global Practice. <br /><br /> He led the institutionʼs programming to reinforce
			knowledge, learning and innovative approaches to strengthening good governance in the critical
			oil, gas and mining sectors. Overall, Michael worked over ten years with the World Bank in a variety
			of roles relating to anti corruption, private sector partnerships for development, and multi-stakeholder
			governance. This included a focus on contracting issues through which he helped shepherd development
			of a new global initiative on Open Contracting to promote better outcomes from the estimated $9.5
			trillion in public-private contracts globally.
		</p>
	</div>
	<button class="mt_3" on:click={toggle}>
		<ViewMoreIcon isOpen={isExpanded} />
	</button>
</div>

<style lang="scss" scoped>
	$transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
	$sm: map-get($grid-breakpoints, 'sm');
	.staff_item {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 4rem;
		transition: all 0.4s ease;

		&__text {
			display: none;
			opacity: 0;
			overflow: hidden;
			max-height: 0;
			transition: max-height 0.4s ease, opacity 0.35s ease, visibility 0.4s, margin 0.6s ease;
			font-weight: 300;
			font-size: pxToRem(18);
			margin: 0;
		}

		@media (max-width: $sm) {
			padding-left: 0rem;
			flex-grow: 1;
			&__text {
				display: inherit;
			}
		}

		.img_wrapper {
			margin-right: 3rem;
			width: 30%;
			min-width: 140px;
			border-radius: 15px;
			overflow: hidden;
			position: relative;
			width: 140px;
			height: 140px;
			flex-shrink: 1;
			transition: height 0.5s ease, width 0.5s ease, margin 0.4s ease, transform 0.3s ease;
			transform: translate3d(0, 0, 0);
			transform-origin: top right;
			will-change: auto;

			@media (max-width: $sm) {
				width: 120px;
				height: 120px;
				min-width: 120px;
				margin-right: 1rem;
				transform-origin: top left;
			}

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				object-position: center;
			}
		}

		.content_wrapper {
			flex-shrink: 0;
			width: 70%;
			min-height: 100px;
			padding-top: 2rem;
			@media (max-width: $sm) {
				padding-top: 0;
				flex-grow: 1;
				&__text {
					display: none;
				}
				h4 {
					font-size: pxToRem(30) !important;
				}
			}
			h4 {
				font-size: pxToRem(35);
			}

			&__text {
				font-weight: 300;
				font-size: pxToRem(18);
				opacity: 0;
				overflow: hidden;
				max-height: 0;
				transition: max-height 0.4s ease, opacity 0.3s ease, visibility 0.4s;
			}
		}

		&.expanded {
			.staff_item__text {
				opacity: 1;
				max-height: 100vh;
				margin-top: 1rem;
			}

			.img_wrapper {
				margin-top: 2rem;
				transform: scale(1.5);
				@media (max-width: $sm) {
					margin-top: 0;
					transform: none;
				}
			}

			.content_wrapper {
				min-height: auto;
				&__text {
					opacity: 1;
					max-height: 100vh;
				}
			}
		}
	}
</style>
