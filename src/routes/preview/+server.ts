import type { RequestHandler } from "@sveltejs/kit";
import ogs from 'open-graph-scraper';

// Declara una variable para almacenar la url de la imagen
let imageUrl = null;

async function getArticleImage(articleUrl: any) {
	// Opciones de configuración para open-graph-scraper
	const options = {
		url: articleUrl,
	};
	let res
	try {
		// Extrae la información de Open Graph de la página web
		 res = await ogs(options);
	} catch (error) {
		console.log(error);
		return {ogImage: {url: "https://placehold.jp/300x250.png"}};
	}
	// Si no se ha encontrado ninguna imagen para compartir en redes sociales, muestra un mensaje de error
	// @ts-ignore
	if (!res.result?.success || !res.result?.ogImage) {
		console.error('No se ha encontrado ninguna imagen para compartir en redes sociales');
		return {ogImage: {url: "https://placehold.jp/300x250.png"}};
	}
	return res.result

}

// @ts-ignore
export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();
		const res = await getArticleImage(data.url)
		return new Response(JSON.stringify(res), {
			status: 200
		});
	} catch (e) {
		console.error(e);
	}
}
