// MEALS CONTROLLER
function mealCtrl($scope, $http, mealService) {
	// initialize variables values
	$scope.number = 0;
	$scope.defaultAvatar = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAZABkAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAGQAfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD3+iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiikJAoAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKTIpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmuSBxTqawJ6dKAGhyV6UYLHmlCetPxigBAMCloooAKKKKACiiigAooooAKKKKACkyPWk2n6mjB9aAHZB70U3ae+KcM96ACiiigAooooAKKKKACiiigAooooAKKKKAGOxXoKTeStOIJNAT1oAaFLcmpBwKKKACiiigAooooAKKKKACiiigAooOe1N2n8fWgBdw9RS5puG9aNp9s0AOooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAoooPAoAKKbv9qKAHUUUUAFFFFABRRRQAUUU0sO1ACk4pm4txSD5zyaeuBwKAFApaTcKAQaAFooooAKKKKACiiigAoPSiigBmTgc0ZPrSlaTaaAEyeOetPHQUm2nUAFFFFABRRRQAUUUUAFFFNLCgBScUzcTwKOWPNPCgUAAHrS0UUAFFFFABRRRQAUUUUAFFFFADMnFGfelK0m00AJk8HPenr0pNtOAwKACijIHU00OhOA6k/WgB1FFFABRRRQAUUUUAFFFFABRRRQAUEZFFFADPLBop9FABRRRQAUUUUAFFFFABTAnPNPooAw9PuPM1qePPAMh/JgP6Uun3Rk1mWDP3POz/AN9rj+dZuhTeZ4luR/13/wDRxpmhylvG2qxk8KHI/wC+loA1bC6Mut3UGciPf/MVNps/mXE6k/cmlX/x4H+tYmhTF/Gurxk8KDj8xV3R3/4md6M/8vsy/wDjqGgDo6KKKACiiigAooooAKKKKACiiigAooqC5vbWzTfczxxL6uwFAE9FclqHxG0CyJWOZ7px2hXI/M8Vzd58WZWJWy0xE9Gmkzn8Bj+dAHqNFeJXXxH8RXBIWeKEekcQ/mc1lzeLNenzv1W557B8U7AfQNJketfOb6xqchy+oXJ/7amm/wBoXw5a9ufYea3+NFgPo+mbfm6186DVtRU5F9cD6SmrUXibWosbNUuVPr5h5osB9CUV4Zb+P/ElqcfbvMA7SIGrZtPivqUZAu7C3mHqjFD/AFosB61RXDWPxR0a4wtzFPase7Dcv5j/AArqbHW9M1JQbS9hlz2V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30DS7VkMNjAhQYXC9K0gAoAAwB2oAWiiigAooooAKKKKACiiigAprAmnUUANC4OadRRQAUUUUAGKY8UcoxIisPRhmn0UAU30jTZPv2Fs31iX/Cov7B0j/oGWn/flf8K0aKAKC6JpSnK6daA/9cV/wqzFaW0H+qt4k/3UAqaigCM9KMCnEU3H+cUAFPXpTdp4pwGKAFooooAKKKKACiiigAoopCwFAC0wvngUmSxpyrjr1oAQL0Jqlrkd3Not3HYY+0tEwjz64rQooA+d7JpdC162nvrN828oZ4pFwTg17RpvjTQdRiUx6hFE56xzHYw/P+lbFzY2t4u25t4pR/toDVD/AIRfQ927+y7XP/XMUAQ67Fba/olxZWtzE87Lui2uDh1OR+orT077SNPtxeAC4Ea+YB03Y5p9tZWtmu22t4oh6IoFT0AFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFN2D1NOooAQDFLRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABSHPYUtFACDPeloooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooATPtS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQB/9k=";
	$scope.imageFile = $scope.defaultAvatar;

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

		// reaffiche HOME MEAL
		$scope.viewCount(0);
		
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
		preview.src = "";

	}
	
	$scope.update = function(){

		var data = {};
		data._id = $scope._id;
		data.avatar = $scope.avatar;
		data.name = $scope.name;
		data.description = $scope.description;
		data.categorie =  $scope.categorie;
		data.ingredient = $scope.ingredient;
		data.recette = $scope.recette;
		data.boisson = $scope.boisson;
		data.allergie = $scope.allergie;
		
		mealService.update(data._id, data).then(function(res){
			load();
		});		
	}

	$scope.delete = function(meal){
		mealService.delete(meal._id).then(function(res){
			load();
		});
	}


	$scope.previewFile = function(addOrUpdate){
		var file    = document.querySelector("#" + addOrUpdate.id).files[0];
		var reader  = new FileReader();
		// this is useful after the 'if' beyond
		reader.onloadend = function () {
			// for the ADD MEAL part
			$scope.imageFile = reader.result;
			// for the UPDATE MEAL part
			$scope.avatar = reader.result;
		}
		// this runs first
		if (file) {
			reader.readAsDataURL(file);
			load();
		} else {
			// for the ADD MEAL part
			$scope.imageFile = $scope.defaultAvatar;
			// for the UPDATE MEAL part
			$scope.avatar = $scope.defaultAvatar;
			load();
		}
	}
	
	$scope.keep = function(meal){

		$scope._id = meal._id;
		$scope.avatar = meal.avatar;
		$scope.name = meal.name;
		$scope.description = meal.description;
		$scope.categorie = meal.categorie;
		$scope.ingredient = meal.ingredient;
		$scope.recette = meal.recette;
		$scope.boisson = meal.boisson;
		$scope.allergie = meal.allergie;
	}

	$scope.unkeep = function(){

		$scope._id = "";
		$scope.avatar = $scope.defaultAvatar;	
		$scope.name = "";
		$scope.description = "";
		$scope.categorie = "starter";
		$scope.ingredient = "";
		$scope.recette = "";
		$scope.boisson = "";
		$scope.allergie = "";
	}

	$scope.viewCount = function(number){
		$scope.number = number;
		// 0 = home meal
		// 1 = entry
		// 2 = dish
		// 3 = garnish
		// 4 = dessert
		// 5 = drink
		// 6 = addMeal
		// 7 = updateMeal
		// 8 = meal sheet
	}

	

	load();
}

