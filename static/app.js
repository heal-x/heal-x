var ourCoolApp = angular.module('hxApp', ['hxResult', 'hxHistory', 'ngAnimate']);

ourCoolApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({ redirectTo: '/' });
});