// bundle.config.js 
module.exports = {
  bundle: {
    vendor: {
      scripts: [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './bower_components/Camera/scripts/camera.min.js',
        './bower_components/Camera/scripts/jquery.easing.1.3.js',
        './bower_components/jquery-sidebar/src/jquery.sidebar.min.js',
        './bower_components/matchHeight/dist/jquery.matchHeight-min.js',
        './bower_components/owl.carousel/dist/owl.carousel.min.js',
        './bower_components/sticky.js/dist/sticky.min.js',
        './bower_components/enquire/dist/enquire.min.js',
        './bower_components/elevatezoom/jquery.elevateZoom-2.2.3.min.js',
        './bower_components/Camera/scripts/jquery.mobile.customized.min.js',
        './bower_components/nano/nano.js',
        './bower_components/numeral/numeral.js',
        './bower_components/numeral/locales.js',
        './bower_components/numeral/locales.js',
        './bower_components/pnotify/dist/pnotify.js',
        // './bower_components/iCheck/icheck.js'
      ],
      styles: [
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './bower_components/Camera/css/camera.css',
        './bower_components/owl.carousel/dist/assets/owl.carousel.min.css',
        './bower_components/owl.carousel/dist/assets/owl.theme.default.min.css',
        './bower_components/pnotify/dist/pnotify.css',
        './bower_components/pnotify/dist/pnotify.brighttheme.css',
        // './bower_components/iCheck/skins/minimal/minimal.css',
        // './bower_components/iCheck/skins/minimal/purple.css',
        './dev/css/fa.css'
      ],
      options: {
        uglify: false,
        minCSS: false,
        rev: false
      }      
    },
    main: {
      scripts: [
        './dev/js/**/*.js'
      ],
      styles: [
      	'./dev/css/style.css'
      ],
      options: {
        rev: false
      }         
    }
  },
  copy: [
    {
      src: './dev/**/*.{jpg,png,gif}',
      base: './dev'
    },
    {
      src: './dev/**/*.{eot,svg,ttf,woff,woff2,otf}',
      base: './dev'
    }
  ]
};