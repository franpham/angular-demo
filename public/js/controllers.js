"use strict";
// to create a controller:

var myApp = angular.module('myApp');

// $ = Angular's variable; no $ = your variable;
myApp.controller('myController', ['$scope', 'mainCharacter', 'VersionFactory', function($scope, mainCharacter, VersionFactory) {
  $scope.myFirstName = 'Francis';
  $scope.myModel = 'Player 1 Ready!';
  $scope.mainCharacter = mainCharacter;
  $scope.characterVersion = VersionFactory.characterVersion();
}]);