/* Gulp on github: https://github.com/gulpjs/gulp
 * Готовые решения: https://github.com/gulpjs/gulp/tree/master/docs/recipes
 * ES6 language guide: http://es6-features.org */

const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const del = require('del');
const vinylPaths = require('vinyl-paths');

gulp.task('default', function (callback) {
  callback();
});

/* Пустая задача, callback нужен для выхода
 * так как выполнение происходит асинхронно */
gulp.task('empty-task', function (callback) {
  callback();
});

/* Простейшая задача - копирование всех js файлов
 * из src в dest без каких-либо изменений */
gulp.task('just-copy', function () {
  return gulp
    .src('src/*.js')
    .pipe(gulp.dest('dest'));
});

/* Слияние всех js файлов из src в один
 * Копирование сборки в dest */
gulp.task('concat-and-copy', function () {
  return gulp
    .src('src/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dest'));
});

/* Слияние всех js файлов из src в один, минификация,
 * копирование сборки в dest. */
gulp.task('uglify', function () {
  return gulp
    .src('src/*.js')
    .pipe(concat('app.js'))

    /* минификация без обфускации, все имена сохраняются */
    .pipe(uglify())
    .pipe(gulp.dest('dest'));
});

/* Очистка dest */
gulp.task('clean-dest', function() {
  return gulp
    .src('dest/*')
    .pipe(vinylPaths(del));
});

/* Последовательное выполнение нескольких задач */
gulp.task('series', ['clean-dest', 'uglify']);
