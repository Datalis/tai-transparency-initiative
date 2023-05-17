import { API_SERVER } from "$env/static/private";
import { get } from "$lib/api";
import Carousel from "$lib/components/Carousel.svelte";
import type { Response } from "$lib/types/data";
import type { Resource } from "$lib/types/resources";
import { error } from "@sveltejs/kit";
import { parse } from 'node-html-parser';


export async function load({ params }: { [key: string]: any }) {
	try {

		const q = {
			populate: '*'
		}

		const detail = await get(`wc-resources/${params.id}`, q);

		const { content: htmlContent } = detail.data;
		const root = parse(htmlContent);
		const slider = root.querySelector('.tai-prose-carousel');
		if (slider) {
			const imagesAttr = slider.getAttribute('images');
			const images = imagesAttr?.split('|') || [];
			if (images.length) {
				const slideMarkup = images?.map(i => {
					const slide = `
						<div class="swiper-slide">
							<img src="${API_SERVER}${i}" alt="${i}" loading="lazy">
						</div>
					`;
					return slide;
				}).join('\n');
				const swiper = parse(`
					<div class="swiper">
						<div class="swiper-wrapper">
							${slideMarkup}
						</div>
						<div class="swiper-pagination"></div>
						<div class="swiper-button-prev"></div>
  						<div class="swiper-button-next"></div>
					</div>
				`)
				slider.replaceWith(swiper);
			}
		}

		detail.data.content = root.toString();

		const related: Response<Resource[]> = await get('wc-resources', {
			fields: ['id', 'summary', 'title', 'date', 'url'],
			sort: 'date:DESC',
			filters: {
				type: {
					id: {
						$eq: detail.data?.type?.id,
					}
				},
				id: {
					$not: detail.data?.id,
				}
			},
			pagination: {
				limit: 2,
			},
			populate: {
				image: {
					populate: '*'
				},
				type: {
					fields: ['id', 'label']
				},
				author: {
					fields: ['name', 'role']
				}
			}
		});

		return {
			detail,
			related,
		};
	} catch (e) {
		throw error(500, `Error ${e}`);
	}
}