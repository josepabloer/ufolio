app.controller('homeController', 
function ($scope, UsuarioService) {
    $scope.variableHome = 'this is a home variable';

    $scope.listarUsuario = function()
	{
		UsuarioService.listar(function(response){
			console.log(response);
		});
	}

});