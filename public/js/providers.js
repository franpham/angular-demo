"use strict";
// TO CREATE A PROVIDER:

// difference betwen Provider and Service is only Provider can be passed to config();
angular.module('myApp')
  .provider('Movies', function() {
    var self = this;          // must set self since getMovies is called in an event handler;
    this.endpoint = '';
    this.$get = ['$http', function($http) {   // variables with '$' are Angular's variables;
      return {
        getMovies: function() {
          return $http.get(self.endpoint);
        }
      };
    }];
  });