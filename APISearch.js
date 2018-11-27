const http = require('http');
const unirest = require('unirest');
var ingredients = "";

//Search Recipes by Ingredients
//Spoonacular API
var apiRequestH = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=";
var apiRequestT = "number=5&ranking=1";



unirest.get(apiRequestH+apiRequestT)
.header("X-Mashape-Key", "VABWfwhrZtmsht2xpwFIwwsQqmOdp1n320cjsnXxpuXczedJU3")
.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
  go(result.body)
});
//
//Extract json keys -> JSON parser
//get recipe information from GetRecipeInformation
//GetRecipeInformation



function go(x)
{
	console.log("in Go:");
	console.log(typeof x);

	var recipeDict = [];

	for (var key in x)
	{
		console.log(key)
		console.log("key" + " -> " + x[key].id);
		console.log("title" + " -> " + x[key].title);

		recipeDict.push(
		{
			key: x[key].id,
			value: x[key].title
		});
	}
}

