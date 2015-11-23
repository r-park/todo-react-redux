var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack');


module.exports = {
  cache: true,
  debug: true,
  devtool: 'cheap-module-eval-source-map',

  entry: {
    main: [
      'webpack-dev-server/client?http://localhost:3000',
      'webpack/hot/dev-server',
      './src/main.js'
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
    root: path.resolve('src')
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {
        plugins: ['react-transform'],
        extra: {
          'react-transform': {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              locals: ['module']
            }]
          }
        }
      }},

      {test: /\.scss/, loader: 'style!css!autoprefixer-loader?{browsers:["last 3 versions", "Firefox ESR"]}!sass'}
    ]
  },

  sassLoader: {
    outputStyle: 'nested',
    precision: 10,
    sourceComments: false
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
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
