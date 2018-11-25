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


