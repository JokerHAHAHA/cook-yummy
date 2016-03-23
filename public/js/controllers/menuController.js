// MAIN CONTROLLER
function menuController($scope, $http, menuService) {

	function load(){
		menuService.get().then(function(res){
			$scope.menus = res.data;
		})
		mealService.get().then(function(res){
			$scope.meals = res.data;
		});
	}


	$scope.add = function(){
		
		var data = {};
		data.description = $scope.description;
		
		menuService.create(data).then(function(res){
		
			load();
		});
		
		$scope.description = "";
	}

	$scope.update = function(todo){
		menuService.update(todo._id, todo).then(function(res){
		
			load();
		});
	}
	$scope.delete = function(todo){
		
		menuService.delete(todo._id).then(function(res){
		
			load();
		});
	}

	load();
}
