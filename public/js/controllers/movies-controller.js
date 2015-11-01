"use strict";

angular.module('myApp')
  .controller('MoviesController', ['$scope', 'Movies', function($scope, Movies) {
    $scope.movies = [];     // must declare variable first;
    Movies.getMovies().success(function(movies) {
      $scope.movies = movies;     // add movies variable to $scope;
    });
  }]);