var path = require('path');
var webpack = require('webpack');


module.exports = {
  cache: false,
  debug: false,
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
      'redux-router',
      'redux-thunk'
    ]
  },

  module: {
    loaders: [
      { exclude: /node_modules/, loader: 'babel', test: /\.js$/ }
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./target'),
    publicPath: '/'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
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
    })
  ],

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('./src')
  },

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
