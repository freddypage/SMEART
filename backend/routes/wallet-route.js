const express = require('express');
const router = express.Router();
//just for testing
const Pantry = require('../models/pantry');

//add location to the user
router.post('/location/:id',(req,res,next)=>{
	Pantry.findById(req.params.id, function(err, record){
	    if (record!=null) {
	    	record.location = req.body.location;
	    	record.save().then(function(record2){
				if(result!=undefined)
				{
					res.send('succesfully added '+String(result.location)+' as your location');
				}
				else
				{
					res.send('There exists no such item');
				}
			});
	    }
	   	else{
			res.send("could not find user.");
		}
  	});
});

//add budget to the user
router.post('/budget/:id',(req,res,next)=>{
	Pantry.findById(req.params.id, function(err, record){
	    if (record!=null) {
	    	record.budget = req.body.budget;
	    	record.save().then(function(record2){
				if(result!=undefined)
				{
					res.send('succesfully added '+String(result.budget)+' to your virtual wallet');
				}
				else
				{
					res.send('There exists no such item');
				}
			});
	    }
	   	else{
			res.send("could not find user.");
		}
  	});
});

//get user 'eat-out' credentials
router.get(('/:id'),(req,res,next)=>{

	Pantry.findById(req.params.id, function(err, post){
	    if (post) {
	    	res.status(500).send(post.location+post.wallet);
	    }
	   	else{
			res.send("could not find");
		}
  	});
});

module.exports = router; 