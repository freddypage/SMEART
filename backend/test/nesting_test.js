const assert = require('assert');
const mongoose = require('mongoose');
const ppantry = require('../models/pantry');

//Describe our tests
describe('Nesting records',function(){
	/*
	beforeEach(function(done){
		mongoose.connection.collections.ppantries.drop(function(){
			done();
		});
	});*/

	it('Creates a pantry with sub-documents',function(done){
		var p = new ppantry({
			username:'fred',
			pantryitems:[{name:'carrot'}]
		});

		p.save().then(function(){
			ppantry.findOne({username:'fred'}).then(function(record){
				assert(record.pantryitems.length === 1);
				done();
			});
		});

	});

	it('Adds an ingredient to the pantry',function(done){
		var p = new ppantry({
			username:'fred',
			pantryitems:[{name:'carrot'}]
		});

		p.save().then(function(){
			ppantry.findOne({username:'fred'}).then(function(record){
				//add an ingredient to the pantryitems collection
				record.pantryitems.push({name:'garlic'});
				record.save().then(function(){
					ppantry.findOne({username:'fred'}).then(function(result){
						assert(result.pantryitems.length===2);
						done();
					});
				});
			});
		});

	});
});