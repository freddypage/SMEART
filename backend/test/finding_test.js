const assert = require('assert');
const pantry = require('../models/pantryitem');

//describe tests -> describes the tests inside
describe('Finding Records',function(){
		//create tests	
	var p;
	beforeEach(function(done){
		p = new pantry({
			username: 'fred',
			pantryitems : 'eggs,bread'
		});

		p.save().then(function(){
			assert(p.isNew==false);
			done();
		}); 	
	});
	

	//it: individual tests within the describe block
	it('Find one record from the database',function(done){
		pantry.findOne({username:'fred'}).then(function(result){
			assert(result.username==='fred');
			done();
		});
	});

	it('Find one record by ID from the database',function(done){
		pantry.findOne({ _id:p._id}).then(function(result){
			assert(result._id.toString()===p._id.toString());
			done();
		});
	});

	//next test
	
});