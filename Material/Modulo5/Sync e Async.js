/*
# JavaScript síncrono
Para entendermos o que é o asynchronous JavaScript, nós primeiro temos que ter certeza que 
entedemos o que é o synchronous JavaScript. Essa seção revê um pouco das informações que nós 
vimos no artigo anterior.

Muitas das funcionalidades que nós vimos em áreas anteriores são síncronas — você executa um 
código, e o reultado é retornado assim que o navegador puder. Vamos ver um exemplo simples:

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  alert('Você clicou em mim!');

  let pElem = document.createElement('p');
  pElem.textContent = 'Este é um novo parágrafo adicionado';
  document.body.appendChild(pElem);
});

Neste bloco, as linhas são executadas uma após a outra:

1. Nós damos referência à um elemento <button> que já está disponível na DOM.
2. Nós adicionamos um evento de click, e quando ele for clicado ele fará o seguinte:
i. Mostrar uma mensagem no alert().
ii. Uma vez que o alert for dispensado, nós criamos um elemento <p>.
iii. Depois nós o preenchemos com um texto.
iv. E finalmente, o adicionamos no body.

Enquanro cada operação é processada, nada mais pode acontecer — a renderização é pausada. 
Isso acontece porque o JavaScript opera em uma única thread (JavaScript é single threaded). 
Apenas uma coisa pode acontecer por vez, em uma única thread principal, e tudo é bloqueado 
até que a operação seja concluída.
______________________________________________________________________________________________
# Asynchronous JavaScript
Por razões esclarecidas anteriormente (e.g. relativas ao blocking), muitas funcionalidades de
APIs da Web agora usam código assíncrono na execução, especialmente aquelas que acessam ou 
buscam algum tipo de recurso de um dispositivo externo, como pegar um arquivo da rede, 
acessar um banco de dados e retornar dados dele, acessar uma stream de uma web cam, ou 
transmitir uma tela para um dispositivo VR.

Por que é tão difícil trabalhar com isso usando códigos síncronos? Vamos dar uma olhada em um
exemplo rápido. Quando você pega uma imagem de um servidor, você não pode retornar o 
resultado imediatamente. Isso significa que o pseudocódigo a seguir não poderia funcionar:

let resposta = fetch('myImage.png');
let blob = resposta.blob();
// Mostra sua imagem na UI

Isso acontece por que você não sabe quanto tempo a imagem levará para ser baixada, então 
quando você executar a segunda linha, ela vai resultar em um erro (provalvelmente sempre) 
porque a resposta não estará disponível ainda. Você precisa que o seu código espere até que a
resposta seja retornada antes de fazer algo com ela.
*/