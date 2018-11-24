const mocha = require('mocha');
const assert = require('assert');
const pantry = require('../models/pantryitem');

//describe tests -> describes the tests inside
describe('Saving Records',function(){
	//create tests	

	it('Making a new pantry',function(done){
		var p = new pantry({
			username: 'fred',
			pantryitems : 'eggs,bread'
		});

		p.save().then(function(){
			assert(p.isNew==false);
			done();
		});
	});

	//next test
})