/*
Agora vamos criar a funcionalidade de "remover" um carro. Adicione uma nova
coluna na tabela, com um botão de remover.
Ao clicar nesse botão, a linha da tabela deve ser removida.
Faça um pull request no seu repositório, na branch `challenge-31`, e cole
o link do pull request no `console.log` abaixo.
Faça um pull request, também com a branch `challenge-31`, mas no repositório
do curso, para colar o link do pull request do seu repo.
*/

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

function adicionarCarro(carro) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><img src="${carro.image}" alt="Imagem do Carro"></td>
        <td>${carro.brandModel}</td>
        <td>${carro.year}</td>
        <td>${carro.licensePlate}</td>
        <td>${carro.color}</td>
        <td><button class="btn-remove">Remover</button></td>
    `;
    
    document.getElementById('car-list').appendChild(newRow);

    const removeButton = newRow.querySelector('.btn-remove');
    removeButton.addEventListener('click', function() {
        newRow.remove();
    });
}

function cadastrarCarro(event) {
    event.preventDefault();

    const form = event.target;
    const carImage = form.elements['car-image'].value;
    const carBrandModel = form.elements['car-brand-model'].value;
    const carYear = form.elements['car-year'].value;
    const carLicensePlate = form.elements['car-license-plate'].value;
    const carColor = form.elements['car-color'].value;

    const novoCarro = {
        image: carImage,
        brandModel: carBrandModel,
        year: carYear,
        licensePlate: carLicensePlate,
        color: carColor
    };

    adicionarCarro(novoCarro);
    form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
    loadCompanyInfo();
    const carForm = document.getElementById('car-form');
    carForm.addEventListener('submit', cadastrarCarro);
});