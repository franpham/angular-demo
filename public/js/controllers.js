"use strict";
// to create a controller:

var myApp = angular.module('myApp');

// $ = Angular's variable; no $ = your variable;
myApp.controller('myController', ['$scope', 'mainCharacter', 'VersionFactory', 'BookService',
  function($scope, mainCharacter, VersionFactory, BookService) {
    $scope.myFirstName = 'Francis';
    $scope.myModel = 'Player 1 Ready!';
    $scope.mainCharacter = mainCharacter;
    $scope.characterVersion = VersionFactory.characterVersion();
    $scope.booker = BookService;
  }
]);