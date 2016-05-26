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
                // console.log("testing in the service");
                // console.log(response)
                //return response.data.results;
                
                //  console.log("testing in the service");
                //  console.log(response.data)
                return response.data;
                //sub optimal 

            }
            
            function getPortfolioDataFail(error) {
                
                logger.error('XHR Failed for getPortfolioData.' + error.data);
            }
        }
    }
}());