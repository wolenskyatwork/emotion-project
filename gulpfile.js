"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //local dev server
var open = require('gulp-open'); // open url in web browser
var browserify = require('browserify');
var babelify = require('babelify'); //jsx to js
var source = require('vinyl-source-stream'); //conventional text streams
var concat = require('gulp-concat');
var lint = require('gulp-eslint');
var mocha = require('gulp-mocha');
var babel = require('babel-core/register');
var plug = require('gulp-load-plugins')({ lazy: true });

var  config = {
  port: '9005',
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    js: './src/**/*.js',
    css: [
      './styles/main.css',
      'node_modules/mapbox-gl/dist/mapbox-gl.css',
    ],
    dist: './dist',
    mainJs: './src/main.js',
    test: './src/**/*.test.js'
  }
}

gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function() {
  gulp.src('dist/index.html')
    .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(babelify.configure({
      presets: ["es2015", "react", "stage-2"],
      plugins: ["transform-regenerator"]
    }))
    .bundle()
    .on('error', console.error.bind(console))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload())
});

gulp.task('css', function() {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'))
    .pipe(connect.reload());
});

gulp.task('lint', function() {
  return gulp.src(config.paths.js)
    .pipe(lint({ configFile: '.eslintrc.json' }))
    .pipe(lint.format());
});

gulp.task('mocha', function() {
  return gulp.src(config.paths.test, { read: false })
    .pipe(plug.mocha({
      compilers: {
        js: babel
      }
    }));
});

gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.css[0], ['css']);
  gulp.watch(config.paths.js, ['js', 'lint']);
});

gulp.task('default', ['html', 'js', 'css', 'lint', 'open', 'watch']);
