/**
 * This example:
 *  Shows how to use the built-in server, by default it
 *  Watches & injects CSS files
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        files: "css/*.css",
        server: {
            baseDir: "app" // Change this to your web root dir
        }
    });
});

// Default task to be run with `gulp`
gulp.task('default', ["browser-sync"]);
