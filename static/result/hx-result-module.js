﻿
    // execute this code
    // register module ('name', deps)
    var mod = angular.module('hxResult', ['ngRoute']);

    mod.config(function ($routeProvider) {
        $routeProvider.when('/dnaResult/:id', {
            controller: 'HealxResultController',
            templateUrl: 'result/hx-result.html'
        });
    });