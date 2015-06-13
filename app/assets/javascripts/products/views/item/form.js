App.Views.Products.Item.Form = Backbone.Marionette.ItemView.extend({
	template: JST["item/form"],
	initialize: function(){
	},
	events: {
		"click .save-product": "save_product"
	},
	save_product: function(){
		var name = this.$el.find("[name='name']").val();
		var description = this.$el.find("[name='description']").val();
		var price = this.$el.find("[name='price']").val();
		this.model.set({name: name,description: description,price: price});
		this.model.save({},{
			success: function(one, two, three){
				console.log("success");
				App.vent.trigger("Products:index");
			},error: function(one, two, three){
			}
		})
	}
});