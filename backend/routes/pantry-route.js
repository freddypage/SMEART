const express = require('express');
const http = require('http');
const unirest = require('unirest');
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
	    res.send({success:true, message:'Succesfully added user: '+newUser.username});
	});
});

//!--UPDATE--!
//adding pantryitem
router.post('/additem/:id',(req,res,next)=>{
	//add ingredient to pantry
	var ingredient = {name:req.body.ingredient,quantity:1};

	Pantry.findById(req.params.id, function(err, record){
		//add an ingredient to the pantryitems collection
		if(record!=null)
		{
			record.pantryitems.push(ingredient);

			record.save().then(function(record2){
				var result = record2.pantryitems.find(obj => {
				  return obj.name === ingredient.name;
				});

				if(result!=undefined)
				{
					res.send('succesfully added '+String(result.name)+' to the pantry');
				}
				else
				{
					res.send('There exists no such item');
				}
			});
		}
		else
		{
			res.send('could not find user by that key');
		}
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

router.get('/recipeInfo/:id',(req,res,next)=>{{
	var recipeId = req.params.id;

	unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+recipeId+"/information")
	.header("X-RapidAPI-Key", "VABWfwhrZtmsht2xpwFIwwsQqmOdp1n320cjsnXxpuXczedJU3")
	.end(function (result) {
	  console.log(result.body);
	  res.send(result.body);
	});

	}
});

//Gets the spoonacular recipes which match the pantry
router.get('/recipes/:id',(req,res,next)=>{

	Pantry.findById(req.params.id, function(err, post){
	    if (post) {

	    	//fetches the users pantry from the db
	    	var usr_pantry = post.pantryitems;

	    	//URL for the apirequest
	    	var apiRequestH = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&fillIngredients=true&ranking=1&ingredients=";

			for (var i = 0; i < usr_pantry.length; i++)
			{
				apiRequestH += String(usr_pantry[i].name)
				if(i!=(usr_pantry.length-1))
				{
					apiRequestH += "%2C";
				}
				console.log(usr_pantry[i].name+'\n');
			}

			console.log(apiRequestH)
			//"https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=5&ranking=1&ingredients=apples%2Cflour%2Csugar")
			



			unirest.get(apiRequestH)
			.header("X-Mashape-Key", "VABWfwhrZtmsht2xpwFIwwsQqmOdp1n320cjsnXxpuXczedJU3")
			.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
			.end(function (result) {
			  console.log(result.status, result.headers, result.body);
			  res.send(result.body);
			});
	    }
	   	else{
			res.send("could not find");
		}
  	});

  
	
});

//export the router
module.exports = router; 
//goes to package.json
//starts the server using the entry point
