var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider
        .when('/items', {
            templateUrl: 'app/items/items.html',
            controller: 'ItemsController'
        })
        .when('/champion-mastery', {
            templateUrl: 'app/mastery/mastery.html',
            controller: 'MasteryController'
        })
        .when('/', {
            templateUrl: 'app/main.html'
        })
        .otherwise({
            redirectTo: '/'
        });

    //$locationProvider.html5Mode(true);
});