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

Then, use it within `gulpfile.js`:

```js
var browserSync = require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync.init('**/*.css');
});
```

##API
###browserSync.init( filePatterns, options );

####filePatterns

Type: `String | Array`

Default: `null`

Provide file watching patterns here (only the types of files browser-sync would care about, such as compiled CSS)

```js
// single file pattern
browserSync.init('**/*.css');

// Multiple patterns as array
browserSync.init(['**/*.css', '*.html']);

```

####options

Type: `Object`

Default: `null`

There's a [full list of available options](https://github.com/shakyShane/browser-sync/wiki/Working-with-a-Config-File) on the module's repo, but below are just a few common use-cases to get you started.

**Static server**

```js
// Watch CSS files and launch a static-server in the root directory
browserSync.init(['css/*.css'], {
	server: {
		baseDir: './'
	}
});

```

**Proxy**

Depending on what version of Browser Sync you're using, you will need to alter this configuration slightly.
To check what version you're running, use: `npm view browser-sync version`

When running Browser Sync versions prior to 0.7.0, use the following:
```js
// Watch CSS files and use the proxy with your own server.
browserSync.init(['css/*.css'], {
	proxy: {
		host: 'mylocal.dev',
		port: '8000'
	}
});
```

When running Browser Sync versions of 0.7.0 or higher, use the following:
```js
// Watch CSS files and use the proxy with your own server.
browserSync.init(['css/*.css'], {
	proxy: 'mylocal.dev:8000'
});
```

**Using along-side other watch tasks (SASS)**

Using the config below, any changes to the `scss` files would trigger the `sass` task that will compile to `CSS`. Then, Browser-Sync notices that the CSS file has been changed & will live-update all connected browsers/devices.

```js
var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

// Browser-sync task, only cares about compiled CSS
gulp.task('browser-sync', function() {
    browserSync.init("css/*.css", {
        server: {
            baseDir: "./"
        }
    });
});

// Sass task, will run when any SCSS files change.
gulp.task('sass', function () {
    gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

// Default task to be run with `gulp`
gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("scss/*.scss", ['sass']);
});

```

###Screencasts
Coming soon. If you want to see anything specific covered in the screencasts, please ask me [@shaneOsbourne](https://www.twitter.com/shaneosbourne)


##Support
If you've found Browser-sync useful and would like to contribute to its continued development & support, please feel free to send a donation of any size - it would be greatly appreciated!

[![Support via Gittip](https://rawgithub.com/chris---/Donation-Badges/master/gittip.jpeg)](https://www.gittip.com/shakyshane)
[![Support via PayPal](https://rawgithub.com/chris---/Donation-Badges/master/paypal.jpeg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=shakyshane%40gmail%2ecom&lc=US&item_name=browser%2dsync)
