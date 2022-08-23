// @ts-nocheck
import { sveltekit } from '@sveltejs/kit/vite';
import svg from '@poppanator/sveltekit-svg';
import { imagetools } from 'vite-imagetools';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		imagetools({
			removeMetadata: true
		}),
		svg({
			svgoOptions: {
				multipass: true,
				plugins: []
			}
		})
	]
};

export default config;
