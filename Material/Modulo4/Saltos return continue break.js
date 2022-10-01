/*
# return
A declaração return finaliza a execução de uma função e especifica os valores que devem ser 
retonados para onde a função foi chamada.

Sintaxe
return [[expression]];

Quando uma declaração return é usada em um corpo de função, a execução dessa função é parada.
Se especificado, um dado valor é retornado à quem chamou a função. Se a expressão for omitida,
undefined será retornado. Todas as declarações return a seguir param a execução da função:

Exemplo:
return;
return true;
return false;
return x;
return x + y / 3;
______________________________________________________________________________________________
# break
O comando break encerra o loop atual, switch, ou o loop que foi informado no label e 
transfere o controle da execução do programa para o comando seguinte.

Sintaxe
break [label];

O comando break inclui um label opcional que permite ao programa encerrar a execução da 
estrutura que possui o nome informado na label. O comando break deve estar dentro dessa 
estrutura informada no label. A estrutura que possui o nome informada na label pode ser 
qualquer comando block; não é necessário que seja precedida por um loop.

Exemplo:
A função a seguir possui um comando break que encerra o loop while quando a variável i vale 3,
e então retorna o valor 3 * x.

function testaBreak(x) {
   var i = 0;

   while (i < 6) {
      if (i == 3) {
         break;
      }
      i += 1;
   }
   return i * x;
}______________________________________________________________________________________________
# continue
A palavra chave continue termina a atual iteração do laço em que ele se encontra ou de um 
laço rotulado, e continua a execução deste laço com a próxima iteração.

Sintaxe
continue [rótulo];

Diferentemente do break, o continue não termina a execução do laço completamente, 
em vez disso ele:

° Volta à condição, em um laço do tipo while.
° Volta à expressão, atualizando-a, em um laço do tipo for.

O continue pode incluir, opcionalmente, um rótulo que premite ao programa pular para a 
próxima iteração de um laço rotulado em vez de pular o loop em que ele se encontra. Neste 
caso, o continue necessita estar dentro deste laço rotulado.

Exemplo:
- Usando continue com while
O exemplo abaixo mostra um laço while que tem um continue que será executado quando o valor 
de i for 3. Assim, n terá os valores 1, 3, 7, e 12.

var i = 0;
var n = 0;

while (i < 5) {
  i++;

  if (i === 3) {
    continue;
  }

  n += i;
}
*/