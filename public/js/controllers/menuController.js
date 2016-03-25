// menus CONTROLLER
function menuController($scope, $http, menuService, mealService) {

	// initaliser les variables
	$scope.idStarterSelected = "ras";
	$scope.idDishSelected = "ras";
	$scope.idGarnishSelected = "ras";
	$scope.idDessertSelected = "ras";
	$scope.idDrinkSelected = "ras";
	$scope.number = 1;

	function load(){
		menuService.get().then(function(res){
			$scope.menus = res.data;
		});

		mealService.get().then(function(res){
			$scope.meals = res.data;
		});
	}

	$scope.viewCount = function(number){
		$scope.number = number;
		// 1 = Menu list
		// 2 = Add menu
		// 3 = Update Menu
	}

	$scope.add = function(categorie){
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
		$scope.idStarterSelected = "ras";
		$scope.idDishSelected = "ras";
		$scope.idGarnishSelected = "ras";
		$scope.idDessertSelected = "ras";
		$scope.idDrinkSelected = "ras";
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
			$scope.idDessertSelected = 'ras';			
		}
		else
			$scope.idDrinkSelected = 'ras';

		load();
	}

	$scope.keep = function(menu){
		$scope.name = menu.name;
		$scope.starter = menu.starter;
		$scope.dish = menu.dish;
		$scope.garnish = menu.garnish;
		$scope.dessert = menu.dessert;
		$scope.drink = menu.drink;
		
		if (menu.starter != "")
			$scope.idStarterSelected = menu.starter._id;
		if (menu.dish != "")
			$scope.idDishSelected = menu.dish._id;
		if (menu.garnish != "")
			$scope.idGarnishSelected = menu.garnish._id;
		if (menu.dessert)
			$scope.idDessertSelected = menu.dessert._id;
		else
			$scope.idDessertSelected = 'ras';
		if (menu.drink != "")
			$scope.idDrinkSelected = menu.drink._id;

		load();
	}
	
	$scope.pushMeal = function(meal, categorie,_id){
		if (categorie == 'starter'){
			$scope.idStarterSelected = _id;
			$scope.starter = meal;
		}
		else if (categorie == 'dish'){
			$scope.idDishSelected = _id;
			$scope.dish = meal;
		}
		else if (categorie == 'garnish'){
			$scope.idGarnishSelected = _id;
			$scope.garnish = meal;
			
		}
		else if (categorie == 'dessert'){
			$scope.idDessertSelected = _id;			
			$scope.dessert = meal;
		}
		else
			$scope.idDrinkSelected = _id;
		$scope.drink = meal;

		load();
	}
	
	load();

}

