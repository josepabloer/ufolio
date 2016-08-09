'use strict';

var app = angular.module("app", ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/',{
            controller: 'homeController',
            controllerAs: 'home',
            templateUrl: 'Views/home.html',
            caseInsensitiveMatch: true
        })
        .when('/div1',{
            controller: 'div1Controller',
            controllerAs: 'div1',
            templateUrl: 'Views/div1.html',
            caseInsensitiveMatch: true
        })
        .when('/div2',{
            controller: 'div2Controller',
            controllerAs: 'div2',
            templateUrl: 'Views/div2.html',
            caseInsensitiveMatch: true
        })
        .when('/div3',{
            controller: 'div3Controller',
            controllerAs: 'div3',
            templateUrl: 'Views/div3.html',
            caseInsensitiveMatch: true
        })
        .otherwise('/');
});

var homeController = angular.module('app').controller('homeController', function ($scope) {
    $scope.variableHome = 'this is a home variable';
});

var div1Controller = angular.module('app').controller('div1Controller', function ($scope, $http) {
    var onUserComplete = function(response){
        $scope.user = response.data;
    };

    $http.get("https://api.github.com/users/robconery")
        .then(onUserComplete);
});

var div2Controller = angular.module('app').controller('div2Controller', function ($scope) {
    $scope.variableDiv2 = 'this is a div2 variable';
});

var div3Controller = angular.module('app').controller('div3Controller', function ($scope) {
    $scope.variableDiv3 = 'this is a div3 variable';
});