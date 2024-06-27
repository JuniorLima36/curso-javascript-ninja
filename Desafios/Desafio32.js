/*
Já temos as funcionalidades de adicionar e remover um carro. Agora, vamos persistir esses dados, 
salvando-os temporariamente na memória de um servidor.
Nesse diretório do `challenge-32` tem uma pasta `server`. É um servidor simples, em NodeJS, para 
que possamos utilizar para salvar as informações dos nossos carros.
Para utilizá-lo, você vai precisar fazer o seguinte:
- Via terminal, acesse o diretório `server`;
- execute o comando `npm install` para instalar as dependências;
- execute `node app.js` para iniciar o servidor.
Ele irá ser executado na porta 3000, que pode ser acessada via browser no endereço: 
`http://localhost:3000`
O seu projeto não precisa estar rodando junto com o servidor. Ele pode estar em outra porta.
As mudanças que você irá precisar fazer no seu projeto são:
- Para listar os carros cadastrados ao carregar o seu projeto, faça um request GET no endereço
`http://localhost:3000/car`
- Para cadastrar um novo carro, faça um POST no endereço `http://localhost:3000/car`, enviando
os seguintes campos:
  - `image` com a URL da imagem do carro;
  - `brandModel`, com a marca e modelo do carro;
  - `year`, com o ano do carro;
  - `plate`, com a placa do carro;
  - `color`, com a cor do carro.
Após enviar o POST, faça um GET no `server` e atualize a tabela para mostrar o novo carro cadastrado.
Crie uma branch `challenge-32` no seu projeto, envie um pull request lá e cole nesse arquivo a URL
do pull request.
*/

import DOM from './DOM.js';

const serverUrl = 'http://localhost:3000';

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

async function loadCarsFromServer() {
    try {
        const response = await fetch(`${serverUrl}/car`);
        if (!response.ok) {
            throw new Error('Erro ao carregar carros do servidor.');
        }
        const cars = await response.json();
        cars.forEach(car => adicionarCarro(car));
    } catch (error) {
        console.error('Erro ao carregar carros do servidor:', error);
    }
}

function adicionarCarro(carro) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><img src="${carro.image}" alt="Imagem do Carro"></td>
        <td>${carro.brandModel}</td>
        <td>${carro.year}</td>
        <td>${carro.plate}</td>
        <td>${carro.color}</td>
        <td><button class="btn-remove">Remover</button></td>
    `;

    document.getElementById('car-list').appendChild(newRow);

    const removeButton = newRow.querySelector('.btn-remove');
    removeButton.addEventListener('click', async function() {
        try {
            const deleteResponse = await fetch(`${serverUrl}/car/${carro.id}`, {
                method: 'DELETE'
            });
            if (!deleteResponse.ok) {
                throw new Error('Erro ao remover carro do servidor.');
            }
            newRow.remove();
        } catch (error) {
            console.error('Erro ao remover carro:', error);
        }
    });
}

async function cadastrarCarro(event) {
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
        plate: carLicensePlate,
        color: carColor
    };

    try {
        const response = await fetch(`${serverUrl}/car`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(novoCarro)
        });
        if (!response.ok) {
            throw new Error('Erro ao cadastrar carro no servidor.');
        }
        const carroSalvo = await response.json();
        adicionarCarro(carroSalvo);
    } catch (error) {
        console.error('Erro ao cadastrar carro:', error);
    }

    form.reset();
}

document.addEventListener('DOMContentLoaded', function() {
    loadCompanyInfo();
    loadCarsFromServer(); 
    const carForm = document.getElementById('car-form');
    carForm.addEventListener('submit', cadastrarCarro);
});