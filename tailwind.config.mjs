/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand-orange': '#FF4F00', // International Orange (Action)
				'brand-purple': '#571B7E', // Iris Purple (Technical)
				'industrial-black': '#1A1A1A',
			},
			fontFamily: {
				'neue': ['Inter', 'sans-serif'],
				'wayfinder': ['Playfair Display', 'serif'],
			},
			// explicit square crop ratio
			aspectRatio: {
				'square': '1/1',
				'technical': '4/3', //optional technical shot crop
			}
		},
	},
	plugins: [
	// line clamp plugin project descriptions
	require('@tailwindcss/line-clamp'),
	],
}