const path         = require('path'),
    gulp         = require('gulp'),
    plumber      = require('gulp-plumber'),
    rename       = require('gulp-rename'),
    postcss      = require('gulp-postcss'),
    cssnano      = require('cssnano'),
    gutil        = require('gulp-util'),
    atImport     = require('postcss-import'),
    browserSync  = require('browser-sync'),
    reload       = browserSync.reload;

/**
 * Concat our CSS
 */
module.exports = function() {

  const isDist = gutil.env.dist;
  const root = path.resolve('./src/stylesheets');
  const plugins = [atImport()];

  if (isDist) {
    plugins
      .push(cssnano({
        calc: false,
        mergeRules: false,
        reduceTransforms: false,
        zindex: false
      }));
  }
  else {
    const autoPrefixer = require('autoprefixer');
    plugins.push(autoPrefixer({browsers: '> 5% in FR'}));
  }

  return gulp.src(root + '/index.css')
    // .pipe(plumber())
    .pipe(postcss(plugins, {
      root: root,
      path: root,
      from: root + '/index.css'
    }))
    .pipe(rename('main.css'))
    .pipe(gulp.dest('./build/styles/'))
    .pipe(reload({stream: true}));
};
