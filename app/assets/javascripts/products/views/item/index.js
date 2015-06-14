App.Views.Products.Item.Index = Backbone.Marionette.ItemView.extend({
	template: JST["item/index"],
	initialize: function(){
	},
	events: {
		"click .edit-product": "edit_product",
		"click .delete-product": "delete_product",
		"click .show-product": "show_product"
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
	},
	show_product: function(){
		var show_view = new App.Views.Products.Item.Show({model: this.model});
		var l = App.controllers.productsController.l;
		l.$el.find("#product-details-modal .modal-body").html(show_view.render().el);
		l.$el.find("#product-details-modal .modal-header").html('<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4>' + this.model.get("name") + '</h4>');
		l.$el.find("#product-details-modal").modal("show");
	}
});