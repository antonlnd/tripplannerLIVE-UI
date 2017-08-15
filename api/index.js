const router = require('express').Router();
const db = require('../models');
const Hotel = require('../models').Hotel;
const Place = require('../models').Place;
const Activity = require('../models').Activity;
const Restaurant = require('../models').Restaurant;
const Sequelize = require('sequelize');

router.get('/', (req, res, next) => {
	console.log('ficionadcionac');
	const allAttractions = {};
	Hotel.findAll()
		.then(function (hotels) {
			allAttractions.hotels = hotels;
			return Restaurant.findAll();
		})
		.then(function (restaurants) {
			allAttractions.restaurants = restaurants;
			return Activity.findAll();
		})
		.then(function (activities) {
			allAttractions.activities = activities;
			return Place.findAll();
		})
		.then(function () {
			res.json(allAttractions);
		})
		.catch(next);
	// var selectHotels = document.getElementsById('hotels-choices');
	// var theOption = document.createElement("option");
	// selectHotels.appendChild(theOption);
	console.log('HERE');
});





module.exports = {
	db,
	router,
	Hotel,
	Activity,
	Restaurant,
	Place
};