import { API_TOKEN } from "$env/static/private";
import { PUBLIC_API_URL } from '$env/static/public';
import type { Response } from "$lib/types/data";
import type { Resource } from "$lib/types/resources";
import { error } from "@sveltejs/kit";

export async function load({ params }: { [key: string]: any }): Promise<Response<Resource>> {
	try {
		const response = await fetch(`${PUBLIC_API_URL}/api/wc-resources/${params.id}?populate=*`, {
			method: 'GET',
			headers: {
				'Authorization': `Bearer ${API_TOKEN}`
			}
		});
		const data = await response.json();
		return data;
	} catch (e) {
		throw error(500, `Error ${e}`);
	}
}