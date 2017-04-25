// bundle.config.js 
module.exports = {
  bundle: {
    vendor: {
      scripts: [
        './bower_components/jquery/dist/jquery.min.js',
        './bower_components/bootstrap/dist/js/bootstrap.min.js'
      ],
      styles: [
        './bower_components/bootstrap/dist/css/bootstrap.min.css',
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
  copy: './dev/**/*.{jpg,png,svg}'
};