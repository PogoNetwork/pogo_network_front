const gulp     = require('gulp'),
    gutil     = require('gulp-util'),
    concat    = require('gulp-concat'),
    uglify    = require('gulp-uglify');

/**
 * Build vendor, Concat and build our dependencies
 */
module.exports = function() {

  const prefixNodeDep = name => `./node_modules/${name}`;

  const vendors = [
    'angular/angular.js',
    'angular-ui-router/release/angular-ui-router.min.js',
    'angular-aria/angular-aria.min.js',
    'eventemitter2/lib/eventemitter2.js',
  ].map(prefixNodeDep);

  return gulp
    .src(vendors)
    .pipe(concat('vendor.min.js', {newLine: "\n;"}))
    .pipe(gutil.env.dist ? uglify({
      output: {
        beautify: false
      }
    }) : gutil.noop())
    .pipe(gulp.dest('build/js'))
};
