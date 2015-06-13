App.Controllers.ProductsController = Marionette.Controller.extend({
	initialize: function(){
	},
	index: function(){
		var self = this;
		this.initialize_layout();
		this.l.$el.find(".products-menu-ul li").removeClass("active");
		this.l.$el.find(".products-menu-ul li.products_list").addClass("active");
		products = new App.Collections.Products();
		products.fetch().done(function(){
			self.products = products;
			var product_collection_view = new App.Views.Products.Composite.Index({collection: products});
			self.l.$el.find(".product-container").html(product_collection_view.render().el);
		});
	},
	new: function(){
		this.initialize_layout();
		this.l.$el.find(".products-menu-ul li").removeClass("active");
		this.l.$el.find(".products-menu-ul li.new_product").addClass("active");
		product_form = new App.Views.Products.Item.Form({model: new App.Models.Product()})
		this.l.$el.find(".product-container").html(product_form.render().el);
	},
	edit: function(id){
		this.initialize_layout();
		this.l.$el.find(".products-menu-ul li").removeClass("active");
		var product = null;
		var self = this;
		if(typeof this.products === "undefined"){
			product = new App.Models.Product({_id: id});
			product.fetch().done(function(){
				product_form = new App.Views.Products.Item.Form({model: product})
				self.l.$el.find(".product-container").html(product_form.render().el);
			});
		}else{
			product = _.find(this.products.models,function(model){return model.id == id});
			product_form = new App.Views.Products.Item.Form({model: product})
			this.l.$el.find(".product-container").html(product_form.render().el);
		}
	},
	initialize_layout: function(){
		if(typeof this.l ==="undefined"){
			this.l = new App.Layouts.Layout();
			$("#product-listing-application").html(this.l.render());
		}
	}
});