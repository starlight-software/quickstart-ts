const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackMd5Hash = require('webpack-md5-hash')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const ROOT = path.resolve(__dirname, 'src')
const DESTINATION = path.resolve(__dirname, 'dist')

module.exports = {
  context: ROOT,

  entry: { main: './main.ts' },

  output: {
    filename: 'main.js',
    path: DESTINATION,
  },

  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '.css'],
    modules: [ROOT, 'node_modules'],
  },

  module: {
    rules: [
      /****************
       * PRE-LOADERS
       *****************/
      {
        enforce: 'pre',
        test: /\.jsx?$/,
        use: 'source-map-loader',
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'tslint-loader',
      },

      /****************
       * LOADERS
       *****************/
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: 'awesome-typescript-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [
    // new CleanWebpackPlugin('dist', {}),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './index.html',
      filename: 'index.html',
    }),
    new WebpackMd5Hash(),
  ],

  devtool: 'cheap-module-source-map',
  devServer: {
    port: 9000,
  },
}
