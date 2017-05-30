const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const gulp = require('gulp');
const gulpMocha = require('gulp-mocha');
const rename = require("gulp-rename");
const runSequence = require('run-sequence');
const uglify = require('gulp-uglify');

gulp.task('build', callback => {
  runSequence('lint','transpile','test','compress', callback);
});
gulp.task('compress', () => {
  gulp.src('dist/sortgen.js')
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

gulp.task('test', () =>
  gulp.src('test/sortgen.test.js', {read: false})
  .pipe(gulpMocha({reporter: 'nyan'}))
);

gulp.task('transpile',() =>
  gulp.src(['src/**/*.js'])
  .pipe(babel())
  .pipe(gulp.dest('dist'))
);
