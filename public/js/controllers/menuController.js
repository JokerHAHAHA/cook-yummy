
function menuController($scope, $http, mealService, menuService, accountService) {

	$scope.menu = {
		meals: [],
		accounts: []
	};


	function load(){
		mealService.get().then(function(res){
			$scope.meals = res.data;
			console.log(res.data);
		});
		accountService.get().then(function(res){
			$scope.accounts = res.data;
			console.log(res.data);
		});
		menuService.get().then(function(res){
			$scope.menus = res.data;
			console.log(res.data);
		});
	}
	/*============= */
	$scope.addToMenu= function(meal){
		$scope.menu.meals.push(meal);
	};
	$scope.addToMenuInvites= function(account){
		$scope.menu.accounts.push(account);
	};
	/*============= */
	$scope.add = function(){
		console.log($scope.menu.meals);
		var data = {};
		data.menu = $scope.menu;
		data.menu.meals = $scope.menu.meals;
		data.menu.accounts = $scope.menu.accounts;

		menuService.create(data).then(function(res){
			load();
			$scope.menu.meals = [];
			$scope.menu.accounts = [];
		});

		// $scope.menu.accounts = [];
console.log(data.menu);
	};





	load();

}
