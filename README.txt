#README for SMEART
To run program:
download: node, mongodb, mocha, react, express, mongoose
In the 'backend' folder-->
Mongoose
	-mongoose makes accessing the server much easier. You can see how its used by checking out some of 
	-the js files in the 'test' folder
Mongodb running server:
	- create a local folder called 'db' in SMEART then type 'mongod --dbpath filepath' into your command
	-line. Make sure you replace [filepath] with your actual db address
	-the server should run in that command window until you kill it
Mocha 
	-you can test different db commands using mocha, which is a testing software. Tests should go into 
	-the test folder. You can see a template for commands and syntax in there too. You can run the tests
	-by typing 'npm run test' in the command line. This accesses a script from your package.json file. You
	-might need to replace what I wrote with just 'mocha' if you're on mac.

Schema:
	-the schemas for the mongodb lie in the models folder of the backend. You can see some templates there to
	-see how it works. You export it kind of like a java class. The pantryitem.js schema is used in the test 
	-files.

Download ROBOMongo to see your database. The setup is pretty simple.

Anthony:
To run the react app on localhost, change into the my-app folder and run "yarn start" from terminal

Anthony:
~~~ Notes on Babel ~~~
What problem does Babel solve? Situation where a feature of JavaScript is available in 
some versions of some browsers, but not in others.
Babel is a compiler - takes code written in one standard and transforms it to code 
written into another standard.
Babel "transpiling" happens at build time - we need a workflow setup that can handle
this for us. Popular one is Webpack. 

Babel is installed locally in a project, can use npm 
We can then add Babel configurations to our project using the .babelrc file 
For example, having the line 
	"plugins": ["transform-es2015-arrow-functions"]
will transpile js files, converting arrow functions introduced in ES6, to older
ES5 functions.

We also have presets, which let you specify what environments you want to support.
For example, 
	"presets": ["env", "react"],
lets babel know we are working in a react environment, and it sets up the environment 
and modern JS features for you.