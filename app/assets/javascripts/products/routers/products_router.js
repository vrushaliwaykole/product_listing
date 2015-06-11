App.Routers.ProductsRouter = Backbone.Marionette.AppRouter.extend({
	appRoutes: {
		'products/new': 'new',
		'products/:id/edit': 'edit',
		'products': 'index',
	}
});