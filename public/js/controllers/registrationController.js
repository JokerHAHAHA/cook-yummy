function registrationController($scope, $http, accountService, $location) {

$scope.myFilterHomme = "";
$scope.myFilterNoix = "";
$scope.myFilterOeuf = "";
$scope.myFilterLactose = "";
$scope.myFiltervegetarien = "";
$scope.myFilterVegan = "";
$scope.myFilterGluten = "";

function load(){
  accountService.get().then(function(res){
    $scope.accounts = res.data;
  });
}
$scope.i = 0;


$scope.plus = function(i){
  $scope.i ++;
};
$scope.moins = function(i){
  $scope.i --;
};

$scope.add = function(){

  var data = {};
  data.firstname = $scope.firstname;
  data.lastname = $scope.lastname;
  data.email = $scope.email;
  data.password = $scope.password;
  data.homme = $scope.homme;
  data.femme = $scope.femme;
  data.image = $scope.imageFile;
  data.noix = $scope.noix;
  data.oeuf = $scope.oeuf;
  data.gluten = $scope.gluten;
  data.lactose = $scope.lactose;
  data.vegetarien = $scope.vegetarien;
  data.vegan = $scope.vegan;
  data.gluten = $scope.gluten;
  data.city = $scope.city;
  data.zip = $scope.zip;
  data.street = $scope.street;
  data.country = $scope.country;








  accountService.create(data).then(function(res){
    load();
  });
  $scope.firstname = "";
  $scope.lastname = "";
  $scope.email = "";
  $scope.password = "";
  $scope.confirmation = "";
  $scope.imageFile= "";
  $scope.noix= "";
  $scope.gluten= "";
  $scope.lactose= "";
  $scope.vegetarien= "";
  $scope.vegan= "";
  $scope.oeuf= "";
  $scope.gluten= "";
  $scope.city= "";
  $scope.zip= "";
  $scope.street= "";
  $scope.country= "";
  $scope.homme ="";
  $scope.femme= "";



};
$scope.send = function($locationProvider){
  $location.path('/liste_invites');
};


$scope.update = function(account){
  accountService.update(account._id, account).then(function(res){
    load();
    location.reload();
  });
};
$scope.delete = function(account){
  accountService.delete(account._id).then(function(res){
    load();
  });
};
$scope.previewFile = function(){
        var preview = document.querySelector('#preview');
        var file    = document.querySelector('input[type=file]').files[0];
        var reader  = new FileReader();
        reader.onloadend = function () {
            preview.src = reader.result;
            $scope.imageFile = reader.result;
        };
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }
};
load();
}
