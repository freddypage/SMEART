
const assert = require('assert');
const pantry = require('../models/pantryitem');

function read(user)
{

}

function create(user)
{

}

function update(user,ingredients)
{

}

function delete(user,ingredient)
{

}

function deleteUser(user)
{

}
		
		pantry.findOneAndRemove({username:'fred'}).then(function(){
			pantry.findOne({username:'fred'}).then(function(result){
				assert(result===null);
			});
			done();
		});

