function registrationController($scope, $http, accountService) {
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
  data.sexe = $scope.sexe;
  data.image = $scope.imageFile;
  accountService.create(data).then(function(res){
    load();
  });
  $scope.firstname = "";
  $scope.lastname = "";
  $scope.email = "";
  $scope.password = "";
  $scope.confirmation = "";
  $scope.imageFile= "";
  location.reload();
};
$scope.update = function(account){
  accountService.update(account._id, account).then(function(res){
    load();
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
