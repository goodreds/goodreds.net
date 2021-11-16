// Import Tailwind default palette colors
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
	mode: 'jit',
	purge: {
		content: [
		'./src/**/*.{njk,md,js}',
		'./src/*.{njk,md,js}',
		'./.*.js',
		'./_site/**/*.html',
	],
		options: {
			safelist: [],
		},
	},
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		// Specify which of the Tailwind default palette colors to import for use
		colors: {
			gray: colors.blueGray,
			purple: colors.purple,
			orange: colors.orange,
			rose: colors.rose,
			blue: colors.blue,
			green: colors.green,
			yellow: colors.yellow,
			white: colors.white,
			black: colors.black,
			current: 'currentColor',
			transparent: 'transparent'
		},
		fontFamily: {
			sans: [
				'ProximaNova',
				'ui-sans-serif',
				'system-ui',
				'-apple-system',
				'BlinkMacSystemFont',
				'Segoe UI',
				'Roboto',
				'Helvetica Neue',
				'Arial',
				'Noto Sans',
				'sans-serif',
				'Apple Color Emoji',
				'Segoe UI Emoji',
				'Segoe UI Symbol',
				'Noto Color Emoji'
			],
			serif: [
				'ui-serif',
				'Georgia',
				'Cambria',
				'Times New Roman',
				'Times',
				'serif'
			]
		}
	},
	variants: {
		backgroundColor: ['responsive', 'dark', 'focus', 'active', 'hover'],
		extend: { space: ['last'],
		backgroundColor: ['odd'],
		brightness: ['odd'],
		}
	},
	plugins: []
}
