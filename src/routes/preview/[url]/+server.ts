import type { RequestHandler } from "@sveltejs/kit";
import { LIVE_PREVIEW_TOKEN } from '$env/static/private';

export const GET: RequestHandler = async ({ params }) => {
	const url = decodeURIComponent(params.url || "");
	const res = await fetch(`http://api.linkpreview.net/?key=${LIVE_PREVIEW_TOKEN}&q=${url}`, {
		cache: 'force-cache'
	})
	const data = await res.json();
	return new Response(JSON.stringify(data), {
		status: 200
	});
}