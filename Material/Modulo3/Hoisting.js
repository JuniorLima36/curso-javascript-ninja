/*
# Hoisting
JavaScript Hoisting refere-se ao processo pelo qual o intérprete parece mover a declaração de
funções, variáveis ou classes para o topo de seu escopo, antes da execução do código.

O içamento permite que as funções sejam usadas com segurança em código antes de serem 
declaradas.

Declarações variáveis e de classe também são içadas, por isso também podem ser referenciadas 
antes de serem declaradas. Observe que isso pode levar a erros inesperados, e geralmente não 
é recomendado.

Exemplos:
catName("Tiger");

function catName(name) {
  console.log(`My cat's name is ${name}`);
}
/ *
The result of the code above is: "My cat's name is Tiger"
* /
_____________________________________________________________________
Sem içar você teria que escrever o mesmo código como este:

function catName(name) {
  console.log(`My cat's name is ${name}`);
}

catName("Tiger");
/ *
The result of the code above is the same: "My cat's name is Tiger"
* /
_____________________________________________________________________
*/