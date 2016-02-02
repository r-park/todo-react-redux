const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

// plugins
const AggressiveMergingPlugin = webpack.optimize.AggressiveMergingPlugin;
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const DedupePlugin = webpack.optimize.DedupePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OccurenceOrderPlugin = webpack.optimize.OccurenceOrderPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;


module.exports = {
  cache: false,
  debug: true,
  devtool: 'source-map',

  entry: {
    main: './src/main.js',
    vendor: [
      'babel-polyfill',
      'classnames',
      'firebase',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
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
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!postcss-loader!sass')}
    ]
  },

  postcss: [
    autoprefixer({ browsers: ['last 3 versions', 'Firefox ESR'] })
  ],

  plugins: [
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
        dead_code: true,
        screw_ie8: true,
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
