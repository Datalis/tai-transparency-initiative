import { get } from "$lib/api";
import type { PageServerLoad } from ".svelte-kit/types/src/routes/$types";

export const load: PageServerLoad = async () => {
	const params = {
		populate: "*"
	};
	const { data } = await get('fa-qs-page', params);
	return data;
}