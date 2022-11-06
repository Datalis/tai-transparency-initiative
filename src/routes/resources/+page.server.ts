import { error } from '@sveltejs/kit';
import { get } from '$lib/api';
import type { Response } from '$lib/types/data';
import type { Resource, ResourceType } from '$lib/types/resources';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/$types';

export const load: PageServerLoad = async ({ url }) => {
	try {

		const page = url.searchParams.get('page') || 1;
		const pageSize = url.searchParams.get('pageSize') || 6;

		const sortBy = url.searchParams.get('sortBy') || 'date';
		const search = url.searchParams.get('search');
		const type = url.searchParams.get('type') || 1;

		const params = {
			filters: {
				type: {
					id: {
						$eq: type
					}
				},
				$or: [
					{
						title: {
							$contains: search
						},
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
				pageSize,
			},
			fields: ['id', 'summary', 'title', 'date', 'url'],
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
			},
		};

		const resources: Response<Resource[]> = await get('wc-resources', params);
		const types: Response<ResourceType[]> = await get('wc-resource-types');

		return {
			resources,
			types
		};
	} catch (e) {
		throw error(500, `Error: ${e}`);
	}
}
