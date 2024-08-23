import { RuleSetRule } from 'webpack';

const scssLoader: RuleSetRule = {
	test: /\.scss$/,
	exclude: /\.module\.scss$/, 
	use: [
	  'style-loader',
	  'css-loader', 
	  'sass-loader',
	],
};

export default scssLoader;