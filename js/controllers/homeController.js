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