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
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		// Specify which of the Tailwind default palette colors to import for use - Add new colours here
		colors: {
			slate: colors.slate,
			gray: colors.gray,
			zinc: colors.zinc,
			neutral: colors.neutral,
			stone: colors.stone,
			red: colors.red,
			orange: colors.orange,
			amber: colors.amber,
			yellow: colors.yellow,
			lime: colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			blue: colors.blue,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink: colors.pink,
			rose: colors.rose,
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
			],
			caption: ['OpticianSans']
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
