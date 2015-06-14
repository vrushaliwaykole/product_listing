App.Views.Products.Item.Form = Backbone.Marionette.ItemView.extend({
	template: JST["item/form"],
	initialize: function(){
	},
	events: {
		"click .save-product": "save_product"
	},
	validate: function(){
		var valid = true;
		var self = this;
		self.$el.find(".form-group").removeClass("has-error");
		self.$el.find(".form-group .help-block").addClass("hidden");
		_.each(["name","price","description"],function(attr){
			var val = self.$el.find("[name='" + attr + "']").val();
			var form_grp = self.$el.find("[name='" + attr + "']").closest(".form-group");
			if(typeof val === "undefined" || val == ""){
				form_grp.addClass("has-error");
				if(form_grp.find('.help-block').length == 0){
					form_grp.append('<span class="help-block"></span>');
				}
				form_grp.find('.help-block').html("Please enter " + attr + ".").removeClass('hidden');
				valid = false
			}else if(attr == "price"){
				if(!/^-?\d+(\.\d+)?$/.test(val)){
					form_grp.addClass("has-error");
					if(form_grp.find('.help-block').length == 0){
						form_grp.append('<span class="help-block"></span>');
					}
					form_grp.find('.help-block').html("Please enter valid price.").removeClass('hidden');
					valid = false
				}
			}
		});
		return valid;
	},
	save_product: function(){
		var name = this.$el.find("[name='name']").val();
		var description = this.$el.find("[name='description']").val();
		var price = this.$el.find("[name='price']").val();
		if(this.validate()){
			this.model.save({name: name,description: description,price: price},{
				success: function(one, two, three){
					App.vent.trigger("Products:index");
				},error: function(one, two, three){
					noty({text:two.responseJSON.errors.join(", "), type:"error",timeout: 3000});
				}
			});
		}
	}
});