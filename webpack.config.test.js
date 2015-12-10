var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'inline-source-map',

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.scss/, loader: 'style!css!autoprefixer-loader?{browsers:["last 3 versions", "Firefox ESR"]}!sass'}
    ]
  },

  resolve: {
    alias: {
      test: path.resolve('./test')
    },
    root: path.resolve('./src')
  }
};
