$(document).ready(function(){
	App.addInitializer(function () {
		Backbone.Model.prototype.idAttribute = "_id"; // As mongod uses _id istead of id
		this.controllers = {
			productsController: new App.Controllers.ProductsController()
		};
		this.routers = {
			productsRouter: new App.Routers.ProductsRouter({controller: App.controllers.productsController})
		};
		Backbone.history.start({ pushState: true });
	});
	App.start();
});