const Sequelize = require('sequelize');
const router = require('express').Router();

const db = new Sequelize('postgres://localhost:5432/tripplanner');
const Restaurant =  db.define('restaurant', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cuisine: Sequelize.STRING,
	price: {
		type: Sequelize.INTEGER,
		validate: {
			min: 1,
			max: 5
		}
	}
});
const Activity = db.define('activity', {
	name: {
		type: Sequelize.STRING
	},
	age_range: {
		type: Sequelize.STRING
	}
});
const Place = db.define('place', {
	address: {
		type: Sequelize.STRING,
		allowNull: false
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false
	},
	state: {
		type: Sequelize.STRING,
		allowNull: false

	},
	phone: {
		type: Sequelize.STRING,
		allowNull: false
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT),
		// allowNull: false
	},
});
const Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING
	},
	num_stars: {
		type: Sequelize.INTEGER,
		validate: {
			min:1,
			max:5
		}
	},
	amenities: {
		type: Sequelize.STRING,
		get: function () {
			return 'hotel';
		}
	},
});
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);
Hotel.belongsTo(Place);

module.exports = {
	db,
	router,
	Restaurant,
	Activity,
	Place,
	Hotel
};
