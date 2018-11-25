const mongoose = require('mongoose');
//const pantry = require('models/pantryitem');
//ES6 Promises
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false)


beforeEach(function(done){
	//drop the collection
	//mongoose.connection.pantries.collections.dropCollection('pantries',function(err,result){});
	//mongoose.connection.getCollection('pantries').drop();
	mongoose.connection.collections.pantries.drop(function(){
		done();
	});
	/*const collections = await mongoose.connection.db.collections()

	  for (let collection of collections) {
	    await collection.remove()
	  }*/
});//mocha hook -> before every single test

//Connect to the db before the test run
before(function(done){
	

	mongoose.connect('mongodb://localhost/test',{ useNewUrlParser: true });

	mongoose.connection.once('open',function(){
		console.log('Connection has been made');
		done();
	}).on('error',function(error)
	{
		console.log('Connection error: ',error);
	}); //on checks every error that occurs
});
