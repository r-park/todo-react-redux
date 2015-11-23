var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');


module.exports = {
  cache: false,
  debug: true,
  devtool: 'source-map',

  entry: {
    main: './src/main.js',
    vendor: [
      'classnames',
      'firebase',
      'history',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-simple-router',
      'redux-thunk'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./target'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('./src')
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.scss/, loader: ExtractTextPlugin.extract(
        'css!autoprefixer-loader?{browsers:["last 3 versions", "Firefox ESR"]}!sass'
      )}
    ]
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].js'),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        screw_ie8: true,
        unused: true,
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      inject: 'body',
      template: 'src/index.html'
    })
  ],

  stats: {
    cached: true,
    cachedAssets: true,
    chunks: true,
    chunkModules: false,
    colors: true,
    hash: false,
    reasons: true,
    timings: true,
    version: false
  }
};
