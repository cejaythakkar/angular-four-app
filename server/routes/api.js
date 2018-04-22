var express = require('express'),
	router = express.Router(),
	mongoClient = require('mongodb').MongoClient,
	objectId = require('mongodb').ObjectID;

var connection = (closure) => {
	return mongoClient.connect('mongodb://localhost:27017',( err , client ) => {
		if( err )
			return cosole.log(err);
			var db = client.db('schooldatabase');
		closure(db);
	});
}

var sendError = ( error , response ) => {
	responseJson.status = 501;
	responseJson.message = typeof error == 'object' ? error.message : err;
	response.status(501).json(responseJson);
};

var responseJson = {
	status : 200,
	data : [],
	message : null
};

router.get('/students', ( request , response ) => {
	console.log(`students route`);
	connection(db => {
		db.collection('students')
			.find()
			.toArray()
			.then(students => {
				console.log(`i reached here`);
				responseJson.data = students;
				response.json(responseJson);
			})
			.catch(error => {
				sendError( error , response );
			});
	});
});

module.exports = router;