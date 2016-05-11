(function() {
    'use strict';
    
    angular
        .module('portfolioApp')
        .factory('portfolio', PortfolioFactory);
        
        function PortfolioFactory () {
            
            Test.hello = hello;
            Test.goodbye = goodbye;
            Test.prototype.hello = hello;
            Test.prototype.goodbye = goodbye;
            // Test.hello = 23;
            // this.hello = hello;
            // this.goodbye = goodbye;
            
            return Portfolio;
            
            function Portfolio() {
                
                this.name = 'Bob';
                this.age = '20';
                this.hello = hello;
                this.goodbye = goodbye;
                
            }
            
            // Methods
            function hello() {
                
                console.log('hello, world!');
            }
            
            function goodbye() {
                
                console.log('goodbye world')
            }
        };
}());