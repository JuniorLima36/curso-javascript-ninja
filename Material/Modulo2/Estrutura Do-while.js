/*
# do...while
a instrução cria um loop que executa uma instrução especificada até que a condição de teste
avalie como falsa. A condição é avaliada após a execução da declaração, resultando na 
execução da declaração especificada pelo menos uma vez.

Sintaxe
do
  statement
while (condition)

Exemplo:
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// expected result: "12345"
*/