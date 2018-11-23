
const RapidAPI = require('rapidapi-connect');
const rapid = new RapidAPI("https://spoonacular.com/food-api","VABWfwhrZtmsht2xpwFIwwsQqmOdp1n320cjsnXxpuXczedJU3")

rapid.call('Spoonacular', 'Autocomplete Ingredient Search', { 
	'ingredients': 'apples,pears,sugar',
	'X-Mashape-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
	'X-Mashape-Key' : 'VABWfwhrZtmsht2xpwFIwwsQqmOdp1n320cjsnXxpuXczedJU3',
}).on('success', (payload)=>{
	go(payload);
}).on('error', (payload)=>{
	go(payload);
});

var http = require('http');

function go(x)
{
	http.createServer(function (req, res) {
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.end(x);
	}).listen(8080);
}
