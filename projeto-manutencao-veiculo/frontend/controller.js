var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, $http) {
  $scope.nome = "Willians";
  $scope.dia = "11/12/2020";
  $scope.valor = "1.49";
  $scope.manutencoes = new Object();

  $scope.getAll = function(){
    $http.get("http://localhost:8080/manutencoes")
    .then(function(resposta) {
      $scope.manutencoes = resposta.data; //array
    });
  }

  $scope.delete = function(id){
    $http.delete("http://localhost:8080/manutencoes/" + id)
    .then(function(resposta) {
      $scope.getAll();
    });
  }

  $scope.getAll();

});