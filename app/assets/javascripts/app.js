window.App = new Backbone.Marionette.Application();
_.extend(App, {
	Collections: {},
	Models: {},
	Controllers: {},
	Routers: {},
	Views:{
		Products: {
			Item: {},
			Composite: {}
		}
	},
	Layouts: {},
	base_url: ""
});