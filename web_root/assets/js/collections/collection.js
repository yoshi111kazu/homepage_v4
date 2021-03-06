var app = app || {};

(function(app) {
	app.NewsTodayCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=today',
		model : app.NewsTodayModel,
		parse : function(response) { return response; }
	});
	app.NewsMusicOverseaCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=music_oversea',
		model : app.NewsMusicOverseaModel,
		parse : function(response) { return response; }
	});
	app.NewsMusicItemCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=music_item',
		model : app.NewsMusicItemModel,
		parse : function(response) { return response; }
	});
	app.NewsItItCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=it_it',
		model : app.NewsItItModel,
		parse : function(response) { return response; }
	});
	app.NewsItProgramCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=it_program',
		model : app.NewsItProgramModel,
		parse : function(response) { return response; }
	});
	app.NewsItPostingCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=it_posting',
		model : app.NewsItPostingModel,
		parse : function(response) { return response; }
	});
	app.NewsItCompanyCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=it_company',
		model : app.NewsItCompanyModel,
		parse : function(response) { return response; }
	});
	app.NewsHealthCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=health',
		model : app.NewsHealthModel,
		parse : function(response) { return response; }
	});
	app.NewsBusinessCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=business',
		model : app.NewsBusinessModel,
		parse : function(response) { return response; }
	});
	app.NewsOtherCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=other',
		model : app.NewsOtherModel,
		parse : function(response) { return response; }
	});
	app.MyNewBlogCollection = Backbone.Collection.extend({
		url : '/api/get_rss.php?genre=blog_new',
		model : app.MyNewBlogModel,
		parse : function(response) { return response; }
	});
})(app);
