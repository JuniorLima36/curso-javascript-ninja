/*
# Propriedade
Object.prototype.constructor
Retorna uma referência para a função Object que cria a instância do protótipo. Note que o 
valor desse protótipo é uma referência para a própria função, não uma string contendo o nome 
da função. O valor é apenas read-only para valores primitivos como 1, true e "test".

Todos os objetos herdam a propriedade construtor de seu protótipo:

var o = {};
o.constructor === Object; // true

var a = [];
a.constructor === Array; // true

var n = new Number(3);
n.constructor === Number; // true

Exemplo: Apresentando o construtor de um objeto
O exemplo a seguir cria um protótipo, Tree, e um objeto desse tipo, theTree. O exemplo, então,
apresenta a propriedade constructor do objeto theTree.

function Tree(name) {
  this.name = name;
}

var theTree = new Tree('Redwood');
console.log('theTree.constructor is ' + theTree.constructor);

Esse exemplo apresenta a seguinte saída:

theTree.constructor is function Tree(name) {
  this.name = name;
}
______________________________________________________________________________________________
# Metodo
Object.create()
O método Object.create() cria um novo objeto, utilizando um outro objecto existente como 
protótipo para o novo objeto a ser criado.

Sintaxe
Object.create(proto[, propertiesObject])

Exemplo:
Herança tradicional com Object.create()
A seguir, um exemplo de como usar Object.create() para realizar uma herança tradicional. Isto
é para herança simples, que é a única herança suportada pelo JavaScript.

// Shape - superclasse
function Shape() {
  this.x = 0;
  this.y = 0;
}

// método da superclasse
Shape.prototype.move = function(x, y) {
  this.x += x;
  this.y += y;
  console.info('Shape moved.');
};

// Rectangle - subclasse
function Rectangle() {
  Shape.call(this); // chama construtor-pai.
}

// subclasse extende superclasse
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Rect é uma instância de Rectangle?', rect instanceof Rectangle);// true
console.log('Rect é uma instância de Shape?', rect instanceof Shape);// true
rect.move(1, 1); // Saída: 'Shape moved.'
______________________________________________________________________________________________
JSON.stringify()
O método JSON.stringify() converte valores em javascript para uma String JSON. Esses valores 
podem ser substituidos especificando a função replacer, ou incluindo somente as propriedades 
específicas, quando o array do replacer for especificado.

Sintaxe
JSON.stringify(valor[, replacer[, espaço]])

Exemplo:
function replacer(key, value) {
  if (typeof value === "string") {
    return undefined;
  }
  return value;
}

var foo = {fundação: "Mozilla", modelo: "caixa", semana: 45, transporte: "carro", mês: 7};
var jsonString = JSON.stringify(foo, replacer);
______________________________________________________________________________________________
JSON.parse()
O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript 
descrito pela string. Uma função reviver opcional pode ser fornecida para executar uma 
transformação no objeto que será retornado.

Sintaxe
JSON.parse(text[, reviver])

Exemplo:
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
______________________________________________________________________________________________
Object.prototype.hasOwnProperty()
O método hasOwnProperty() retorna um booleano indicando se o objeto possui a propriedade 
especificada como uma propriedade definida no próprio objeto em questão (ao contrário de uma 
propriedade herdada).

Sintaxe
obj.hasOwnProperty(prop)

Exemplo:
- Usando hasOwnProperty para testar a existência de uma propriedade
O seguinte exemplo determina se o objeto o possui uma propriedade com o nome prop:

o = new Object();
o.hasOwnProperty('prop'); // retorna false
o.prop = 'existe';
o.hasOwnProperty('prop'); // retorna true
______________________________________________________________________________________________
Object.prototype.isPrototypeOf()
O método isPrototypeOf() lhe permite checar se um objeto está ou não na cadeia de protótipos 
(cadeia hieráquica) de um outro objeto. 
Em outras palavras, você pode descobrir se um objeto x (já instanciado) é herdeiro de um
objeto y.

Sintaxe
prototypeObj.isPrototypeOf(objeto)

Exemplo:
Este exemplo demonstra que Baz.prototype, Bar.prototype, Foo.prototype eObject.prototype 
estão na cadeia de protótipos de baz , ou seja, baz herda atributos de Baz, Bar e Foo:

function Foo() {}
function Bar() {}
function Baz() {}

Bar.prototype = Object.create(Foo.prototype);
Baz.prototype = Object.create(Bar.prototype);

var baz = new Baz();

console.log(Baz.prototype.isPrototypeOf(baz)); // true
console.log(Bar.prototype.isPrototypeOf(baz)); // true
console.log(Foo.prototype.isPrototypeOf(baz)); // true
console.log(Object.prototype.isPrototypeOf(baz)); // true
______________________________________________________________________________________________
Object.keys()
O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto,
na mesma ordem em que é fornecida por um laço for...in (a diferença é que um laço for-in 
enumera propriedades que estejam na cadeia de protótipos).

Sintaxe
Object.keys(obj)

Exemplo:
var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array com objeto
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array como objeto com ordenação aleatória por chave
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // console: ['2', '7', '100']

// getFoo é uma propriedade que não é enumerável
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // console: ['foo']
______________________________________________________________________________________________
Object.prototype.toString()
O método toString() retorna uma string representando o objeto.

Todo objeto possui um método toString() que é chamado automaticamente quando o objeto precisa
ser representado como um valor em texto ou quando o objeto é referenciado de uma maneira que 
requeira uma string. Por padrão, o método toString() é herdado de todo objeto descendente de 
Object. Se e o método não é sobrescrito em um objeto personalizado, toString() 
retorna "[object type]", onde type é o tipo do objeto. O código a seguir ilustra isso:

var o = new Object();
o.toString();           // retorna [object Object]

Sintaxe
obj.toString()

Exemplo:
function Dog(name) {
  this.name = name;
}

const dog1 = new Dog('Gabby');

Dog.prototype.toString = function dogToString() {
  return `${this.name}`;
};

console.log(dog1.toString());
// expected output: "Gabby"
______________________________________________________________________________________________
*/