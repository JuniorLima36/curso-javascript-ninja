/*
# Element.addEventListener()
addEventListener() registra uma única espera de evento em um único alvo. O alvo do evento (en-US) pode ser um único elemento (en-US) em um documento, o documento (en-US) em si, uma janela (en-US), ou um XMLHttpRequest.

Para registrar mais de uma espera de evento como alvo, chame addEventListener() para o mesmo alvo mas com diferentes tipos de evento ou captura de parâmetros.

Sintaxe
alvo.addEventListener(type,listener[, options]);
alvo.addEventListener(type,listener[, useCapture, wantUntrusted 
    Non-standard
]); // Gecko/Mozilla only

Exemplo
<!DOCTYPE html>
<html>
<head>
<title>Exemplo de Evento DOM</title>

<style>
#t { border: 1px solid red }
#t1 { background-color: pink; }
</style>

<script>
// Função para mudar o conteúdo de t2
function modifyText() {
  var t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = "three";
}

// Função para adicionar uma espera de evento em t
function load() {
  var el = document.getElementById("t");
  el.addEventListener("click", modifyText, false);
}

document.addEventListener("DOMContentLoaded", load, false);
</script>

</head>
<body>

<table id="t">
   <tr><td id="t1">one</td></tr>
   <tr><td id="t2">two</td></tr>
</table>

</body>
</html>
______________________________________________________________________________________________
# Element: click event
Um elemento recebe um evento de clique quando um botão de dispositivo apontando (como o botão
principal do mouse) é pressionado e liberado enquanto o ponteiro está localizado dentro do 
elemento.

Se o botão for pressionado em um elemento e o ponteiro for movido para fora do elemento antes
que o botão seja liberado, o evento será disparado sobre o elemento ancestral mais específico
que continha ambos os elementos.

click incêndios depois que os eventos mousedown e mouseup dispararam, nessa ordem.

Sintaxe
Use o nome do evento em métodos como addEventListener()ou defina uma propriedade de 
manipulador de eventos.

addEventListener('click', (event) => {});

onclick = (event) => { };

Exemplo:
Este exemplo exibe o número de cliques consecutivos em um <button>.

HTML
<button>Click</button>
Copiar para área de transferência
JavaScript
const button = document.querySelector('button');

button.addEventListener('click', (event) => {
  button.textContent = `Click count: ${event.detail}`;
});
______________________________________________________________________________________________

*/