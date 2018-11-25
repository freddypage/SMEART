const mongoose = require('mongoose');
const express = require('express');
var app = express();

//const pantry = require('models/pantry');
//ES6 Promises
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false)


mongoose.connect('mongodb://localhost/smeart',{ useNewUrlParser: true });

mongoose.connection.once('open',function(){
	console.log('Connection has been made');
	done();
}).on('error',function(error)
{
	console.log('Connection error: ',error);
}); //on checks every error that occurs


app.get('/', (req, res) => {
    res.send('Hello Express')
});
app.listen(process.env.PORT || 3000)
	