// ROUTES MEALS
var Meal = require('../models/meal.js');
module.exports 	= function(app) {
	app.get('/meals', Meal.findAll);
	app.post('/meals', Meal.create);
	app.put('/meals/:id', Meal.update);
	app.delete('/meals/:id', Meal.delete);
    
}
