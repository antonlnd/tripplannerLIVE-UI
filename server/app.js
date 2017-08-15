const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const ajax = require('isomorphic-fetch');

//models
const db = require('../models').db;
const Hotel = require('../models').Hotel;
const Place = require('../models').Place;
const Activity = require('../models').Activity;
const Restaurant = require('../models').Restaurant;
const Sequelize = require('sequelize');
var app = express();

// logging and body-parsing
app.use(morgan());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

app.use('/api', require('../api').router);

fetch('http://localhost:3000/api')
	.then((content) => {
		var theTarget = document.getElementsById('hotels-choice');
		var theOption = document.createElement('option');
		theTarget.appendChild(theOption);

	});

// failed to catch req above means 404, forward to error handler
app.use(function (req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});


// handle any errors
app.use(function (err, req, res, next) {
	console.error(err, err.stack);
	res.status(err.status || 500);
	res.send("Something went wrong: " + err.message);
});
// routes


// listen on a port
var port = 3000;
app.listen(port, function () {
	console.log('The server is listening closely on port', port);
	db
		.sync()
		.then(function () {
			console.log("Synchronated the database");
		})
		.catch(function (err) {
			console.error("Trouble right here in River City", err, err.stack);
		});
});