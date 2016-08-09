
var div1Controller = angular.module('app').controller('div1Controller', function ($scope, $http) {

    var onUserComplete = function(response){
        $scope.user = response.data;
    };

    var onError = function(reason){
        $scope.error = reason;
    };

    $http.get("https://api.github.com/users/robconery")
        .then(onUserComplete, onError);
});