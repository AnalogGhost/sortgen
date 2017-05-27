const babel = require('gulp-babel');
const clean = require('gulp-clean');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const rename = require("gulp-rename");
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');

gulp.task('build', callback => {
  runSequence('lint','clean','transpile','compress',
              callback);
});
gulp.task('compress', () => {
  gulp.src('dist/**/*.js')
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('dist'));
});

gulp.task('lint', () =>
  gulp.src([
    'gulpfile.js',
    'src/**/*.js',
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
);

gulp.task('transpile', () =>
  gulp.src(['src/**/*.js'])
  .pipe(babel())
  .pipe(gulp.dest('dist'))
);

gulp.task('clean', () => {
  gulp.src('dist', {read: false})
  .pipe(clean());
});
