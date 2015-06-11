App.Collections.Products = Backbone.Collection.extend({
	model: App.Models.Product,
	url: "/api/v1/products/"
});