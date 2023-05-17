import { post } from "$lib/api";
import { json } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";
import { error } from "@sveltejs/kit";

export const POST = async ({ request }: RequestEvent) => {
    const { token, uuid } = await request.json();
    try {
        await post('firebase/register', { token, uuid });
    } catch (e) {
        console.error(e);
        throw error(500);
    }
    return json({ 'success': true });
}