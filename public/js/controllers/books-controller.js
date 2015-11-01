"use strict";

angular.module('myApp')
  .controller('BooksController', ['$scope', 'Books', function($scope, Books) {
    $scope.booker = Books;      // add booker variable to $scope;
  }]);