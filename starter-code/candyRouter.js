var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [{"id":1,"name":"Chewing Gum","color":"Red"},
			   {"id":2,"name":"Pez","color":"Green"},
			   {"id":3,"name":"Marshmallow","color":"Pink"},
			   {"id":4,"name":"Candy Stick","color":"Blue"}];



//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req, res) {
	// What would go here? 
	// Hint: we want all candies in JSON format	
	res.json(candies);
	res.send('all the candies');
});

// Fill out the rest of the routes here

router.get('/:id', function(req, res) {
	// Show
	// What would go here? 
	// Hint: we want all candies in JSON format	
	res.json(candies[req.params.id]);
	res.send('candy according to id the candies');
});

// Check this in Postman
router.post('/', function(req, res) {
	// Post
	req.body.id = candies.length + 1;
	candies.push(req.body);	
	res.send(req.body);
	res.send('You POSTed a Candies');
});

// Check this in Postman
router.put('/:id', function(req, res) {
	// Put
	res.send(candies[req.params.id] = (req.body));
	res.send('You PUT "eidted" candy with an ID of ');
});

//  Check this in Postman
router.delete('/:id', function(req, res) {
	candies[req.params.id] = null;
	res.send('You DELETEd the candy with the ID of ');
	res.send(candies);
});



module.exports = router;