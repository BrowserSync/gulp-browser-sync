var gulp = require('gulp');
var browserSync = require("./index");
var sass = require('gulp-sass');
var less = require('gulp-less');

gulp.task('browser-sync', function() {
    browserSync("test/fixtures/css/*.css", {
        server: {
            baseDir: "test/fixtures"
        }
    });
});

gulp.task('less', function () {
    gulp.src('test/fixtures/less/style-less.less')
        .pipe(less())
        .pipe(gulp.dest('test/fixtures/css'));

});

gulp.task('sass', function () {
    gulp.src('test/fixtures/sass/style-sass.scss')
            .pipe(sass())
            .pipe(gulp.dest('test/fixtures/css'));
});

gulp.task('less-watch', function() {
    gulp.run("browser-sync");
    gulp.watch("test/fixtures/less/*.less", function(event) {
        gulp.run('less');
    });
});

gulp.task('sass-watch', function() {
    gulp.run("browser-sync");
    gulp.watch("test/fixtures/sass/*.scss", function(event) {
        gulp.run('sass');
    });
});