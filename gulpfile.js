var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');
//***********
//
// Watchable files
//
//***********

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

//
//SASS
//
gulp.task('sassLib', function() {
    return gulp.src([
            './node_modules/bootstrap/dist/css/bootstrap.min.css'
        ])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename('styleLib.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./ss'));
});
gulp.task('sass', function() {
    return gulp.src([
            './src/sass/style.min.scss'
        ])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./ss'));
});
//
// Javascript
//

gulp.task('compressjS', function() {
    return gulp.src(
            [
                'node_modules/angular/angular.min.js', //angular
                './src/js/*.js',
            ])
        .pipe(uglify('script.min.js', {
            outSourceMap: true,
            mangle: false
        }))
        .pipe(gulp.dest('./ss'));
});

//
// First run files
//

gulp.task('sass:watch', function() {
    gulp.watch('./src/sass/custom/*.scss', ['sass']);
    gulp.watch('./src/sass/style.min.scss', ['sass']);
    gulp.watch('./src/js/*.js', ['compressjS']);
    gulp.watch("src/views/*.html").on('change', browserSync.reload);
    gulp.watch("src/sass/*.scss").on('change', browserSync.reload);
    gulp.watch("src/sass/custom/*.scss").on('change', browserSync.reload);
    gulp.watch("src/js/*.js").on('change', browserSync.reload);
});
gulp.task('default', ['sass','sassLib', 'compressjS', 'sass:watch', 'browser-sync']);
