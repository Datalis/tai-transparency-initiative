import adapterNode from '@sveltejs/adapter-node';
import adapterNetlify from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';
import autoprefixer from 'autoprefixer';

const adapter = process.env.NETLIFY ? adapterNetlify : adapterNode;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		scss: {
			includePaths: ['@TAI'],
			prependData: "@import './src/lib/theme/src/_variables.scss';"
		},
		postcss: {
			plugins: [autoprefixer()]
		}
	}),
	kit: {
		prerender: {
			entries: ['*']
		},
		adapter: adapter({
			edge: false
		}),
		files: {
			serviceWorker: 'src/firebase-messaging-sw.js'
		},
		serviceWorker: {
			register: true
		}
	}
};

export default config;
