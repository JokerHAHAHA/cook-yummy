// ROUTES TODOS
var Account = require('../models/account.js');
module.exports 	= function(app) {
	app.get('/accounts', Account.findAll);
	app.post('/accounts', Account.create);
	app.put('/accounts/:id', Account.update);
	app.delete('/accounts/:id', Account.delete);

}
