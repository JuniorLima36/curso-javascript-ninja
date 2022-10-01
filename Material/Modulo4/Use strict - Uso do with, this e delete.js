/*
# With
Pro: A declaração with pode ajudar o tamanho do arquivo por reduzir a necessidade de repetir 
a referência a um objeto longo sem penalidade na perfomance. A cadeia de escopo mudada por um
'with' não é computacionalmente cara. O uso de 'with' irá aliviar o interpretador de tratar 
repetidamente as referências. Note que, no entando, isso em muitos casos pode ser substituído
usando uma variável temporária para armazenar a referência do objeto desejado.

Contra: A declaração with força que o objeto especifícado a ser procurado primeiro por 
pesquisas de nome. Assim sendo, todos os indentificadores que não são membros do objeto 
espeficícado vão ser encontrados mais lentamente em um bloco 'with'. Onde a perfomance é 
importande, 'with' deve ser usado apenas para englobar blocos de código que acessam membros 
de um objeto especifíco.

# Usando with
A seguinte declaração with irá especificar que o objeto Math é o objeto padrão. As seguintes 
declarações seguindo a declaração with irão referir a propriedade PI e aos métodos cos e sin,
sem especificar um objeto. JavaScript assume o objeto Math para essas referências.

var a, x, y;
var r = 10;

with (Math) {
  a = PI * r * r;
  x = r * cos(PI);
  y = r * sin(PI / 2);
}
__________________________________________________________________________________________________
# "use strict" nao permite usar o with
Primeiro, strict mode proíbe with. O problema com with é que qualquer nome dentro do block 
pode mapear tanto para uma propriedade do objeto passado quanto para uma variável no escopo 
envolvente (ou até global), em tempo de execução: é impossível saber qual de antemão. Strict 
mode torna with um erro de sintaxe, então não há chance de um nome em um with referir-re a 
uma localização deconhecida em tempo de execução:

"use strict";
var x = 17;
with (obj) // !!! erro de sintaxe
{
  // Se isto não fosse strict mode, isso seria var x ou obj.x?
  // No geral, é impossível saber sem executar o código, então
  // o nome não pode ser otimizado.
  x;
}
__________________________________________________________________________________________________
#"Use strict" this === undefined
Primeiro, o valor passado como this para uma função em strict mode não é forçado a ser um 
objeto (entenda-se "encaixotamento"). Para uma função normal, this é sempre um objeto: seja o
objeto fornecido se chamado com um this cujo valor é um objeto; o valor, encaixotado, se 
chamado com um this Boolean, string ou número; ou o objeto global se chamado com um 
this undefined ou null. Use call, apply, ou bind para especificar um determinado this. O 
encaixotamento automático não apenas é um custo de desempenho, como também expor o objeto 
global em navegadores é um risco de segurança, porque o objeto global oferece acesso a 
funcionalidades que ambientes JavaScript "seguros" devem restringir. Assim, para uma função 
strict mode, o this especificado não é encaixotado em um objeto, e se não especificado, this 
será undefined:

"use strict";
function fun() { return this; }
console.assert(fun() === undefined);
console.assert(fun.call(2) === 2);
console.assert(fun.apply(null) === null);
console.assert(fun.call(undefined) === undefined);
console.assert(fun.bind(true)() === true);

Isso significa, além de outras coisas, que em navegadores não é mais possíveis referenciar o 
objeto window através de this dentro de uma função strict mode.
______________________________________________________________________________________________
# "use strict" delete 
modo rigoroso faz com que tentativas de deletar propriedades não-deletáveis lancem exceções 
(onde anteriormente a tentativa simplesmente não faria efeito):

"use strict";
delete Object.prototype; // lança TypeError

fora do modo restrito, delete nao faz nada e é avaliado como false
*/