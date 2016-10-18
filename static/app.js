var ourCoolApp = angular.module('hxApp', ['hxResult']);

ourCoolApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({ redirectTo: '/' });
});