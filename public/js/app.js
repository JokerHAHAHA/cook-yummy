function config($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'mainController'
		})
		.when('/about', {
			templateUrl: 'views/about.html'
		})
		.when('/meals', {
			templateUrl: 'views/meals.html',
			controller: 'mealCtrl'
		})
		.when('/addMeal', {
			templateUrl: 'views/addMeal.html',
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

