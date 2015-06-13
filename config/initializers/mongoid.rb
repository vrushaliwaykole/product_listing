# Added this code to avvoid getting _id: {"$oid" => somevalue} in to_json.
module BSON
	class ObjectId
		alias :to_json :to_s
		alias :as_json :to_s
	end
end