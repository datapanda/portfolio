(function() {
    'use strict';

    angular
        .module('portfolioApp')
        .factory('logger', logger);

    function logger() {
        
        return { 
            
            "info": function(message) {
                
                console.log(message);
            }
            
        };
        
    }
})();

// // storage.js
// (function() {
//     'use strict';

//     angular
//         .module('portfolioApp')
//         .factory('storage', storage);

//     function storage() { }
// })();