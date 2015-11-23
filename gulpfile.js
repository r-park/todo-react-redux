var browserSync   = require('browser-sync'),
    coveralls     = require('gulp-coveralls'),
    del           = require('del'),
    eslint        = require('gulp-eslint'),
    gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    header        = require('gulp-header'),
    historyApi    = require('connect-history-api-fallback'),
    karma         = require('karma'),
    path          = require('path'),
    webpack       = require('webpack'),
    WebpackServer = require("webpack-dev-server");


//=========================================================
//  PATHS
//---------------------------------------------------------
var paths = {
  src: {
    root: 'src',
    html: 'src/*.html',
    js: 'src/**/*.js'
  },

  target: 'target'
};


//=========================================================
//  CONFIG
//---------------------------------------------------------
var config = {
  browserSync: {
    files: [paths.target + '/**'],
    notify: false,
    open: false,
    port: 3000,
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
    src: paths.target + '/{main.js,styles.css}',
    template: '/* <%= name %> v<%= version %> - <%= date %> - <%= url %> */\n'
  },

  karma: {
    configFile: path.resolve('./karma.config.js')
  },

  webpack: {
    dev: './webpack.config.dev',
    prod: './webpack.config.prod'
  }
};


//=========================================================
//  TASKS
//---------------------------------------------------------
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


gulp.task('js', function(done){
  var conf = require(config.webpack.prod);
  webpack(conf).run(function(error, stats){
    if (error) throw new gutil.PluginError('webpack', error);
    gutil.log(stats.toString(conf.stats));
    done();
  });
});


gulp.task('lint', function(){
  return gulp.src(config.eslint.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('serve', function(done){
  config.browserSync.server.middleware = [historyApi()];
  browserSync.create()
    .init(config.browserSync, done);
});


gulp.task('serve.dev', function(done){
  var conf = require(config.webpack.dev);
  var compiler = webpack(conf);

  var server = new WebpackServer(compiler, {
    contentBase: paths.src.root,
    historyApiFallback: true,
    hot: true,
    publicPath: conf.output.publicPath,
    stats: conf.stats
  });

  server.listen(3000, 'localhost', function(){
    gutil.log(gutil.colors.gray('-------------------------------------------'));
    gutil.log('WebpackDevServer:', gutil.colors.magenta('http://localhost:3000'));
    gutil.log(gutil.colors.gray('-------------------------------------------'));
    done();
  });
});


//===========================
//  DEVELOP
//---------------------------
gulp.task('default', gulp.parallel('serve.dev'));


//===========================
//  TEST
//---------------------------
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


//===========================
//  RELEASE
//---------------------------
gulp.task('dist', gulp.series(
  'lint',
  'test',
  'clean.target',
  'copy.html',
  'js',
  'headers'
));
