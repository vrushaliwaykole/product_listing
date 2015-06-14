class ProductsController < ApplicationController
	# index action retrieves all products
	def index
		respond_to do |format|
			format.json{render json: Product.all}
		end
	end
	# create action insert new entry for product in database
	def create
		@product = Product.new(product_params)
		respond_to do |format|
			if(@product.save)
				format.json{render json: @product}
			else
				format.json{render json: {errors: @product.errors.full_messages},status: :unprocessable_entity}
			end
		end
	end
	# update action updates existing entry of product in database
	def update
		@product = Product.find(params[:id])
		respond_to do |format|
			if(@product.update_attributes(product_params))
				format.json{render json: @product}
			else
				format.json{render json: {errors: @product.errors.full_messages},status: :unprocessable_entity}
			end
		end
	end
	# retrieves record from database
	def show
		@product = Product.find(params[:id])
		respond_to do |format|
			format.json{render json: @product}
		end
	end
	# deletes record from database
	def destroy
		@product = Product.find(params[:id])
		@product.destroy
		respond_to do |format|
			format.json{render json: {}}
		end
	end
	private
	# Permit product params to create and update
	def product_params
		params.require(:product).permit(:name, :description, :price)
    end
end
