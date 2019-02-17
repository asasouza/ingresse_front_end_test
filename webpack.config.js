const HtmlWebPackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');

const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './index.html',
  filename: './index.html',
  minify: {
    collapseWhitespace: true
  },
  chunksSortMode: 'none',
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
      }
      ]
    },
    { test: /\.(png|jpg|gif)$/, use: [{ loader: 'file-loader', options: { outputPath: 'resources/images/' } }] },
    { test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'resources/fonts/'
        }
      }]
    },
    {
      test: /\.scss$/,
      use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader'
      }
      ]
    }
    ]
  },
  plugins: [
  htmlWebpackPlugin,
  // new BundleAnalyzerPlugin()
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: true,
      })
      ],
  },
};
