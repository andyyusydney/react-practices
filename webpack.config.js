var path = require( 'path' )

const HtmlWebPackPlugin = require("html-webpack-plugin")
const htmlPlugin = new HtmlWebPackPlugin({
	template: "./src/index.html",
	filename: "./index.html"
})

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'index.tsx'),
	devtool: 'cheap-module-source-map',
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: ["babel-loader", "eslint-loader"]
		},
		{
			test: /\.tsx?$/,
			exclude: /node_modules/,
			loader: 'ts-loader'
		},
		{
			test: /\.css$/,
			use: ["style-loader", "css-loader"]
		}]
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js']
	},
	plugins: [htmlPlugin]
}