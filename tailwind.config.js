/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#ff2210',
				secondary: '#1f46c1',
				background: '#0f152e',
			  }
		},

	},
	plugins: [],
};
