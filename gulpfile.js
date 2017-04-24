var gulp         = require('gulp'),
	pug            = require('gulp-pug'),
	stylus         = require('gulp-stylus'),
	autoprefixer   = require('gulp-autoprefixer'),
	minifyCSS      = require('gulp-clean-css'),
	watch          = require('gulp-watch'),
	rename         = require('gulp-rename'),
	bundle         = require('gulp-bundle-assets'),
	webserver      = require('gulp-webserver'),
  SelfReloadJSON = require('self-reload-json'),
  gcallback      = require('gulp-callback')
  gutil         = require('gulp-util');


gulp.task('css', function() {
  gulp.src('dev/styl/style.styl')
      .pipe(stylus({compress: true, paths: ['dev/styl']}))
      .pipe(autoprefixer())
      .pipe(minifyCSS())
      .pipe(rename('style.css'))
      .pipe(gulp.dest('dev/css'));
});


gulp.task('bundle', function() {
  gulp.src('./bundle.config.js')
        .pipe(bundle())
        .pipe(gulp.dest('./public/assets'));
});

gulp.task('html', function() {
  gulp.src('dev/pug/*.pug')
    .pipe(pug({pretty:true}))
    .pipe(gulp.dest('public'));
});

gulp.task('webserver', function() {
	gulp.src('./public')
		.pipe(webserver({
			livereload: true,
      // open: true,
			directoryListing: false
		}));
});

gulp.task('watch', function () {
  gulp.watch(['dev/styl/*.styl', 'dev/styl/*/*.styl'], ['css']);
  gulp.watch(['dev/css/*.css'], ['bundle']);
  gulp.watch(['dev/js/*.js', 'dev/js/*/*.js'], ['bundle']);
  gulp.watch(['dev/pug/*.pug', 'dev/pug/*/*.pug'], ['html']);
  
});

gulp.task('default', ['css', 'html', 'bundle', 'webserver', 'watch']);
