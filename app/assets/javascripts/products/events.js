App.vent.on("Products:new", function(){
	Backbone.history.navigate("/products/new", {trigger:true});
});
App.vent.on("Products:edit", function(id){
	Backbone.history.navigate("/products/" + id + "/edit", {trigger:true});
});