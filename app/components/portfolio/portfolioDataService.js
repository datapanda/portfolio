(function() {
    'use strict';
    
    angular
        .module('portfolioApp')
        .factory('portfolioService', portfolioService);
        
        portfolioService.$inject = ['$http', 'logger'];
        
        function portfolioService($http, logger) {
            
            return {
                
                getPortfolioData: getPortfolioData,
                
            };
        
        function getPortfolioData() {
            
            return $http.get('./assets/portfolio/portfolioItems.json')
                .then(getPortfolioDataComplete)
                .catch(getPortfolioDataFail);
                
            function getPortfolioDataComplete(response) {
                
                //return response;
                //console.log(response)
                //return response.data.results;
                return response.data;

            }
            
            function getPortfolioDataFail(error) {
                
                logger.error('XHR Failed for getPortfolioData.' + error.data);
            }
        }
    }
}());