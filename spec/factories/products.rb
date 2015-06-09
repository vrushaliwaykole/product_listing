FactoryGirl.define do
  factory :product do
    name {Faker::Lorem.word}
    description {Faker::Lorem.paragraph(6)}
    price {rand(10000..1000000)}
  end
end