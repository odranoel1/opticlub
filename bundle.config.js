// bundle.config.js 
module.exports = {
  bundle: {
    vendor: {
      scripts: [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js',
        './bower_components/Camera/scripts/camera.min.js'
      ],
      styles: [
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
        './bower_components/Camera/css/camera.css',
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