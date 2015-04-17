'use strict';

// Declare app level module which depends on views, and components
angular.module('bugTrackerApp', []).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/projects'});
}]);
