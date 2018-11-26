const express = require('express');
const router = express.Router();
//just for testing
const Pantry = require('../models/pantry');
//const PostController = require('../CRUD/controller');

//geting pantry items
//these routes should connect to connections in CRUD

//!--READ--!
router.get('/pantry/:id',(req,res,next)=>{

	Pantry.findById(req.params.id, function(err, post){
	    if (post) {
	      res.status(500).send(post.pantryitems);
	    }
	   	else{
			res.send("could not find");
		}
  	});
}); // so now its /api/pantry -> connected to this method

//!--CREATE--!
//making user
router.post('/makeuser',(req,res,next)=>{

	var newUser = new Pantry({
		username: req.body.username,
		password: req.body.password,
		pantryitems: []
	});


	newUser.save(function(err){
		if(err)
		{
			if (err.name === 'MongoError' && err.code === 11000) {
				// Duplicate username
				return res.status(500).send({ succes: false, message: 'User already exist!' });
			}
			// Some other error
			return res.status(500).send(err);
	    }
	    res.send('Succesfully added user: '+newUser.username);
	});
});

//!--UPDATE--!
//adding pantryitem
router.post('/additem/:id',(req,res,next)=>{
	//add ingredient to pantry
	var ingredient = {name:req.body.ingredient,quantity:1};

	Pantry.findById(req.params.id, function(record){
		//add an ingredient to the pantryitems collection
		record.pantryitems.push(ingredient);
		record.save().then(function(record2){

			var result = record.pantryitems.find(obj => {
			  return obj.name === ingredient;
			});

			if(result!=undefined)
			{
				res.send('succesfully added '+String(result.name)+'to the pantry');
			}
			else
			{
				res.send('There exists no such item');
			}
		});
	});
});
//

//!--DESTROY--!
//Delete ingredient
router.post('/deleteitem/:id',(req,res,next)=>{
	//delete ingredient from pantry

	var ingredient = req.body.ingredient;
	Pantry.findById(req.params.id, function(err,record){
		if(record!=null)
		{
			var result = record.pantryitems.find(obj => {
			  return obj.name === ingredient;
			});

			if(result!=undefined)
			{
				record.pantryitems.pull(result);
				record.save();

				res.send(ingredient+' was removed');
			}
			else
			{
				res.send('There exists no such item');
			}
		}
		else
		{
			res.send('no id matches this user');
		}
		
	});
});

//export the router
module.exports = router; 
//goes to package.json
//starts the server using the entry point
