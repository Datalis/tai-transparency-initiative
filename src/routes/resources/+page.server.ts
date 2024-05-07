import { error } from '@sveltejs/kit';
import { get } from '$lib/api';
import type { Response } from '$lib/types/data';
import type { Resource, ResourceType } from '$lib/types/resources';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/$types';

const topics: any = {
	1: [1],
	2: [2, 3, 8, 9],
	3: [5, 6],
	4: [7],
	5: [10, 11, 12]
};

const mapTopics = (topic: string): number[] => {
	return topics[+topic];
};

export const load: PageServerLoad = async ({ url }) => {
	try {
		const page = url.searchParams.get('page') || 1;
		const pageSize = url.searchParams.get('pageSize') || 6;

		const sortBy = url.searchParams.get('sortBy') || 'date:DESC';
		const search = url.searchParams.get('search');
		const type = url.searchParams.get('type');
		const topic = url.searchParams.get('topic') || null;

		let tipo: any = {
			id: {
				$eq: type
			}
		};
		if (type == '8') {
			tipo = {
				...tipo,
				$or: []
			};
		}

		const params: any = {
			filters: {
				$or: [
					{
						title: {
							$contains: search
						}
					},
					{
						summary: {
							$contains: search
						}
					}
				]
			},
			sort: sortBy,
			pagination: {
				page,
				pageSize
			},
			fields: ['id', 'summary', 'title', 'date', 'url', 'slug'],
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
		};

		if (type) {
			params.filters['type'] = tipo;
		} else {
			params.filters['type'] = {
				id: {
					$ne: 7
				}
			};
		}

		if (topic) {
			const _topics = mapTopics(topic);
			params.filters['library_topic'] = {
				id: {
					$in: _topics
				}
			};
		}

		const resources: Response<Resource[]> = await get('wc-resources', params);
		const types: Response<ResourceType[]> = await get('wc-resource-types', {
			filters: { show_front: { $eq: true } }
		});
		const libraryTopics: Response<{ [key: string]: any }[]> = await get('wc-library-topics');

		return {
			resources,
			types,
			libraryTopics
		};
	} catch (e) {
		console.error(e);
		throw error(500, `Error: ${e}`);
	}
};
