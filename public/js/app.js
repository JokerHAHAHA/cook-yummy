function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'mainController'
		})
		.when('/starter', {
			templateUrl: 'views/meal/starter.html',
			controller: 'mealCtrl'
		})
		.when('/dish', {
			templateUrl: 'views/meal/dish.html',
			controller: 'mealCtrl'
		})
		.when('/garnish', {
			templateUrl: 'views/meal/garnish.html',
			controller: 'mealCtrl'
		})
		.when('/dessert', {
			templateUrl: 'views/meal/dessert.html',
			controller: 'mealCtrl'
		})
		.when('/drink', {
			templateUrl: 'views/meal/drink.html',
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
		.when('/about', {
			templateUrl: 'views/about.html'
		})
		.when('/events', {
			templateUrl: 'views/events.html',
			controller: 'eventsController'
		})
		.otherwise({
			redirectTo: '/'
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
	.when('/login', {
		templateUrl: 'views/login.html',
		controller: 'registrationController'
	})
	.when('/registration', {
		templateUrl: 'views/registration.html',
		controller: 'registrationController'
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
.controller('mealCtrl',mealCtrl)
.service('todoService', todoService)
.service('accountService', accountService)
.service('eventService', eventService)
.service('mealService', mealService)


/*.factory('', )*/
.run(run);
