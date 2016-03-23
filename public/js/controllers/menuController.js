// menus CONTROLLER
function menuController($scope, $http, menuService, mealService) {
	// initaliser les variables
	$scope.idStarterSelected = "ras";
	$scope.idDishSelected = "ras";
	$scope.idGarnishSelected = "ras";
	$scope.idDessertSelected = "ras";
	$scope.idDrinkSelected = "ras";

	function load(){
		menuService.get().then(function(res){
			$scope.menus = res.data;
		});

		mealService.get().then(function(res){
			$scope.meals = res.data;
		});
	}


	$scope.add = function(){
		
		var data = {};
		data.name = $scope.name;
		data.starter = $scope.starter;
		data.dish = $scope.dish;
		data.garnish = $scope.garnish;
		data.dessert = $scope.dessert;
		data.drink = $scope.drink;
		
		menuService.create(data).then(function(res){

			load();
		});
		
		$scope.name = "";
		$scope.starter = "";
		$scope.dish = "";
		$scope.garnish = "";
		$scope.dessert = "";
		$scope.drink = "";
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
	$scope.pushMeal = function(categorie,_id){
		if (categorie == 'starter'){
			$scope.idStarterSelected = _id;
		}
		else if (categorie == 'dish'){
			$scope.idDishSelected = _id;
		}
		else if (categorie == 'garnish'){
			$scope.idGarnishSelected = _id;
			
		}
		else if (categorie == 'dessert'){
			$scope.idDessertshSelected = _id;			
		}
		else
			$scope.idDrinkSelected = _id;

		load();
	}

	$scope.deleteMeal = function(categorie){
		if (categorie == 'starter'){
			$scope.idStarterSelected = 'ras';
		}
		else if (categorie == 'dish'){
			$scope.idDishSelected = 'ras';
		}
		else if (categorie == 'garnish'){
			$scope.idGarnishSelected = 'ras';
			
		}
		else if (categorie == 'dessert'){
			$scope.idDessertshSelected = 'ras';			
		}
		else
			$scope.idDrinkSelected = 'ras';

		load();
	}

load();

}

