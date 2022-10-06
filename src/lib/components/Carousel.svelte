<script lang="ts">
	import 'swiper/css';
	import 'swiper/css/pagination';
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Pagination } from 'swiper';
</script>

<div class="carousel">
	<Swiper spaceBetween={50} slidesPerView={1} pagination={true} modules={[Pagination]} />
</div>

<style lang="scss">
	.carousel {
		height: 400px;
		:global(.swiper) {
			height: 100%;
		}
	}
</style>
