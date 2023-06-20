import { redirect } from '@sveltejs/kit';
import { get } from '$lib/api';
import { error } from '@sveltejs/kit';

export const GET = async ({ params }) => {
	const { id } = params;

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
