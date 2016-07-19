const gulp  = require('gulp');

// Default task : Open url, lauch server, livereaload
gulp.task('default',['vendor', 'layout','scripts','styles'], () => {

  gulp.start('server');

  gulp.watch('src/**/*.html', ['layout']);
  gulp.watch(['./src/app/**/index.js', './src/app/**/**/**/*.js'], ['scripts']);
  gulp.watch('src/**/*.css', ['styles']);

});

gulp.task('server', () => {
  require('./tasks/server')();
});


// Concatenate your partials and append them to index.html
gulp.task('layout', require('./tasks/layout'));

// Concatenate your app and build an app.js
gulp.task('scripts', require('./tasks/app'));

// Build my css
gulp.task('styles', require('./tasks/styles'));

// Build your vendors
gulp.task('vendor', require('./tasks/vendor'));
