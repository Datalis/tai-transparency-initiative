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
			const result = await post('subscriptions', { name, mail: email, subscribe: subscribe?'Yes':'No' });
			if(result.error){
				return fail(400, { email, name, emailError: result.error, nameError: result.error });
			}
			return result;
		} catch (error) {
			return fail(400, { email, name, emailError: !email, nameError: !name });
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
