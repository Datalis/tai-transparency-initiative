import { API_TOKEN } from "$env/static/private";
import { get } from "$lib/api";
import type { Response } from "$lib/types/data";
import type { Resource } from "$lib/types/resources";
import { error } from "@sveltejs/kit";

export async function load({ params }: { [key: string]: any }): Promise<Response<Resource>> {
	try {

		const q = {
			populate: '*'
		}

		const detail = await get(`wc-resources/${params.id}`, q);
		return detail;
	} catch (e) {
		throw error(500, `Error ${e}`);
	}
}