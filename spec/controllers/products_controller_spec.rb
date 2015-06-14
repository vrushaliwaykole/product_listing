require 'rails_helper'

RSpec.describe ProductsController, type: :controller do
	describe "GET #index" do
		it "responds successfully 200 status code" do
			get :index,{format: "json"}
			expect(response).to be_success
			expect(response.status).to eq(200)
		end
		it "retrieve all records" do
			prod1 = FactoryGirl.create(:product)
			prod2 = FactoryGirl.create(:product)
			get :index,{format: "json"}
			
			expected_output = [JSON.parse(prod1.to_json),JSON.parse(prod2.to_json)]
			products = JSON.parse(response.body)
			expect(products.length).to eq(2)
			expect(products).to eq(expected_output)
		end
	end
	describe "POST #create" do
		it "creates product if valid" do
			post :create,{product: FactoryGirl.attributes_for(:product),format: "json"}
			expect(Product.count).to eq(1)
		end
		it "returns success if product gets created successfully." do
			post :create,{product: FactoryGirl.attributes_for(:product),format: "json"}
			expect(response).to be_success
			expect(response.status).to eq(200)
		end
		it "returns response 422 unprocessable entity if product is invalid" do
			attrs = FactoryGirl.attributes_for(:product)
			attrs["name"] = ""
			post :create,{product: attrs,format: "json"}
			expect(response.status).to eq(422)
		end
	end
	describe "PUT #update" do
		it "updates product if valid" do
			product = FactoryGirl.create(:product)
			new_name = Faker::Lorem.word
			put :update,{product: {name: new_name},id: product.id,format: "json"}
			expect(product.reload.name).to eq(new_name)
		end
		it "returns success if product gets created successfully." do
			product = FactoryGirl.create(:product)
			new_name = Faker::Lorem.word
			put :update,{product: {name: new_name},id: product.id,format: "json"}
			expect(response).to be_success
			expect(response.status).to eq(200)
		end
		it "returns response 422 unprocessable entity if product is invalid" do
			product = FactoryGirl.create(:product)
			post :create,{product: {name: ""},format: "json"}
			expect(response.status).to eq(422)
		end
	end
	describe "DELETE #destroy" do
		it "deletes product" do
			product = FactoryGirl.create(:product)
			delete :destroy,{id: product.id,format: "json"}
			expect(Product.count).to eq(0)
			expect(response).to be_success
			expect(response.status).to eq(200)
		end
	end
	describe "GET #show" do
		it "retrieve product from database" do
			product = FactoryGirl.create(:product)
			get :show,{id: product.id,format: "json"}
			expect(assigns(:product)).to eq(product)
			expect(response).to be_success
		end
	end
end
