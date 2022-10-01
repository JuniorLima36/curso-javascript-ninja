/*
# Math
Math é um objeto embutido que tem propriedades e métodos para constantes e funções 
matemáticas. Não é um objeto de função.

Descrição
Ao contrário de outros objetos globais, Math não é um construtor. Todas as propriedades e 
métodos de Math são estáticos. Você pode referenciar a constante PI como Math.PI e você pode
chamar a função de seno como Math.sin(x), onde x é o argumento do método. Constantes são 
definidas com a precisão total de números reais em JavaScript.
______________________________________________________________________________________________
# Propriedades
Math.PI
A propriedade Math.PI representa a proporção entre circunferência de um círculo com o seu 
diâmetro, aproximadamente 3.14159:

Exemplo:
Usando Math.PI
A seguinte função usa Math.PI para calcular a circunferência de um círculo com um dado raio.

function calcularCircunferencia(raio) {
  return 2 * Math.PI * raio;
}

calcularCircunferencia(1);  // 6.283185307179586
______________________________________________________________________________________________
# Metodos
Math.abs()
A função Math.abs(x) retorna o valor absoluto de um número "x"

Sintaxe
var abs = Math.abs(x);

Comportamento de Math.abs()
Passando um string não-numérica ou variável indefinida/vazia retorna NaN. Passando null retorna 0.

Math.abs('-1');     // 1
Math.abs(-2);       // 2
Math.abs(null);     // 0
Math.abs('');       // 0
Math.abs([]);       // 0
Math.abs([2]);      // 2
Math.abs([1,2]);    // NaN
Math.abs({});       // NaN
Math.abs('string'); // NaN
Math.abs();         // NaN
______________________________________________________________________________________________
Math.ceil()
A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".

Sintaxe
Math.ceil(x)

Usando Math.ceil()
O exemplo a seguir mostra um exemplo de uso de Math.ceil().

Math.ceil(.95);    // 1
Math.ceil(4);      // 4
Math.ceil(7.004);  // 8
Math.ceil(-0.95);  // -0
Math.ceil(-4);     // -4
Math.ceil(-7.004); // -7
______________________________________________________________________________________________
Math.floor()
A função Math.floor(x) retorna o menor número inteiro dentre o número "x".

Sintaxe
Math.floor(x)

Exemplo: Usando Math.floor
Math.floor( 45.95); //  45
Math.floor(-45.95); // -46
______________________________________________________________________________________________
Math.round()
A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.

Sintaxe
 Math.round(x)

Exemplo: Uso de Math.round
// Retorna o valor 20
x = Math.round(20.49);

// Retorna o valor 21
x = Math.round(20.5);

// Retorna o valor -20
x = Math.round(-20.5);

// Retorna o valor -21
x = Math.round(-20.51);

// Retorna 1 (!)
// Note o erro de arredondamento por causa da inacurácia de aritmética de ponto flutuante
// Compare o exemplo abaixo com Math.round(1.005, -2)
x = Math.round(1.005*100)/100;
______________________________________________________________________________________________
Math.sqrt()
A função Math.sqrt() retorna a raiz quadrada de um número (x).

Sintaxe
Math.sqrt(x)

Exemplo: Usando Math.sqrt
Math.sqrt(9); // 3
Math.sqrt(2); // 1.414213562373095

Math.sqrt(1);  // 1
Math.sqrt(0);  // 0
Math.sqrt(-1); // NaN
______________________________________________________________________________________________
Math.cbrt()
A função Math.cbrt() retorna a raiz cúbica de um número

Sintaxe
Math.cbrt(x)

Exemplo:
Utilizando Math.cbrt()
Math.cbrt(NaN); // NaN
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(Infinity); // Infinity
Math.cbrt(null); // 0
Math.cbrt(2);  // 1.2599210498948734
______________________________________________________________________________________________
Math.max()
A função Math.max() retorna o maior de um ou mais números.

Sintaxe
Math.max([valor1[,valor2, ...]])

Usando Math.max
Math.max(10, 20);   //  20
Math.max(-10, -20); // -10
Math.max(-10, 20);  //  20
______________________________________________________________________________________________
Math.min()
A função Math.min() retorna o menor valor passado como parâmetro, ou NaN se o parâmetro não 
é ou não pode ser convertido para um número.

Syntax
Math.min([valor1[, valor2[, ...]]])

Exemplo:
Usando Math.min()
Este encontra o min de x e y e atribui a z :

var x = 10, y = -20;
var z = Math.min(x, y);
______________________________________________________________________________________________
Math.random()
A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0
(inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um 
intervalo desejado. A implementação seleciona uma semente para o algoritmo de geração de 
números aleatórios; esta semente não pode ser escolhida ou reatribuída.

Sintaxe
Math.random()

-Gerando um número aleatório entre 0 (inclusivo) e 1 (exclusivo)
function getRandom() {
  return Math.random();
}
*/