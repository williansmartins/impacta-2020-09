// angular.module('principal')
// .controller('HomeController', ['$scope', '$uibModal', '$log', '$document', '$location', '$window', '$filter', '$rootScope', '$localStorage','$rootScope', 'ManutencaoService', 
// 	function ($scope, $uibModal, $log, $document, $location, $window, $filter, $rootScope, $localStorage, $rootScope, ManutencaoService) {


app.controller('myCtrl', ['$scope', '$http', 'ManutencaoService' ,
  function($scope, $http, ManutencaoService) {
  
  $scope.objeto = new Object();
  $scope.objeto.editando = false;

  $scope.preencher = function(){
    $scope.objeto.dia = "2020-09-24";
    $scope.objeto.nome = "Troca de óleo";
    $scope.objeto.valor = "36.00";
  }

  $scope.insert = function(){
    ManutencaoService.insert($scope.objeto)
    .then(function(response, status, a){ 
      $scope.manutencoes = response.data;
      $scope.getTable();
    })
  };    

  $scope.clear = function(){
    $scope.objeto = new Object();
  }

  $scope.getTable = function(){
    ManutencaoService.getAll()
    .then(function(response, status, a){ 
      $scope.manutencoes = response.data;
    })
  }

  $scope.getOne = function(id){
    $scope.objeto.editando = true;

    ManutencaoService.getOne(id)
    .then(function(response, status, a){ 
      $scope.objeto.id=response.data.id;
      $scope.objeto.dia=response.data.dia;
      $scope.objeto.nome=response.data.nome;
      $scope.objeto.valor=response.data.valor;
    })
  }
  
  $scope.getAll = function(){
    ManutencaoService.getAll()
    .then(function(response, status, a){ 
        console.info(response);
    })
  }

  $scope.delete = function(id){
    ManutencaoService.delete(id)
    .then(function(response, status, a){ 
      $scope.getTable();    
    })
  }

  $scope.put = function(id){
    ManutencaoService.update(id)
    .then(function(response, status, a){ 
      $scope.manutencoes = response.data;
      $scope.getTable();
    })
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
      $scope.objeto.editando = false;
    }
  }  

  $scope.new = function(){
    $scope.objeto.editando = true;
  }

  $scope.getTable();
}]);