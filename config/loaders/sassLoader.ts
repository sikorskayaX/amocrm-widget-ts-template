export default (excludedRegex: RegExp) => ({
	test: /\.(c|sa|sc)ss$/i,
	exclude: excludedRegex,
	use: [
	"style-loader",
	"css-loader",
	"sass-loader"
	],
})