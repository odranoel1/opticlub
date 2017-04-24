// bundle.config.js 
module.exports = {
  bundle: {
    main: {
      scripts: [
        './lib/js/**/*.js'
      ],
      styles: [
      	'./lib/css/style.css'
      ]
    },
    vendor: {
    	scripts: [
    		'./bower_components/jquery/dist/jquery.min.js',
    		'./bower_components/bootstrap/dist/js/bootstrap.min.js'
    	],
    	styles: [
    		'./bower_components/bootstrap/dist/css/bootstrap.min.css'
    	]
    }
  }
};