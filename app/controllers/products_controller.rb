class ProductsController < ApplicationController
	def index
		@products = Product.all
		respond_to do |format|
			format.json{render json: Product.all}
		end
	end
	def new
		@product = Product.new
		respond_to do |format|
			format.json{render json: @product}
		end
	end
	def create
		@product = Product.new(product_params)
		respond_to do |format|
			if(@product.save!)
				format.json{render json: @product}
			else
				format.json{render json: {errors: @product.errors.full_messages,status: :unprocessable_entity}}
			end
		end
	end
	def edit
		@product = Product.find(params[:id])
		respond_to do |format|
			format.json{render json: @product}
		end
	end
	def update
		@product = Product.find(params[:id])
		respond_to do |format|
			if(@product.update!(product_params))
				format.json{render json: @product}
			else
				format.json{render json: {errors: @product.errors.full_messages,status: :unprocessable_entity}}
			end
		end
	end
	private
	def product_params
		params.require(:product).permit(:name, :description, :price)
    end
end
