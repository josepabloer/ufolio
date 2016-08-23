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