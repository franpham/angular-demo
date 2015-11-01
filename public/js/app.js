"use strict";
// TO CREATE A MODULE:

// creates an app: 2nd arg is to import dependencies;
angular.module('myApp', []);

var myApp = angular.module('myApp');

myApp.config(function(MoviesProvider) {
  MoviesProvider.endpoint = 'http://localhost:3000/api/movies';
})
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {
  $rootScope.APP_VERSION = APP_VERSION;
}]);   // $rootScope MUST BE ACCESSED in run();