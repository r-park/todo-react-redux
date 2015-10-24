var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'inline-source-map',

  externals: {
    firebase: 'MockFirebase'
  },

  module: {
    loaders: [
      { exclude: /node_modules/, loader: 'babel', test: /\.js$/ }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    })
  ],

  resolve: {
    alias: {
      test: path.resolve('./test')
    },
    root: path.resolve('./src')
  }
};
