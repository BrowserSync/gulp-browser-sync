# Browser Sync + Gulp

> How to use the [browser-sync](https://github.com/shakyShane/browser-sync) module with gulp.

Follow [@browserSync](http://www.twitter.com/browserSync) for news & updates.

##About

For a full list of features, please visit [https://github.com/shakyShane/browser-sync](https://github.com/shakyShane/browser-sync)

##Usage

First, install `browser-sync` as a development dependency:

```shell
npm install browser-sync --save-dev
```

Then, use it within `gulpfile.js`: (example shows with gulp-sass)

```js
var browserSync = require('browser-sync');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init(null, {
      server: {
        baseDir: "./"
      }
    });
});


// or...


// Proxy to existing vhost (version 0.7.0 & greater)
gulp.task('browser-sync', function() {
    browserSync.init(null, {
      proxy: "yourlocal.dev"
    });
});

// Proxy to existing vhost (before version 0.7.0) * Seriously? time to upgrade.
gulp.task('browser-sync', function() {
    browserSync.init(null, {
      proxy: {
        host: "yourlocal.dev",
        port: 80
      }
    });
});

```
There's a [full list of available options](https://github.com/shakyShane/browser-sync/wiki/Working-with-a-Config-File) on the module's repo.

**NOTE: at least version 0.8.0 is required for the following examples!**

###Auto reload & CSS injecting
Streams are now supported in BrowserSync, so you can call `reload` when all your tasks are complete & all browsers will be informed of the changes.

**Gulp + SASS + CSS Injecting**

Because BrowserSync only cares about your CSS when it's finished compiling - make sure you call reload *after* `gulp.dest`

```js
var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });
});

// Sass task, will run when any SCSS files change & BrowserSync will auto-update browsers
gulp.task('sass', function () {
    gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream:true}));
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});

```

**Browser Reloading**

Sometimes you might just want to reload the page completely (for example, after processing a bunch of JS files) - you can do that
by passing `once` as an option. This will stop `reload` being call multiple times.

```js

// start server
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });
});

// process JS files and reload all browsers when complete.
gulp.task('js', function () {
    gulp.src('js/*js')
        .pipe(browserify())
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.reload({stream:true, once: true}));
});

// use default task to lauch BrowserSync and watch JS files
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("js/*.js", ['js']);
});
```

**Reloading manually**

If the streams support doesn't suit your needs, you can fire the reload method manually by wrapping it in a task.
This example will compile & auto-inject `CSS` just as before, but when `HTML` files are changed, the browsers will be reloaded instead.

```js
// Start the server
gulp.task('browser-sync', function() {
    browserSync.init(null, {
        server: {
            baseDir: "./"
        }
    });
});

// Compile SASS & auto-inject into browsers
gulp.task('sass', function () {
    gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({stream:true}));
});

// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Watch scss AND html files, doing different things with each.
gulp.task('default', ['browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("*.html", ['bs-reload']);
});

```

###Screencasts
Coming soon. If you want to see anything specific covered in the screencasts, please ask me [@shaneOsbourne](https://www.twitter.com/shaneosbourne)


##Support
If you've found Browser-sync useful and would like to contribute to its continued development & support, please feel free to send a donation of any size - it would be greatly appreciated!

[![Support via Gittip](https://rawgithub.com/chris---/Donation-Badges/master/gittip.jpeg)](https://www.gittip.com/shakyshane)
[![Support via PayPal](https://rawgithub.com/chris---/Donation-Badges/master/paypal.jpeg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=shakyshane%40gmail%2ecom&lc=US&item_name=browser%2dsync)
