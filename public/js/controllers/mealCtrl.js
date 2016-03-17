// MEALS CONTROLLER
function mealCtrl($scope, $http, mealService) {
	$scope.number = 1;

	function load(){
		mealService.get().then(function(res){
			$scope.meals = res.data;
		});
	}
	$scope.add = function(){
		
		var data = {};
		data.avatar = $scope.imageFile;
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
		$scope.imageFile = "";
		$scope.name = "";
		$scope.description = "";
		$scope.categorie =  "";
		$scope.ingredient = "";
		$scope.recette = "";
		$scope.boisson = "";
		$scope.allergie = "";
		history.back();
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


	$scope.previewFile = function(){
		var preview = document.querySelector('#preview');
		var file    = document.querySelector('input[type=file]').files[0];
		var reader  = new FileReader();
		reader.onloadend = function () {
			preview.src = reader.result;
			$scope.imageFile = reader.result;
		}

		if (file) {
			reader.readAsDataURL(file);
		} else {
			preview.src = "";
		}
	}
	
	$scope.keep = function(meal){

		$scope._id = meal._id
		$scope.imageFile = meal.avatar;
		$scope.name = meal.name;
		$scope.description = meal.description;
		$scope.categorie = meal.categorie;
		$scope.ingredient = meal.ingredient;
		$scope.recette = meal.recette;
		$scope.boisson = meal.boisson;
		$scope.allergie = meal.allergie;
		
	}

	$scope.viewCount = function(number){
		$scope.number = number;
	}


	load();
}
