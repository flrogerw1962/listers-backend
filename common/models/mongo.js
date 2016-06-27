var app = require("../../server/server");
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;

module.exports = function(Mongo) {
	
	
	
Mongo.getAllInCategory = function(listType, cb){
	
	MongoClient.connect("mongodb://localhost:27017/Lists", function(err, db) {
		if (!err) {
			
			
			var collection = db.collection(listType);
			collection.findOne({"_id" : new ObjectID("5770b785ea8b1730c7207cce")},function(err, response) {
				
				if(err){
					cb({error: true, errorMessage: "Could not get Collection"});
				}else{
					console.log(response);
					cb({error: false, collection: response});
				}
				db.close();
			});
		}else{
			console.log("ERROR: "+err);
			cb({error: true, errorMessage: "Could not get Collection"});
		}
	});	
};	
	

}
