function config($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html',
	})
	.when('/meal', {
		templateUrl: 'views/meal/meal.html',
		controller: 'mealCtrl'
	})
	.when('/addMeal', {
		templateUrl: 'views/meal/addMeal.html',
		controller: 'mealCtrl'
	})
	.when('/updateMeal', {
		templateUrl: 'views/meal/updateMeal.html',
		controller: 'mealCtrl'
	})
	.when('/events', {
		templateUrl: 'views/events.html',
		controller: 'eventsController'
	})
	.when('/liste_invites', {
		templateUrl: 'views/liste_invites.html',
		controller: 'registrationController'
	})
	.when('/home', {
		templateUrl: 'views/home.html',
		controller: 'registrationController'
	})
	.when('/invites', {
		templateUrl: 'views/invites.html',
		controller: 'registrationController'
	})
	.when('/registration', {
		templateUrl: 'views/registration.html',
		controller: 'registrationController'
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


angular.module('app', ['ngRoute','ngAutocomplete','ngDraggable'])
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
