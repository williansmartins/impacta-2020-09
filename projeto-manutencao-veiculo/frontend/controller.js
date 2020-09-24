var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {
  
  $scope.objeto = new Object();

  $scope.preencher = function(){
    $scope.objeto.dia = "2020-09-24";
    $scope.objeto.nome = "Troca de óleo";
    $scope.objeto.valor = "36.00";
  }

  $scope.insert = function(){
    $http.post("http://localhost:8080/manutencoes", {
      'valor':$scope.objeto.valor,
      'nome':$scope.objeto.nome,
      'dia':$scope.objeto.dia
    })
    .then(function(response){
      $scope.manutencoes = response.data;
      $scope.getTable();
    });
  };    

  $scope.clear = function(){
    $scope.objeto = new Object();
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
      $scope.objeto.id=response.data.id;
      $scope.objeto.dia=response.data.dia;
      $scope.objeto.nome=response.data.nome;
      $scope.objeto.valor=response.data.valor;
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
    'valor':$scope.objeto.valor,
    'nome':$scope.objeto.nome,
    'dia':$scope.objeto.dia
    })
    .then(function(response){
      $scope.manutencoes = response.data;
      $scope.getTable();
    });   
  }

  $scope.save = function(){
  if ($scope.objeto.dia == "") {
    console.info("Campo em Branco!")
  } else {
    if ($scope.objeto.id) {
      $scope.put($scope.objeto.id);
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