/*
Vamos estruturar um pequeno app utilizando módulos.
Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
seguinte forma:
- No início do arquivo, deverá ter as informações da sua empresa - nome e
telefone (já vamos ver como isso vai ser feito)
- Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
um formulário para cadastro do carro, com os seguintes campos:
  - Imagem do carro (deverá aceitar uma URL)
  - Marca / Modelo
  - Ano
  - Placa
  - Cor
  - e um botão "Cadastrar"
Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
aparecer no final da tabela.
Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
Dê um nome para a empresa e um telefone fictício, preechendo essas informações
no arquivo company.json que já está criado.
Essas informações devem ser adicionadas no HTML via Ajax.
Parte técnica:
Separe o nosso módulo de DOM criado nas últimas aulas em
um arquivo DOM.js.
E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
que será nomeado de "app".
*/

// db
{
  "nome": "Carros Inc.",
  "telefone": "(00) 1234-5678"
}

// DOM
export default function DOM(selector) {
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

// script.js
import DOM from './DOM.js';

async function loadCompanyInfo() {
    try {
        const response = await fetch('company.json');
        const companyData = await response.json();
        document.getElementById('company-name').textContent = companyData.nome;
        document.getElementById('company-phone').textContent = companyData.telefone;
    } catch (error) {
        console.error('Erro ao carregar informações da empresa:', error);
    }
}

function cadastrarCarro(event) {
    event.preventDefault();

    const form = event.target;
    const carImage = form.elements['car-image'].value;
    const carBrandModel = form.elements['car-brand-model'].value;
    const carYear = form.elements['car-year'].value;
    const carLicensePlate = form.elements['car-license-plate'].value;
    const carColor = form.elements['car-color'].value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><img src="${carImage}" alt="Imagem do Carro"></td>
        <td>${carBrandModel}</td>
        <td>${carYear}</td>
        <td>${carLicensePlate}</td>
        <td>${carColor}</td>
    `;

    document.getElementById('car-list').appendChild(newRow);
    form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
    loadCompanyInfo();
    const carForm = document.getElementById('car-form');
    carForm.addEventListener('submit', cadastrarCarro);
});
