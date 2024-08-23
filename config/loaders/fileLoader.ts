export default (excludedRegex: RegExp) => ({
	test: /\.(png|jpe?g|gif)$/i,
	loader: 'file-loader',
	exclude: excludedRegex,
})