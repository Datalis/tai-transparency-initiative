import { API_SERVER } from "$env/static/private";
import type { RequestHandler } from "@sveltejs/kit";
import sharp from 'sharp';
import { Blob, Buffer } from 'node:buffer';

/**
 * Process images comming from strapi media library
 * */
export const GET: RequestHandler = async ({params}) => {
	const image = params.media;
	const response = await fetch(`${API_SERVER}/uploads/${image}`, {
		method: 'GET',
		cache: "force-cache"
	})
	const file = await response.blob();
	// const buffer = Buffer.from(file);
	// const output = await sharp(buffer).webp({lossless: true}).toBuffer()
	// const blob = new Blob([output]);
	//@ts-ignore
	return new Response(file);
}