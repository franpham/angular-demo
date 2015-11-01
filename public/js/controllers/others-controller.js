"use strict";

// $ = Angular's variable; no $ = your variable;
angular.module('myApp')           // the controller for data set in values.js and factories.js
  .controller('OthersController', ['$scope', 'mainCharacter', 'VersionFactory',
    function($scope, mainCharacter, VersionFactory) {
      $scope.myModel = 'Player 1 Ready!';
      $scope.mainCharacter = mainCharacter;
      $scope.characterVersion = VersionFactory.characterVersion();
    }
  ]);