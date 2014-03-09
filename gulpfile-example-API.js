/**
 * For the more complex/customised workflows, you may want to handle the file-change
 * events manually. This following example is simplistic - but shows how can emit your events
 * to BrowserSync whenever you like.
 *
 * This example:
 *   Shows how you can emit your own file-change events
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

var bs;

// This BrowserSync task will start a server, but will NOT watch any files.
gulp.task('browser-sync', function () {
    bs = browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });
});

// This default task will run BrowserSync & then use Gulp to watch files.
// When a file is changed, an event is emitted to BrowserSync with the filepath.
gulp.task('default', ['browser-sync'], function () {
    gulp.watch('css/*.css', function (file) {
        if (file.type === "changed") {
            bs.events.emit("file:changed", {path: file.path});
        }
    });
});
