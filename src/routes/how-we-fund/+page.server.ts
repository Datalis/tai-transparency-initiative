import { get } from "$lib/api";
import type { PageServerLoad } from ".svelte-kit/types/src/routes/$types";

export const load: PageServerLoad = async () => {
	const params = {
		populate: {
			hero: {
				fields: ['title', 'message'],
				populate: {
					image: {
						populate: '*'
					}
				}
			},
			resources: {
				fields: ['title'],
				populate: {
					resources: {
						fields: ['id', 'summary', 'title'],
						populate: {
							image: {
								populate: '*'
							},
							type: {
								fields: ['id', 'label']
							}
						}
					}
				}
			},
		}
	}
	const { data } = await get('how-we-fund-page', params);
	return data;
}