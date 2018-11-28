// ./express-server/app.js
//Run node app.js to turn on server 

const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();
//const pantry = require('models/pantry');
//ES6 Promises
//connect to the server: 

//Mongoose -> connects to MongoDB
//Establish connection with server
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);

mongoose.connect('mongodb://localhost:27017/smeart',{ useNewUrlParser: true });

mongoose.connection.once('open',function(){
	console.log('Connection has been made to port 27017');
}).on('error',function(error)
{
	console.log('Connection error: ',error);
}); //on checks every error that occurs
//


//Express stuff
const port = process.env.PORT || 3001;
const route = require('./routes/pantry-route');
const route2 = require('./routes/wallet-route');

app.use(cors());
app.use(bodyparser.json());
//defines the path of the folder
app.use(express.static(path.join(__dirname,'public')));
//Listen in to ports and route the requests
app.get('/', (req, res) => {
    res.send('Hello Express'); //sends the message to the server root
});

app.use('/pantry', route);

//auth config
app.use(require("express-session")({
    secret: "wubbalubbadubdub data in the session is encoded and decoded using this key", 
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//app.use('/wallet', route2);
// start listening to the port
app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});


