var gulp = require('gulp');
var jsx = require('gulp-jsx');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./styles/olympics.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('build', function() {
    return gulp.src('scripts/**/*.jsx')
        .pipe(babel({
            presets: ['react']
        }))
        .pipe(rename(function (path) {
            path.extname = ".js"
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
  watch('scripts/**/*.jsx', function() {
    gulp.run(['build']);
  });
  watch('styles/**/*.scss', function() {
      gulp.run(['sass']);
  });
});