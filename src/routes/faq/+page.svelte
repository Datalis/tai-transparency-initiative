<script lang="ts">
	import { Accordion, AccordionItem } from 'svelte-collapsible';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ViewMoreIcon from '$lib/components/ViewMoreIcon.svelte';
	import { afterNavigate } from '$app/navigation';
	import type { PageData } from '.svelte-kit/types/src/routes/resources/$types';

	let currentFAQ = 0;

	export let data: any;

	$: faqs = data.FAQItem || [];

	afterNavigate(() => {
		window.scrollTo(0, 0);
	});
</script>

<div class="page">
	<section class="landing_section section bg_blue">
		<div class="container">
			<div class="text_center">
				<h1 class="text_green">FAQ's</h1>
			</div>
		</div>
	</section>
	<section class="faq_list_section section bg_light">
		<div class="container">
			<Accordion bind:key={currentFAQ}>
				{#each faqs as faq, index}
					<AccordionItem key={index + 1}>
						<div slot="header" class="display_flex align_center">
							<h3 class="mr_auto my_2">{faq?.title}</h3>
							<ViewMoreIcon isOpen={currentFAQ == 1} />
						</div>
						<div slot="body" class="text_gray">
							{@html faq?.message}
						</div>
					</AccordionItem>
					<div class="divider divider_blue divider_2 my_3" />
				{/each}
			</Accordion>
		</div>
	</section>
	<SubscribeSection />
</div>

<style lang="scss">
	.landing_section {
		min-height: unset !important;
		padding-top: 100px !important;
	}
	.faq_list_section {
		min-height: unset !important;
		.divider {
			width: 100% !important;
		}
	}
</style>
