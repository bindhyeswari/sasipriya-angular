angular.module('bugTracker.projects', []).config(function ($routeProvider) {
    $routeProvider.when('/projects', {
        templateUrl: 'app/projects/_projects.html',
        controller: 'ProjectsController'
    });
}).controller('ProjectsController', function ($scope) {

});