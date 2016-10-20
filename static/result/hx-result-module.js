
    // execute this code
    // register module ('name', deps)
var mod = angular.module('hxResult', ['ngRoute','ngAnimate']);

    mod.config(function ($routeProvider) {
        $routeProvider.when('/dnaResult/:id', {
            controller: 'HealxResultController',
            templateUrl: 'result/hx-result.html'
        }).when('/dnaLoading', {
            templateUrl: 'result/hx-loading.html'
        }).when('/', {
            templateUrl: 'result/hx-default.html'
        });
    });