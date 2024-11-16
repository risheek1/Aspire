/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#01D167',
					100: '#01D16730',
					200: '#DDFFEC',
				},

				blue: {
					100: '#EDF3FF',
					200: '#325BAF',
				},
				border: '#F0F0F0',
				grey: {
					DEFAULT: '#AAAAAA',
					100: '#F5F5F5',
				},
			},
		},
	},
	plugins: [],
};
