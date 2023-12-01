import { get } from '$lib/api';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/$types';

export const load: PageServerLoad = async () => {
	let params = {
		populate: {
			hero: {
				fields: ['title', 'message'],
				populate: {
					image: {
						populate: '*'
					}
				}
			},
			six_cs: {
				fields: ['title'],
				populate: {
					Item: {
						fields: ['order', 'title', 'message']
					}
				}
			},
			past_funding: {
				fields: ['title'],
				populate: {
					PastFundingItem: {
						fields: ['id', 'summary', 'url', 'name'],
						populate: {
							image: {
								populate: '*'
							}
						}
					}
				}
			}
		}
	};

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

	const { data } = await get('how-we-work-page', params);
	return { ...data, resources };
};
