//Create the Angular.js Module
angular.module('portfolioApp', ['ui.router', 'ngResource'])

//Establish the routes
.config(function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('home');
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: './app/components/home/homeView.html',
			controller: 'homeController'	
		})
		.state('design-process', {
			url: '/design-process',
			templateUrl: './app/components/process/processView.html'
		})
		.state('portfolio', {
			url: '/portfolio',
			templateUrl: './app/components/portfolio/portfolioView.html',
			controller: 'portfolioController'
		})
		.state('portfolioItem', {
			url: '/portfolio/{portfolioName}',
			templateUrl: './app/components/portfolio/portfolioItemView.html',
			controller: 'portfolioItemController',
		})		
		.state('resume', {
			url: '/resume',
			templateUrl: './app/components/resume/resumeView.html'
		})
		.state('login', {
			url: '/login',
			templateUrl: './app/components/login/loginView.html'
		})
})

//Define the controllers
.controller('homeController', ['$scope', 'test', '$http', function($scope, TestFactory, $http) {
	
	$http.get('./assets/portfolio/portfolioItems.json').success(function(data) {
		
		var homePageItems = [];
		
		angular.forEach(data, function(value, key) {
			
			if(value.homePage === true) {
				
				homePageItems.push(value);
			}
		});
		
		$scope.portfolio = homePageItems;
		console.log(homePageItems);
				
	});

	
	// $scope.stuff = TestFactory;
	// console.log(TestFactory.hello());
	// console.log($scope.stuff.hello);
	// console.log($scope.stuff.goodbye);
	// console.log($scope.stuff.bob);
	// $scope.portfolioItems = [
		
	// 	{
	// 		title: "Item 1",
	// 		description: "This is a description..."
	// 	},
	// 	{
	// 		title: "Item 2",
	// 		description: "This is a description..."			
	// 	}
	// ]
	
}])

.controller('designProcessController', ['$scope', function($scope) {
	
}])


.controller('portfolioController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
	
	$http.get('./assets/portfolio/portfolioItems.json').success(function(data) {
		
		$scope.portfolio = data;
		
	});
}])
.controller('portfolioItemController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
	
	$http.get('./assets/portfolio/portfolioItems.json').success(function(data) {
		
		var portfolioItems = [];
		// console.log(portfolioName);
		angular.forEach(data, function(value, key) {
			
			if(value.name === $stateParams.portfolioName) {

				portfolioItems.push(value);
				
			}
		});
		
		$scope.portfolio = portfolioItems;
		console.log("We should be getting back a single item here");
		console.log($scope.portfolio);
	});
}])
.controller('resumeController', ['$scope', '$injector', '$http', function($scope, $injector, $http) {

	$scope.greeting = "Hello";
	
}])

.controller('loginController', function($rootScope, $scope, $location) {
	
	
})