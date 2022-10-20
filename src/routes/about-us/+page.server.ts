import { get } from "$lib/api";
import type { Response } from "$lib/types/data";
import type { Member } from "$lib/types/member";
import type { Staff } from "$lib/types/staff";
import type { PageServerLoad } from ".svelte-kit/types/src/routes/resources/$types";
import { error } from "@sveltejs/kit";

export const load: PageServerLoad = async () => {
	
}