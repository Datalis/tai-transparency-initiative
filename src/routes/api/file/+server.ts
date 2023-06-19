import { error } from "@sveltejs/kit";
import type { RequestEvent } from "./$types";

export const GET = async ({ url }: RequestEvent) => {
    const params = new URLSearchParams(url.search);
    const fileUrl = params.get('url');

    if (!fileUrl) {
        return error(400, 'Missing url parameter');
    }

    const data = await fetch(decodeURIComponent(fileUrl)).then(res => res.arrayBuffer());

    return new Response(data);
}