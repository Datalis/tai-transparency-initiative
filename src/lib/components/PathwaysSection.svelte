<script lang="ts">
	import { fade } from 'svelte/transition';
	import CloseCircleIcon from '$lib/assets/icons/close-circle.svg?component';
	import { clickOutside } from '$lib/utils/clickOutside';

	let activeCog = -1;
	let activeCircle = -1;

	function toggleCog(index: number) {
		activeCog = index == activeCog ? -1 : index;
	}

	function toggleCircle(index: number) {
		activeCircle = index == activeCircle ? -1 : index;
	}
</script>

{#if activeCircle != -1}
	<div
		class="pathways_section--overlay"
		transition:fade={{
			duration: 200
		}}
	>
		<div class="content">
			<button class="content-close" on:click={() => toggleCircle(activeCircle)}>
				<CloseCircleIcon style="fill: #c7c1ff" />
			</button>
			<div class="mx_4">
				<h2 class="text_green">Accountability Actors</h2>
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
				<li>Monitoring</li>
				<li>Sanctioning (within gov. actors only)</li>
				<li>
					Changing expectations / attitudes of responsibility of performance among citizens and
					officials
				</li>
			</ul>
		</div>
	</div>
{/if}
<section class="pathways_section section bg_blue_light">
	<div class="container">
		<h2>Participatory Strategy</h2>
		<div class="divider divider_green divider_2 my_4" />
		<p class="mt_4 w_50">
			This represents critical causal pathways common to TAI donor members’ theories of change. <br
			/> It is in no way a representation of pathways to change for the TAP field as a whole.
		</p>
		<svg
			class="pathways-svg mt_4 mb_5"
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
						letter-spacing: -0.02em;
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

					<g id="c2" viewBox="0 0 0 0" class="pathways-circle">
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

					<g id="c3" viewBox="0 0 0 0" class="pathways-circle">
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

					<g id="c4" viewBox="0 0 0 0" class="pathways-circle">
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
					<polygon class="cls-5" points="257.64 110.56 262.99 107.47 257.64 104.38 257.64 110.56" />
					<line class="cls-9" x1="349.59" y1="107.47" x2="390.84" y2="107.47" />
					<line class="cls-1" x1="392.37" y1="107.47" x2="393.87" y2="107.47" />
					<polygon class="cls-5" points="392.97 110.56 398.32 107.47 392.97 104.38 392.97 110.56" />
					<line class="cls-9" x1="78.93" y1="107.47" x2="120.18" y2="107.47" />
					<line class="cls-1" x1="121.71" y1="107.47" x2="123.21" y2="107.47" />
					<polygon class="cls-5" points="122.31 110.56 127.66 107.47 122.31 104.38 122.31 110.56" />
					<line class="cls-1" x1="443.37" y1="155.74" x2="443.37" y2="157.24" />
					<line class="cls-10" x1="443.37" y1="159.99" x2="443.37" y2="180.63" />
					<polyline class="cls-1" points="443.37 182.01 443.37 183.51 441.87 183.51" />
					<line class="cls-11" x1="438.88" y1="183.51" x2="40.36" y2="183.51" />
					<polyline class="cls-1" points="38.87 183.51 37.37 183.51 37.37 182.01" />
					<line class="cls-12" x1="37.37" y1="179.24" x2="37.37" y2="147.36" />
					<polygon class="cls-5" points="440.28 156.64 443.37 151.29 446.46 156.64 440.28 156.64" />

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

					<g id="g2" class="pathways-cog">
						<path
							class="cls-13"
							d="M115.37,133.84l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a8.75,8.75,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.93,8.93,0,0,1,.55,2.28Z"
						/>
						<text class="cls-14" transform="translate(103.24 136.47)">2</text>
					</g>

					<g id="g3" class="pathways-cog">
						<path
							class="cls-13"
							d="M20.37,173.51l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94h0a8.55,8.55,0,0,1-2.28.56l-.89,1.48-3-.47L7,181.29a9.08,9.08,0,0,1-2-1.22l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3L2.55,170a8.41,8.41,0,0,1,1.23-2h0l-.4-1.69,2.42-1.77,1.47.92a8.55,8.55,0,0,1,2.28-.56l.92-1.48,3,.47.4,1.68a8.41,8.41,0,0,1,2,1.23h0l1.68-.42,1.82,2.49-1,1.43a8.93,8.93,0,0,1,.55,2.28Z"
						/>
						<text class="cls-14" transform="translate(8.24 176.14)">3</text>
					</g>

					<g id="g4" class="pathways-cog">
						<path
							class="cls-15"
							d="M317.7,10.51l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68-2.48,1.81-1.43-.94h0a8.55,8.55,0,0,1-2.28.56l-.89,1.48-3-.47-.34-1.68a9.08,9.08,0,0,1-2-1.22l-1.7.4-1.76-2.42.91-1.47h0a8.55,8.55,0,0,1-.56-2.28l-1.48-.92.46-3L299.88,7a8.38,8.38,0,0,1,1.22-2h0l-.4-1.69,2.42-1.77,1.47.92a8.55,8.55,0,0,1,2.28-.56l.92-1.48,3,.47.39,1.68a8.41,8.41,0,0,1,2,1.23h0a8.1,8.1,0,0,1,1.68-.42l1.81,2.49-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
						/>
						<text class="cls-14" transform="translate(305.57 13.14)">4</text>
					</g>

					<g id="g5" class="pathways-cog">
						<path
							class="cls-13"
							d="M317.7,50.18l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68L312.26,59l-1.43-1a8.55,8.55,0,0,1-2.28.56l-.89,1.48-3-.48-.34-1.67a8.22,8.22,0,0,1-2-1.23l-1.7.4-1.76-2.41.91-1.48h0a8.19,8.19,0,0,1-.56-2.28L297.73,50l.46-2.95,1.69-.4a8.38,8.38,0,0,1,1.22-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,3,.46.39,1.69a8.38,8.38,0,0,1,2,1.22h0l1.68-.42,1.81,2.49-1,1.42a8.53,8.53,0,0,1,.55,2.28Z"
						/>
						<text class="cls-14" transform="translate(305.57 52.81)">5</text>
					</g>

					<g id="g6" class="pathways-cog">
						<path
							class="cls-13"
							d="M249.37,79.84l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48L236,87.62a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a8.75,8.75,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,2.95.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-.95,1.43a8.93,8.93,0,0,1,.55,2.28Z"
						/>
						<text class="cls-14" transform="translate(237.41 82.47)">6</text>
					</g>

					<g id="g7" class="pathways-cog">
						<path
							class="cls-13"
							d="M384.7,79.84l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42L366.7,83h0a8.55,8.55,0,0,1-.56-2.28l-1.48-.92.46-3,1.69-.39a8.38,8.38,0,0,1,1.22-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.39,1.69a8.38,8.38,0,0,1,2,1.22h0l1.68-.42,1.81,2.48-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
						/>
						<text class="cls-14" transform="translate(372.49 82.47)">7</text>
					</g>

					<g id="g8" class="pathways-cog">
						<path
							class="cls-13"
							d="M384.7,133.84l-.47,3-1.68.34a8.75,8.75,0,0,1-1.23,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48-.34-1.67a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.84-1.38h0a8.55,8.55,0,0,1-.56-2.28l-1.48-.92.46-3,1.69-.39a8.38,8.38,0,0,1,1.22-2l-.4-1.7,2.42-1.76,1.47.91a8.17,8.17,0,0,1,2.28-.55l.92-1.48,3,.46.39,1.69a8.38,8.38,0,0,1,2,1.22h0l1.68-.42,1.81,2.48-1,1.43a8.53,8.53,0,0,1,.55,2.28Z"
						/>
						<text class="cls-14" transform="translate(372.66 136.47)">8</text>
					</g>

					<g id="tooltip1" class="pathways-tooltip" class:active={activeCog == 1}>
						<rect x="105.07" width="200" height="100" rx="15" />
						<foreignObject x="105.07" width="200" height="100">
							<p
								style="
								color: #051231; 
								font-size: 8px;
								position: absolute;
								top: 0;
								bottom: 0;
								line-height: 1.2;
								margin: auto;
								padding: 4px 18px;
								height: fit-content;"
							>
								How do governments officials directly use information or data that is produced by
								(inter)national without going through any other accountability actors. (ex:
								ministries making data open/available and instating a FOI mechanism directly as
								result of the Open Government Partnership?).
							</p>
						</foreignObject>
						<g class="cog" on:click={() => toggleCog(1)}>
							<path
								class="cls-13"
								d="M115.37,79.84l-.48,3-1.68.34a9.08,9.08,0,0,1-1.22,2l.42,1.68-2.48,1.81-1.43-.94a8.53,8.53,0,0,1-2.28.55l-.89,1.49-3-.48L102,87.62a8.75,8.75,0,0,1-2-1.23l-1.7.4-1.76-2.42.91-1.47a8.17,8.17,0,0,1-.55-2.28l-1.48-.92.46-3,1.68-.39a8.75,8.75,0,0,1,1.23-2l-.4-1.7,2.42-1.76,1.47.91a8.53,8.53,0,0,1,2.28-.55l.92-1.48,3,.46.4,1.69a8.38,8.38,0,0,1,2,1.22l1.68-.42,1.82,2.48-1,1.43a8.93,8.93,0,0,1,.55,2.28Z"
							/>
							<text class="cls-14" transform="translate(103.07 82.47)">1</text>
						</g>
					</g>
				</g>
			</g>
		</svg>
		<slot name="e" />
	</div>
</section>

<style lang="scss" scoped>
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
		}
		.content {
			position: relative;
			max-width: 60%;
			margin: auto;
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

		.pathways-svg {
			overflow: visible;
		}

		.pathways-tooltip {
			visibility: collapse;
			&.active {
				visibility: visible;
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
