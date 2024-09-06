/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{html,ts}",
	],
	theme: {
		extend: {
		colors: {
			"my-blue": "#022959",
			"my-purple": "#483EFF",
			"my-grey": "#9699AA",
		}
		},
	},
	plugins: [],
}

