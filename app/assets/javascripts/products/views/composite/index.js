App.Views.Products.Composite.Index = Backbone.Marionette.CompositeView.extend({
	itemView: App.Views.Products.Item.Index,
	template: JST["composite/index"],
	itemViewContainer: ".product-list"
});