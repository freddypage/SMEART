
const assert = require('assert');
const pantry = require('../models/pantryitem');

//describe tests -> describes the tests inside
describe('Updating Records',function(){
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
	it('Updates one record in the database',function(done){
		pantry.findOneAndUpdate({username:'fred'},{username:'anthony'}).then(function(){
			pantry.findOne({_id:p._id}).then(function(result){
				assert(result.username==='anthony');
				done();
			});
		});
	});

	//next test

});