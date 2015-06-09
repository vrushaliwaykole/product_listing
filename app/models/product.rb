class Product
  include Mongoid::Document
  include Mongoid::Timestamps
  field :name,type: String
  field :description,type: String
  field :price, type: Integer
  validates :name,:description,:price,presence: true
  validates :name,uniqueness: true
end
