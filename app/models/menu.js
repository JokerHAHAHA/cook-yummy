// MODEL TODO
var mongoose = require('mongoose');
var menuSchema = new mongoose.Schema({
	name: String,
	starter: Object,
	dish: Object,
	garnish: Object,
	dessert: Object,
	drink: Object,
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
		});
	},

	findAll: function(req, res) {
		Menu.model.find(function (err, data) {
			res.send(data);
		});
	},

	update: function(req, res){
		Menu.model.findByIdAndUpdate(req.params.id, {
			meals: req.body.meals,
			accounts: req.body.accounts

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
