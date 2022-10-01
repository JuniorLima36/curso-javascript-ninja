/*
# Strict mode
O strict mode faz várias mudanças nas semânticas normais do JavaScript. Primeiro, 
o strict mode elimina alguns erros silenciosos do JavaScript fazendo-os lançar exceções. 
Segundo, o strict mode evita equívocos que dificultam que motores JavaScript realizem 
otimizações: código strict mode pode às vezes ser feito para executar mais rápido que código 
idêntico não-strict mode. Terceiro, strict mode proíbe algumas sintaxes que provavelmente 
serão definidas em versões futuras do ECMAScript.
______________________________________________________________________________________________
# Invocando strict mode
Strict mode se aplica a scripts inteiros ou funções individuais. Ele não se aplica a 
declarações de bloco fechadas em chaves {}; tentar aplicá-lo a tais contextos não faz nada. 
Código eval, código Function, atributos event handlers, strings passadas para setTimeout 
e coisas do tipo são scripts inteiros, e invocar strict mode neles funciona como esperado.

# Strict mode para scripts
Para invocar strict mode para um script inteiro, coloque exatamente a declaração "use strict";
(ou 'use strict';) antes de qualquer outra declaração.

// Sintaxe strict mode para todo o script
"use strict";
var v = "Oi! Eu sou um script strict mode!";
______________________________________________________________________________________________
# Strict mode para funções
Da mesma forma, para invocar strict mode para uma função, coloque exatamente a declaração 
"use strict"; (ou 'use strict';) no corpo da função antes de qualquer outra declaração.

function strict(){
  // Sintaxe strict mode a nível de função
  'use strict';
  function nested() { return "E eu também!"; }
  return "Oi! Eu sou uma função strict mode!  " + nested();
}
function notStrict() { return "Eu não sou strict."; }
______________________________________________________________________________________________
*/