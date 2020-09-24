var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  
  $scope.preencher = function(){
    $scope.dia = "2020-09-24";
    $scope.nome = "Troca de óleo";
    $scope.valor = "36.00";
  }

  $scope.insert = function(){
    $http.post("http://localhost:8080/manutencoes", {
      'valor':$scope.valor,
      'nome':$scope.nome,
      'dia':$scope.dia
    })
    .then(function(response){
      $scope.manutencoes = response.data;
      $scope.getTable();
    });
  };    

  $scope.clear = function(){
    $scope.id = "";
    $scope.dia = "";
    $scope.nome = "";
    $scope.valor = "";
  }

  $scope.getTable = function(){
    $http.get("http://localhost:8080/manutencoes")
    .then(function(response){
      $scope.manutencoes = response.data;
    });
  }

  $scope.getOne = function(id){
    $http.get("http://localhost:8080/manutencoes/" + id)  
    .then(function(response) {
      $scope.id=response.data.id;
      $scope.dia=response.data.dia;
      $scope.nome=response.data.nome;
      $scope.valor=response.data.valor;
    });
  }
  
  $scope.getAll = function(){
    $http.get("http://localhost:8080/manutencoes")
    .then(function(response) {
        console.info(response);
    });    
  }

  $scope.delete = function(id){
    $http.delete("http://localhost:8080/manutencoes/" + id)
    .then(function(response){
    $scope.getTable();    
    });
  }

  $scope.put = function(id){
    $http.put("http://localhost:8080/manutencoes/" + id,{
    'valor':$scope.valor,
    'nome':$scope.nome,
    'dia':$scope.dia
    })
    .then(function(response){
      $scope.manutencoes = response.data;
      $scope.getTable();
    });   
  }

  $scope.save = function(){
  if ($scope.dia == "") {
    console.info("Campo em Branco!")
  } else {
    if ($scope.id) {
      $scope.put($scope.id);
    } else {
      $scope.insert();
    }    
    console.info("Save Success!")
    $scope.clear();
    $scope.getTable();
  }
}  

  $scope.getTable();
});