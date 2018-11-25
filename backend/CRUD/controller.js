const Pantry = require('../models/pantry');



/*

export function addPost(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newPost = new Post(req.body.post);

  // Let's sanitize inputs
  newPost.title = sanitizeHtml(newPost.title);
  newPost.name = sanitizeHtml(newPost.name);
  newPost.content = sanitizeHtml(newPost.content);

  newPost.slug = slug(newPost.title.toLowerCase(), { lowercase: true });
  newPost.cuid = cuid();
  newPost.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ post: saved });
  });
}*/

export function read(req, res)
{
	Pantry.findOne({username: req.body.username}).exec((err, post) => {
	    if (err) {
	      res.status(500).send(err);
	    }
	    res.json({ post });
  	});
}

function create(req, res)
{
	
	var ingredients = toString(req.body.ingredients);
	if(ingredients!=null)
	{
		var newUser = new Pantry({
			username: res.params.username,
			password: res.params.password,
			pantryitems: []
		});

		for ingredient in ingredients
		{
			newUser.pantryitems.push({name:ingredient,val:1});
		}

		newUser.save();
	}
	else
	{
		var newUser = new Pantry({
			username: res.params.username,
			password: res.params.password,
			pantryitems: []
		});

		newUser.save();
	}
}

function update(req,res)
{
	var ingredient = toString(req.body.ingredient);

	Pantry.findOne({username:toString(req.body.username)}).then(function(record){
		//add an ingredient to the pantryitems collection
		record.pantryitems.push({name:ingredient});
	});
}

function delete(req,res)
{
	var ingredient = toString(req.body.ingredient);
	Pantry.finOne({username:toString(req.body.username)}).then(function(record){
		record.pantryitems.pull({name:ingredient});
	});
}

		
		

