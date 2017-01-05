'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

const Config = {
  sources: ['src/**/*.scss', 'tests/**/*.scss'],
  dest: 'tests/'
};

gulp.task('default', ['sass']);

gulp.task('sass', function () {
  return gulp.src(Config.sources)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(Config.dest));
});

gulp.task('sass:watch', function () {
  gulp.watch(Config.sources, ['sass']);
});
