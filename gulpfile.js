'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

const Config = {
  sources: ['src/**/*.scss', 'tests/**/*.scss'],
  dest: 'tests/'
};

gulp.task('default', ['sass', 'convert']);

gulp.task('sass', function () {
  return gulp.src(Config.sources)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(Config.dest));
});

gulp.task('sass:watch', function () {
  gulp.watch(Config.sources, ['sass']);
});

gulp.task('convert', function () {
  return gulp.src(['tests/colors.css'])
    .pipe(replace(/(\/\*\!).*/gm, ''))
    .pipe(replace(/(\/\*)|(\*\/)/g, ''))
    .pipe(rename('colors.json'))
    .pipe(gulp.dest(Config.dest));
});
