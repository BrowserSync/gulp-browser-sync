/**
 * This example:
 *  Uses the built-in BrowserSync server for HTML files
 *  Watches & compiles SASS files
 *  Watches & injects CSS files
 */
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var gulp        = require('gulp');
var sass        = require('gulp-sass');
var filter      = require('gulp-filter');

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

// Sass task, will run when any SCSS files change.
gulp.task('sass', function () {
    return gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss']})) // compile sass
        .pipe(gulp.dest('css')) // write to css dir
        .pipe(filter('**/*.css')) // filter the stream to ensure only CSS files passed.
        .pipe(reload({stream:true})); // inject into browsers
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});
