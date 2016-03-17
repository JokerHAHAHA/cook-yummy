function config($routeProvider) {
	$routeProvider
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
	})
	.when('/about', {
		templateUrl: 'views/about.html'
	})
	.when('/main',{
		templateUrl: 'views/main.html',
		controller: 'mainController'
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
.service('todoService', todoService)
.service('accountService', accountService)

/*.factory('', )*/
.run(run);
