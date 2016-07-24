const gulp        = require('gulp'),
    tap         = require('gulp-tap'),
    gutil       = require('gulp-util'),
    babel       = require('gulp-babel'),
    concat      = require('gulp-concat'),
    plumber     = require('gulp-plumber'),
    uglify      = require('gulp-uglify'),
    replace     = require('gulp-replace'),
    sourcemaps  = require('gulp-sourcemaps'),
    cached      = require('gulp-cached'),
    remember    = require('gulp-remember'),
    ngAnnotate  = require('gulp-ng-annotate'),
    browserSync = require('browser-sync');
    reload      = browserSync.reload;

/**
 * Create a single file app.js
 */
module.exports = function() {

  const noop = gutil.noop;
  const isDist = (cb, opt) => (gutil.env.dist ? cb : noop)(opt);
  const isNotDist = (cb, opt) => (!gutil.env.dist ? cb : noop)(opt);

  const glob = ['./src/app/**/index.js', './src/app/**/**/**/*.js'];

  return gulp
    .src(glob)
    .pipe(plumber())
    .pipe(cached())
    .pipe(isNotDist(sourcemaps.init))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(remember())
    .pipe(concat('app.js'))
    .pipe(isDist(ngAnnotate, {
      add: true,
      remove: true,
      single_quotes: true
    }))
    .pipe(replace('\'%activeCompiler%\'', !gutil.env.dist))
    .pipe(replace('{{API_KEY}}', gutil.env.config.API_KEY))
    .pipe(isDist(uglify, {
      output: {
        quote_style: 1
      }
    }))
    .pipe(isNotDist(sourcemaps.write, './'))
    .pipe(gulp.dest('./build/js'))
    .pipe(reload({stream: true}));
};
