var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

  devtool: 'eval',

  entry: './src/index.js',

  output: {
    filename: 'minigrid.min.js',
    path: path.join(__dirname, 'dist')
  },

  plugins: [
    new ExtractTextPlugin('styles.css')
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
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract('style-loader','css-loader')
    }, {
      test: /\.(png|jpg|svg|gif)$/,
      loader: 'url-loader?limit=14250'
    }],

    preLoaders: [{
      test: /\.js$/,
      loaders: ['eslint'],
      include: [new RegExp(path.join(__dirname, 'src'))],
      exclude: /node_modules/
    }]
  },

  eslint: {
    configFile: '.eslintrc'
  }

};