var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  devtool: 'eval',

  entry: [
    'webpack-hot-middleware/client',
    './index'
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    publicPath: '/'
  },

  plugins: [
    new ExtractTextPlugin('styles.css', { allChunks: true }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.NormalModuleReplacementPlugin(
      /^minigrid$/,
      '../src/index'
    )
  ],

  module: {
    loaders: [{
      test: /\.html?$/,
      loaders: ['html-loader', 'file-loader?name=[name].[ext]']
    }, {
      test: /\.js?$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }, {
      test: /\.json?$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    },{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader')
    }, {
      test: /\.(png|jpg|svg|gif)$/,
      loader: 'url-loader?limit=14250'
    }, {
      test: /static/,
      exclude: /node_modules/,
      loader: 'file-loader?name=[name].[ext]'
    }]

  }

};