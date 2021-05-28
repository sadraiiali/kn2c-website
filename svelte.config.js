/** @type {import('@sveltejs/kit').Config} */

import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-netlify';


const config = {
	preprocess: [
		sveltePreprocess({
			postcss: true,
			scss: {
				prependData: `@import 'src/styles/variables.scss';`
			}
		})
	],
	kit: {
		paths: { base: '/' },
		adapter: adapter(),
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},
		target: '#svelte'
	}
};

export default config;
