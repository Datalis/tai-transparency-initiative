<script lang="ts">
	import { fade } from 'svelte/transition';
	import CloseCircleIcon from '$lib/assets/icons/close-circle.svg?component';
	import { clickOutside } from '$lib/utils/clickOutside';
	import { onMount } from 'svelte';
	import { gsap } from 'gsap/dist/gsap';

	let activeCog = -1;
	let activeCircle = -1;

	let windowWidth = 0;

	function toggleCog(index: number) {
		activeCog = index == activeCog ? -1 : index;
	}

	function toggleCircle(index: number) {
		activeCircle = index == activeCircle ? -1 : index;
	}

	onMount(() => {
		if (windowWidth > 768) {
			gsap
				.timeline({
					scrollTrigger: {
						trigger: '.pathways_section',
						pin: true,
						scrub: true,
						start: 'top top',
						end: '+=130%'
					}
				})
				.to('.pathways_section .wrapper', {
					yPercent: -10
				});
		}
	});
</script>

<svelte:window bind:innerWidth={windowWidth} />

{#if activeCircle == 1}
	<div
		class="pathways_section--overlay"
		transition:fade={{
			duration: 200
		}}
	>
		<div class="content container">
			<button class="content-close" on:click={() => toggleCircle(activeCircle)}>
				<CloseCircleIcon style="fill: #c7c1ff" />
			</button>
			<div class="mx_4">
				<h3 class="text_green">Global Influences</h3>
				<p>
					<strong>International Norms and Standards (e.g. disclosure, environmental, etc.)</strong>
					<br />
					<strong> Multi-Stakeholder Initiatives Internationally, and National Chapters </strong>
				</p>
			</div>
		</div>
	</div>
{/if}
{#if activeCircle == 2}
	<div
		class="pathways_section--overlay"
		transition:fade={{
			duration: 200
		}}
	>
		<div class="content container">
			<button class="content-close" on:click={() => toggleCircle(activeCircle)}>
				<CloseCircleIcon style="fill: #c7c1ff" />
			</button>
			<div class="mx_4">
				<h3 class="text_green">Accountability Actors</h3>
				<p>
					<strong>Government</strong> - lawyers, judges, auditor generals, parliamentary committees,
					etc.
				</p>
				<p>
					<strong>Outside Government</strong> - media, journalists, CSOs, local chapters on INGOs e.g.
					IBP, TI, etc. Some of these are “infomediaries” – i.e. focus on transmitting information.
				</p>
			</div>
			<blockquote>
				<h6 class="mb_2 mt_0 text_uppercase text_green">Context</h6>
				<p class="mt_0 mb_0">
					Civic Space: Rule of law, FOI, freedom of assembly, media & other freedoms, protection of
					constitutional rights
				</p>
			</blockquote>
			<ul class="mx_4">
				<h6 class="mb_2 mt_4 text_uppercase text_green">Behaviors</h6>
				<li>• Monitoring</li>
				<li>• Sanctioning (within gov. actors only)</li>
				<li>
					• Changing expectations / attitudes of responsibility of performance among citizens and
					officials
				</li>
			</ul>
		</div>
	</div>
{/if}
{#if activeCircle == 3}
	<div
		class="pathways_section--overlay"
		transition:fade={{
			duration: 200
		}}
	>
		<div class="content container">
			<button class="content-close" on:click={() => toggleCircle(activeCircle)}>
				<CloseCircleIcon style="fill: #c7c1ff" />
			</button>
			<div class="mx_4">
				<h3 class="text_green">Citizens</h3>
				<p>
					<strong> As accountability actors (monitoring, protesting, non-compliance, etc.) </strong>
				</p>
			</div>
			<br />
			<blockquote>
				<h6 class="mb_2 mt_0 text_uppercase text_green">Context</h6>
				<p class="mt_0 mb_0">
					<strong>Context:</strong> Free & fair elections, history of civic organization and state response
				</p>
			</blockquote>
		</div>
	</div>
{/if}
{#if activeCircle == 4}
	<div
		class="pathways_section--overlay"
		transition:fade={{
			duration: 200
		}}
	>
		<div class="content container">
			<button class="content-close" on:click={() => toggleCircle(activeCircle)}>
				<CloseCircleIcon style="fill: #c7c1ff" />
			</button>
			<div class="mx_4">
				<h3 class="text_green">Government Officials</h3>
				<ul>
					<li>• Elected</li>
					<li>• Technocrats</li>
					<li>• Front-line service providers</li>
				</ul>
			</div>
			<br />
			<blockquote>
				<h6 class="mb_2 mt_0 text_uppercase text_green">Context</h6>
				<p class="mt_0 mb_0">
					<strong>State Capacity:</strong> Government holding government accountable; tax collection
					infrastructure; degree of clientelism, etc.
				</p>
			</blockquote>
			<ul class="mx_4">
				<h6 class="mb_2 mt_4 text_uppercase text_green">Behaviors</h6>
				<li>• Policy making</li>
				<li>• Policy implementation / supervision</li>
				<li>• Fiscal management</li>
				<li>• Service delivery</li>
			</ul>
			<ul class="mx_4">
				<h6 class="mb_2 mt_4 text_uppercase text_green">Institutional outcomes</h6>
				<li>• Binding rules and regulations</li>
				<li>• Financial allocation to accountability systems</li>
				<li>• Functional monitoring systems</li>
				<li>• Credible sanction / reward systems</li>
			</ul>
		</div>
	</div>
{/if}

<section id="pathways-to-change" class="pathways_section section bg_blue_light">
	<div class="wrapper">
		<div class="container">
			<h2>Pathways to change</h2>
			<div class="divider divider_green divider_2 my_4" />
			<p class="mt_4 w_50">
				This represents critical causal pathways common to TAI donor members’ theories of change. It
				is in no way a representation of pathways to change for the Transparency, Participation and
				Accountability field as a whole.
			</p>

			{#if windowWidth < 768}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<svg
					class="pathways-svg pathways-svg-mobile show_on_md_and_down mt_4 mb_0"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 196.14 482"
					><defs>
						<style>
							.cls-1,
							.cls-10,
							.cls-11,
							.cls-12,
							.cls-13,
							.cls-14,
							.cls-2,
							.cls-3,
							.cls-4 {
								fill: none;
							}
							.cls-1,
							.cls-10,
							.cls-11,
							.cls-12,
							.cls-13,
							.cls-2,
							.cls-3,
							.cls-4 {
								stroke: #3d30bf;
								stroke-width: 2px;
							}
							.cls-2 {
								stroke-dasharray: 2.81 2.81;
							}
							.cls-3 {
								stroke-dasharray: 3.01 3.01;
							}
							.cls-4 {
								stroke-dasharray: 3.29 3.29;
							}
							.cls-5 {
								fill: #3d30bf;
							}
							.cls-15,
							.cls-6 {
								fill: #2bf9d1;
							}
							.cls-15,
							.cls-7,
							.cls-8 {
								isolation: isolate;
							}
							.cls-8,
							.cls-9 {
								font-size: 9.24px;
								fill: #051231;
							}
							.cls-15,
							.cls-8,
							.cls-9 {
								font-family: Lato-Bold, Lato;
								font-weight: 700;
							}
							.cls-10 {
								stroke-dasharray: 3.06 3.06;
							}
							.cls-11 {
								stroke-dasharray: 2.75 2.75;
							}
							.cls-12 {
								stroke-dasharray: 2.99 2.99;
							}
							.cls-13 {
								stroke-dasharray: 2.77 2.77;
							}
							.cls-14 {
								stroke: #cdc7ff;
								stroke-width: 0.75px;
							}
							.cls-15 {
								font-size: 7.26px;
							}
						</style></defs
					>
					<line class="cls-1" x1="57.9" y1="172.33" x2="56.4" y2="172.33" />
					<line class="cls-2" x1="53.59" y1="172.33" x2="21.27" y2="172.33" />
					<polyline class="cls-1" points="19.86 172.33 18.36 172.33 18.36 173.83" />
					<line class="cls-3" x1="18.36" y1="176.84" x2="18.36" y2="440" /><polyline
						class="cls-1"
						points="18.36 441.5 18.36 443 19.86 443"
					/>
					<line class="cls-4" x1="23.15" y1="443" x2="41.26" y2="443" />
					<line class="cls-1" x1="42.91" y1="443" x2="44.41" y2="443" />
					<polygon class="cls-5" points="43.51 439.91 48.86 443 43.51 446.09 43.51 439.91" />

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<g id="c1" class="pathways-circle" on:click={() => toggleCircle(1)}>
						<circle class="cls-5" cx="96.4" cy="38.5" r="37" />
						<circle class="cls-6" cx="94.9" cy="37" r="37" />
						<text class="cls-8" text-anchor="middle" x="94.9" y="37" alignment-baseline="central">
							<tspan x="94.9" dy="">Global</tspan>
							<tspan x="94.9" dy="1.2em">Influences</tspan>
						</text>
					</g>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<g id="c2" class="pathways-circle" on:click={() => toggleCircle(2)}>
						<circle class="cls-5" cx="96.56" cy="173.83" r="37" />
						<circle class="cls-6" cx="94.9" cy="172.33" r="37" />
						<text
							class="cls-8"
							text-anchor="middle"
							x="94.9"
							y="172.33"
							alignment-baseline="central"
						>
							<tspan x="94.9" dy="">Accountability</tspan>
							<tspan x="94.9" dy="1.2em">Actors</tspan>
						</text>
					</g>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<g id="c3" class="pathways-circle" on:click={() => toggleCircle(3)}
						><circle class="cls-5" cx="96.56" cy="309.28" r="37" /><circle
							class="cls-6"
							cx="94.9"
							cy="307.66"
							r="37"
						/>

						<text
							class="cls-8"
							text-anchor="middle"
							x="94.9"
							y="307.66"
							alignment-baseline="central"
						>
							<tspan x="94.9" dy="0.4em">Citizens</tspan>
						</text>
					</g>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<g id="c4" class="pathways-circle" on:click={() => toggleCircle(4)}
						><circle class="cls-5" cx="96.23" cy="445" r="37" /><circle
							class="cls-6"
							cx="94.9"
							cy="443"
							r="37"
						/>
						<text class="cls-8" text-anchor="middle" x="94.9" y="443" alignment-baseline="central">
							<tspan x="94.9" dy="">Goverment</tspan>
							<tspan x="94.9" dy="1.2em">Officials</tspan>
						</text>
					</g>

					<line class="cls-10" x1="94.9" y1="213.89" x2="94.9" y2="255.14" />
					<line class="cls-1" x1="94.9" y1="256.67" x2="94.9" y2="258.17" />
					<polygon class="cls-5" points="97.99 257.27 94.9 262.62 91.81 257.27 97.99 257.27" />
					<line class="cls-10" x1="94.9" y1="349.22" x2="94.9" y2="390.47" />
					<line class="cls-1" x1="94.9" y1="392" x2="94.9" y2="393.5" />
					<polygon class="cls-5" points="97.99 392.6 94.9 397.95 91.81 392.6 97.99 392.6" />
					<line class="cls-10" x1="94.9" y1="78.56" x2="94.9" y2="119.81" />
					<line class="cls-1" x1="94.9" y1="121.34" x2="94.9" y2="122.84" />
					<polygon class="cls-5" points="97.99 121.94 94.9 127.29 91.81 121.94 97.99 121.94" />
					<line class="cls-1" x1="143.17" y1="443" x2="144.67" y2="443" />
					<line class="cls-11" x1="147.42" y1="443" x2="168.06" y2="443" />
					<polyline class="cls-1" points="169.44 443 170.94 443 170.94 441.5" />
					<line class="cls-12" x1="170.94" y1="438.51" x2="170.94" y2="39.99" />
					<polyline class="cls-1" points="170.94 38.5 170.94 37 169.44 37" />
					<line class="cls-12" x1="166.67" y1="37" x2="134.79" y2="37" />
					<polygon class="cls-5" points="144.07 439.91 138.72 443 144.07 446.09 144.07 439.91" />

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<g
						id="g1"
						class="pathways-cog"
						class:active={activeCog == 1}
						on:click={() => toggleCog(1)}
						use:clickOutside
						on:click_outside={() => (activeCog = -1)}
					>
						<path
							id="g1-path"
							class="cls-14"
							d="M20.36,11.57l-.48,3-1.68.34a9.56,9.56,0,0,1-1.22,2l.42,1.68L14.92,20.4l-1.43-.94a8.93,8.93,0,0,1-2.28.55l-.89,1.49-3-.48L7,19.35a9.12,9.12,0,0,1-2-1.23l-1.7.4L1.53,16.1l.91-1.47a8.17,8.17,0,0,1-.55-2.28L.41,11.43l.46-3L2.55,8A8.54,8.54,0,0,1,3.78,6l-.4-1.7L5.8,2.58l1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.83,8.83,0,0,1,.55,2.28Z"
						/>
						<text id="g1-text" class="cls-15" transform="translate(8.06 14.2)">1</text>
					</g>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<g
						id="g2"
						class="pathways-cog"
						class:active={activeCog == 2}
						on:click={() => toggleCog(2)}
						use:clickOutside
						on:click_outside={() => (activeCog = -1)}
						><path
							class="cls-14"
							d="M69.38,105.51l-.48,3-1.68.33a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.17,8.17,0,0,1-2.28.55l-.89,1.49-3-.48L56,113.28a8.71,8.71,0,0,1-2-1.22l-1.7.39L50.54,110l.91-1.47a8,8,0,0,1-.55-2.28l-1.48-.91.46-3,1.68-.39a8.54,8.54,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.45.4,1.7a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.86,8.86,0,0,1,.55,2.27Z"
						/><text class="cls-15" transform="translate(57.25 108.13)">2</text></g
					>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<g
						id="g3"
						class="pathways-cog"
						class:active={activeCog == 3}
						on:click={() => toggleCog(3)}
						use:clickOutside
						on:click_outside={() => (activeCog = -1)}
						><path
							class="cls-14"
							d="M141.88,105.51l-.48,3-1.68.33a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.17,8.17,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.71,8.71,0,0,1-2-1.22l-1.7.39L123,110l.91-1.47a8,8,0,0,1-.55-2.28l-1.48-.91.46-3,1.68-.39a8.54,8.54,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55L132,95.4l3,.45.4,1.7a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.86,8.86,0,0,1,.55,2.27Z"
						/>
						<text class="cls-15" transform="translate(129.75 108.13)">3</text>
					</g>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<g
						id="g4"
						class="pathways-cog"
						class:active={activeCog == 4}
						on:click={() => toggleCog(4)}
						use:clickOutside
						on:click_outside={() => (activeCog = -1)}
						><path
							class="cls-14"
							d="M141.87,240.83l-.48,3-1.68.34a9.56,9.56,0,0,1-1.22,2l.42,1.67-2.48,1.81-1.43-.94h0a8.1,8.1,0,0,1-2.28.56l-.89,1.48-3-.47-.33-1.67a9.31,9.31,0,0,1-2-1.22l-1.7.39L123,245.37l.91-1.47a8.53,8.53,0,0,1-.55-2.28l-1.48-.92.46-3,1.67-.38a8.34,8.34,0,0,1,1.23-2h0l-.4-1.69,2.42-1.77,1.47.92a8.19,8.19,0,0,1,2.28-.56l.92-1.48,3,.47.4,1.68a7.92,7.92,0,0,1,2,1.23h0l1.68-.42,1.82,2.49-1,1.43a8.44,8.44,0,0,1,.55,2.28Z"
						/><text class="cls-15" transform="translate(129.74 243.46)">4</text></g
					>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<g
						id="g5"
						class="pathways-cog"
						class:active={activeCog == 5}
						on:click={() => toggleCog(5)}
						use:clickOutside
						on:click_outside={() => (activeCog = -1)}
						><path
							class="cls-14"
							d="M195.73,280.15l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68L190.29,289l-1.43-.94h0a8.55,8.55,0,0,1-2.28.56l-.89,1.48-3-.47-.33-1.68a8.71,8.71,0,0,1-2-1.22l-1.7.4-1.76-2.42.91-1.47a8.09,8.09,0,0,1-.55-2.28l-1.48-.92.46-3,1.67-.38a8.41,8.41,0,0,1,1.23-2h0l-.4-1.69,2.42-1.77,1.47.92a8.55,8.55,0,0,1,2.28-.56l.92-1.48,3,.47.4,1.68a8.75,8.75,0,0,1,2,1.23h0l1.68-.42,1.82,2.49-1,1.43a9,9,0,0,1,.55,2.28Z"
						/>
						<text class="cls-15" transform="translate(183.6 282.78)">5</text>
					</g>

					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<g
						id="g6"
						class="pathways-cog"
						class:active={activeCog == 6}
						on:click={() => toggleCog(6)}
						use:clickOutside
						on:click_outside={() => (activeCog = -1)}
						><path
							class="cls-14"
							d="M195.4,336.42l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68L190,345.25l-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48L182,344.2a8.75,8.75,0,0,1-2-1.23l-1.7.4L176.57,341l.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a8.75,8.75,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.93,8.93,0,0,1,.55,2.28Z"
						/><text class="cls-15" transform="translate(183.44 339.05)">6</text></g
					>

					<g
						id="g7"
						class="pathways-cog"
						class:active={activeCog == 7}
						on:click={() => toggleCog(7)}
						use:clickOutside
						on:click_outside={() => (activeCog = -1)}
						><path
							class="cls-14"
							d="M69.58,377.71l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.84-1.38h0a8.55,8.55,0,0,1-.56-2.28l-1.48-.92.46-3,1.69-.39a8.38,8.38,0,0,1,1.22-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.39,1.69a8.38,8.38,0,0,1,2,1.22h0l1.68-.42,1.81,2.48-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
						/><text class="cls-15" transform="translate(57.54 380.34)">7</text>
					</g>

					<g
						id="g8"
						class="pathways-cog"
						class:active={activeCog == 8}
						on:click={() => toggleCog(8)}
						use:clickOutside
						on:click_outside={() => (activeCog = -1)}
						><path
							class="cls-14"
							d="M141.87,377.76l-.48,3-1.68.34a9.31,9.31,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.93,8.93,0,0,1-2.28.55l-.89,1.49-3-.48-.33-1.67a9.12,9.12,0,0,1-2-1.23l-1.7.4L123,382.29l.91-1.47a8.53,8.53,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a9.12,9.12,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.18,8.18,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
						/><text class="cls-15" transform="translate(129.91 380.39)">8</text></g
					>

					<g id="tooltip1" class="pathways-tooltip" class:active={activeCog == 1}>
						<rect x="8" width="180" height="120" rx="5" />
						<foreignObject x="8" width="180" height="120">
							<p
								style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
							>
								What is the evidence that providing information or data produced by (inter)national
								bodies influences or enables accountability actors within the government to monitor
								government performance, sanction or reward performance, and manage expectations of
								citizens (and government) of their duties, responsibilities, and performance
								standards?
							</p>
						</foreignObject>

						<g class="cog">
							<path
								class="cls-14"
								d="M20.36,11.57l-.48,3-1.68.34a9.56,9.56,0,0,1-1.22,2l.42,1.68L14.92,20.4l-1.43-.94a8.93,8.93,0,0,1-2.28.55l-.89,1.49-3-.48L7,19.35a9.12,9.12,0,0,1-2-1.23l-1.7.4L1.53,16.1l.91-1.47a8.17,8.17,0,0,1-.55-2.28L.41,11.43l.46-3L2.55,8A8.54,8.54,0,0,1,3.78,6l-.4-1.7L5.8,2.58l1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.83,8.83,0,0,1,.55,2.28Z"
							/>
							<text class="cls-15" transform="translate(8.06 14.2)">1</text>
						</g>
					</g>

					<g id="tooltip2" class="pathways-tooltip" class:active={activeCog == 2}>
						<rect x="8" y="-25" width="180" height="130" rx="5" />
						<foreignObject x="8" y="-25" width="180" height="120">
							<p
								style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
							>
								What is the evidence that providing information or data produced by (inter)national
								bodies influences or enables accountability actors outside the government to monitor
								government performance, sanction or reward performance, and manage expectations of
								citizens (and government) of their duties, responsibilities, and performance
								standards?
							</p>
						</foreignObject>
						<g class="cog">
							<path
								class="cls-14"
								d="M69.38,105.51l-.48,3-1.68.33a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.17,8.17,0,0,1-2.28.55l-.89,1.49-3-.48L56,113.28a8.71,8.71,0,0,1-2-1.22l-1.7.39L50.54,110l.91-1.47a8,8,0,0,1-.55-2.28l-1.48-.91.46-3,1.68-.39a8.54,8.54,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.45.4,1.7a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.86,8.86,0,0,1,.55,2.27Z"
							/><text class="cls-15" transform="translate(57.25 108.13)">2</text>
						</g>
					</g>
					<g id="tooltip3" class="pathways-tooltip" class:active={activeCog == 3}>
						<rect x="8" y="-15" width="180" height="120" rx="5" />
						<foreignObject x="8" y="-15" width="180" height="120">
							<p
								style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
							>
								How do governments officials directly use information or data that is produced by
								(inter)national without going through any other accountability actors. (ex:
								ministries making data open/available and instating a FOI mechanism directly as
								result of the Open Government Partnership?).
							</p>
						</foreignObject>
						<g class="cog">
							<path
								class="cls-14"
								d="M141.88,105.51l-.48,3-1.68.33a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.17,8.17,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.71,8.71,0,0,1-2-1.22l-1.7.39L123,110l.91-1.47a8,8,0,0,1-.55-2.28l-1.48-.91.46-3,1.68-.39a8.54,8.54,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55L132,95.4l3,.45.4,1.7a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.86,8.86,0,0,1,.55,2.27Z"
							/>
							<text class="cls-15" transform="translate(129.75 108.13)">3</text>
						</g>
					</g>

					<g id="tooltip4" class="pathways-tooltip" class:active={activeCog == 4}>
						<rect x="8" y="120" width="180" height="120" rx="5" />
						<foreignObject x="8" y="120" width="180" height="120">
							<p
								style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
							>
								What is the evidence that information or data is used by accountability actors
								inside the government (e.g. judges, parliamentarians, anti-corruption agencies,
								etc.) to hold government officials (includes elected, technocrats, front line
								service providers) accountable through sanctions or legal action?
							</p>
						</foreignObject>
						<g class="cog">
							<path
								class="cls-14"
								d="M141.87,240.83l-.48,3-1.68.34a9.56,9.56,0,0,1-1.22,2l.42,1.67-2.48,1.81-1.43-.94h0a8.1,8.1,0,0,1-2.28.56l-.89,1.48-3-.47-.33-1.67a9.31,9.31,0,0,1-2-1.22l-1.7.39L123,245.37l.91-1.47a8.53,8.53,0,0,1-.55-2.28l-1.48-.92.46-3,1.67-.38a8.34,8.34,0,0,1,1.23-2h0l-.4-1.69,2.42-1.77,1.47.92a8.19,8.19,0,0,1,2.28-.56l.92-1.48,3,.47.4,1.68a7.92,7.92,0,0,1,2,1.23h0l1.68-.42,1.82,2.49-1,1.43a8.44,8.44,0,0,1,.55,2.28Z"
							/><text class="cls-15" transform="translate(129.74 243.46)">4</text>
						</g>
					</g>

					<g id="tooltip5" class="pathways-tooltip" class:active={activeCog == 5}>
						<rect x="8" y="160" width="180" height="120" rx="5" />
						<foreignObject x="8" y="160" width="180" height="120">
							<p
								style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
							>
								What is the evidence that information or data is used by accountability actors
								outside the government (e.g. media, journalists, lawyers, CSOs, etc.) to hold
								government officials (includes elected, technocrats, front line service providers)
								accountable by monitoring, changing expectations of responsibilities, or
								scrutinizing performance?
							</p>
						</foreignObject>
						<g class="cog">
							<path
								class="cls-14"
								d="M195.73,280.15l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68L190.29,289l-1.43-.94h0a8.55,8.55,0,0,1-2.28.56l-.89,1.48-3-.47-.33-1.68a8.71,8.71,0,0,1-2-1.22l-1.7.4-1.76-2.42.91-1.47a8.09,8.09,0,0,1-.55-2.28l-1.48-.92.46-3,1.67-.38a8.41,8.41,0,0,1,1.23-2h0l-.4-1.69,2.42-1.77,1.47.92a8.55,8.55,0,0,1,2.28-.56l.92-1.48,3,.47.4,1.68a8.75,8.75,0,0,1,2,1.23h0l1.68-.42,1.82,2.49-1,1.43a9,9,0,0,1,.55,2.28Z"
							/>
							<text class="cls-15" transform="translate(183.6 282.78)">5</text>
						</g>
					</g>

					<g id="tooltip6" class="pathways-tooltip" class:active={activeCog == 6}>
						<rect x="8" y="215" width="180" height="120" rx="5" />
						<foreignObject x="8" y="215" width="180" height="120">
							<p
								style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
							>
								What is the evidence that providing information or data influences citizens to
								behave as accountability actors (citizens monitoring, protesting, non-compliance),
								and do they act as individuals or in collectives? In particular, does citizen
								behavior include the use of the information itself (e.g. motivating action,
								clarifying operational steps, used as evidence, etc.)?
							</p>
						</foreignObject>
						<g class="cog">
							<path
								class="cls-14"
								d="M195.4,336.42l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68L190,345.25l-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48L182,344.2a8.75,8.75,0,0,1-2-1.23l-1.7.4L176.57,341l.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a8.75,8.75,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.93,8.93,0,0,1,.55,2.28Z"
							/><text class="cls-15" transform="translate(183.44 339.05)">6</text>
						</g>
					</g>

					<g id="tooltip7" class="pathways-tooltip" class:active={activeCog == 7}>
						<rect x="8" y="298" width="180" height="80" rx="5" />
						<foreignObject x="8" y="298" width="180" height="120">
							<p
								style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
							>
								Do citizen accountability actions result in changes in government officials?
							</p>
						</foreignObject>
						<g class="cog">
							<path
								class="cls-14"
								d="M69.58,377.71l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.84-1.38h0a8.55,8.55,0,0,1-.56-2.28l-1.48-.92.46-3,1.69-.39a8.38,8.38,0,0,1,1.22-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.39,1.69a8.38,8.38,0,0,1,2,1.22h0l1.68-.42,1.81,2.48-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
							/><text class="cls-15" transform="translate(57.54 380.34)">7</text>
						</g>
					</g>

					<g id="tooltip8" class="pathways-tooltip" class:active={activeCog == 8}>
						<rect x="8" y="298" width="180" height="80" rx="5" />
						<foreignObject x="8" y="298" width="180" height="120">
							<p
								style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
							>
								How do citizens exercise their voice as voters?
							</p>
						</foreignObject>
						<g class="cog">
							<path
								class="cls-14"
								d="M141.87,377.76l-.48,3-1.68.34a9.31,9.31,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.93,8.93,0,0,1-2.28.55l-.89,1.49-3-.48-.33-1.67a9.12,9.12,0,0,1-2-1.23l-1.7.4L123,382.29l.91-1.47a8.53,8.53,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a9.12,9.12,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.18,8.18,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
							/><text class="cls-15" transform="translate(129.91 380.39)">8</text>
						</g>
					</g>
				</svg>
			{:else}
				<svg
					class="pathways-svg show_on_md_and_up mt_4 mb_5"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 482.19 184.51"
					><defs
						><style>
							.cls-1,
							.cls-10,
							.cls-11,
							.cls-12,
							.cls-13,
							.cls-15,
							.cls-2,
							.cls-3,
							.cls-4,
							.cls-9 {
								fill: none;
							}
							.cls-1,
							.cls-10,
							.cls-11,
							.cls-12,
							.cls-2,
							.cls-3,
							.cls-4,
							.cls-9 {
								stroke: #3d30bf;
								stroke-width: 2px;
							}
							.cls-2 {
								stroke-dasharray: 2.81 2.81;
							}
							.cls-3 {
								stroke-dasharray: 3.01 3.01;
							}
							.cls-4 {
								stroke-dasharray: 3.29 3.29;
							}
							.cls-5 {
								fill: #3d30bf;
							}
							.cls-14,
							.cls-6 {
								fill: #2bf9d1;
							}
							.cls-14,
							.cls-7 {
								isolation: isolate;
								font-family: Lato-Bold, Lato;
								font-weight: 700;
							}
							.cls-7 {
								font-size: 9.24px;
								fill: #051231;
							}
							.cls-8 {
								letter-spacing: 0em;
							}
							.cls-9 {
								stroke-dasharray: 3.06 3.06;
							}
							.cls-10 {
								stroke-dasharray: 2.75 2.75;
							}
							.cls-11 {
								stroke-dasharray: 2.99 2.99;
							}
							.cls-12 {
								stroke-dasharray: 2.77 2.77;
							}
							.cls-13,
							.cls-15 {
								stroke: #cdc7ff;
								stroke-width: 0.75px;
							}
							.cls-14 {
								font-size: 7.26px;
							}
							.cls-15 {
								stroke-linecap: round;
							}
						</style></defs
					><g id="Capa_2" data-name="Capa 2"
						><g id="Capa_1-2" data-name="Capa 1">
							<line class="cls-1" x1="172.7" y1="70.47" x2="172.7" y2="68.97" /><line
								class="cls-2"
								x1="172.7"
								y1="66.16"
								x2="172.7"
								y2="33.84"
							/>
							<polyline class="cls-1" points="172.7 32.43 172.7 30.93 174.2 30.93" /><line
								class="cls-3"
								x1="177.21"
								y1="30.93"
								x2="440.37"
								y2="30.93"
							/>
							<polyline class="cls-1" points="441.87 30.93 443.37 30.93 443.37 32.43" /><line
								class="cls-4"
								x1="443.37"
								y1="35.72"
								x2="443.37"
								y2="53.83"
							/>
							<line class="cls-1" x1="443.37" y1="55.48" x2="443.37" y2="56.98" />
							<polygon class="cls-5" points="440.28 56.08 443.37 61.43 446.46 56.08 440.28 56.08" />

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g id="c1" on:click={() => toggleCircle(1)} viewBox="0 0 0 0" class="pathways-circle">
								<circle class="cls-5" cx="38.87" cy="108.97" r="37" />
								<circle class="cls-6" cx="37.37" cy="107.47" r="37" />
								<text
									class="cls-7"
									text-anchor="middle"
									x="37.37"
									y="107.47"
									alignment-baseline="central"
								>
									<tspan x="37.37" dy="">Global</tspan>
									<tspan x="37.37" dy="1.2em">Influences</tspan>
								</text>
								<!-- <text class="cls-7" text-anchor="middle" x="37.37" y="107.47" alignment-baseline="central">Influences</text> -->
							</g>

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g id="c2" on:click={() => toggleCircle(2)} viewBox="0 0 0 0" class="pathways-circle">
								<circle class="cls-5" cx="174.2" cy="109.13" r="37" />
								<circle class="cls-6" cx="172.7" cy="107.47" r="37" />
								<text
									class="cls-7"
									text-anchor="middle"
									x="172.7"
									y="107.47"
									alignment-baseline="central"
								>
									<tspan x="172.7" dy="">Accountability</tspan>
									<tspan x="172.7" dy="1.2em">Actors</tspan>
								</text>
							</g>

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g id="c3" on:click={() => toggleCircle(3)} viewBox="0 0 0 0" class="pathways-circle">
								<circle class="cls-5" cx="309.65" cy="109.13" r="37" />
								<circle class="cls-6" cx="308.03" cy="107.47" r="37" />
								<text
									class="cls-7"
									text-anchor="middle"
									x="308.03"
									y="107.47"
									alignment-baseline="central"
								>
									<tspan x="308.03" dy="0.4em">Citizens</tspan>
								</text>
							</g>

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g id="c4" on:click={() => toggleCircle(4)} viewBox="0 0 0 0" class="pathways-circle">
								<path class="cls-5" d="M431,74.94a37,37,0,1,1-20,48.35A37,37,0,0,1,431,74.94Z" />
								<circle
									class="cls-6"
									cx="443.37"
									cy="107.47"
									r="37"
									transform="translate(-12.83 104.74) rotate(-13.28)"
								/>
								<text
									class="cls-7"
									text-anchor="middle"
									x="443.37"
									y="107.47"
									alignment-baseline="central"
								>
									<tspan x="443.37" dy="">Goverment</tspan>
									<tspan x="443.37" dy="1.2em">Officials</tspan>
								</text>
							</g>

							<line class="cls-9" x1="214.26" y1="107.47" x2="255.51" y2="107.47" />
							<line class="cls-1" x1="257.04" y1="107.47" x2="258.54" y2="107.47" />
							<polygon
								class="cls-5"
								points="257.64 110.56 262.99 107.47 257.64 104.38 257.64 110.56"
							/>
							<line class="cls-9" x1="349.59" y1="107.47" x2="390.84" y2="107.47" />
							<line class="cls-1" x1="392.37" y1="107.47" x2="393.87" y2="107.47" />
							<polygon
								class="cls-5"
								points="392.97 110.56 398.32 107.47 392.97 104.38 392.97 110.56"
							/>
							<line class="cls-9" x1="78.93" y1="107.47" x2="120.18" y2="107.47" />
							<line class="cls-1" x1="121.71" y1="107.47" x2="123.21" y2="107.47" />
							<polygon
								class="cls-5"
								points="122.31 110.56 127.66 107.47 122.31 104.38 122.31 110.56"
							/>
							<line class="cls-1" x1="443.37" y1="155.74" x2="443.37" y2="157.24" />
							<line class="cls-10" x1="443.37" y1="159.99" x2="443.37" y2="180.63" />
							<polyline class="cls-1" points="443.37 182.01 443.37 183.51 441.87 183.51" />
							<line class="cls-11" x1="438.88" y1="183.51" x2="40.36" y2="183.51" />
							<polyline class="cls-1" points="38.87 183.51 37.37 183.51 37.37 182.01" />
							<line class="cls-12" x1="37.37" y1="179.24" x2="37.37" y2="147.36" />
							<polygon
								class="cls-5"
								points="440.28 156.64 443.37 151.29 446.46 156.64 440.28 156.64"
							/>

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g
								id="g1"
								class="pathways-cog"
								class:active={activeCog == 1}
								on:click={() => toggleCog(1)}
								use:clickOutside
								on:click_outside={() => (activeCog = -1)}
							>
								<path
									id="g1-path"
									class="cls-13"
									d="M115.37,79.84l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48L102,87.62a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a8.75,8.75,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.93,8.93,0,0,1,.55,2.28Z"
								/>

								<text id="g1-text" class="cls-14" transform="translate(103.07 82.47)">1</text>
							</g>

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g
								id="g2"
								class="pathways-cog"
								class:active={activeCog == 2}
								on:click={() => toggleCog(2)}
								use:clickOutside
								on:click_outside={() => (activeCog = -1)}
							>
								<path
									class="cls-13"
									d="M115.37,133.84l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a8.75,8.75,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.93,8.93,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(103.24 136.47)">2</text>
							</g>

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g
								id="g3"
								class="pathways-cog"
								class:active={activeCog == 3}
								on:click={() => toggleCog(3)}
								use:clickOutside
								on:click_outside={() => (activeCog = -1)}
							>
								<path
									class="cls-13"
									d="M20.37,173.51l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94h0a8.55,8.55,0,0,1-2.28.56l-.89,1.48-3-.47L7,181.29a9.08,9.08,0,0,1-2-1.22l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3L2.55,170a8.41,8.41,0,0,1,1.23-2h0l-.4-1.69,2.42-1.77,1.47.92a8.55,8.55,0,0,1,2.28-.56l.92-1.48,3,.47.4,1.68a8.41,8.41,0,0,1,2,1.23h0l1.68-.42,1.82,2.49-1,1.43a8.93,8.93,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(8.24 176.14)">3</text>
							</g>

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g
								id="g4"
								class="pathways-cog"
								class:active={activeCog == 4}
								on:click={() => toggleCog(4)}
								use:clickOutside
								on:click_outside={() => (activeCog = -1)}
							>
								<path
									class="cls-15"
									d="M317.7,10.51l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68-2.48,1.81-1.43-.94h0a8.55,8.55,0,0,1-2.28.56l-.89,1.48-3-.47-.34-1.68a9.08,9.08,0,0,1-2-1.22l-1.7.4-1.76-2.42.91-1.47h0a8.55,8.55,0,0,1-.56-2.28l-1.48-.92.46-3L299.88,7a8.38,8.38,0,0,1,1.22-2h0l-.4-1.69,2.42-1.77,1.47.92a8.55,8.55,0,0,1,2.28-.56l.92-1.48,3,.47.39,1.68a8.41,8.41,0,0,1,2,1.23h0a8.1,8.1,0,0,1,1.68-.42l1.81,2.49-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(305.57 13.14)">4</text>
							</g>

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g
								id="g5"
								class="pathways-cog"
								class:active={activeCog == 5}
								on:click={() => toggleCog(5)}
								use:clickOutside
								on:click_outside={() => (activeCog = -1)}
							>
								<path
									class="cls-13"
									d="M317.7,50.18l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68L312.26,59l-1.43-1a8.55,8.55,0,0,1-2.28.56l-.89,1.48-3-.48-.34-1.67a8.22,8.22,0,0,1-2-1.23l-1.7.4-1.76-2.41.91-1.48h0a8.19,8.19,0,0,1-.56-2.28L297.73,50l.46-2.95,1.69-.4a8.38,8.38,0,0,1,1.22-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,3,.46.39,1.69a8.38,8.38,0,0,1,2,1.22h0l1.68-.42,1.81,2.49-1,1.42a8.53,8.53,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(305.57 52.81)">5</text>
							</g>

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g
								id="g6"
								class="pathways-cog"
								class:active={activeCog == 6}
								on:click={() => toggleCog(6)}
								use:clickOutside
								on:click_outside={() => (activeCog = -1)}
							>
								<path
									class="cls-13"
									d="M249.37,79.84l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48L236,87.62a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a8.75,8.75,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,2.95.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-.95,1.43a8.93,8.93,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(237.41 82.47)">6</text>
							</g>

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g
								id="g7"
								class="pathways-cog"
								class:active={activeCog == 7}
								on:click={() => toggleCog(7)}
								use:clickOutside
								on:click_outside={() => (activeCog = -1)}
							>
								<path
									class="cls-13"
									d="M384.7,79.84l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42L366.7,83h0a8.55,8.55,0,0,1-.56-2.28l-1.48-.92.46-3,1.69-.39a8.38,8.38,0,0,1,1.22-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.39,1.69a8.38,8.38,0,0,1,2,1.22h0l1.68-.42,1.81,2.48-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(372.49 82.47)">7</text>
							</g>

							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g
								id="g8"
								class="pathways-cog"
								class:active={activeCog == 8}
								on:click={() => toggleCog(8)}
								use:clickOutside
								on:click_outside={() => (activeCog = -1)}
							>
								<path
									class="cls-13"
									d="M384.7,133.84l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.84-1.38h0a8.55,8.55,0,0,1-.56-2.28l-1.48-.92.46-3,1.69-.39a8.38,8.38,0,0,1,1.22-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.39,1.69a8.38,8.38,0,0,1,2,1.22h0l1.68-.42,1.81,2.48-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(372.66 136.47)">8</text>
							</g>

							<g id="tooltip1" class="pathways-tooltip" class:active={activeCog == 1}>
								<rect x="105.07" width="200" height="112" rx="5" />
								<foreignObject x="105.07" width="200" height="100">
									<p
										style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
									>
										What is the evidence that providing information or data produced by
										(inter)national bodies influences or enables accountability actors within the
										government to monitor government performance, sanction or reward performance,
										and manage expectations of citizens (and government) of their duties,
										responsibilities, and performance standards?
									</p>
								</foreignObject>
								<!-- svelte-ignore a11y-click-events-have-key-events -->
								<g class="cog" on:click={() => toggleCog(1)}>
									<path
										class="cls-13"
										d="M115.37,79.84l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48L102,87.62a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a8.75,8.75,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.93,8.93,0,0,1,.55,2.28Z"
									/>
									<text class="cls-14" transform="translate(103.07 82.47)">1</text>
								</g>
							</g>
						</g>

						<g id="tooltip2" class="pathways-tooltip" class:active={activeCog == 2}>
							<rect x="105.07" y="45.47" width="200" height="112" rx="5" />
							<foreignObject x="105.07" y="45.47" width="200" height="100">
								<p
									style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
								>
									What is the evidence that providing information or data produced by
									(inter)national bodies influences or enables accountability actors outside the
									government to monitor government performance, sanction or reward performance, and
									manage expectations of citizens (and government) of their duties,
									responsibilities, and performance standards?
								</p>
							</foreignObject>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g class="cog" on:click={() => toggleCog(2)}>
								<path
									class="cls-13"
									d="M115.37,133.84l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a8.75,8.75,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.93,8.93,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(103.24 136.47)">2</text>
							</g>
						</g>

						<g id="tooltip3" class="pathways-tooltip" class:active={activeCog == 3}>
							<rect x="12" y="90.47" width="200" height="100" rx="5" />
							<foreignObject x="12" y="90.47" width="200" height="100">
								<p
									style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
								>
									How do governments officials directly use information or data that is produced by
									(inter)national without going through any other accountability actors. (ex:
									ministries making data open/available and instating a FOI mechanism directly as
									result of the Open Government Partnership?).
								</p>
							</foreignObject>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g class="cog" on:click={() => toggleCog(3)}>
								<path
									class="cls-13"
									d="M20.37,173.51l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94h0a8.55,8.55,0,0,1-2.28.56l-.89,1.48-3-.47L7,181.29a9.08,9.08,0,0,1-2-1.22l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3L2.55,170a8.41,8.41,0,0,1,1.23-2h0l-.4-1.69,2.42-1.77,1.47.92a8.55,8.55,0,0,1,2.28-.56l.92-1.48,3,.47.4,1.68a8.41,8.41,0,0,1,2,1.23h0l1.68-.42,1.82,2.49-1,1.43a8.93,8.93,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(8.24 176.14)">3</text>
							</g>
						</g>

						<g id="tooltip4" class="pathways-tooltip" class:active={activeCog == 4}>
							<rect x="107.55" y="-10.47" width="200" height="100" rx="5" />
							<foreignObject x="107.55" y="-10.47" width="200" height="100">
								<p
									style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
								>
									What is the evidence that information or data is used by accountability actors
									inside the government (e.g. judges, parliamentarians, anti-corruption agencies,
									etc.) to hold government officials (includes elected, technocrats, front line
									service providers) accountable through sanctions or legal action?
								</p>
							</foreignObject>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g class="cog" on:click={() => toggleCog(4)}>
								<path
									class="cls-15"
									d="M317.7,10.51l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68-2.48,1.81-1.43-.94h0a8.55,8.55,0,0,1-2.28.56l-.89,1.48-3-.47-.34-1.68a9.08,9.08,0,0,1-2-1.22l-1.7.4-1.76-2.42.91-1.47h0a8.55,8.55,0,0,1-.56-2.28l-1.48-.92.46-3L299.88,7a8.38,8.38,0,0,1,1.22-2h0l-.4-1.69,2.42-1.77,1.47.92a8.55,8.55,0,0,1,2.28-.56l.92-1.48,3,.47.39,1.68a8.41,8.41,0,0,1,2,1.23h0a8.1,8.1,0,0,1,1.68-.42l1.81,2.49-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(305.57 13.14)">4</text>
							</g>
						</g>

						<g id="tooltip5" class="pathways-tooltip" class:active={activeCog == 5}>
							<rect x="307.55" y="-40.47" width="200" height="112" rx="5" />
							<foreignObject x="307.55" y="-40.47" width="200" height="100">
								<p
									style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
								>
									What is the evidence that information or data is used by accountability actors
									outside the government (e.g. media, journalists, lawyers, CSOs, etc.) to hold
									government officials (includes elected, technocrats, front line service providers)
									accountable by monitoring, changing expectations of responsibilities, or
									scrutinizing performance?
								</p>
							</foreignObject>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g class="cog" on:click={() => toggleCog(5)}>
								<path
									class="cls-13"
									d="M317.7,50.18l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68L312.26,59l-1.43-1a8.55,8.55,0,0,1-2.28.56l-.89,1.48-3-.48-.34-1.67a8.22,8.22,0,0,1-2-1.23l-1.7.4-1.76-2.41.91-1.48h0a8.19,8.19,0,0,1-.56-2.28L297.73,50l.46-2.95,1.69-.4a8.38,8.38,0,0,1,1.22-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,3,.46.39,1.69a8.38,8.38,0,0,1,2,1.22h0l1.68-.42,1.81,2.49-1,1.42a8.53,8.53,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(305.57 52.81)">5</text>
							</g>
						</g>

						<g id="tooltip6" class="pathways-tooltip" class:active={activeCog == 6}>
							<rect x="239.55" y="-2.47" width="200" height="115" rx="5" />
							<foreignObject x="239.55" y="-2.47" width="200" height="100">
								<p
									style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
								>
									What is the evidence that providing information or data influences citizens to
									behave as accountability actors (citizens monitoring, protesting, non-compliance),
									and do they act as individuals or in collectives? In particular, does citizen
									behavior include the use of the information itself (e.g. motivating action,
									clarifying operational steps, used as evidence, etc.)?
								</p>
							</foreignObject>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g class="cog" on:click={() => toggleCog(6)}>
								<path
									class="cls-13"
									d="M249.37,79.84l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48L236,87.62a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a8.75,8.75,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,2.95.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-.95,1.43a8.93,8.93,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(237.41 82.47)">6</text>
							</g>
						</g>

						<g id="tooltip7" class="pathways-tooltip" class:active={activeCog == 7}>
							<rect x="175.55" y="25.47" width="200" height="70" rx="5" />
							<foreignObject x="175.55" y="25.47" width="200" height="100">
								<p
									style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
								>
									Do citizen accountability actions result in changes in government officials?
								</p>
							</foreignObject>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g class="cog" on:click={() => toggleCog(7)}>
								<path
									class="cls-13"
									d="M384.7,79.84l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42L366.7,83h0a8.55,8.55,0,0,1-.56-2.28l-1.48-.92.46-3,1.69-.39a8.38,8.38,0,0,1,1.22-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.39,1.69a8.38,8.38,0,0,1,2,1.22h0l1.68-.42,1.81,2.48-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(372.49 82.47)">7</text>
							</g>
						</g>

						<g id="tooltip8" class="pathways-tooltip" class:active={activeCog == 8}>
							<rect x="175.55" y="90.47" width="200" height="60" rx="5" />
							<foreignObject x="175.55" y="90.47" width="200" height="100">
								<p
									style="
								color: #051231;
								font-size: 7.5px;
								/*position: absolute;*/
								top: 0;
								bottom: 0;
								line-height: 1.4;
								letter-spacing: 0.1px;
								margin: auto;
								padding: 12px 15px;
								font-weight: 500;
								height: 100px;"
								>
									How do citizens exercise their voice as voters?
								</p>
							</foreignObject>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<g class="cog" on:click={() => toggleCog(8)}>
								<path
									class="cls-13"
									d="M384.7,133.84l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.84-1.38h0a8.55,8.55,0,0,1-.56-2.28l-1.48-.92.46-3,1.69-.39a8.38,8.38,0,0,1,1.22-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.39,1.69a8.38,8.38,0,0,1,2,1.22h0l1.68-.42,1.81,2.48-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
								/>
								<text class="cls-14" transform="translate(372.66 136.47)">8</text>
							</g>
						</g>
					</g></svg
				>
			{/if}

			<slot name="e" />
		</div>
	</div>
</section>

<style lang="scss" scoped>
	$md: map-get($grid-breakpoints, 'md');

	.pathways_section--overlay {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		background-color: rgba(#051231, 0.8);
		backdrop-filter: blur(25.2px);
		display: flex;
		z-index: 99999;
		pointer-events: visible;
		color: #fafafa;

		.content-close {
			position: absolute;
			right: 0;
			top: 24px;

			@media screen and (max-width: $md) {
				position: fixed;
				right: 12px;
				top: 12px;
				transform: scale(0.8);
			}
		}
		.content {
			position: relative;
			// max-width: 60%;
			margin: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;

			@media screen and (max-width: $md) {
				padding-top: 2rem;
				overflow: scroll;
			}

			blockquote {
				margin: 0;
				padding: 1rem 1.5rem;
				border-radius: 15px;
				background-color: #3d30bf;
			}
		}
	}
	.pathways_section {
		min-height: 100vh;

		@media screen and (max-width: $md) {
			p {
				width: 100% !important;
			}
		}

		.pathways-svg {
			overflow: visible;
			// &-mobile {
			// 	.pathways-cog {
			// 		transform-origin: 44% 21%;
			// 		transform: rotate(90deg);
			// 	}
			// }
		}

		.pathways-tooltip {
			// visibility: collapse;
			display: none !important;
			&.active {
				// visibility: visible;
				display: inherit !important;
			}
			rect {
				fill: #fafafa;
				filter: drop-shadow(1px 1px 5px #00000063);
			}
			.cog {
				cursor: pointer;
				text {
					user-select: none;
					&::selection {
						background: none;
						color: #2bf9d1;
					}
				}
				path {
					stroke: #3d30bf !important;
					fill: #3d30bf !important;
					transform-origin: center;
					transform-box: fill-box;
					// animation: rotating 25s linear infinite;
				}
			}
		}

		.pathways-cog {
			cursor: pointer;

			@keyframes rotating {
				from {
					//transform: rotate(1deg);
				}
				to {
					transform: rotate(90deg);
				}
			}

			text {
				user-select: none;
			}
			path {
				// transition: transform 0.2s ease;
				transform-origin: center;
				transform-box: fill-box;
				animation-fill-mode: both;
				fill: transparent;
				transform: rotate(0);
			}
			&:hover {
				path {
					animation: rotating 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
					stroke: #3d30bf !important;
					fill: #3d30bf !important;
				}
			}
			&.active {
				path {
					visibility: collapse;
				}
			}
		}
		.pathways-circle {
			cursor: pointer;
			circle {
				transition: all 0.25s ease-out;
			}
			text {
				transition: all 0.2s ease;
			}
			&:hover {
				text {
					font-size: 10px;
					fill: #2bf9d1;
				}
				circle {
					r: 40px;
					fill: #051231;
				}
			}
		}
	}
</style>
