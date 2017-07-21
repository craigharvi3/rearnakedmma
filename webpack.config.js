'use strict';

var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

require('es6-promise').polyfill();

module.exports = {
  entry: './app/client/js/index.js',

  output: {
    path: __dirname,
    publicPath: "/public",
    filename: './public/js/app.js'
  },

  plugins: [
    // Specify the resulting CSS filename
    new ExtractTextPlugin('./public/css/app.css')
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader!postcss!sass-loader?outputStyle=expanded'
        )
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },

  postcss: [
    autoprefixer({
      browsers: ['last 2 versions']
    })
  ],

  stats: {
    // Colored output
    colors: true
  }
};
