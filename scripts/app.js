var app = angular.module("myModule", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
        .when('/view1', {
            controller: 'chelControl',
            templateUrl: 'partials/view1.html'
        })
        .when('/view2', {
            controller: 'chelControl',
            templateUrl: 'partials/view2.html'
        })
        .when('/view3', {
            controller: 'chelControl',
            templateUrl: 'partials/view3.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
