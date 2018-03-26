var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
      }, {
        test: /\.css$/, use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],
};

module.exports = config;
