/*
# while
A declaração while cria um laço que executa uma rotina especifica enquanto a condição de 
teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.

Sintaxe
while (condição) {
  rotina
}

Exemplo:
O seguinte laço while itera enquanto n é menor que três.

var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}

Cada iteração, o laço incrementa n e soma à x. Portanto, x e n assumem os seguintes valores:
 ° Depois da primeira passagem: n = 1 e x = 1
 ° Depois da segunda passagem: n = 2 e x = 3
 ° Depois da terceira passagem: n = 3 e x = 6
Depois de completar a terceira passagem, a condição n < 3 não é mais verdadeira, então o 
laço termina.
*/