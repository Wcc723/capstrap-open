var gulp = require('gulp'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  scsslint = require('gulp-scss-lint'),
  batch = require('gulp-batch');

// 定義路徑
var path = {
  'source': './source/',
  'bower' : './bower_components/',
  'css': './source/stylesheets/',
  'img': './source/images/',
  'public': './public/'
}

// 合併套件js
// gulp.task('jsLib', function() {
//   gulp.src([
//     path.bower + 'jquery/dist/jquery.min.js',
//     path.bower + 'bootstrap/dist/js/bootstrap.min.js',
//     ])
//     .pipe(plumber())
//     .pipe(concat('vendor.js'))
//     .pipe(gulp.dest( path.public + 'js'))
// });

// 編譯 Sass
gulp.task('sass', function() {
  return gulp.src(['./assets/stylesheets/**/**.scss'])
  .pipe(plumber())
  .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./docs/css'))
});


// sass lint
gulp.task('scss-lint', function() {
  return gulp.src('./assets/stylesheets/**/**.scss')
    .pipe(plumber())
    .pipe(scsslint({
      'config': './lint.yml',
      'maxBuffer': 3072000,
      'filePipeOutput': 'scssReport.json'
    }))
    .pipe(gulp.dest('./reports'));
});

// 監聽資料夾事件
gulp.task('watch', function () {
  watch('./assets/stylesheets/**/**.scss', batch(function (events, done) {
    gulp.start('sass', done);
  }));
  watch('./assets/stylesheets/**/**.scss', batch(function (events, done) {
    gulp.start('scss-lint', done);
  }));
});

gulp.task('default', ['watch','sass', 'scss-lint']);


