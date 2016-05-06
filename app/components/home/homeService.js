(function() {
    'use strict';
    
    angular
        .module('portfolioApp')
        .factory('test', TestFactory);
        
        function TestFactory () {
            
            Test.prototype.hello = hello;
            Test.prototype.goodbye = goodbye;
            Test.bob = 23;
            
            return Test;
            
            function Test(data) {
                
                this.name = 'Bob';
                this.age = '20';
                
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