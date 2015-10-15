var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config.dist.js');

config.devtool = null;
config.entry = '../src/index.js';
config.output.filename = 'minigrid.min.js';

module.exports = config;