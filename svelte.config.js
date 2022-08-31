import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ['@TAI'],
			prependData: "@import './src/lib/theme/src/_variables.scss';"
		},
		postcss: {
			plugins: [
				autoprefixer({
					add: true
				})
			]
		}
	}),
	kit: {
		adapter: adapter({
			edge: true
		})
	}
};

export default config;
