const { join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
	entry: {
		main: join(__dirname, './src/index.js')
	},
	output: {
		path: join(__dirname, './')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			// {
			// 	test: /\.html$/i,
			// 	loader: 'html-loader',
			// 	options: {
			// 		sources: false
			// 	}
			// }
		]
	},
	devtool: false,
	plugins: [
    new HtmlWebpackPlugin({
			showErrors: true,
			cache: true,
			template: join(__dirname, './src/index.html')
    })
	],
  devServer: {
    contentBase: join(__dirname, './dist/'),
    compress: true,
    port: 3000
  }
}

module.exports = config
