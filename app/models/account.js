// MODEL ACCOUNT
var mongoose = require('mongoose');
var accountSchema = new mongoose.Schema({
  firstname: String,
	lastname: String,
  email: String,
  password: String,
	homme: String,
  femme: String,
	image: String,
  noix:String,
  lactose:String,
  vegetarien:String,
  vegan:String,
  gluten:String,
	city:String,
  zip:String,
  street:String,
  country:String

});
var Account = {

    model: mongoose.model('Account', accountSchema),

    create: function(req, res) {
		Account.model.create({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
      email: req.body.email,
			homme: req.body.homme,
      femme:req.body.femme,
      password: req.body.password,
			image: req.body.image,
			noix:req.body.noix,
		  lactose:req.body.lactose,
		  vegetarien:req.body.vegetarien,
		  vegan:req.body.vegan,
		  gluten:req.body.gluten,
			city:req.body.city,
		  zip:req.body.zip,
		  street:req.body.street,
		  country:req.body.country
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
      homme: req.body.homme,
      femme:req.body.femme,
			image: req.body.image,
      password: req.body.password,
			noix:req.body.noix,
		  lactose:req.body.lactose,
		  vegetarien:req.body.vegetarien,
		  vegan:req.body.vegan,
		  gluten:req.body.gluten,
			city:req.body.city,
		  zip:req.body.zip,
		  street:req.body.street,
		  country:req.body.country
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
