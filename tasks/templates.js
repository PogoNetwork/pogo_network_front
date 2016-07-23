const path        = require('path'),
    gulp          = require('gulp'),
    gutil         = require('gulp-util'),
    browserSync   = require('browser-sync'),
    reload        = browserSync.reload,
    uglify        = require('gulp-uglify'),
    tap           = require('gulp-tap'),
    htmlmin       = require('gulp-htmlmin'),
    htmlify       = require('gulp-angular-htmlify'),
    templateCache = require('gulp-angular-templatecache');

/**
 * Create a cache for angular templates
 * Put some files in partials for compatibility
 * @return {Stream}
 */
module.exports = function() {

  const sep = path.sep;
  const glob = [
    './src/app/**/directives/**/*.html',
    './src/app/**/states/**/*.html'
  ];

  return gulp
    .src(glob)
    .pipe(tap(file => {
      const dirname = path.dirname(file.relative);
      const names = dirname.split(sep);
      const module = /directives/.test(dirname) ? `${names[0]}.${names[2]}` : names[0];
      // ex: core.map.states.html
      file.path = `${module}.${path.basename(file.relative)}`;
    }))
    .pipe(htmlify({
      customPrefixes: ['ui-']
    }))
    .pipe(gutil.env.dist ? htmlmin({collapseWhitespace: true, removeAttributeQuotes:true}) : gutil.noop())
    .pipe(templateCache('templates.js', {
      root: '',
      module: 'templates',
      standalone: true
    }))
    .pipe(gutil.env.dist ? uglify() : gutil.noop())
    .pipe(gulp.dest('./build/js'))
    .pipe(reload({stream: true}));
};
