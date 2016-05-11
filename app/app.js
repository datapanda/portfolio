//Create the Angular.js Module
angular.module('portfolioApp', ['ui.router', 'ngResource'])

//Establish the routes
.config(function ($stateProvider, $urlRouterProvider) {
	
	$urlRouterProvider.otherwise('home');
	
	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: './app/components/home/homeView.html'	
		})
		.state('design-process', {
			url: '/design-process',
			templateUrl: './app/components/process/processView.html'
		})
		.state('portfolio', {
			url: '/portfolio/{portfolioID}',
			templateUrl: './app/components/portfolio/portfolioView.html',
			controller: function($scope, $state, $stateParams, $http) {
				
				$http.get('./assets/portfolio/portfolioItems.json').success(function(data) {
					
					$scope.portfolio = data;
					console.log(data);
				
				});
				var foo = $stateParams.portfolioID; //getting fooVal
				console.log(foo);
				//$scope.id = $stateParams.portfolioID
			}
			
			// http://stackoverflow.com/questions/27338954/building-a-portfolio-use-ng-repeat-but-each-item-has-own-page
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
.controller('homeController', ['$scope', 'test', function($scope, TestFactory) {
	
	$scope.stuff = TestFactory;
	console.log(TestFactory.hello());
	// console.log($scope.stuff.hello);
	// console.log($scope.stuff.goodbye);
	// console.log($scope.stuff.bob);
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
	
}])

.controller('designProcessController', ['$scope', function($scope) {
	
}])


.controller('portfolioController', ['$scope', function($scope) {
	
}])

.controller('resumeController', ['$scope', '$injector', '$http', function($scope, $injector, $http) {

	$scope.greeting = "Hello";
	
}])

.controller('loginController', function($rootScope, $scope, $location) {
	
	
})