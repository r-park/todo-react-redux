const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const WebpackMd5Hash = require('webpack-md5-hash');


//=========================================================
//  ENVIRONMENT VARS
//---------------------------------------------------------
const NODE_ENV = process.env.NODE_ENV;

const ENV_DEVELOPMENT = NODE_ENV === 'development';
const ENV_PRODUCTION = NODE_ENV === 'production';
const ENV_TEST = NODE_ENV === 'test';

const HOST = '0.0.0.0';
const PORT = 3000;


//=========================================================
//  LOADERS
//---------------------------------------------------------
const loaders = {
  js: {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
  scss: {test: /\.scss$/, loader: 'style!css!postcss!sass'}
};


//=========================================================
//  CONFIG
//---------------------------------------------------------
const config = {};
module.exports = config;


config.resolve = {
  extensions: ['', '.js'],
  modulesDirectories: ['node_modules'],
  root: path.resolve('.')
};

config.plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  })
];

config.postcss = [
  autoprefixer({ browsers: ['last 3 versions'] })
];

config.sassLoader = {
  outputStyle: 'compressed',
  precision: 10,
  sourceComments: false
};


//=====================================
//  DEVELOPMENT or PRODUCTION
//-------------------------------------
if (ENV_DEVELOPMENT || ENV_PRODUCTION) {
  config.entry = {
    main: ['./src/main.js']
  };

  config.output = {
    filename: '[name].js',
    path: path.resolve('./target'),
    publicPath: '/'
  };

  config.plugins.push(
    new HtmlWebpackPlugin({
      chunkSortMode: 'dependency',
      filename: 'index.html',
      hash: false,
      inject: 'body',
      template: './src/index.html'
    })
  );
}


//=====================================
//  DEVELOPMENT
//-------------------------------------
if (ENV_DEVELOPMENT) {
  config.devtool = 'cheap-module-source-map';

  config.entry.main.unshift(
    `webpack-dev-server/client?http://${HOST}:${PORT}`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    'babel-polyfill'
  );

  config.module = {
    loaders: [
      loaders.js,
      loaders.scss
    ]
  };

  config.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );

  config.devServer = {
    contentBase: './src',
    historyApiFallback: true,
    host: HOST,
    hot: true,
    port: PORT,
    publicPath: config.output.publicPath,
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
}


//=====================================
//  PRODUCTION
//-------------------------------------
if (ENV_PRODUCTION) {
  config.devtool = 'source-map';

  config.entry.vendor = './src/vendor.js';

  config.output.filename = '[name].[chunkhash].js';

  config.module = {
    loaders: [
      loaders.js,
      {test: /\.scss$/, loader: ExtractTextPlugin.extract('css?-autoprefixer!postcss!sass')}
    ]
  };

  config.plugins.push(
    new WebpackMd5Hash(),
    new ExtractTextPlugin('styles.[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        dead_code: true, // eslint-disable-line camelcase
        screw_ie8: true, // eslint-disable-line camelcase
        unused: true,
        warnings: false
      }
    })
  );
}


//=====================================
//  TEST
//-------------------------------------
if (ENV_TEST) {
  config.devtool = 'inline-source-map';

  config.module = {
    loaders: [
      loaders.js,
      loaders.scss
    ]
  };
}
