import { get } from "$lib/api";
import type { Response } from "$lib/types/data";
import type { Member } from "$lib/types/member";
import type { Staff } from "$lib/types/staff";
import type { PageServerLoad } from ".svelte-kit/types/src/routes/resources/$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	const params = {
		populate: {
			Members: {
				fields: ['title', 'message'],
				populate: {
					MemberItem: {
						fields: ['strategy', 'featured_project', 'contact', 'url'],
						populate: {
							image: {
								populate: '*'
							}
						}
					}
				}
			},
			Staff: {
				fields: ['title', 'message'],
				populate: {
					StaffItem: {
						fields: ['name', 'role', 'summary'],
						populate: {
							image: {
								populate: '*'
							}
						}
					}
				}
			},
			SteeringCommittee: {
				populate: {
					StaffItem: {
						fields: ['name', 'role', 'summary'],
						populate: {
							image: {
								populate: '*'
							}
						}
					}
				}
			}
		}
	}
	const { data } = await get('about-us-page', params);
	return data;
}