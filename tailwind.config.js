/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"background-main": "url('/img/donut-wall.webp')",
			},
			fontFamily: {
				ssp: ["var(--font-ssp)"],
				libre: ["var(--font-libre)"],
			},
			colors: {
				beige: "#FFE6D0",
				secondary: "#6D2402",
				background: "#F5F5DB",
			},
		},
	},
	plugins: [],
};
