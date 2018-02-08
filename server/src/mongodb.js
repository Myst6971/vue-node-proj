var 
    mongoose = require('mongoose'),
    db = mongoose.connection
;

module.exports.connect = function() {
	mongoose.connect('mongodb://localhost:27017/ManagerAPI');
    
	db.on("error", console.error.bind(console, "connection error"));
	db.once("open", function(callback){
        console.log("Connection Succeeded");
    });
    
	return db;
}
