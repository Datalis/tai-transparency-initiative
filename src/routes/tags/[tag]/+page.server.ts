import { get } from '$lib/api';
import type { Response } from '$lib/types/data';
import { error } from '@sveltejs/kit';

export async function load({ params, url }: { params: any; url: URL }) {
	const { tag: slug } = params;

	const page = url?.searchParams.get('page') || 1;
	const pageSize = url?.searchParams.get('pageSize') || 6;
	const sortBy = url?.searchParams.get('sortBy') || 'date:DESC';
	const search = url?.searchParams.get('search');

	const {
		data: [tag]
	}: Response<any[]> = await get('wc-tags', {
		filters: {
			slug: {
				$eq: slug
			}
		}
	});
	if (tag) {
		const resources = await get('wc-resources', {
			sort: sortBy,
			pagination: {
				page,
				pageSize
			},
			populate: {
				image: {
					populate: '*'
				},
				author: {
					fields: ['name', 'role']
				}
			},
			filters: {
				wc_tags: {
					id: {
						$eq: tag.id
					}
				},
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
			}
		});
		return {
			tag,
			resources
		};
	} else {
		return error(404, 'Tag not found');
	}
}
