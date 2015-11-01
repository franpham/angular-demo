"use strict";

angular.module('myApp')
  .filter('yearFilter', function() {
    return function(collection, year1, year2) {
      return collection.filter(function(item) {
        return item.year < year1 || item.year > year2;
      });
    };
  });