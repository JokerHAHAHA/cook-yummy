// // EVENTS CONTROLLER
function eventsController($scope, $http, eventService) {
	$scope.title = "Evénements";
	
	function load(){
		eventService.get().then(function(res){
			$scope.events = res.data;
		});
	}
	$scope.add = function(){
		var data = {};
		data.description = $scope.description;
		data.nom = $scope.nom;
		data.lieu = $scope.lieu;
		data.jour = $scope.jour;
		data.mois = $scope.mois;
		data.annee = $scope.annee;
		data.heure = $scope.heure;
		data.minute = $scope.minute;
		data.menu = $scope.menu;
		data.invitation = $scope.invitation;

		eventService.create(data).then(function(res){
			load();
		});
		$scope.description = "";
		$scope.nom = "";
		$scope.lieu = "";
		$scope.jour = "";
		$scope.mois = "";
		$scope.annee = "";
		$scope.heure = "";
		$scope.minute = "";
		$scope.menu = "";
		$scope.invitation = "";
	}
	$scope.update = function(event){
		eventService.update(event._id, event).then(function(res){
			load();
		});
	}
	$scope.delete = function(event){
		eventService.delete(event._id).then(function(res){
			load();
		});
	}
	load();
}
