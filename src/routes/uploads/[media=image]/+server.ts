import { API_SERVER } from '$env/static/private';
import type { RequestHandler } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';

/**
 * Process images comming from strapi media library
 * */
export const GET: RequestHandler = ({ params }) => {
	const image = params.media;
	throw redirect(302, `${API_SERVER}/uploads/${image}`);
};
