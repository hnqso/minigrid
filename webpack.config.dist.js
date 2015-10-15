var config = require('./webpack.config.js');
var webpack = require('webpack');
var pkg = require('./package.json');

var banner = '@license minigrid ';
banner = banner + pkg.version;
banner = banner + ' – minimal cascading grid layout http://alves.im/minigrid';

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
  }),
  new webpack.BannerPlugin(banner)
);

config.eslint.emitError = true;

module.exports = config;