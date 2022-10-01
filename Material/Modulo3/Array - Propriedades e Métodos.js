/*
__________________________________________________________________________________________________
# Propriedades

- Array.prototype.length
A propriedade length representa um inteiro de 32-bit sem sinal, que especifíca o número de 
elementos em um array.

Sintaxe
arr.length

Exemplos
- Iterando sobre um array
No exemplo a seguir numbers é iterado considerando a propriedade length para ver quantos elementos
ele tem. O valor de cada elemento recebe então o dobro.

var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {
  numbers[i] *= 2;
}
// numbers is now [2, 4, 6, 8, 10]
____________________________________________
- Encurtando um array
O exemplo a seguir encurta o array statesUS para um tamanho de 50 se o tamanho corrente for maior 
do que 50.

if (statesUS.length > 50) {
  statesUS.length = 50;
}
__________________________________________________________________________________________________
# Métodos

- Array.prototype.pop()
O método pop() remove o último elemento de um array e retorna aquele elemento.

Sintaxe
arr.pop()

Exemplo: Removendo o último elemento de um array
O código seguinte cria o array meuPeixe contendo quatro elementos e então remove seu último 
elemento.

var meuPeixe = ['acara-bandeira', 'palhaco', 'mandarim', 'esturjao'];
console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim', 'esturjao']

var meuPeixePop = meuPeixe.pop();
console.log(meuPeixe); // ['acara-bandeira', 'palhaco', 'mandarim' ]
console.log(meuPeixePop); // 'esturjao'
__________________________________________________________________________________________________
- Array.prototype.join()
O método join() junta todos os elementos de um array (ou um array-like object) em uma string e 
retorna esta string.

Sintaxe
arr.join([separador = ','])

Exemplo: Juntando um array de quatro formas diferentes

O exemplo interativo a seguir cria um array, a, com três elementos, e o junta três vezes: a 
primeira com virgulas, a segunda so junta os elementos e a terceira com um sinal de menos.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
__________________________________________________________________________________________________
- Array.prototype.reverse()
O método reverse() inverte os itens de um array. O primeiro elemento do array se torna o último e 
o último torna-se o primeiro.

Sintaxe
arr.reverse()

Exemplo: Invertendo os elementos em um array
O seguinte exemplo cria um array myArray, contendo três elementos, em seguida inverte-o.

var myArray = ['one', 'two', 'three'];
myArray.reverse();
console.log(myArray) // ['three', 'two', 'one']
__________________________________________________________________________________________________
- Array.prototype.sort()
O método sort() ordena os elementos do próprio array e retorna o array. A ordenação não é 
necessariamente estável. A ordenação padrão é de acordo com a pontuação de código unicode.

A complexidade do tempo de execução ou a quantidade de memória utilizada pela ordenação não pode 
ser garantido e depende da implementação realizada.

Sintaxe
arr.sort([funcaoDeComparacao])

var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

var scores = [1, 10, 2, 21];
scores.sort(); // [1, 10, 2, 21]
// Observe que 10 vem antes do 2,
// porque '10' vem antes de '2' em ponto de código Unicode.

var things = ['word', 'Word', '1 Word', '2 Words'];
things.sort(); // ['1 Word', '2 Words', 'Word', 'word']
// Em Unicode, números vêem antes de letras maiúsculas,
// as quais vêem antes das minúsculas.
__________________________________________________________________________________________________
- Array.prototype.toString()
O método toString() retorna uma string representando um array específico e seus elementos.

Sintaxe
arr.toString()

Exemplo:
O objeto Array substitui o método toString() de Object. Para objetos do tipo Array, o método 
toString() concatena todos os valores em apenas uma string. Segue exemplo abaixo, de como ele se 
comporta.

var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var myVar = monthNames.toString(); // atribui 'Jan,Feb,Mar,Apr' para myVar.

JavaScript chama o método toString automaticamente quando um Array é para ser representado como 
um valor de texto ou quando um Array é designado em uma concatenação.
__________________________________________________________________________________________________
- Array.prototype.concat()
O método concat() retorna um novo array contendo todos os arrays ou valores passados como 
parâmetro

Sintaxe
arr.concat(valor1, valor2, ..., valorN)

Exemplo: Concatenando dois arrays
O código a seguir une dois arrays:

var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];

// creates array ["a", "b", "c", 1, 2, 3]; alpha and numeric are unchanged
var alphaNumeric = alpha.concat(numeric);
__________________________________________________________________________________________________
- Array.prototype.unshift()
O método unshift() adiciona um ou mais elementos no início de um array e retorna o número de 
elementos (propriedade length) atualizado.

Sintaxe
arr.unshift([element1[, ...[, elementN]]])

Exemplos

var arr = [1, 2];

arr.unshift(0); // result of call is 3, the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // = 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-3]);
// arr is [[-3], -2, -1, 0, 1, 2]
__________________________________________________________________________________________________
Array.prototype.shift()
O método shift() remove o primeiro elemento de um array e retorna esse elemento. Este método muda 
o tamanho do array.

Sintaxe
arr.shift()

Exemplo:
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]

console.log(firstElement);
// expected output: 1
__________________________________________________________________________________________________
Array.prototype.slice()
O método slice() retorna uma cópia de parte de um array a partir de um subarray criado entre as 
posições início e fim (fim não é necessário) de um array original. O Array original não é 
modificado.

Syntaxe
arr.slice([início[,fim]])

Exemplo: Retorna uma parte de um array existente

// Exemplo para extrair 'Laranja' e 'Limao' do array frutas
var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga'];

var citricos = frutas.slice(1, 3);
// citricos contem ['Laranja','Limao']
__________________________________________________________________________________________________
Array.prototype.splice()
O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove 
elementos antigos.

Sintaxe
array.splice(indice[, deleteCount[, elemento1[, ...[, elementoN]]])

Exemplo:
var myFish = ["angel", "clown", "mandarin", "surgeon"];

//remove 0 elementos a partir do índice 2, e insere "drum"
var removed = myFish.splice(2, 0, "drum");
//myFish é ["angel", "clown", "drum", "mandarin", "surgeon"]
//removed é [], nenhum elemento removido

//remove 1 elemento do índice 3
removed = myFish.splice(3, 1);
//myFish é ["angel", "clown", "drum", "surgeon"]
//removed é ["mandarim"]
__________________________________________________________________________________________________
Array.prototype.forEach()
O método forEach() executa uma dada função em cada elemento de um array.

Sintaxe
arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);

Exemplos: Imprimindo os conteúdos de uma ordem
- Os códigos a seguir logam uma linha para cada elemento na ordem:

function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
__________________________________________________________________________________________________
Array.prototype.every()
O método every() testa se todos os elementos do array passam pelo teste implementado pela função 
fornecida.

Sintaxe
arr.every(callback[, thisArg])

Exemplo: Testando tamanho de todos os elementos do vetor
- O exemplo a seguir testa se todos elementos no array são maiores que 10.

function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
__________________________________________________________________________________________________
Array.prototype.some()
O método some() testa se ao menos um dos elementos no array passa no teste implementado pela 
função atribuída e retorna um valor true ou false.

Sintaxe
arr.some(callback[, thisArg])

Exemplo: Testando valores de elementos de um array
- O exemplo a seguir testa se algum elemento de um array é maior que 10.

function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
__________________________________________________________________________________________________
Array.prototype.map()
O método map() invoca a função callback passada por argumento para cada elemento do Array e 
devolve um novo Array como resultado.

Sintaxe
arr.map(callback[, thisArg])

Exemplo: Mapeando um array de números para um array de raízes quadradas
- O código a seguir mapeia um array de números e cria um novo array contendo o valor da raiz 
quadrada de cada número do primeiro array.

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots é [1, 2, 3], numbers ainda é [1, 4, 9]
__________________________________________________________________________________________________
Array.prototype.filter()
O método filter() cria um novo array com todos os elementos que passaram no teste implementado 
pela função fornecida.

Sintaxe
var newArray = arr.filter(callback[, thisArg])

Exemplo: Filtrando todos os valores pequenos
- Os exemplos a seguir usam filter() para criar um array filtrado em que todos os elementos com 
valores menores que 10 são removidos.

function isBigEnough(value) {
  return value >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
__________________________________________________________________________________________________
Array.prototype.reduce()
O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, 
resultando num único valor de retorno.

Sintaxe
array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial]))

Exemplo:
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);
// expected output: 10
__________________________________________________________________________________________________
Array.prototype.reduceRight()
O método reduceRight() aplica à uma função um acumulador e cada valor do array (da direita para 
esquerda) é reduzido para um valor único.

Sintaxe
arr.reduceRight(callback[, initialValue])

Exemplo:
[0, 1, 2, 3, 4].reduceRight(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
});
__________________________________________________________________________________________________
Array.prototype.indexOf()
O método indexOf() retorna o primeiro índice em que o elemento pode ser encontrado no array, 
retorna -1 caso o mesmo não esteja presente.

Sintaxe
array.indexOf(elementoDePesquisa, [pontoInicial = 0])

Exemplo: O exemplo seguinte usa indexOf() para localizar valores em um array

var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
__________________________________________________________________________________________________
Array.prototype.lastIndexOf()
O método lastIndexOf() retorna o ultimo índice que um certo elemento pode ser encontrado no array,
ou -1 se o elemento não estiver presente. O array é pesquisado de trás para frente, começando pelo
fromIndex.

Sintaxe
arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])

Exemplo: O seguinte exemplo utiliza lastIndexOf para localizar elementos em um array.

var array = [2, 5, 9, 2];
array.lastIndexOf(2);     // 3
array.lastIndexOf(7);     // -1
array.lastIndexOf(2, 3);  // 3
array.lastIndexOf(2, 2);  // 0
array.lastIndexOf(2, -2); // 0
array.lastIndexOf(2, -1); // 3
__________________________________________________________________________________________________
Array.isArray()
O método Array.isArray() retorna true se um objeto é uma array, e false se não é.

Sintaxe
Array.isArray(obj)

Exemplo:
// todas as chamadas conseguintes retornam true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Pequeno detalhe: Array.prototype por si só é uma array:
Array.isArray(Array.prototype);

// todas as conseguintes retornam false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
__________________________________________________________________________________________________
*/