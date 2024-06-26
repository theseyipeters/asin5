/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				white: {
					1: "#FFF",
					2: "#F9F9F9",
					3: "#F4F4F4",
				},
				black: {
					1: "#212121",
					2: "#303030",
					3: "#101010",
				},

				gray: {
					1: "#4E4E4E",
					2: "#8E8E8E",
				},
				teal: {
					1: "#20888F",
				},
				orange: {
					1: "#F47733",
				},
				pink: {
					1: "#FF78BF",
					2: "#FF88C6",
				},
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
