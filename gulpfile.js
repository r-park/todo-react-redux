var autoprefixer = require('autoprefixer'),
    browserSync  = require('browser-sync'),
    coveralls    = require('gulp-coveralls'),
    del          = require('del'),
    eslint       = require('gulp-eslint'),
    gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    header       = require('gulp-header'),
    historyApi   = require('connect-history-api-fallback'),
    inject       = require('gulp-inject'),
    karma        = require('karma'),
    path         = require('path'),
    postcss      = require('gulp-postcss'),
    sass         = require('gulp-sass'),
    webpack      = require('webpack'),
    webpackDev   = require('webpack-dev-middleware'),
    webpackHot   = require('webpack-hot-middleware');


/*=========================================================
  PATHS
---------------------------------------------------------*/
var paths = {
  src: {
    html: 'src/**/*.html',
    js: 'src/**/*.js',
    sass: 'src/styles/**/*.scss'
  },

  target: 'target'
};


/*=========================================================
  CONFIG
---------------------------------------------------------*/
var config = {
  autoprefixer: {
    browsers: ['last 3 versions', 'Firefox ESR', 'Opera 12.1']
  },

  browserSync: {
    files: [paths.target + '/**/!(*.js)'],
    notify: false,
    open: false,
    port: 7000,
    reloadDelay: 1200,
    server: {
      baseDir: paths.target
    }
  },

  coveralls: {
    src: 'tmp/coverage/**/lcov.info'
  },

  eslint: {
    src: paths.src.js
  },

  header: {
    src: paths.target + '/*.{css,js}',
    template: '/* <%= name %> v<%= version %> - <%= date %> - <%= url %> */\n'
  },

  inject: {
    src: 'target/index.html',
    includes: [
      'target/vendor.js'
    ],
    options: {relative: true}
  },

  karma: {
    configFile: path.resolve('./karma.config.js')
  },

  sass: {
    errLogToConsole: true,
    outputStyle: 'nested',
    precision: 10,
    sourceComments: false
  },

  webpack: {
    dev: './webpack.config.dev',
    prod: './webpack.config.prod'
  }
};


/*=========================================================
  TASKS
---------------------------------------------------------*/
gulp.task('clean.target', function(){
  return del(paths.target);
});


gulp.task('copy.html', function(){
  return gulp.src(paths.src.html)
    .pipe(gulp.dest(paths.target));
});


gulp.task('coveralls', function(){
  return gulp.src(config.coveralls.src)
    .pipe(coveralls());
});


gulp.task('headers', function(){
  var pkg = require('./package.json');
  var headerContent = {date: (new Date()).toISOString(), name: pkg.name, version: pkg.version, url: pkg.homepage};

  return gulp.src(config.header.src)
    .pipe(header(config.header.template, headerContent))
    .pipe(gulp.dest(paths.target));
});


gulp.task('inject', function(){
  return gulp.src(config.inject.src)
    .pipe(inject(
      gulp.src(config.inject.includes, {read: false}),
      config.inject.options
    ))
    .pipe(gulp.dest(paths.target));
});


gulp.task('js', function(done){
  var conf = require(config.webpack.prod);
  webpack(conf).run(function(error, stats){
    if (error) throw new gutil.PluginError('webpack', error);
    gutil.log(stats.toString(config.webpack.stats));
    done();
  });
});


gulp.task('lint', function(){
  return gulp.src(config.eslint.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('sass', function(){
  return gulp.src(paths.src.sass)
    .pipe(sass(config.sass))
    .pipe(postcss([
      autoprefixer(config.autoprefixer)
    ]))
    .pipe(gulp.dest(paths.target));
});


gulp.task('serve', function(done){
  config.browserSync.server.middleware = [
    historyApi()
  ];

  browserSync.create()
    .init(config.browserSync, done);
});


gulp.task('serve.dev', function(done){
  var conf = require(config.webpack.dev);
  var bundler = webpack(conf);

  config.browserSync.server.middleware = [
    webpackDev(bundler, {stats: conf.stats}),
    webpackHot(bundler),
    historyApi()
  ];

  browserSync.create()
    .init(config.browserSync, done);
});


/*===========================
  BUILD
---------------------------*/
gulp.task('build', gulp.series(
  'clean.target',
  'copy.html',
  'sass'
));


/*===========================
  DEVELOP
---------------------------*/
gulp.task('default', gulp.series(
  'build',
  'serve.dev',
  function watch(){
    gulp.watch(paths.src.html, gulp.task('copy.html'));
    gulp.watch(paths.src.sass, gulp.task('sass'));
  }
));


/*===========================
  TEST
---------------------------*/
function karmaServer(options, done) {
  var server = new karma.Server(options, function(error){
    if (error) process.exit(error);
    done();
  });
  server.start();
}


gulp.task('test', function(done){
  config.karma.singleRun = true;
  karmaServer(config.karma, done);
});


gulp.task('test.watch', function(done){
  karmaServer(config.karma, done);
});


/*===========================
  RELEASE
---------------------------*/
gulp.task('dist', gulp.series('lint', 'test', 'build', 'js', 'inject', 'headers'));


/*===========================
  RUN
---------------------------*/
gulp.task('run', gulp.series('build', 'serve.dev'));
