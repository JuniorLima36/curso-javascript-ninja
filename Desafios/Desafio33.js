/*
Hora de finalizar nosso projeto!
Já temos o cadastro funcionando e persistindo em memória;
Já estamos deletando o carro da tabela (no frontend).
Mas se você perceber, se você recarregar a tela, o carro ainda vai estar lá.
Agora você precisa fazer com que, ao clicar no botão de deletar, o carro seja
removido da tabela e também seja deletado do servidor.
Para fazer isso, você precisa enviar o verbo HTTP "DELETE" para a mesma URL
que você faz o POST para cadastrar o carro:
`http://localhost:3000/car`, só que, ao invés de enviar todas as informações
do carro, como você faz para cadastrar, você deve enviar somente a placa
do carro.
Fazendo isso, ao recarregar a tela, a tabela deve mostrar os carros atualizados.
A lógica do servidor que está criada nesso diretório desse desafio é o mesmo
do desafio anterior, com a diferença que, nesse desafio, nós temos a
implementação da regra para a deleção do carro =)
A regra é a mesma das anteriores: crie uma branch `challenge-33` no seu
repositório do GitHub, e envie o pull request para lá.
Depois, envie um pull request no repositório do curso, colocando no console.log
abaixo a URL do pull request no seu repositório.
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
            const deleteResponse = await fetch(`${serverUrl}/car/${carro.plate}`, {
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