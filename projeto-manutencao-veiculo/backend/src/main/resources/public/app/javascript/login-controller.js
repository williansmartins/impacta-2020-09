app.controller('LoginController', ['$scope', '$location', 'LoginService', '$rootScope', '$localStorage', 
	function ($scope, $location, LoginService, $rootScope, $localStorage) {

    $scope.temErro = false;
    $scope.mensagem = "";
    $scope.form = {
    	"name": "",
    	"email": "admin",
    	"password": "password"
    };
    $scope.$storage = $localStorage;
    $scope.flagMostrarLogin = true;
    $scope.popularEmail = function(){
    	$scope.form.email = "contato@williansmartins.com";
    }

    var cadastrar = function(){

    	//validar email

    	//validar usuario
    	LoginService.signup($scope.form)
        .then(function(response, status){
    		alert("Cadastro efetuado com sucesso, a partir de agora você pode entrar com seu usuário e senha.");
    		$scope.flagMostrarLogin = true;
        });
    }

    $scope.login = function(){
        LoginService.login($scope.form)
        .then(function(response){

            //TODO: nao era pra ser assim, erro de login tinha que cair em error...
            if(response.status=="error"){
                alert("Houve um problema ao tentar fazer o login.");
            }else{
                $localStorage.token = response.data;
                $scope.temErro = false;
                $scope.$storage.usuarioLogado = true;
                
                var objetoGlogal = {
                	"localstorage" : $localStorage,
                	"flagMostrarMenu" : true
                }

                $rootScope.$broadcast('topic', objetoGlogal);

                window.location = "manutencao.html";
            }

        });
    }

    var limparDadosDeLogin = function(){

     	var objetoGlogal = {
        	"localstorage" : null,
        	"flagMostrarMenu" : null
        }

        $rootScope.$broadcast('topic', objetoGlogal);
    }

    init = function() {
        limparDadosDeLogin();
    };

	init();
}]);