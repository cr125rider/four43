define(['marionette', 'backbone', 'handlebars', 'jquery', 'bootstrap'], function(Marionette, Backbone, Handlebars, $jq) {
	$jq(document).ready(function() {
		$jq(window).on('scroll', function() {
			var scrollTop = $jq('html').scrollTop() + $jq('body').scrollTop();
			$jq('body').css('background-position', 'center ' + (-scrollTop / 2) + 'px');
		});
		$jq(window).trigger('scroll');
	});
	
	var App = new Marionette.Application();

	//Backbone Overrides for Handlebars
	Marionette.TemplateCache.prototype.compileTemplate = function(rawTemplate) {
		return Handlebars.compile(rawTemplate);
	};

	App.addRegions({
		mainRegion: "#tumblr-content"
	});

	App.on("initialize:after", function(options) {
		if (Backbone.history) {
			Backbone.history.start();
		}
	});

	return App;
});