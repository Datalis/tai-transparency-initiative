import type { RequestHandler } from "@sveltejs/kit";
import { LIVE_PREVIEW_TOKEN } from '$env/static/private';


const defaultData = {
	image: "https://placehold.jp/300x250.png"
}

export const GET: RequestHandler = async ({ url }) => {
	try {
		const data = decodeURIComponent(url.searchParams.get('data') || "");
		const res = await fetch(`http://api.linkpreview.net/?key=${LIVE_PREVIEW_TOKEN}&q=${data}`, {
			cache: 'default'
		})
		const d = await res.json();
		return new Response(JSON.stringify(d), {
			status: 200
		});
	} catch (e) {
		console.error(e);
		return new Response(JSON.stringify(defaultData), {
			status: 200
		})
	}
}