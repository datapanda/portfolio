(function() {
    'use strict';
    
    angular
        .module('portfolioApp')
        .factory('test', TestFactory);
        
        function TestFactory () {
            
            Test.hello = hello;
            Test.goodbye = goodbye;
            Test.prototype.hello = hello;
            Test.prototype.goodbye = goodbye;
            // Test.hello = 23;
            // this.hello = hello;
            // this.goodbye = goodbye;
            
            return Test;
            
            function Test() {
                
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

// (function() {
//     'use strict';
    
//     angular
//         .module('portfolioApp')
//         .factory('test', TestFactory);
        
//         function TestFactory () {
            
//             Test.prototype.hello = hello;
//             Test.prototype.goodbye = goodbye;
//             Test.hello = 23;
//             // this.hello = hello;
//             // this.goodbye = goodbye;
            
//             return Test;
            
//             function Test(data) {
                
//                 this.name = 'Bob';
//                 this.age = '20';
//                 this.hello = hello;
//                 this.goodbye = goodbye;
                
//             }
            
//             // Methods
//             function hello() {
                
//                 console.log('hello, world!');
//             }
            
//             function goodbye() {
                
//                 console.log('goodbye world')
//             }
//         };
// }());