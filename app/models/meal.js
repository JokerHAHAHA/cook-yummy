// MODEL MEAL
var mongoose = require('mongoose');
var mealSchema = new mongoose.Schema({
	name: String,
	description: String,
	categorie: String,
	ingredient: String,
	recette: String,
	boisson: String,
	allergie: String
});

var Meal = {

	model: mongoose.model('Meal', mealSchema),

	create: function(req, res) {
		Meal.model.create({
			name: req.body.name,
			description: req.body.description,
			categorie: req.body.categorie,
			ingredient: req.body.ingredient,
			recette: req.body.recette,
			boisson: req.body.boisson,
			allergie: req.body.allergie
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Meal.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Meal.model.findByIdAndUpdate(req.params.id, {
			name: req.body.name,
			description: req.body.description,
			categorie: req.body.categorie,
			ingredient: req.body.ingredient,
			recette: req.body.recette,
			boisson: req.body.boisson,
			allergie: req.body.allergie
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Meal.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	} 
}
module.exports = Meal;
