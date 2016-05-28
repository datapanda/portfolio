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
		//console.log(homePageItems);
				
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


.controller('portfolioController', ['$scope', '$http', '$stateParams', 'logger', 'portfolioService', function($scope, $http, $stateParams, logger, portfolioService) {
	
	// Use this to filter the rows
	//http://plnkr.co/edit/yt2YMrabhTMd5BnnXfes?p=preview
	//http://andyshora.com/promises-angularjs-explained-as-cartoon.html
	
    var vm = this;
    $scope.items = [];
	$scope.rowFilter = function(data) {
		
		var rows = [];
		var slices = [3, 2];
		
		slices.forEach(function (s) {
			console.log(s);
			rows.push(data.splice(0,s));
		});
		console.log(rows);
		return rows;
  };
  	
	
    // $scope.processArray = $scope.rowFilter($scope.items);
	
    activate();
	
    function activate() {
        return getData().then(function() {
			console.log($scope.items);
            logger.info('Activate the portfolio view');
			//$scope.processArray = $scope.rowFilter($scope.items);

        });
    }

    function getData() {
        return portfolioService.getPortfolioData()
            .then(function(data) {
				$scope.items = data;
				return $scope.items;
            });
    }	
	
	console.log("test")
	console.log(vm.items);
	console.log("test")

}])
.controller('portfolioItemController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
	
	$http.get('./assets/portfolio/portfolioItems.json').success(function(data) {
		
		//var portfolioItems = [];
		// console.log(portfolioName);
		angular.forEach(data, function(value, key) {
			
			if(value.name === $stateParams.portfolioName) {
				
				$scope.portfolio = value;
				//portfolioItems.push(value);
				
			}
		});
		
		//$scope.portfolio = portfolioItems;
		console.log("We should be getting back a single item here");
		console.log($scope.portfolio);
	});
}])
.controller('resumeController', ['$scope', '$injector', '$http', function($scope, $injector, $http) {

	$scope.greeting = "Hello";
	
}])

.controller('loginController', function($rootScope, $scope, $location) {
	
	
})

.filter("col", function() {
	return function(value) {
		return ['col-xs-','col-sm-', 'col-md-'].map( function (c) { return c + value} ).join(' ');
	}
});
// .filter("col", function() {
//   return function(value) {
//     return ['col-md-'].map( function (c) { return c + value} ).join(' ');
//   }
// });