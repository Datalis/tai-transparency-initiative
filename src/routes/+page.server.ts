import { get } from "$lib/api";
import type { PageServerLoad } from ".svelte-kit/types/src/routes/resources/$types";
import type { Actions } from "@sveltejs/kit";
import { invalid } from "@sveltejs/kit";


export const actions: Actions = {
	join: async (event) => {
		const data = await event.request.formData();
		const name = data.get('name');
		const email = data.get('email');
		const subscribe = data.get('subscribe');

		if (!email || !name) {
			return invalid(400, { email, name, emailError: !email, nameError: !name });
		}

		return { success: true };
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