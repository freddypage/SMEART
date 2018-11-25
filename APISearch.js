


const unirest = require('unirest');
var ingredients = "";

/*
unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/autocomplete?query=apple"+ingredients+"&number=10")
.header("X-Mashape-Key", "VABWfwhrZtmsht2xpwFIwwsQqmOdp1n320cjsnXxpuXczedJU3")
.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
.end(function (result) {
	console.log(result.status, result.headers, result.body);
	go(result.body);
});*/

//Search Recipes by Ingredients

unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?ingredients=apples%2Cflour%2Csugar&number=5&ranking=1")
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

const http = require('http');

function go(x)
{
	console.log("in Go:");
	console.log(typeof x);

/*
	var dict = []; // create an empty array

dict.push({
    key:   "keyName",
    value: "the value"
});
// repeat this last part as needed to add more key/value pairs

*/

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

	/*http.createServer(function (req, res) {
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.end(x);
	}).listen(8080);*/
}

