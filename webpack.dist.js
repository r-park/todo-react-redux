const webpack = require('webpack');
const config = require('./webpack.base');

// plugins
const AggressiveMergingPlugin = webpack.optimize.AggressiveMergingPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const DedupePlugin = webpack.optimize.DedupePlugin;
const DefinePlugin = webpack.DefinePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


module.exports = {
  cache: false,
  debug: true,
  devtool: 'source-map',
  entry: config.entry,
  output: config.output,
  resolve: config.resolve,
  postcss: config.postcss,
  sassLoader: config.sassLoader,

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!postcss-loader!sass')}
    ]
  },

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new ExtractTextPlugin('styles.css'),
    new OccurenceOrderPlugin(),
    new DedupePlugin(),
    new AggressiveMergingPlugin(),
    new CommonsChunkPlugin('vendor', '[name].js'),
    new HtmlWebpackPlugin({
      chunksSortMode: 'none',
      filename: 'index.html',
      hash: true,
      inject: 'body',
      template: './src/index.html'
    }),
    new UglifyJsPlugin({
      compress: {
        dead_code: true, // eslint-disable-line camelcase
        screw_ie8: true, // eslint-disable-line camelcase
        unused: true,
        warnings: false
      }
    })
  ],

  stats: {
    cached: true,
    cachedAssets: true,
    chunks: true,
    chunkModules: true,
    colors: true,
    hash: false,
    reasons: false,
    timings: true,
    version: false
  }
};
