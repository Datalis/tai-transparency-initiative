import type { RequestHandler } from "@sveltejs/kit";
import { LIVE_PREVIEW_TOKEN } from '$env/static/private';


const defaultData = {
	image: "https://placehold.jp/300x250.png"
}

export const GET: RequestHandler = async ({ params }) => {
	try {
		const url = decodeURIComponent(params.url || "");
		const res = await fetch(`http://api.linkpreview.net/?key=${LIVE_PREVIEW_TOKEN}&q=${url}`, {
			cache: 'default'
		})
		const data = await res.json();
		return new Response(JSON.stringify(data), {
			status: 200
		});
	} catch (e) {
		console.error(e);
		return new Response(JSON.stringify(defaultData), {
			status: 200
		})
	}
}