/**
 * This example:
 *  Shows how to plug in the details of your server.
 *  Watches & injects CSS files
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init("css/*.css", {
        proxy: "mylocal.dev"
    });
});

// Default task to be run with `gulp`
gulp.task('default', ["browser-sync"]);
