/*
O desafio dessa semana é criar uma mini library (biblioteca) para
reutilizarmos nossos códigos quando fizermos manipulação de DOM!
Requisitos:
- O nome da lib deve ser "DOM".
- Ela deve ser uma função construtora, que receberá uma string por parâmetro.
Essa string será o nó do DOM a ser selecionado;
- No construtor, você deve atribuir à `this.element` todos os elementos
do DOM selecionados;
- Extenda a lib para ter os métodos `on`, `off` e `get`.
- O método `on` irá adicionar um listener de evento a todos os elementos
selecionados.
- O método `off` irá remover o listener de evento de todos os elementos
selecionados.
- O método `get` deve retornar os elementos.
- O código abaixo deve funcionar corretamente após a lib criada.
Dica: olhe os erros que acontecem no console, e vá resolvendo um a um.
Só passe para o próximo problema quando tiver resolvido o anterior :)
*/
// ?

function DOM(selector) {
  this.element = document.querySelectorAll(selector);
}

DOM.prototype.on = function(eventType, callback) {
  this.element.forEach(function(element) {
    element.addEventListener(eventType, callback);
  });
};

DOM.prototype.off = function(eventType, callback) {
  this.element.forEach(function(element) {
    element.removeEventListener(eventType, callback);
  });
};

DOM.prototype.get = function() {
  return this.element;
};

var elements = new DOM('.example-class');

elements.on('click', function() {
    console.log('Clicou no elemento!');
});

setTimeout(function() {
  elements.off('click');
  console.log('Listener de evento removido.');
}, 5000);

var selectedElements = elements.get();
console.log(selectedElements);
