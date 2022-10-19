import { get } from "$lib/api";
import type { Response } from "$lib/types/data";
import type { Member } from "$lib/types/member";
import type { Staff } from "$lib/types/staff";
import type { PageServerLoad } from ".svelte-kit/types/src/routes/resources/$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	try {

		let params = {
			populate: '*'
		}

		const members: Response<Member[]> = await get('wc-members', params);
		const staff: Response<Staff[]> = await get('wc-staffs', params);

		return {
			members,
			staff,
		}
	} catch(e) {
		throw error(500, `${e}`);
	}
}