'use strict';

app.controller('homeController',
    function ($scope, UsuarioService, sharedProperties) {

        $scope.listarUsuarios = function () {
            UsuarioService.listarUsuarios(function (response) {
                $scope.userList = response;
            });
        }

        $scope.changeSearchedUser = function (userId){
            sharedProperties.setSearchedUser(userId);
        }
    }
);

app.controller('userProfileController',
    function ($scope, UsuarioService, sharedProperties) {

        $scope.buscarUsuario = function () {
            UsuarioService.buscarUsuario(sharedProperties.getSearchedUser(), function (response) {
                $scope.user = response;
            });
        }
    }
);

var div2Controller = angular.module('app').controller('div2Controller', function ($scope) {
    $scope.variableDiv2 = 'this is a div2 variable';
});

var div3Controller = angular.module('app').controller('div3Controller', function ($scope) {
    $scope.variableDiv3 = 'this is a div3 variable';
});