"use strict";
// to create a controller:

var myApp = angular.module('myApp');

// $ = Angular's variable; no $ = your variable;
myApp.controller('myController', ['$scope', 'mainCharacter', 'VersionFactory', 'BookService', 'Movies',
  function($scope, mainCharacter, VersionFactory, BookService, Movies) {
    $scope.myModel = 'Player 1 Ready!';
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = VersionFactory.characterVersion();
    $scope.booker = BookService;
    $scope.movies = [];     // must declare variable first;
    Movies.getMovies().success(function(movies) {
      $scope.movies = movies;
    });
  }
]);