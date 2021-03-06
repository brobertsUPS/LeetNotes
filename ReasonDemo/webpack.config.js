'use strict';

var path = require('path');
var webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './lib/js/src/simpleRoot.js',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // Set up Reason and OCaml files to use the loader
      { 
        test: /\.(re|ml)$/, 
        use: 'bs-loader' 
      }, 
      {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },
  resolve: {
    // Add .re and .ml to the list of extensions webpack recognizes
    extensions: ['.re', '.ml', '.js'],
    alias : {
      js : path.resolve(__dirname, 'lib', 'js', 'src')
    }
  },
  plugins: [
        new ExtractTextPlugin('build/css/main.css')
    ]
};

