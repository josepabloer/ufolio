app.controller('homeController', 
function ($scope, UsuarioService) {

    $scope.listarUsuario = function() {
		UsuarioService.listar(function(response){
			console.log(response);
		});
	}

	$scope.buscarUsuario = function(){
		var userid = 1; //Ejemplo
		UsuarioService.buscar(userid, function(response){
			console.log(response);
		});
	}
});
var div1Controller = angular.module('app').controller('div1Controller', function ($scope) {
    $scope.variableDiv1 = 'this is a div1 variable';
});

var div2Controller = angular.module('app').controller('div2Controller', function ($scope) {
    $scope.variableDiv2 = 'this is a div2 variable';
});

var div3Controller = angular.module('app').controller('div3Controller', function ($scope) {
    $scope.variableDiv3 = 'this is a div3 variable';
});