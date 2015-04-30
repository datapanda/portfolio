var twitterModule = angular.module('twitter', []);

twitterServices.factory('Twitter', function($http) {

	var twitter = function($http) {

		var factory = {};
		var baseUrl = 'https://api.twitter.com/';

		var bearerToken = function() {

			var consumerKey = encodeURIComponent('***');
			var consumerSecret = encodeURIComponent('***');
			var tokenCredentials = btoa(consumerKey + ':' + consumerSecret);

			return tokenCredentials;

		};

		factory.fetchAccessToken = function(scope) {

			var oAuthurl = baseUrl + "oauth2/token";
			var headers = {

				'Authorization': 'Basic ' + bearerToken(),
				'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'

			};

			$http.defaults.useXDomain = true;
			delete $http.defaults.headers.common['X-Requested-With'];
			$http({ 

				method: 'POST', 
				url: oAuthurl, 
				headers: headers, 
				data: 'grant_type=client_credentials'
			}).
			success(function(data, status) {
				scope.status = status;
				scope.data = data;
			}).
			error(function(data, status) {
				scope.status = status;
				scope.data = data || "Request failed";
			});
		};

		factory.fetchTimeLine = function(scope) {

			scope.fetchAccessToken();
			//the rest
		};

		return factory;
	};
	//angular.module('twitter').factory('twitterFactory', twitter);
})