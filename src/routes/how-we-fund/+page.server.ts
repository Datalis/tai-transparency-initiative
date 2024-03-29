import { get, post } from '$lib/api';
import type { PageServerLoad } from '.svelte-kit/types/src/routes/$types';
import { fail, type Actions, json } from '@sveltejs/kit';
import { error } from 'console';

export const actions: Actions = {
	join: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const subscribe = data.get('subscribe');
		if (!email || !name) {
			return fail(400, { email, name, emailError: !email, nameError: !name });
		}
		try {
			const result = await post('subscriptions', {
				data: { Name: name, Email: email, Subscription: subscribe ? 'yes' : 'no' }
			});
			if (result.error) {
				console.error(result.error);
				return fail(400, { email, name });
			}
			return { status: 200, body: { email, name } };
		} catch (error) {
			console.error(error);
			return fail(400);
		}
	}
};

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
