var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');


gulp.task('minified',function(){
    var bundler = browserify({
        entries: ['./app/js/app.jsx'],
        transform: [reactify],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true,

    });

    function build(file){
        if(file) gutil.log('Recomipiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('index.js'))
            .pipe(streamify(uglify()))
            .pipe(gulp.dest('./www/js/'));
    };

    build();
});

gulp.task('default',function(){
    var bundler = watchify(browserify({
        entries: ['./app/js/app.jsx'],
        transform: [reactify],
        extensions: ['.jsx'],
        debug: true,
        cache: {},
        packageCache: {},
        fullPaths: true,

    }));

    function build(file){
        if(file) gutil.log('Recomipiling ' + file);
        return bundler
            .bundle()
            .on('error', gutil.log.bind(gutil, 'Browserify Error'))
            .pipe(source('index.js'))
            .pipe(gulp.dest('./www/js/'));
    };

    build();
    bundler.on('update', build);
});
