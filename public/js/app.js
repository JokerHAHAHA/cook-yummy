function config($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
		controller: 'registrationController'
	})
	.when('/invites', {
		templateUrl: 'views/invites.html',
		controller: 'registrationController'
	})
	.when('/liste_invites', {
		templateUrl: 'views/liste_invites.html',
		controller: 'registrationController'
	})
	.when('/meals', {
		templateUrl: 'views/meals.html',
		controller: 'mealCtrl'
	})
	.when('/events', {
		templateUrl: 'views/events.html',
		controller: 'eventsController'
	})
	.when('/menus', {
		templateUrl: 'views/menus.html',
		controller: 'menuController'
	})
	.when('/menu', {
		templateUrl: 'views/menu.html',
		controller: 'menuController'
	})
	.otherwise({
		redirectTo: '/'
	});


}
function run($rootScope, $location){
	var path = function() { return $location.path(); };
	$rootScope.$watch(path, function(newVal, oldVal){
		$rootScope.activetab = newVal;
	});
}


angular.module('app', ['ngRoute','ngAutocomplete'])
.config(config)
.controller('mainController', mainController)
.controller('registrationController', registrationController)
.controller('eventsController', eventsController)
.controller('menuController', menuController)
.controller('mealCtrl',mealCtrl)
.service('todoService', todoService)
.service('accountService', accountService)
.service('eventService', eventService)
.service('mealService', mealService)
.service('menuService', menuService)




/*.factory('', )*/
.run(run);
