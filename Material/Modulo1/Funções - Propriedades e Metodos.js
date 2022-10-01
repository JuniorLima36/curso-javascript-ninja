/*
# Propriedade
# Function.length
A propriedade length especifica o número de argumentos esperados pela função.

Exemplos
console.log(Function.length); / * 1 * /

console.log((function()        {}).length); / * 0 * /
console.log((function(a)       {}).length); / * 1 * /
console.log((function(a, b)    {}).length); / * 2 etc. * /
console.log((function(...args) {}).length); / * 0, rest parameter is not counted * /
____________________________________________________________________________________________
# Function.name
A propriedade somente-leitura name de um objeto Function indica o nome da função como 
especificado quando esta foi criada, ou "anonymous" para funções criadas anonimamente.

Exemplo:
const func1 = function() {};

const object = {
  func2: function() {}
};

console.log(func1.name);
// expected output: "func1"

console.log(object.func2.name);
// expected output: "func2"
____________________________________________________________________________________________
# Metodo
Function.prototype.apply()
O método apply() chama uma função com um dado valor this e arguments providos como uma array 
(ou um objeto parecido com um array).

Sintaxe
fun.apply(thisArg, [argsArray])

Exemplo:
- Usando apply para cadeia de construtores
Você pode usar apply para encadear construtores em um objeto, similar ao Java. No exemplo 
seguinte nós iremos criar um método de Função global chamado construct, que fará você capaz 
de usar um objeto parecido com um array com um construtor ao invés de uma lista de argumentos

Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};

Nota: O método Object.create() usado acima é relativamente novo. Para um método alternativo 
utilizando closures, por favor considere a seguinte alternativa.

Function.prototype.construct = function(aArgs) {
  var fConstructor = this, fNewConstr = function() { fConstructor.apply(this, aArgs); };
  fNewConstr.prototype = fConstructor.prototype;
  return new fNewConstr();
};
______________________________________________________________________________________________
# Function.prototype.call()
O método de chamada() chama a função com um determinado valor e argumentos fornecidos 
individualmente.this

Sintaxe
call()
call(thisArg)
call(thisArg, arg1, / * …, * / argN)

Exemplo:
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"
______________________________________________________________________________________________
# Function.prototype.toString()
O método toString() retorna uma string representando o código fonte da função.

Sintaxe
function.toString()

Exemplo:
function sum(a, b) {
  return a + b;
}

console.log(sum.toString());
// expected output: "function sum(a, b) {
//                     return a + b;
//                   }"

console.log(Math.abs.toString());
// expected output: "function abs() { [native code] }"
*/