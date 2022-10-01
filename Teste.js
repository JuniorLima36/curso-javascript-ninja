/*
var i = 0;
for(var i=0; i<20; i++) {
    console.log(i);
}

var func = function func(x, y){
    var soma = x + y;
    soma++
    return soma;
}
console.log(func(5, 2))

var car = {
    brand: "VM",
    model: "Gol",
    year: 2013
};

for(var prop in car){
    console.log(prop);
}
console.log("brand in car ?", 'brand' in car);

var obj = {
    prop1: "prop1",
    prop2: "prop2"
}
console.log(obj);

var obj2 = {
    prop1: "prop1",
    prop2: "prop2"
}
console.log(obj);
obj.prop1 = "propriedade 1";
console.log(obj);
delete obj.prop1;
console.log(obj);
obj.prop1 = "prop1";
console.log(obj);

function func(a) {
    arguments[0] = 99; // updating arguments[0] also updates a
    console.log(a);
  }
  func(10); // 99

console.log('One');
setTimeout(() => console.log('Two'), 100);
console.log('Three');
// LOGS: 'One', 'Three', 'Two'
*/

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