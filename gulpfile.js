const gulp = require('gulp');
const browserify = require('browserify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');



gulp.task('browserify', () => {
  browserify('./src/js/main.js')
  .transform('reactify')
  .bundle()
  .pipe(source('main.js'))
  .pipe(gulp.dust('dist/js'));
});
