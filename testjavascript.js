


const unirest = require('unirest');
var ingredients = "";

unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/ingredients/autocomplete?query=apple"+ingredients+"&number=10")
.header("X-Mashape-Key", "VABWfwhrZtmsht2xpwFIwwsQqmOdp1n320cjsnXxpuXczedJU3")
.header("X-Mashape-Host", "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com")
.end(function (result) {
	go(String(result.status));
  console.log(result.status, result.headers, result.body);
  
});

const http = require('http');

function go(x)
{
	http.createServer(function (req, res) {
	    res.writeHead(200, {'Content-Type': 'text/html'});
	    res.end(x);
	}).listen(8080);
}

