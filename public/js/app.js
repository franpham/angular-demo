"use strict";
// TO CREATE A MODULE:

// creates an app: 2nd arg is to import dependencies;
angular.module('myApp', [])
.run(['$rootScope', 'APP_VERSION', function($rootScope, APP_VERSION) {
  $rootScope.APP_VERSION = APP_VERSION;
}]);   // $rootScope MUST BE ACCESSED in run();