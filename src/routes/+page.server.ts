import { get } from "$lib/api";
import type { PageServerLoad } from ".svelte-kit/types/src/routes/resources/$types";

export const load: PageServerLoad = async () => {
	const params = {
		populate: {
			hero: {
				fields: ['title', 'message']
			},
			ResourcesSection: {
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
			}
		},
	}
	const { data } = await get('home-page', params);
	return data;
}