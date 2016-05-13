var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/items', {
            templateUrl: 'app/items/items.html',
            controller: 'ItemsController'
        });

    //$locationProvider.html5Mode(true);
});