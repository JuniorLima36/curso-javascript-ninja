/*
array.prototype.forEach.call()

Exemplos:
(function(){
    "use strict";

    function funcao(){
        Array.prototype.forEach.apply( arguments, [function(item, index){
            console.log(item);
        }]);
    }
    funcao(1,2,3,4,5,6);
})();

(function(){
    "use strict";

    function funcao(){
        Array.prototype.forEach.call( arguments, function(item, index){
            console.log(item);
        });
    }
    funcao(1,2,3,4,5,6);
})();

(function(){
    "use strict";

    function funcao(){
        var result = Array.prototype.reduce.call( arguments, function(acumulated, 
            actual, index){
            return acumulated + actual;
        });
        console.log(result);
    }
    funcao(1,2,3,4,5,6);
})();
*/