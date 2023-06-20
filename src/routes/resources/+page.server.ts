import { error } from '@sveltejs/kit';
import { get } from '$lib/api';
import type { Response } from '$lib/types/data';
import type { Resource, ResourceType } from '$lib/types/resources';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/$types';

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
		}

		if (topic) {
			params.filters['library_topic'] = {
				id: {
					$eq: topic
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
		throw error(500, `Error: ${e}`);
	}
};
