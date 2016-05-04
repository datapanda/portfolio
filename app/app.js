//Create the Angular.js Module
var portfolioApp = angular.module('portfolioApp', ['ngRoute', 'ngResource', 'ui.router']);

//Establish the routes
portfolioApp.config(function ($routeProvider) {

	$routeProvider
	
	.when('/', {
		templateUrl: './app/components/home/homeView.html',
		controller: 'homeController'
	})
	.when('/design-process', {
		templateUrl: './app/components/process/processView.html',
		controller: 'designProcessController'
	})
	.when('/portfolio', {
		templateUrl: './app/components/portfolio/portfolioView.html',
		controller: 'portfolioController'
	})
	.when('/resume', {
		templateUrl: './app/components/resume/resumeView.html',
		controller: 'resumeController'
	})
});

//Define the controllers
portfolioApp.controller('homeController', ['$scope', function($scope) {
	
	$scope.portfolioItems = [
		
		{
			title: "Item 1",
			description: "This is a description..."
		},
		{
			title: "Item 2",
			description: "This is a description..."			
		}
	]
	
}]);

portfolioApp.controller('designProcessController', ['$scope', function($scope) {
	
}]);


portfolioApp.controller('portfolioController', ['$scope', function($scope) {
	
}]);

portfolioApp.controller('resumeController', ['$scope', '$injector', '$http', 'twitter', function($scope, $injector, $http, twitter) {


	$scope.greeting = "Hello";
	$scope.hello = twitter.sayHello("Bob");
	
}]);