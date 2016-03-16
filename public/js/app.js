function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'views/about.html'
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
angular.module('app', ['ngRoute'])
    .config(config)
    .controller('mainController', mainController)
    .controller('mealCtrl',mealCtrl)
    .service('todoService', todoService)
    .service('mealService', mealService)
    /*.factory('', )*/
    .run(run);

