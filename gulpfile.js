var path = require('path'),
  gulp = require('gulp'),
  argv = require('yargs').argv,
  runSequence = require('run-sequence'),
  concat = require('gulp-concat'),
  del = require('del'),
  gulpif = require('gulp-if'),
  jshint = require('gulp-jshint'),
  minifyCss = require('gulp-minify-css'),
  minifyHTML = require('gulp-minify-html'),
  ngAnnotate = require('gulp-ng-annotate'),
  plumber = require('gulp-plumber'),
  sass = require('gulp-sass'),
  stylish = require('jshint-stylish'),
  templateCache = require('gulp-angular-templatecache'),
  uglify = require('gulp-uglifyjs');

// --release flag for prodution 
var release = argv.release;
var jsExt = (release)?'.min.js':''+'.js';
var tmp = path.resolve('.tmp');

var paths = {
  clean: ['./www',tmp],
  index: './app/index.html',
  scss: './app/scss/ionic.app.scss',
  vendors: [
    './bower_components/ionic/js/ionic.bundle'+jsExt,
    './bower_components/ngstorage/ngStorage'+jsExt,
    './bower_components/angular-jwt/dist/angular-jwt'+jsExt
  ],
  templates: './app/modules/**/templates/*.html',
  scripts: [tmp+ '/templates.js','./app/modules/**/*.js'],
  fonts: './bower_components/ionic/fonts/**',
  images: './app/img/**',
};

var dests = {
  index:'./www/',
  css:'./www/css',
  templates: tmp,
  scripts:'./www/scripts',
  fonts:'./www/fonts',
  images: './www/img'
};

var files = {
  vendors:'vendors.js',
  scripts:'scripts.js'
};

gulp.task('hint', function () {
  return gulp.src(paths.scripts.concat('gulpfile'))
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('clean', function (done) {
  del(paths.clean, done);
});

/*gulp.task('index', function () {
  return gulp.src(paths.index)
    .pipe(gulpif(release, minifyHTML({comments: true, empty: true, spare: true, quotes: true})))
   .pipe(dests.index);
});*/
gulp.task('index', function () {
  return gulp.src(paths.index)
    .pipe(gulpif(release, minifyHTML({empty: true, spare: true, quotes: true})))
    .pipe(gulp.dest(dests.index));
});
gulp.task('sass', function(done) {
  gulp.src(paths.scss)
    .pipe(sass())
    .pipe(gulp.dest(dests.css))
    .pipe(gulpif(release,minifyCss({
      keepSpecialComments: 0
    })))
    .pipe(gulp.dest(dests.css))
    .on('end', done);
});

gulp.task('vendors', function() {
  return gulp.src(paths.vendors)
    .pipe(concat(files.vendors))
    .pipe(gulp.dest(dests.scripts));
});

gulp.task('templates', function () {
  return gulp.src(paths.templates)
    .pipe(gulpif(release, minifyHTML({empty: true, spare: true, quotes: true})))
    .pipe(templateCache({ standalone: true }))
    .pipe(gulp.dest(dests.templates));
});

gulp.task('scripts', function () {
  var uglifyOptions ={
      mangle: false,
      output: {
        beautify: !release
      },
      outSourceMap: !release
  };
  return gulp.src(paths.scripts)
    .pipe(concat(files.scripts))
    .pipe(plumber())
    .pipe(ngAnnotate())
    .pipe(uglify(files.scripts,uglifyOptions)) 
    .pipe(gulp.dest(dests.scripts));
});

gulp.task('fonts', function() {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest(dests.fonts));
});

gulp.task('images', function () {
  return gulp.src(paths.images)
    .pipe(gulp.dest(dests.images));
});

gulp.task('default', function(done) {
  runSequence(
      ['clean'],
      ['index','fonts','images','templates'],
      ['hint'],
      ['vendors','scripts'],
      'sass',
      done);
});

gulp.task('watch', function() {
  gulp.watch(paths.index, ['index']);
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.scripts, ['scripts']);
  gulp.watch(paths.templates, ['templates']);

});

