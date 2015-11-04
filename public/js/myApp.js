"use strict";
// TO CREATE A MODULE:

// creates an app: 2nd arg is to import dependencies;
angular.module('myApp', ['ngRoute']);

var myApp = angular.module('myApp');
myApp.config(function(MoviesProvider, $routeProvider) {
  MoviesProvider.endpoint = 'http://localhost:3000/api/movies';

  $routeProvider
    .when('/', { templateUrl: 'views/default.html' })
    .when('/books', { templateUrl: 'views/books.html', controller: 'BooksController' })
    .when('/movies', { templateUrl: 'views/movies.html', controller: 'MoviesController' })
    .when('/others', { templateUrl: 'views/others.html', controller: 'OthersController' })
    .otherwise({ templateUrl: 'views/404.html' });
})
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {
  $rootScope.APP_VERSION = APP_VERSION;     // $rootScope MUST BE ACCESSED in run();
}]);