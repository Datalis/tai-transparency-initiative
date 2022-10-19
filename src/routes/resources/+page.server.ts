import { error } from '@sveltejs/kit';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/resources/$types';
import { get } from '$lib/api';
import type { Response } from '$lib/types/data';
import type { Resource, ResourceType } from '$lib/types/resources';

export const load: PageServerLoad = async ({ url }) => {
	try {

		const page = url.searchParams.get('page') || 1;
		const sortBy = url.searchParams.get('sortBy') || 'date';
		const search = url.searchParams.get('search');
		const type = url.searchParams.get('type') || 1;

		const params = {
			filters: {
				type: {
					id: {
						$eq: type
					}
				}
			},
			sort: sortBy,
			pagination: {
				page,
			},
			populate: "*"
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
