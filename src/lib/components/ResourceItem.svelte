<script>
    import LinkIcon from '$lib/assets/icons/link.svg?component';
    import ResourceImg from '$lib/assets/images/r1.jpg';
</script>

<div class="resource_item">
	<div class="resource_item__image">
		<img src="{ResourceImg}" alt="" />
	</div>
	<span class="text_green text_uppercase mt_2 font_bold">TAI's Weekly</span>
	<h5 class="resource_item__title font_bold mb_3 mt_3">Strengthening Pandemic Governance</h5>
	<div class="divider divider_2 divider_gray" />
	<p>
		Integrating Transparency, Participation, and Accountability Lessons into Future Pandemic
		Preparedness and Response.
	</p>
    <a href="/" class="text_dark font_bold">Read More <LinkIcon class="ml_1" width="12" height="12"></LinkIcon></a>
</div>

<style lang="scss">
	.resource_item {
		display: flex;
		flex-direction: column;
        //padding: 1rem;
        &__image {
            overflow: hidden;
            border-radius: 15px;
        }
        &__image img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
            object-position: center;
        }
	}
</style>
