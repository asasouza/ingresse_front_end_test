const HtmlWebPackPlugin = require('html-webpack-plugin');

const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
	template: './index.html',
	filename: './index.html',
  // favicon: './path/to/icon',
	minify: {
		collapseWhitespace: true
	},
  chunksSortMode: 'none',
  // inject: 'head'
});
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve('dist'),
		filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
	},
	module: {
		rules: [
		{ test: /\.js$/, exclude: /node_modules/, use: { loader: 'babel-loader' } },
		{ test: /\.css$/, 
			use: [
			{
				loader: 'style-loader'
			},
			{
				loader: 'css-loader',
				options: {
					modules: true,
					importLoaders: 1,
					localIdentName: '[local]',
					minimize: true
				}
			}
			]
		},
		{ test: /\.(png|jpg|gif)$/, use: [{ loader: 'file-loader', options: {outputPath: 'resources/images/'} }] },
		{ test: /\.json$/, loader: 'json-loader' },
      // { test: /\.svg$/, loader: 'svg-inline-loader' },
      {test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      	use: [{
      		loader: 'file-loader',
      		options: {
      			name: '[name].[ext]',
      			outputPath: 'resources/fonts/'
      		}
      	}]
      }
      ]
  },
  plugins: [
    htmlWebpackPlugin,
  	
  	],
  	devServer: {
  		historyApiFallback: true
  	},
  	resolve: {
  		alias: {
        assets: path.resolve(__dirname, './src/assets/'),
  			components: path.resolve(__dirname, './src/components/'),
        constants: path.resolve(__dirname, './src/constants/'),
        ducks: path.resolve(__dirname, './src/ducks/'),
        providers: path.resolve(__dirname, './src/providers/'),
        routers: path.resolve(__dirname, './src/routers'),
        views: path.resolve(__dirname, './src/views/')

  		}
  	},
  };
