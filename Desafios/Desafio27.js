/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.
Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.
Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false
Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

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

DOM.prototype.forEach = function(callback) {
  this.element.forEach(callback);
};

DOM.prototype.map = function(callback) {
  return Array.prototype.map.call(this.element, callback);
};

DOM.prototype.filter = function(callback) {
  return Array.prototype.filter.call(this.element, callback);
};

DOM.prototype.reduce = function(callback, initialValue) {
  return Array.prototype.reduce.call(this.element, callback, initialValue);
};

DOM.prototype.reduceRight = function(callback, initialValue) {
  return Array.prototype.reduceRight.call(this.element, callback, initialValue);
};

DOM.prototype.every = function(callback) {
  return Array.prototype.every.call(this.element, callback);
};

DOM.prototype.some = function(callback) {
  return Array.prototype.some.call(this.element, callback);
};

DOM.isArray = function(value) {
  return Array.isArray(value);
};

DOM.isObject = function(value) {
  return value !== null && typeof value === 'object';
};

DOM.isFunction = function(value) {
  return typeof value === 'function';
};

DOM.isNumber = function(value) {
  return typeof value === 'number' && !isNaN(value);
};

DOM.isString = function(value) {
  return typeof value === 'string';
};

DOM.isBoolean = function(value) {
  return typeof value === 'boolean';
};

DOM.isNull = function(value) {
  return value === null || value === undefined;
};

var elements = new DOM('.example-class');

elements.forEach(function(element) {
  console.log(element); 
});

var texts = elements.map(function(element) {
  return element.textContent;
});
console.log(texts); 

var filtered = elements.filter(function(element) {
  return element.classList.contains('filter-class');
});
console.log(filtered); 

var totalHeight = elements.reduce(function(acc, element) {
  return acc + element.clientHeight;
}, 0);
console.log(totalHeight); 

console.log(DOM.isArray([1, 2, 3])); 
console.log(DOM.isFunction(function() {})); 
console.log(DOM.isNumber('numero')); 
console.log(DOM.isNull(null)); 