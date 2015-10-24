module.exports = function(config) {
  var options = {
    frameworks: [
      'jasmine'
    ],

    files: [
      'node_modules/sinon/pkg/sinon.js',
      'test/lib/mockfirebase.js',
      'webpack.test.js'
    ],

    preprocessors: {
      'webpack.test.js': ['webpack', 'sourcemap']
    },

    // webpack config
    webpack: require('./webpack.config.test'),

    // webpack server config
    webpackServer: {
      noInfo: true
    },

    reporters: ['dots'],

    // config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    singleRun: false,

    browserNoActivityTimeout: 180000, // 3 mins

    customLaunchers: {
      TRAVIS_CHROME: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },

    browsers: process.env.TRAVIS ? ['TRAVIS_CHROME'] : ['Chrome']
  };


  // additional options for coverage
  if (process.argv.indexOf('--coverage') !== -1) {
    options.singleRun = true;
    options.reporters.push('coverage');

    options.coverageReporter = {
      type : 'lcov',
      dir  : 'tmp/coverage'
    };

    options.webpack.module.preLoaders = [
      { exclude: /(karma|node_modules|spec|vendor)/, loader: 'isparta', test: /\.js$/ }
    ];
  }


  config.set(options);
};
