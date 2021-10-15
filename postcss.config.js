const tailwindcss = require('tailwindcss')
// cssnano ready
const cssnano = require('cssnano')
const autoprefixer = require('autoprefixer')
const plugins = [tailwindcss(), autoprefixer(), cssnano()]

module.exports = {
	plugins: {

	}
}
