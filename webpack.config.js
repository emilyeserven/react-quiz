var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  entry: APP_DIR + '/index.jsx',
  devServer: {
    contentBase: BUILD_DIR
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js(x)?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }, {
        test: /\.json$/, loader: 'json-loader'
      }
    ]
  }
};

module.exports = config;
