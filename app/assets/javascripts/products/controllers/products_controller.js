App.Controllers.ProductsController = Marionette.Controller.extend({
	initialize: function(){
	},
	index: function(){
		products = new App.Collections.Products();
		products.fetch().done(function(){
			var product_collection_view = new App.Views.Products.Composite.Index({collection: products});
			$("#product-listing-application").html(product_collection_view.render().el);
		});
	},
	new: function(){
		product_form = new App.Views.Products.Item.Form({model: new App.Models.Product()})
		$("#product-listing-application").html(product_form.render().el);
	},
	edit: function(id){
	}
});