module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fontFamily: {
			'body': ['Montserrat', 'arial', 'system-ui', 'sans-serif']
		},
		extend: {},
		minWidth: {
			'30': '30rem',
			'full': '100%'
		}
	},
	plugins: []
};
