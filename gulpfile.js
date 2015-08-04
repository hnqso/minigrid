'use strict';

var gulp = require('gulp'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');


gulp.task('default', ['watch']);

gulp.task('minify', ['lint'], function() {
    return gulp.src('index.js')
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('./'));
});

gulp.task('lint', function() {
    return gulp.src(['index.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('watch', function() {
    gulp.watch('index.js', ['minify']);
});