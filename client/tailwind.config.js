/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				accent: {
					900: '#cc6f71',
					400: '#e08c88',
				},
				secondary: {
					200: '#e4d6c8',
					400: '#fbf5e6',
				},
			},
			fontFamily: {
				poppins: [`"Poppins", sans-serif`],
				montaga: [`"Montaga", sans-serif`],
			},
			boxShadow: {
				full: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
				asideLeft: '-4px 0 4px 0 rgba(0, 0, 0, 0.25);',
			},
		},
	},
	plugins: [],
};
// font-family: "Montaga", serif;
