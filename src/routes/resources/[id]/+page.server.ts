import { get } from "$lib/api";
import type { Response } from "$lib/types/data";
import type { Resource } from "$lib/types/resources";
import { error } from "@sveltejs/kit";

export async function load({ params }: { [key: string]: any }) {
	try {

		const q = {
			populate: '*'
		}

		const detail = await get(`wc-resources/${params.id}`, q);


		const related: Response<Resource[]> = await get('wc-resources', {
			fields: ['id', 'summary', 'title', 'date', 'url'],
			sort: 'date:DESC',
			filters: {
				type: {
					id: {
						$eq: detail.data?.type?.id,
					}
				},
				id: {
					$not: detail.data?.id,
				}
			},
			pagination: {
				limit: 2,
			},
			populate: {
				image: {
					populate: '*'
				},
				type: {
					fields: ['id', 'label']
				},
				author: {
					fields: ['name', 'role']
				}
			}
		});

		return {
			detail,
			related,
		};
	} catch (e) {
		throw error(500, `Error ${e}`);
	}
}