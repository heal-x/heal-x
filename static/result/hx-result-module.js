﻿
    // execute this code
    // register module ('name', deps)
    var mod = angular.module('hxResult', ['ngRoute']);

    mod.config(function ($routeProvider) {
        $routeProvider.when('/dnaResult', {
            controller: 'HealxResultController',
            templateUrl: 'result/hx-result.html'
        }).when('/dnaLoading', {
            templateUrl: 'result/hx-loading.html'
        }).when('/', {
            templateUrl: 'result/hx-default.html'
        });
    });