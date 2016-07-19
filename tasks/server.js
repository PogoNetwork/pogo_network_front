const path        = require('path'),
    fs          = require('fs'),
    cors        = require('cors'),
    extend      = require('util')._extend;
    express     = require('express'),
    compress    = require('compression'),
    bodyParser  = require('body-parser'),
    browserSync = require('browser-sync'),
    gutil       = require('gulp-util');

module.exports = function() {

  const app = express();
  app.use(cors({
    credentials: true,
    origin: true,
    allowedHEaders: ['accept','x-requested-with']
  }));
  app.use(compress());
  app.use(bodyParser());

  app.use(express.static(path.resolve('./build')));
  app.listen(1337, () => gutil.log('Listening on', 1337));

  // Use a proxy in order to allow us to have an API to mock
  browserSync({
    proxy: '0.0.0.0:1337',
    browser: '',
    ui: {
      weinre: {
        port: 3002
      }
    },
    notify: false,
    minify: true,
    open: false
  });

};
