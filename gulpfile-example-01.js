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
    gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'))
        .pipe(reload({stream:true}));
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});
