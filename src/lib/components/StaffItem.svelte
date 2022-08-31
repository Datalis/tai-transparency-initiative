<script>
	import PersonImg from '$lib/assets/images/person.png';
	import ViewMoreIcon from './ViewMoreIcon.svelte';

	export let isExpanded = false;

	const toggle = () => (isExpanded = !isExpanded);
</script>

<div class="staff_item_wrapper display_flex align_start">
	<div class="staff_item" class:expanded={isExpanded}>
		<div class="img_wrapper mr_5">
			<img src={PersonImg} alt="" />
		</div>
		<div class="content_wrapper display_flex flex_column">
			<h5 class="text_dark mt_0 mb_2">Michael Jarvis</h5>
			<small class="text_dark text_uppercase">EXECUTIVE DIRECTOR</small>
			<p class="font_regular">
				Michael Jarvis joined TAI after almost two decades working on different aspects of the
				global good governance and development agenda. He has led the development of TAIʼs new
				strategy and approach, and directs engagement across the new priorities for the donor
				members. Prior to joining TAI in 2016, Michael was the Global Lead for Extractives
				Governance within the World Bank Groupʼs Governance Global Practice. <br /><br /> He led the
				institutionʼs programming to reinforce knowledge, learning and innovative approaches to strengthening
				good governance in the critical oil, gas and mining sectors. Overall, Michael worked over ten
				years with the World Bank in a variety of roles relating to anti corruption, private sector partnerships
				for development, and multi-stakeholder governance. This included a focus on contracting issues
				through which he helped shepherd development of a new global initiative on Open Contracting to
				promote better outcomes from the estimated $9.5 trillion in public-private contracts globally.
			</p>
		</div>
	</div>
	<button class="mt_3" on:click={toggle}>
		<ViewMoreIcon isOpen={isExpanded} />
	</button>
</div>

<style lang="scss" scoped>
	$transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
	.staff_item {
		display: flex;
		align-items: flex-start;
		padding-top: 1rem;
		padding-bottom: 1rem;
		padding-left: 4rem;
		transition: all 0.4s ease;

		.img_wrapper {
			width: 30%;
			border-radius: 15px;
			overflow: hidden;
			position: relative;
			width: 100px;
			height: 100px;
			flex-shrink: 1;
			transition: height 0.5s ease, width 0.5s ease, margin 0.4s ease;
			transform: translate3d(0, 0, 0);
			will-change: auto;
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
		}
		.content_wrapper p {
			opacity: 0;
			overflow: hidden;
			max-height: 0;
			transition: max-height 0.4s ease, opacity 0.3s ease, visibility 0.4s;
		}

		&.expanded {
			.img_wrapper {
				margin-top: 2rem;
				width: 150px;
				height: 150px;
			}

			.content_wrapper {
				min-height: auto;
				p {
					opacity: 1;
					max-height: 100vh;
				}
			}
		}
	}
</style>
