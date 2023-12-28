<script lang="ts">
	import ConnectingDots from './ConnectingDots.svelte';
	import ResourceItem from './ResourceItem.svelte';

	export let resources: any;
</script>

<section id="resources" class="resources_section section">
	<div class="connecting_dots">
		<ConnectingDots height={100} dotSpeed={0.1} dotRadius={5} dotCount={26} dotConnectionDistance={140} color={{r: 229, g: 227, b: 255}}/>
	</div>
	<div class="connecting_dots">
		<ConnectingDots height={100} dotSpeed={1} dotRadius={4} dotCount={16} dotConnectionDistance={230} color={{r: 199, g: 197, b: 255}}/>
	</div>

	<div class="container">
		<div class="title align_center">
			<div class="flex-grow_1">
				<h2 class="mb_4">TAI Resources</h2>
			</div>
			<a href="/resources" class="btn btn_dark show_on_md_and_up">Explore Our Resources</a>
		</div>
		<div class="divider divider_2 divider_blue_light" />
		<div class="row mt_4">
			{#if resources}
				{#each resources as resource}
					<div class="col col_4 col_md_6 col_sm_12">
						<ResourceItem data={resource} />
					</div>
				{/each}
			{/if}
		</div>
		<a href="/resources" class="pop_out btn btn_dark show_on_md_and_down w_100 mt_3">Explore Our Resources</a>
	</div>
</section>

<style lang="scss">
	$sm: map-get($grid-breakpoints, 'sm');

	.pop_out{
		position: relative;
		z-index: 2;
	}

	.resources_section {
		display: flex;
		padding-bottom: 2.8rem !important;

		.title {
			display: flex;
		}

		@media (max-width: $sm) {
			.title {
				flex-direction: column;
				//margin-bottom: 2rem;
				align-items: start;
			}

			.col + .col {
				margin-top: 2rem;
			}
		}

		.divider {
			width: 100px;
			margin-left: 0;
		}

		.connecting_dots{
			position: absolute;
			bottom: -2rem;
			z-index: 0;
		}
	}
</style>
