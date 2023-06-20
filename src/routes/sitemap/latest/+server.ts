import { API_SERVER } from "$env/static/private";

export const GET = async () => {
	const fileUrl = `${API_SERVER}/api/sitemap/latest`;
	const data = await fetch(fileUrl, {
        cache: "no-cache"
    }).then((res) => res.arrayBuffer());
	return new Response(data);
};
