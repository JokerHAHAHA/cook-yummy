// MODEL TODO
var mongoose = require('mongoose');
var menuSchema = new mongoose.Schema({
  menu:{
    meals: Array,
    accounts: Array
  }

});

var Menu = {

    model: mongoose.model('Menu', menuSchema),

    create: function(req, res) {
      console.log(req.body);
		Menu.model.create({
			menu: req.body.menu,
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
			menu: req.body.menu,

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
