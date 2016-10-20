var ourCoolApp = angular.module('hxApp', ['hxResult', 'hxHistory']);

ourCoolApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.otherwise({ redirectTo: '/' });
});