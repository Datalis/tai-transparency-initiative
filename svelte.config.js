import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ['@TAI'],
			prependData: "@import './src/lib/theme/src/_variables.scss';"
		}
	}),
	kit: {
		adapter: adapter({
			edge: true
		})
	}
};

export default config;
