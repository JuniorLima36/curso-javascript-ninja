/*
# Objeto String - Propriedade.
# String.length
A propriedade length de um objeto String contém o comprimento da string. length é uma 
propriedade read-only (somente leitura) de instâncias de string.

Sintaxe
str.length

Exemplo:
var x = 'Mozilla';
var empty = '';

console.log('Mozilla possui ' + x.length + ' unidades de código de comprimento');
/ * "Mozilla possui 7 unidades de código de comprimento" * /

console.log('A string vazia possui um comprimento de ' + empty.length);
/ * "A string vazia possui um comprimento de 0" * /
______________________________________________________________________________________________
# Objeto String - Metodo.
# String.prototype.charAt()
O método charAt() retorna o caractere especificado a partir de uma string.

Sintaxe
str.charAt(index)

Exemplo:
- Mostrando caracteres em diferente localizações em uma string
O exemplo a seguir mostra caracteres em diferentes locais em uma string "Brave new world":

var anyString = 'Brave new world';

console.log("A letra no índice 0 é '" + anyString.charAt(0)   + "'");
console.log("A letra no índice 1 é '" + anyString.charAt(1)   + "'");
console.log("A letra no índice 2 é '" + anyString.charAt(2)   + "'");
console.log("A letra no índice 3 é '" + anyString.charAt(3)   + "'");
console.log("A letra no índice 4 é '" + anyString.charAt(4)   + "'");
console.log("A letra no índice 99 é '" + anyString.charAt(999) + "'");

As linhas acima retornam o seguinte:

A letra no índice 0 é 'B'
A letra no índice 1 é 'r'
A letra no índice 2 é 'a'
A letra no índice 3 é 'v'
A letra no índice 4 é 'e'
A letra no índice 99 é ''
______________________________________________________________________________________________
# String.prototype.concat()
A função concat() combina o texto de duas ou mais strings e retorna uma nova string. As 
alterações de texto de uma string não afetam a outra string.

Se o argumento passado não for do tipo string, o mesmo será convertido em uma string antes de
ser concatenado.

Sintaxe
str.concat(string2 [, ...stringN])

Exemplo:
Usando concat()
O exemplo a seguir concatena uma string à outra string originando uma terceira string.

var hello = 'Olá, ';
console.log(hello.concat('Kevin', ' tenha um bom dia.'));

// retorna 'Olá, Kevin tenha um bom dia.'
______________________________________________________________________________________________
# String.prototype.indexOf()
O método indexOf() retorna o índice da primeira ocorrência do valor fornecido em searchValue,
começando a busca a partir de fromIndex. Retorna -1 se o valor não for encontrado.

Sintaxe
str.indexOf(searchValue[, fromIndex])

Exemplo:
Usando indexOf()
O exemplo a seguir usa indexOf() para localizar valores dentro da string "Brave new world".

var anyString = "Brave new world";

console.log("O índice do primeiro w partindo do começo é " + anyString.indexOf("w"));
// Exibe 8

console.log("O índice de 'new' partindo do começo é " + anyString.indexOf("new"));
// Exibe 6
______________________________________________________________________________________________
# String.prototype.lastIndexOf()
O método lastIndexOf() retorna o índice da última ocorrência do valor especificado encontrado
na String. Quando fromIndex é especificado, a pesquisa é realizada de trás para frente. 
Retorna -1 se o valor não for encontrado.

Sintaxe
str.lastIndexOf(searchValue[, fromIndex])

- Sensível a maiúsculas e minúsculas
O método lastIndexOf() é sensível a letras maiúsculas e minúsculas. Por exemplo, a seguinte 
expressão retorna -1:

'Blue Whale, Killer Whale'.lastIndexOf('blue'); // retorna -1

Exemplo:
Usando lastIndexOf()
O seguinte exemplo usa lastIndexOf() para localizar valores nas string "Brave new world".

var anyString = 'Brave new world';

console.log('O índice do primeiro w a partir do final é ' + anyString.lastIndexOf('w'));
// retorna 10

console.log('O índice de "new" a partir do final é ' + anyString.lastIndexOf('new'));
// retorna 6
______________________________________________________________________________________________
# String.prototype.replace()
O método replace() retorna uma nova string com algumas ou todas as correspondências de um 
padrão substituídas por um determinado caractere (ou caracteres). O padrão pode ser uma string
ou uma RegExp, e a substituição pode ser uma string ou uma função a ser chamada para cada 
correspondência. Se o padrão for uma string, apenas a primeira ocorrência será substituída.

A string original não é modificada.

Sintaxe
str.replace(regexp|substr, newSubStr|function)

Exemplo:
- Definindo uma expressão regular com replace()
No exemplo a seguir foi definida uma expressão regular com a flag "i" (que ignora diferenças 
entre maiúsculas e minúsculas) no método replace().

var str = 'Twas the night before Xmas...';
var newstr = str.replace(/xmas/i, 'Christmas');

console.log(newstr);
// retorna "Twas the night before Christmas..."
______________________________________________________________________________________________
# String.prototype.slice()
O método slice() extrai uma parte de uma string e a retorna como uma nova string, sem 
modificar a string original.

Sintaxe
str.slice(startIndex[, endIndex])

Exemplo: Usando slice() para criar uma nova string
O exemplo a seguir usa slice() para criar uma nova string.

var str1 = 'A manhã está sobre nós', // o tamanho de str1 é 22
    str2 = str1.slice(3, 10),
    str3 = str1.slice(2, -2),
    str4 = str1.slice(13),
    str5 = str1.slice(22);
console.log(str2); // retorna 'anhã es'
console.log(str3); // retorna 'manhã está sobre n'
console.log(str4); // retorna 'sobre nós'
console.log(str5); // retorna <empty string>
______________________________________________________________________________________________
# String.prototype.split()
O método split() divide uma String em uma lista ordenada de substrings, coloca essas 
substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o 
padrão é fornecido como o primeiro parâmetro na chamada do método.

Sintaxe
str.split([separator[, limit]])

Usando split()
Quando a string está vazia, o split() irá retornar um array contendo uma string vazia ao 
invés de um array vazio. Se a string e o separador forem ambos strings vazias, um array vazio
será retornado.

const myString = ''
const splits = myString.split()

console.log(splits);

// retorna [""]
______________________________________________________________________________________________
# String.prototype.substring()
O método substring() retorna a parte da string entre os índices inicial e final, ou até o 
final da string.

Sintaxe
str.substring(indexStart[, indexEnd])

Exemplo:
Usando substring()
O seguinte exemplo usa substring() para mostrar caracteres da palavra 'Mozilla':

var anyString = "Mozilla";

// Mostra "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));

// Mostra "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));
______________________________________________________________________________________________
# String.prototype.toLowerCase()
O método toLowerCase() retorna o valor da string original convertido para minúsculo. 
toLowerCase() não altera o valor da string original.

Sintaxe
str.toLowerCase()

Exemplo:
Usando toLowerCase()
console.log('ALFABETO'.toLowerCase()); // 'alfabeto'
______________________________________________________________________________________________
# String.prototype.toUpperCase()
O método toUpperCase() retorna o valor da string convertido para letras maiúsculas. 
toUpperCase() não altera o valor da string original.

Sintaxe
str.toUpperCase()

Exemplo:
Uso básico
console.log('alfabeto'.toUpperCase()); // 'ALFABETO'
______________________________________________________________________________________________
*/