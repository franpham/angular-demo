"use strict";
// TO CREATE A FACTORY:

angular.module('myApp')
  .factory('VersionFactory', ['APP_VERSION', 'mainCharacter', function(APP_VERSION, mainCharacter) {
    return {
      get: function() {
        // add other functions to link to ORM;
      },
      characterVersion: function() {
      return mainCharacter + ' ' + APP_VERSION;
    }};
}]);