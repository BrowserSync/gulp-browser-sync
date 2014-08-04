/**
 * This example:
 *  Launches the BrowserSync server
 *  Watches & lints JS files
 *  Reloads the browser after linting has finished.
 */
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var gulp        = require('gulp');
var jshint      = require('gulp-jshint');

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync({
        server: "./"
    });
});

// Lint task.
gulp.task('lint', function () {
    gulp.src('js/*.js')
        .pipe(jshint());
});

// Default task to be run with `gulp`.
gulp.task('default', ['lint', 'browser-sync'], function () {
    gulp.watch('js/*.js', ['lint', reload]);
});
