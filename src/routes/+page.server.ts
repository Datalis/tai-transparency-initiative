import { get, post } from "$lib/api";
import type { PageServerLoad } from ".svelte-kit/types/src/routes/resources/$types";
import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";


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
			const result = await post('subscriptions', {data: { "Name": name, "Email": email, "Subscription": subscribe?'yes':'no' }});
			if(result.error){
				return fail(400, JSON.parse(result.err));
			}
			return JSON.parse(result);
		} catch (error) {
			return fail(400);
		}

	}
}


export const load: PageServerLoad = async () => {
	const params = {
		populate: {
			hero: {
				fields: ['title', 'message']
			},
			ResourcesSection: {
				fields: ['title'],
				populate: {
					resources: {
						fields: ['id', 'summary', 'title'],
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
		},
	}
	const { data } = await get('home-page', params);
	return data;
}
