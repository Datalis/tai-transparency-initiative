import { API_SERVER } from "$env/static/private";
import { get } from "$lib/api";
import type { Response } from "$lib/types/data";
import type { Resource } from "$lib/types/resources";
import { redirect } from "@sveltejs/kit";
import { error } from "@sveltejs/kit";
import { parse } from 'node-html-parser';

const loadRelatedResources = async (resource: any) => {
	const queryParams = {
		fields: ['id', 'summary', 'title', 'date', 'url', 'slug'],
		sort: 'date:DESC',
		filters: {
			type: {
				id: {
					$eq: resource?.type?.id,
				}
			},
			id: {
				$not: resource?.id,
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
	}

	const { data } = await get('wc-resources', queryParams);

	return data;
}

const htmlContentParser = (content: string) => {
	const root = parse(content);
	const slider = root.querySelector('.tai-prose-carousel');
	if (slider) {
		const imagesAttr = slider.getAttribute('images');
		const images = imagesAttr?.split('|') || [];
		if (images.length) {
			const slideMarkup = images?.map(i => {
				const slide = `
						<div class="swiper-slide">
							<img src="${API_SERVER}${i}" alt="${i}" loading="lazy" decoding="async">
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
				`);
			slider.replaceWith(swiper);
		}
	}
	return root.toString();
}


export async function load({ params }: { [key: string]: any }) {

	const { slug } = params;

	const queryParams = {
		populate: '*',
		filters: {
			slug: {
				$eq: slug
			}
		}
	};

	try {
		const { data } = await get('wc-resources', queryParams);
		if (data && data.length) {
			const resource = data[0];
			resource.content = htmlContentParser(resource.content);
			const related = loadRelatedResources(resource);

			return {
				resource,
				related
			}

		} else {
			throw error(404, 'Not found');
		}
	} catch (e: any) {
		throw error(e?.status || 500, `${e?.body || ""}`);
	}
}