require.config({
	baseUrl: 'js/lib',
	paths: {
		app: '../app',
		bootstrap: 'bootstrap.min',
		marionette: 'backbone.marionette',
		moment: 'moment.min',
		module: '../module'
	},
	
	shim: {
		backbone: {
			deps: ['jquery', 'underscore'],
			exports: 'Backbone'
		},
		'backbone.wreqr': {
			deps:['backbone']
		},
		'backbone.babysitter': {
			deps:['backbone']
		},
		bootstrap: {
			deps: ['jquery'],
			exports: 'Bootstrap'
		},
		handlebars: {
			exports: 'Handlebars'
		},
		jquery: {
			exports: 'jQuery'
		},
		moment: {
			exports: 'Moment'
		},
		underscore: {
			exports: '_'
		}		
	}
});

requirejs(['app', 'module/tumblr'],
function   (App, Tumblr) {
	App.start();
});
