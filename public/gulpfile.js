var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var watch = require('gulp-watch');
var gutil = require('gulp-util');
var browserify = require('browserify');
var babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('transform', function() {
	return gulp.src('./app/src/**/*.jsx')
		.pipe(babel())
		.pipe(gulp.dest('./app/dist'));
})

gulp.task('js', ['transform'], function() {
	// Assumes a file has been transformed from
	// ./app/src/main.jsx to ./app/dist/main.js
	return browserify('./app/dist/main.js')
		.bundle()
		.on('error', gutil.log)
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./js/'))
});

gulp.task('css', function() {
	return gulp.src('./app/src/scss/main.scss')
		.pipe(sass())
		.pipe(gulp.dest('./css'));
});

gulp.task('default', ['js', 'css'], function() {
	gulp.watch('./app/src/**/*.jsx', ['js']);
	gulp.watch('./app/src/scss/*.scss', ['css']);
});
