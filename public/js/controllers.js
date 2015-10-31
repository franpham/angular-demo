"use strict";

var myApp = angular.module('myApp');

myApp.config(function() {

})
.run(function() {

});

myApp.controller('myController', ['$scope', function($scope) {
  $scope.myFirstName = 'Francis';
  $scope.myModel = 'Player 1 Ready!';
}]);