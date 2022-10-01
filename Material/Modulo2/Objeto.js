/*
# Visão geral de objetos
Objetos em JavaScript, assim como em muitas outras linguagens de programação, podem ser 
comparados com objetos na vida real. O conceito de objetos em JavaScript pode ser entendido 
com objetos tangíveis da vida real.

Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos. Compare-o com
uma xícara, por exemplo. Uma xícara é um objeto, com propriedades. Uma xícara tem uma cor, 
uma forma, peso, um material de composição, etc. Da mesma forma, objetos em JavaScript podem 
ter propriedades, que definem suas características.

# Objeto, noções básicas
Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente 
consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos 
quando estão dentro de objetos). Vamos trabalhar com um exemplo para entender como eles são.

Sintaxe
var pessoa = {};

Exemplo:
var pessoa = {
  nome: ['Bob', 'Smith'],
  idade: 32,
  sexo: 'masculino',
  interesses: ['música', 'esquiar'],
  bio: function() {
    alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
  },
  saudacao: function() {
    alert('Oi! Eu sou ' + this.nome[0] + '.');
  }
};

# Objetos e propriedades
Um objeto em JavaScript tem propriedades associadas a ele. Uma propriedade de um objeto pode
ser explicada como uma variável que é ligada ao objeto. Propriedades de objetos são 
basicamente as mesmas que variáveis normais em JavaScript, exceto pelo fato de estarem 
ligadas a objetos. As propriedades de um objeto definem as características do objeto. Você 
acessa as propriedades de um objeto com uma simples notação de ponto:

Sintaxe
nomeDoObjeto.nomeDaPropriedade

Como as variáveis em JavaScript, o nome do objeto (que poderia ser uma variável normal) e um
nome de propriedade diferem em maiúsculas/minúsculas (por exemplo, cor e Cor são 
propriedades diferentes). Você pode definir uma propriedade atribuindo um valor a ela. Por 
exemplo, vamos criar um objeto chamado meuCarro e dar a ele propriedades chamadas 
fabricacao, modelo, e ano, conforme mostrado a seguir:

var meuCarro = new Object();
meuCarro.fabricacao = "Ford";
meuCarro.modelo = "Mustang";
meuCarro.ano = 1969;

Propriedades não definidas de um objeto são undefined (e não null).

meuCarro.semPropriedade; //undefined

Propriedades de objetos em JavaScript podem também ser acessadas ou alteradas usando-se 
notação de colchetes. Objetos são às vezes chamados de arrays associativos, uma vez que cada 
propriedade é associada com um valor de string que pode ser usado para acessá-la. Então, por 
exemplo, você poderia acessar as propriedades do objeto meuCarro como se segue:

meuCarro["fabricacao"] = "Ford";
meuCarro["modelo"] = "Mustang";
meuCarro["ano"] = 1969;

# Inicializador de Objeto
Objetos podem ser inicializados utilizando new Object(), Object.create(), ou a notação 
literal. Um inicializador de objetos é uma lista de zero ou mais pares de propriedade: valor,
separados por vírgula e fechado por um par de chaves ({}).

Sintaxe
var o = {};
var o = { a: "foo", b: 42, c: {} };

var a = "foo", b = 42, c = {};
var o = { a: a, b: b, c: c };

var o = {
  propriedade: function ([parâmetros]) {},
  get propriedade() {},
  set propriedade(valor) {},
};
*/