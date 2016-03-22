// MAIN CONTROLLER
function menuController($scope, $http, menuService) {
	$scope.title = "TODO LIST";

	function load(){
		menuService.get().then(function(res){
			$scope.menus = res.data;
		});
	}









	/* hhdsqfdksfksdfndsfdksfnldsqs,DSLDS,KLCD,SKLCKLVNKLNKLVNKLQVNKLVN*/
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
