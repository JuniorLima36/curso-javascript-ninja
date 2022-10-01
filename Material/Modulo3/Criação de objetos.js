/*
# Criação de Objetos
- Mutaveis
- Manipulados por referencia
_________________________________________________________________________________
- Literais
Exemplo:
var album = {
  title: "Metallica (Black Album)",
  released: 1991,
  showInfo: function() {
    alert("Título do álbum: " + this.title + "Lançado em: " + this.released);
  }
};
_________________________________________________________________________________
- Construtores
Exemplo:
var album = new Object();
album.title = "Metallica (Black Album)";
album.released = 1991;
album.showInfo = function() {
  alert("Título do álbum: " + this.title + "Lançado em: " + this.released);
};
_________________________________________________________________________________
- object.create()
Exemplo:
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
  }
};

const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"
_________________________________________________________________________________
# Operador delete 
O operador de exclusão remove uma propriedade de um objeto. Se o valor da propriedade for um 
objeto e não houver mais referências ao objeto, o objeto mantido por essa propriedade será 
eventualmente liberado automaticamente.

Sintaxe
delete object.property
delete object[property]

Exemplo:
const Employee = {
  firstname: 'John',
  lastname: 'Doe'
};

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined
*/