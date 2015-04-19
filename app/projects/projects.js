angular.module('bugTracker.projects', ['ngRoute']).config(function ($routeProvider) {
    $routeProvider.when('/projects', {
        templateUrl: 'projects/_projects.html',
        controller: 'ProjectsController'
    });
}).controller('ProjectsController', ['$scope', function (sc) {

}]);