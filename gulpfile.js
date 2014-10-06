var gulp, jade;

gulp = require('gulp');
jade = require('gulp-jade');

gulp.task('templates', function(){
  gulp.src('./jade/index.jade')
  .pipe(jade({
    pretty: true
  }))
  .pipe(gulp.dest('./dist/'));
});
