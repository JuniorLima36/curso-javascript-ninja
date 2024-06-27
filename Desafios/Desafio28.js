/*
  No HTML:
  - Crie um formulário com um input de texto que receberá um CEP e um botão
  de submit;
  - Crie uma estrutura HTML para receber informações de endereço:
  "Logradouro, Bairro, Estado, Cidade e CEP." Essas informações serão
  preenchidas com os dados da requisição feita no JS.
  - Crie uma área que receberá mensagens com o status da requisição:
  "Carregando, sucesso ou erro."
  No JS:
  - O CEP pode ser entrado pelo usuário com qualquer tipo de caractere, mas
  deve ser limpo e enviado somente os números para a requisição abaixo;
  - Ao submeter esse formulário, deve ser feito um request Ajax para a URL:
  "https://viacep.com.br/ws/[CEP]/json/", onde [CEP] será o CEP passado
  no input criado no HTML;
  - Essa requisição trará dados de um CEP em JSON. Preencha campos na tela
  com os dados recebidos.
  - Enquanto os dados são buscados, na área de mensagens de status, deve mostrar
  a mensagem: "Buscando informações para o CEP [CEP]..."
  - Se não houver dados para o CEP entrado, mostrar a mensagem:
  "Não encontramos o endereço para o CEP [CEP]."
  - Se houver endereço para o CEP digitado, mostre a mensagem:
  "Endereço referente ao CEP [CEP]:"
  - Utilize a lib DOM criada anteriormente para facilitar a manipulação e
  adicionar as informações em tela.
*/
function formatCEP(cep) {
  return cep.replace(/\D/g, '');
}

function exibirStatus(mensagem) {
  const statusMessage = document.querySelector('.status');
  statusMessage.textContent = mensagem;
}

function preencherEndereco(data) {
  document.getElementById('logradouro').textContent = data.logradouro || '';
  document.getElementById('bairro').textContent = data.bairro || '';
  document.getElementById('cidade').textContent = data.localidade || '';
  document.getElementById('estado').textContent = data.uf || '';
  document.getElementById('cep').textContent = data.cep || '';
}

document.getElementById('formCEP').addEventListener('submit', function(event) {
  event.preventDefault();

  exibirStatus('');

  const inputCEP = document.getElementById('inputCEP').value;
  const cep = formatCEP(inputCEP);

  if (cep.length !== 8) {
    exibirStatus('O CEP deve conter 8 números.');
    return;
  }

  exibirStatus(`Buscando informações para o CEP ${cep}...`);

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Não foi possível obter os dados do CEP.');
      }
      return response.json();
    })
    .then(data => {
      if (data.erro) {
        exibirStatus(`Não encontramos o endereço para o CEP ${cep}.`);
      } else {
        exibirStatus(`Endereço referente ao CEP ${cep}:`);
        preencherEndereco(data);
      }
    })
    .catch(error => {
      exibirStatus('Ocorreu um erro na busca. Por favor, tente novamente.');
      console.error('Erro na requisição:', error);
    });
});
