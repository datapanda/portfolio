//Create the Angular.js Module
var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource']);

//Establish the routes

portfolioApp.config(function ($routeProvider) {

	$routeProvider
	
	.when('/', {
		templateUrl: 'app/partials/home.htm',
		controller: 'homeController'
	})
	.when('/design-process', {
		templateUrl: 'app/partials/design-process',
		controller: 'designProcessController'
	})
	.when('/portfolio', {
		templateUrl: 'app/partials/portfolio',
		controller: 'portfolioController'
	})
	.when('/resume', {
		templateUrl: 'app/partials/resume.htm',
		controller: 'resumeController'
	})
	
});

//Define the controllers
portfolioApp.controller('homeController', ['$scope', function($scope) {
	
}]);

portfolioApp.controller('designProcessController', ['$scope', function($scope) {
	
}]);
portfolioApp.controller('portfolioController', ['$scope', function($scope) {
	
}]);

portfolioApp.controller('resumeController', ['$scope', function($scope) {
	
}]);