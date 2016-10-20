
    // execute this code
    // register module ('name', deps)
    var mod = angular.module('hxHistory', ['ngRoute']);

    mod.config(function ($routeProvider) {
        $routeProvider.when('/history', {
            controller: 'HealxHistoryController',
            templateUrl: 'history/hx-history.html'
        });
    });