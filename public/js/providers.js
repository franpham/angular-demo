"use strict";
// TO CREATE A PROVIDER:

angular.module('myApp')
  .provider('Movies', function() {
    var self = this;          // must set self since setEndpoint is called in an event handler;
    this.endpoint = '';
    this.$get = ['$http', function($http) {   // variables with '$' are Angular's variables;
      return {
        getMovies: function() {
          return $http.get(self.endpoint);
        }
      };
    }];
  });