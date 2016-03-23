// MODEL TODO
var mongoose = require('mongoose');
var menuSchema = new mongoose.Schema({
	name: String,
	starter: {
		name: String,
		description: String,
		categorie: String,
		ingredient: String,
		recette: String,
		boisson: String,
		allergie: String,
	},
	dish: {
		name: String,
		description: String,
		categorie: String,
		ingredient: String,
		recette: String,
		boisson: String,
		allergie: String,
	},
	garnish: {
		name: String,
		description: String,
		categorie: String,
		ingredient: String,
		recette: String,
		boisson: String,
		allergie: String,
	},
	dessert: {
		name: String,
		description: String,
		categorie: String,
		ingredient: String,
		recette: String,
		boisson: String,
		allergie: String,
	},
	drink: {
		name: String,
		description: String,
		categorie: String,
		ingredient: String,
		recette: String,
		boisson: String,
		allergie: String,
	},
});


var Menu = {

	model: mongoose.model('Menu', menuSchema),

	create: function(req, res) {
		Menu.model.create({
			name: req.body.name,
			starter: req.body.starter,
			dish: req.body.dish,
			garnish: req.body.garnish,
			dessert: req.body.dessert,
			drink: req.body.drink,
		}, function(){
			res.sendStatus(200);
		})
	},

	findAll: function(req, res) {
		Menu.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		Menu.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	
	delete: function(req, res){
		Menu.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}
module.exports = Menu;
