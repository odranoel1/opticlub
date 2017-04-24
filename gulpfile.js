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
  gcallback      = require('gulp-callback');


gulp.task('css', function() {

    gulp.src('lib/styl/style.styl')
        .pipe(stylus({compress: true, paths: ['lib/styl']}))
        .pipe(autoprefixer())
        .pipe(minifyCSS())
        .pipe(rename('style.css'))
        .pipe(gulp.dest('lib/css'));

});


gulp.task('bundle', function() {

    gulp.src('./bundle.config.js')
          .pipe(bundle())
          .pipe(bundle.results({
            fileName:'bundle.result',
            pathPrefix:'assets/'
          }))
          .pipe(gulp.dest('./public/assets'))
          .pipe(gcallback(function() {

              try {
                var assets = new SelfReloadJSON({
                  fileName: './bundle.result.json'
                });

                gulp.src('lib/pug/*.pug')
                  .pipe(pug({pretty:true, data: { assets: assets }}))
                  .pipe(gulp.dest('public'));

              }
              catch(err) {
              }   

          }));

});

gulp.task('webserver', function() {
	gulp.src('./public')
		.pipe(webserver({
			livereload: true,
      open: true,
			directoryListing: false
		}));
});

gulp.task('watch', function () {
  gulp.watch(['lib/styl/*.styl', 'lib/styl/*/*.styl'], ['css', 'bundle']);
  gulp.watch(['lib/pug/*.pug', 'lib/pug/*/*.pug'], ['bundle']);
  gulp.watch(['lib/js/*.js', 'lib/js/*/*.js'], ['bundle']);
});

gulp.task('default', ['css', 'bundle','webserver', 'watch']);
