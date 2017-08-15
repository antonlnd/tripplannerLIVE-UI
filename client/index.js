const mapboxgl = require("mapbox-gl");
const buildMarker = require("./marker");

/*
  * Instantiate the Map
  */
/*
By the time you've completed this workshop, Trip Planner users should be able to:

Select Between hotels, restaurants and activities (the application will fetch all these data using AJAX)
Select and set the hotel
Select and add a restaurant
Select and add an activity
Remove the hotel
Remove a restaurant
Remove an activity
These changes should be reflected in 1) the side panel, and 2) the map. */

mapboxgl.accessToken = "pk.eyJ1IjoiYmFia2F5ZWIiLCJhIjoiY2o2ZHdwbG11MDBiNzMzbXVqa3hmdjFmdiJ9.bs4kI0oe7xVvNB0sSl6RRA";
const map = new mapboxgl.Map({
	container: "map-canvas",
	center: [-74.0, 40.731],
	zoom: 12.5, // starting zoom
	pitch: 35,
	bearing: 20,
	style: "mapbox://styles/mapbox/streets-v10"
});

