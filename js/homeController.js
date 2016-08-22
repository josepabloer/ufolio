
var homeController = angular.module('app').controller('homeController', function ($scope, $http) {
    //Ambos sirven solo q tira el error aquel
    $http.get('http://default-environment.mqcicakiqj.us-west-2.elasticbeanstalk.com/usuario/listar')
        .then(function onUsersComplete(response){
            $scope.users = response.data;
        }, function onError(reason){
            $scope.error = reason;
        });

    $http({
        method: 'GET',
        url: 'http://default-environment.mqcicakiqj.us-west-2.elasticbeanstalk.com/usuario/listar',
        headers: {'Content-Type': 'application/json'}
    }).then(function successCallback(response) {
        $scope.users = response.data;
    }, function errorCallback(reason) {
        $scope.error = reason;
    });
});