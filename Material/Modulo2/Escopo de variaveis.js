/*
# Escopo de Variaveis
O escopo é o contexto atual de execução em que valores e expressões são "visíveis" ou podem
ser referenciados. Se uma variável ou expressão não estiver no escopo atual, ela não estará
disponível para uso. Os escopos também podem ser colocados em camadas em uma hierarquia, 
para que os escopos dos filhos tenham acesso aos escopos dos pais, mas não vice-versa.

- JavaScript tem os seguintes tipos de escopos:

- Escopo global: O escopo padrão para todos os códigos em execução no modo script.
- Escopo do módulo: O escopo para o código em execução no modo módulo.
- Escopo da função: O escopo criado com uma função.

Além disso, variáveis declaradas com let ou const podem pertencer a um escopo adicional:

- Escopo do bloco: O escopo criado com um par de chaves (um bloco).

Uma função cria um escopo, de modo que (por exemplo) uma variável definida exclusivamente 
dentro da função não pode ser acessada de fora da função ou dentro de outras funções. Por 
exemplo, o seguinte é inválido:
_________________________________________________________________________________
Exemplo Errado:                                                                  |
function exampleFunction() {                                                     |
  const x = "declared inside function"; // x can only be used in exampleFunction |
  console.log("Inside function");                                                |
  console.log(x);                                                                |
}                                                                                |
console.log(x); // Causes error                                                  |
_________________________________________________________________________________

No entanto, o código a seguir é válido devido à variável ser declarada fora da função, 
tornando-a global:
_________________________________________
Exemplo Certo:                           |
const x = "declared outside function";   |
                                         |
exampleFunction();                       |
                                         |
function exampleFunction() {             |
  console.log("Inside function");        |
  console.log(x);                        |
}                                        |
console.log("Outside function");         |
console.log(x);                          |
_________________________________________

Bloqueia apenas escopo e declarações, mas não declarações. let,const,var
_____________________________________________________
Certo:                                               |
{                                                    |
  var x = 1;                                         |
}                                                    |
console.log(x); // 1                                 |
_____________________________________________________
Errado:                                              |
{                                                    |
  const x = 1;                                       |
}                                                    |
console.log(x); // ReferenceError: x is not defined  |
_____________________________________________________
*/