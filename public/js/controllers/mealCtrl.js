// MEALS CONTROLLER
function mealCtrl($scope, $http, mealService) {
	
	function load(){
		mealService.get().then(function(res){
			$scope.meals = res.data;
		});
	}
	$scope.add = function(){
		
		var data = {};
		data.name = $scope.name;
		data.description = $scope.description;
		data.categorie =  $scope.categorie;
		data.ingredient = $scope.ingredient;
		data.recette = $scope.recette;
		data.boisson = $scope.boisson;
		data.allergie = $scope.allergie;
		
		mealService.create(data).then(function(res){
			load();
		});
		$scope.name = "";
		$scope.description = "";
		$scope.categorie =  "";
		$scope.ingredient = "";
		$scope.recette = "";
		$scope.boisson = "";
		$scope.allergie = "";
	}
	$scope.update = function(meal){
		mealService.update(meal._id, meal).then(function(res){
			load();
		});
	}
	$scope.delete = function(meal){
		mealService.delete(meal._id).then(function(res){
			load();
		});
	}
	load();
}
