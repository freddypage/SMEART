const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

//Connect to the db before the test run
before(function(){
	mongoose.connect('mongodb://localhost/test');

	mongoose.connection.once('open',function(){
		console.log('Connection has been made');
		done();
	}).on('error',function(error)
	{
		console.log('Connection error:',error);
	}); //on checks every error that occurs
})