// MODEL ACCOUNT
var mongoose = require('mongoose');
var accountSchema = new mongoose.Schema({
  firstname: String,
	lastname: String,
  email: String,
  password: String,
	sexe: String,
	image: String
});
var Account = {

    model: mongoose.model('Account', accountSchema),

    create: function(req, res) {
		Account.model.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
      email: req.body.email,
			sexe: req.body.sexe,
      password: req.body.password,
			image: req.body.image
		}, function(){
			res.sendStatus(200);
		});
	},
	findAll: function(req, res) {
		Account.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Account.model.findByIdAndUpdate(req.params.id, {
			firstname: req.body.firstname,
			lastname: req.body.lastname,
      email: req.body.email,
			sexe: req.body.sexe,
			image: req.body.image,
      password: req.body.password
		}, function(){
			res.sendStatus(200);
		});
	},
	delete: function(req, res){
		Account.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		});
	}
};
module.exports = Account;
