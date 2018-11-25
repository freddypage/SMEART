const assert = require('assert');
const pantry = require('../models/pantryitem');

//describe tests -> describes the tests inside
describe('Deleting Records',function(){
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
	//.then: promise -> for asynchronous methods
	it('Deletes one record from the database',function(done){
		pantry.findOneAndRemove({username:'fred'}).then(function(){
			pantry.findOne({username:'fred'}).then(function(result){
				assert(result===null);
			});
			done();
		});
	});

	//next test
	
});