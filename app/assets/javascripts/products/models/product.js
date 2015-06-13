App.Models.Product = Backbone.Model.extend({
	defaults: {
		name: "",
		description: "",
		price: ""
	},
	urlRoot: "/api/v1/products"
});