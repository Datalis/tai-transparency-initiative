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
			},
			WhyItMatters: {
				fields: ['title', 'message'],
				populate: {
					resources: {
						fields: ['id', 'summary', 'title', 'slug'],
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
		}
	};

	const { data } = await get('what-we-fund-page', params);
	const { data: resources } = await get('wc-resources', {
		fields: ['id', 'summary', 'title', 'slug'],
		sort: 'date:DESC',
		filters: {
			type: {
				id: {
					$not: 7 // No Library items
				}
			}
		},
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
