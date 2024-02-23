import { get } from '$lib/api';
import type { Response } from '$lib/types/data';
import { error, redirect } from '@sveltejs/kit';

const _oldRedirect = async (id: string) => {
	const queryParams = {
		fields: ['slug'],
		filters: {
			id: {
				$eq: id
			}
		}
	};

	let resource: any = null;

	try {
		const { data } = await get('wc-resources', queryParams);
		resource = data && data.length ? data[0] : null;
	} catch (e: any) {
		throw error(e.status || 500, e.body || 'Unknown error');
	}

	if (!resource) {
		throw error(404, 'Not found');
	}

	throw redirect(302, `/${resource.slug}`);
};

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
	}
	await _oldRedirect(slug);
}
