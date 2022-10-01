/*
# Arguments object
O objeto arguments é como um objeto Array correspondendo aos argumentos passados para uma 
função.

Sintaxe
arguments

Descrição
O objeto arguments é uma variável local disponível dentro de todas as funções. Você pode 
referenciar os argumentos de uma função dentro da função usando o objeto arguments. Esse 
objeto contém um registro para cada argumento fornecido para a função, com o índice do 
primeiro registro começando em 0. Por exemplo, se são passados três argumentos para uma 
função, você pode referenciá-los como a seguir:

arguments[0]
arguments[1]
arguments[2]

Os argumentos também podem ser definidos:

arguments[1] = 'novo valor';

O objeto argumentos não é um Array. É similar a um Array, mas não possui as propriedades de 
Array, exceto length. Por exemplo, ele não possui o método pop. Entretanto, ele pode ser 
convertido em um Array real:

var args = Array.prototype.slice.call(arguments);
var args = [].slice.call(arguments);

// ES2015
var args = Array.from(arguments);

Você pode usar o objeto arguments se você chamar uma função com mais argumentos do que ele é 
formalmente declarado para aceitar. Esta técnica é útil para funções que podem ser passada em
um número de variáveis de argumentos. Você pode usar arguments.length para determinar o 
número de argumentos passado para a função, e então processar cada argumento usando o objeto
arguments. Para determinar o número de parâmetros declarados na signiture da função,
use a propriedade Function.length.

Exemplo:
function func1(a, b, c) {
  console.log(arguments[0]);
  // expected output: 1

  console.log(arguments[1]);
  // expected output: 2

  console.log(arguments[2]);
  // expected output: 3
}

func1(1, 2, 3);
*/