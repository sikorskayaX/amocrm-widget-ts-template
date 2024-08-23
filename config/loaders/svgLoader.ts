import { RuleSetRule } from 'webpack';

const svgLoader: RuleSetRule = {
  test: /\.svg$/,
  use: [
    {
    loader: '@svgr/webpack',
      options: {
        name: '[name].[ext]',
        outputPath: 'assets/', 
      },
    },
  ],
};

export default svgLoader;