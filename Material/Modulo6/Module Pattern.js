/*
# O que é Module pattern
O Module pattern é um dos padrões importantes em JavaScript. É um padrão de design comumente
usado que é usado para envolver um conjunto de variáveis e funções em um único escopo.

° É usado para definir objetos e especificar as variáveis e as funções que podem ser 
acessadas de fora do escopo da função.
° Expõemos certas propriedades e funcionamos como público e também podemos restringir o 
escopo de propriedades e funções dentro do próprio objeto, tornando-as privadas.
° Isso significa que essas variáveis não podem ser acessadas fora do escopo da função.
° Podemos obter dados escondendo uma abstração usando esse padrão

Vamos procurar a simples implementação do Padrão de Módulo apenas com campos públicos:

função EmployeeDe detalhes() {
  nome var: "Mayank";
  var idade = 30;
  designação var = "Desenvolvedor"
  
  retornar {
    nome: nome,
    idade: idade,
    designação: designação
  }
}

var newEmpreyee = EmployeeDetails()

var userName = novoEmpregado. nome;
var userAge = newEmployee. idade;
var userDesignation = newEmployee. designação;

O código contém a função que define uma determinada variável e retorna essas variáveis de 
volta da função. Os valores que são devolvidos na chamada de função são salvos como um 
objeto literal na variável . Estamos especificando o par de valor-chave que precisa ser 
devolvido. Esta é uma das implementações simples do Padrão do Módulo. Podemos acessar as 
propriedades "nome", "idade", "designação" do objeto devolvido. No código acima, podemos 
acessar todas as propriedades definidas pelo objeto, uma vez que são expostas a partir da 
chamada de função.newEmployee

Agora expandiremos o código acima para definir algumas variáveis que não estão acessíveis 
fora do escopo da Função do Módulo.

function EmployeeDetails() {
  var name: "Mayank";
  var age = 30;
  var designation = "Developer",
  var salary = 10000;


  
  return {
    name: name,
    age: age,
    designation: designation
  }
}

var newEmployee = EmployeeDetails()

// This will result in "undefined" value
var userName = newEmployee.salary;
_____________________________________________________________________________________________
# Ocultação de dados com o padrão do módulo

O código acima cria outra variável "salário", essa variável não está exposta fora da função
"EmployeeDetails", tornando-a indisponível para o Objeto "novo Funcionário". Esse "salário" 
agora pode ser visto como uma variável privada que só pode ser acessada a partir da função.
Não está disponível lá fora.

Agora vamos ver como podemos usar o valor do salário sem precisar expô-lo publicamente:

function EmployeeDetails() {
  var name: "Mayank";
  var age = 30;
  var designation = "Developer",
  var salary = 10000;

  var calculateBonus = function(amount) {
    salary = salary + amount;
  }

  return {
    name: name,
    age: age,
    designation: designation,
    calculateBonus: calculateBonus
  }
}

var newEmployee = EmployeeDetails()

var userName = newEmployee.calculateBonus(1000);

A função acima utiliza a variável privada "salário" para calcular o valor do "bônus" que 
precisa ser fornecido ao empregado. Assim, embora o "salário" não possa ser acessado 
diretamente, ele ainda permanece no escopo para que outros componentes possam usar esse 
valor para outros cálculos. Embora a variável seja "privada" ao escopo das funções, mesmo 
após a execução da função, a variável "salário" é mantida no escopo para que outras funções 
possam usar esses valores para proporcionar mais funcionalidade. newEmployeeEmployeeDetails

O salário aqui é uma espécie de variável privada que pode ser acessada por outras funções 
que são expostas publicamente da função. Pode ser equivalente a uma variável oculta privada 
que é acessível por sua função de membro. Assim, fornecendo a ideia de ocultação de dados.

Use o padrão do módulo para os seguintes benefícios:

1.Manutenibilidade: Os padrões do módulo permitem uma melhor manutenção, uma vez que todo o 
código relacionado pode ser encapsulado dentro de um único bloco lógico. Esses blocos 
logicamente independentes são relativamente mais fáceis de atualizar.

2.Reutilização: Nós, unidade única de código, podemos ser reutilizados em toda a aplicação. 
A funcionalidade incluída como módulo pode ser reutilizada e não precisamos definir as 
mesmas funções em vários pontos.
*/