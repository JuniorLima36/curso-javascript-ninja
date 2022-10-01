/*
# this
A palavra-chave this comporta-se um pouco diferente em Javascript se comparado com outras 
linguagens. Também possui algumas diferenças entre o modo estrito e o modo não estrito.

Em muitos casos, o valor this é determinado pela forma como a função é chamada. Ele não pode 
ser assinado durante a execução, e isso pode ser diferente a cada vez que a função é chamada.
ES5 introduziu o método bind para estabelecer o valor this da função, independentemente de 
como ela seja chamada, e ECMAScript 2015 introduziu o arrow functions, cujo this é 
lexicalmente delimitado (o valor this é estabelecido segundo o escopo de execução no qual 
está inserido).

Sintaxe
this

# Contexto global
No contexto de execução global (fora de qualquer função), this refere-se ao objeto global, 
seja em modo estrito ou não.

Exemplo:
console.log(this.document === document); // true

// Em navegadores web, o objeto window é também o objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
___________________________________________________________________
# Contexto de função
Dentro de uma função, o valor de this depende de como a função é chamada.

Chamada simples
Como o código a seguir não está no modo estrito, o valor de this não é definido pela chamada.
Por padrão, this será o objeto global que no navegador é o window.

function f1(){
  return this;
}

// No navegador
f1() === window; // true

Em modo estrito, o valor de this permanece seja qual for o definido ao entrar no contexto de 
execução, assim, no caso a seguir, this por padrão será indefinido (undefined):

function f2(){
  "use strict"; // assume modo estrito
  return this;
}

f2() === undefined; // true

Portanto, em modo estrito, se this não for definido durante o contexto da execução, ele 
permanecerá indefinido (undefined).
*/