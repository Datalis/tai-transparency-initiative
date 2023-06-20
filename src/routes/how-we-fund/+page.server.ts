import { get } from '$lib/api';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/$types';

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
			}
		}
	};
	const { data } = await get('how-we-fund-page', params);
	const { data: resources } = await get('wc-resources', {
		fields: ['id', 'summary', 'title', 'slug'],
		sort: 'date:DESC',
		pagination: {
			limit: 3
		},
		populate: {
			image: {
				populate: '*'
			},
			type: {
				fields: ['id', 'label']
			}
		}
	});
	return { ...data, resources };
};
