/*
# Operador vírgula
O operador vírgula (,) simplesmente avalia ambos de seus operandos e retorna o valor do 
segundo. Este operador é utilizado primariamente dentro de um laço for para permitir que 
multiplas variáveis sejam atualizadas cada vez através do laço.

Por exemplo, se a é uma matriz bidimensional com 10 elementos em um lado, o código a seguir
utiliza o operador vírgula para incrementar duas variáveis de uma só vez. O código imprime 
os valores dos elementos diagonais da matriz:

Exemplo:
for (var i = 0, j = 9; i <= 9; i++, j--)
  console.log("a[" + i + "][" + j + "]= " + a[i][j]);

*/