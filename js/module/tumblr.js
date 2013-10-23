define(['app', 'backbone', 'jquery', 'moment'], function(App, Backbone, $, Moment) {
	var Tumblr = App.module('Tumblr', function() {
		this.Post = Backbone.Model.extend({
			defaults: {
				'unix-timestamp': new Date(),
				dateDisplay: 'nope'
			},
			initialize: function() {
				this.on('change:unix-timestamp add', this.renderDate, this);
				this.on('add', this.parseEmbed, this);
			},
			parseEmbed: function(model, event) {
				var embedVarName = null;
				if(model.get('video-player')) {
					embedVarName = 'video-player';
				}
				if(model.get('audio-player')) {
					embedVarName = 'audio-player';
				}
				if(embedVarName) {
					var trimmedPlayer = $(model.get(embedVarName)).removeAttr('width height')[0];
					var trimmedHtml = $('<div>').append($(trimmedPlayer).clone()).html();
					model.set(embedVarName, trimmedHtml);
				}
			},		
			renderDate: function(model, event) {
				var dateTime = Moment.unix(model.get('unix-timestamp')).format('h:mm:ss a YYYY-MM-DD');
				model.set('dateDisplay', dateTime);
			}
		});

		this.Posts = Backbone.Collection.extend({
			model: this.Post,
			url: 'http://seth-j-miller.tumblr.com/api/read/json?callback=?',
			parse: function(response) {
				return response.posts;
			}
		});
		
		this.ItemAudioView = Backbone.Marionette.ItemView.extend({
			template: "#post-audio-template",
			tagName: 'li',
			className: 'tumblr-link'
		});

		this.ItemLinkView = Backbone.Marionette.ItemView.extend({
			template: "#post-link-template",
			tagName: 'li',
			className: 'tumblr-link'
		});

		this.ItemPhotoView = Backbone.Marionette.ItemView.extend({
			template: "#post-photo-template",
			tagName: 'li',
			className: 'tumblr-photo'
		});

		this.ItemRegularView = Backbone.Marionette.ItemView.extend({
			template: "#post-regular-template",
			tagName: 'li',
			className: 'tumblr-regular'
		});
		
		this.ItemVideoView = Backbone.Marionette.ItemView.extend({
			template: "#post-video-template",
			tagName: 'li',
			className: 'tumblr-regular'
		});

		var self = this;
		this.PostsView = Backbone.Marionette.CompositeView.extend({
			id: "tumbler-updates",
			template: "#posts-template",
			itemViewContainer: "ul",
			getItemView: function(item) {
				switch (item.attributes.type) {
					case "audio":
						return self.ItemAudioView;
					case "link":
						return self.ItemLinkView;
					case "photo":
						return self.ItemPhotoView;
					case "regular":
						return self.ItemRegularView;
					case "video":
						return self.ItemVideoView;
					default:
						console.log("No Item view found for:" + item.attributes.type);
						return false;
				}
			}
			/*appendHtml: function(collectionView, itemView) {
			 console.log(itemView);
			 collectionView.$("tbody").append(itemView.el);
			 }*/
		});
	});

	Tumblr.addInitializer(function(options) {
		var tumblrPosts = new Tumblr.Posts();

		var postsView = new Tumblr.PostsView({
			collection: tumblrPosts
		});
		tumblrPosts.fetch().then(function() {
			postsView.render();
		});
		App.mainRegion.show(postsView);
	});

	return Tumblr;
});