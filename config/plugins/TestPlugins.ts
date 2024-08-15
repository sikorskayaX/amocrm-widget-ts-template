import webpack, { WebpackPluginInstance } from 'webpack';
import scriptJs from '../assets/scriptJs';
import { GenerateTextAssetPlugin } from '../custom-plugins/GenerateTextAssetPlugin';
import ZipPlugin from '../custom-plugins/WidgetZipPlugin';
import { appEnv } from '../env-config/envs';
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export default (zipName: string, bundlePath: string): WebpackPluginInstance[] => [
	new ZipPlugin({
		outputFile: zipName,
		targetDir: bundlePath,
		exclude: [ zipName ],
	}),
	new webpack.DefinePlugin(appEnv),
	new GenerateTextAssetPlugin({
		outputFile: 'script.js',
		content: scriptJs,
		args: [ './index.js' ],
	}),
	new MiniCssExtractPlugin({
        filename: 'index.css',
    })
]