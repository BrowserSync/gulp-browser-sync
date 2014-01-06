# gulp-browser-sync [![Build Status](https://travis-ci.org/shakyShane/gulp-browser-sync.png?branch=master)](https://travis-ci.org/shakyShane/gulp-browser-sync)

> A gulp task for the [browser-sync](https://github.com/shakyShane/browser-sync) module.

Follow [@browserSync](http://www.twitter.com/browserSync) for news & updates.

##About

For a full list of features, please visit [https://github.com/shakyShane/browser-sync](https://github.com/shakyShane/browser-sync)

##Usage

First, install `gulp-browser-sync` as a development dependency:

```
npm install gulp-browser-sync --save-dev
```

Then, add it to your `gulpfile.js`:

```
var browserSync = require('gulp-browser-sync');

gulp.task('browser-sync', function() {
    browserSync('**/*.css');
});
```

##API
###browserSync( filePatterns, options );

####filePatterns

Type: `String | Array`

Default: `null`

Provide file watching patterns here (only the types of files browser-sync would care about, such as compiled CSS)

```
// single file pattern
browserSync('**/*.css');
    
// Multiple patterns as array
browserSync(['**/*.css', '*.html']);
    
```

####options

Type: `Object`

Default: `null`

There's a [full list of available options](https://github.com/shakyShane/browser-sync/wiki/Working-with-a-Config-File) on the module's repo, but below are just a few common use-cases to get you started.

**Static server**

```
// Watch CSS files and launch a static-server in the root directory
browserSync(['css/*.css'], {
	server: {
		baseDir: './'
	}
});

```

**Proxy**

```
// Watch CSS files and use the proxy with your own server.
browserSync(['css/*.css'], {
	proxy: {
		host: 'mylocal.dev',
		port: '8000'
	}
});

```

**Using along-side other watch tasks**

```
var gulp = require('gulp');
var browserSync = require('gulp-browser-sync');
var sass = require('gulp-sass');

gulp.task('browser-sync', function() {
    browserSync("css/*.css", {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('sass', function () {
    gulp.src('scss/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('css'));
});

gulp.task('default', function() {
    gulp.run('sass', 'browser-sync');
    gulp.watch("scss/*.scss", function() {
        gulp.run('sass');
    });
});

```


##Support
If you've found Browser-sync useful and would like to contribute to its continued development & support, please feel free to send a donation of any size - it would be greatly appreciated!

[![Support via Gittip](https://rawgithub.com/chris---/Donation-Badges/master/gittip.jpeg)](https://www.gittip.com/shakyshane)
[![Support via PayPal](https://rawgithub.com/chris---/Donation-Badges/master/paypal.jpeg)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=shakyshane%40gmail%2ecom&lc=US&item_name=browser%2dsync)