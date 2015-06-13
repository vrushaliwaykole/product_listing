App.Views.Products.Item.Index = Backbone.Marionette.ItemView.extend({
	template: JST["item/index"],
	initialize: function(){
	},
	events: {
		"click .edit-product": "edit_product",
		"click .delete-product": "delete_product"
	},
	edit_product: function(){
		App.vent.trigger("Products:edit",this.model.id);
	},
	delete_product: function(){
		var r = confirm("Are you sure to delete this product?");
		if(r){
			this.model.destroy({
				success: function() {
				},
				error: function() {

				}
			});
		}
	}
});