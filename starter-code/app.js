//Did you use npm install to
//add all these packages
//to our project? (I sure DID)
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

// How do we 'require' the candyRouter file?
var candyRouter = require('./candyRouter');

app.use(bodyParser.json());

//How do we redirect the /candies path
//through our candyRouter?
//Hint: you need app.use
app.use('/candies', candyRouter);


	

// app.listen(3000);

app.listen(PORT, function() {
	console.log("Hey I'm Working");
});


// req.body = candies.length + 1;
// 	candies.push (req.body);