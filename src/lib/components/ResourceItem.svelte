<script>
	import LinkIcon from '$lib/assets/icons/link.svg?component';
	import ResourceImg from '$lib/assets/images/r1.jpg';
</script>

<div class="resource_item">
	<div class="resource_item__image">
		<img src={ResourceImg} alt="" />
	</div>
	<small class="text_gray text_uppercase mt_2 font_regular">TAI's Weekly</small>
	<h6 class="resource_item__title font_bold mb_3 mt_3">Strengthening Pandemic Governance</h6>
	<div class="divider divider_2 divider_gray" />
	<p>
		Integrating Transparency, Participation, and Accountability Lessons into Future Pandemic
		Preparedness and Response.
	</p>
	<a href="/" class="text_gray font_bold display_flex"
		><small>Read More </small><LinkIcon
			class="ml_1"
			width="18"
			height="18"
			style="fill: var(--gray)"
		/></a
	>
</div>

<style lang="scss">
	.resource_item {
		display: flex;
		flex-direction: column;

		--gray: #{map-get($colors, 'gray')};

		&__image {
			overflow: hidden;
			border-radius: 15px;
		}
		&__image img {
			width: 100%;
			height: auto;
			object-fit: cover;
			object-position: center;
		}

		h6 {
			font-size: 22px;
		}

		p {
			font-size: 18px;
			line-height: 33px;
		}
	}
</style>
