// MODEL TODO
var mongoose = require('mongoose');
var menuSchema = new mongoose.Schema({

    meals: Array,
    accounts: Array


});

var Menu = {

    model: mongoose.model('Menu', menuSchema),

    create: function(req, res) {
      console.log(req.body);
		Menu.model.create({
			meals: req.body.meals,
			accounts: req.body.accounts
		},

		function(){
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
