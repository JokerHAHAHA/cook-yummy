// ROUTES MEALS
var Menu = require('../models/menu.js');

module.exports 	= function(app) {
	app.get('/menus', Menu.findAll);
	app.post('/menus', Menu.create);
	app.put('/menus/:id', Menu.update);
	app.delete('/menus/:id', Menu.delete);

}
