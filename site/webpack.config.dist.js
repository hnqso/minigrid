var config = require('./webpack.config.js');
var webpack = require('webpack');

config.devtool = 'source-map';

config.entry = [
  './index.js',
  './index.html'
];

config.output.publicPath = './';

config.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
);

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
);

module.exports = config;