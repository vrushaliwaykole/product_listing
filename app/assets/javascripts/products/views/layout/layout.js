App.Layouts.Layout = Backbone.Marionette.Layout.extend({
	template: JST["layout/layout"],
	initialize: function(){
	},
	render: function(){
		this.$el.html(this.template());
		return this.$el;
	},
	events: {
		"click .products_list": "products_list",
		"click .new_product": "new_product"
	},
	products_list: function(){
		App.vent.trigger("Products:index");
	},
	new_product: function(){
		App.vent.trigger("Products:new");
	}
});