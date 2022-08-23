<script>
	// @ts-ignore
	import { Accordion, AccordionItem } from 'svelte-collapsible';
	import SubscribeSection from '$lib/components/SubscribeSection.svelte';
	import ViewMoreIcon from '$lib/components/ViewMoreIcon.svelte';

	let currentFAQ = 1;
</script>

<div>
	<section class="landing_section bg_blue">
		<div class="container">
			<div class="text_center">
				<h1 class="text_green">FAQ's</h1>
			</div>
		</div>
	</section>
	<section class="faq_list_section">
		<div class="container">
			<Accordion bind:key={currentFAQ}>
				<AccordionItem key="1">
					<div slot="header" class="display_flex align_center">
						<h3 class="mr_auto my_2">How does TAI work?</h3>
						<ViewMoreIcon isOpen={currentFAQ == 1} />
					</div>
					<div slot="body">
						<p class="text_gray">
							The Transparency and Accountability Initiative (TAI) is a collaborative of the worldʼs
							leading transparency and accountability philanthropic funders working toward a world
							where citizens are informed and empowered, governments are open and responsive, and
							collective action advances the public good.
						</p>
					</div>
				</AccordionItem>
				<div class="divider divider_blue divider_4 my_3" />
				<AccordionItem key="2">
					<div slot="header" class="display_flex align_center">
						<h3 class="mr_auto my_2">How does TAI work?</h3>
						<ViewMoreIcon isOpen={currentFAQ == 2} />
					</div>
					<div slot="body">
						<p class="text_gray">
							The Transparency and Accountability Initiative (TAI) is a collaborative of the worldʼs
							leading transparency and accountability philanthropic funders working toward a world
							where citizens are informed and empowered, governments are open and responsive, and
							collective action advances the public good.
						</p>
					</div>
				</AccordionItem>
				<div class="divider divider_blue divider_4 my_3" />
				<AccordionItem key="3">
					<div slot="header" class="display_flex align_center">
						<h3 class="mr_auto my_2">How does TAI work?</h3>
						<ViewMoreIcon isOpen={currentFAQ == 3} />
					</div>
					<div slot="body">
						<p class="text_gray">
							The Transparency and Accountability Initiative (TAI) is a collaborative of the worldʼs
							leading transparency and accountability philanthropic funders working toward a world
							where citizens are informed and empowered, governments are open and responsive, and
							collective action advances the public good.
						</p>
					</div>
				</AccordionItem>
				<div class="divider divider_blue divider_4 my_3" />
			</Accordion>
		</div>
	</section>
	<SubscribeSection />
</div>

<style>
	.landing_section {
		min-height: unset !important;
	}
	.faq_list_section {
		min-height: unset !important;
	}
</style>
