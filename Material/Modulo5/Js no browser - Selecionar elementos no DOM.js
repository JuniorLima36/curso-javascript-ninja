/*
# Window.alert
O método Window.alert() mostra uma caixa de diálogo de aviso com o conteúdo opcionalmente 
especificado e um botão OK.

Sintaxe
window.alert(message);

Exemplo:
window.alert("Hello world!");
_____________________________________________________________________________________________
# Window.prompt()
exibe uma caixa de diálogo com uma mensagem opcional solicitando ao usuário a entrada de 
algum texto.

Sintaxe
resultado = window.prompt(texto, valor);

Exemplo:
var signo = prompt("Qual é o seu signo?");

if (signo.toLowerCase() == "escorpião") {
  alert("Legal! Eu sou de Escorpião também!");
}

// há muitas formas de se usar o recurso prompt
var sign = window.prompt(); // abrir uma janela de promtpt em branco
var sign = prompt();       //  abrir uma janela de promtpt em branco
var sign = window.prompt('Você está se sentindo com sorte'); // abrir uma janela com o texto "Você está se sentindo com sorte"
var sign = window.prompt('Você está se sentindo com sorte', 'certamente'); // abrir uma janela com o texto "Você está se sentindo com sorte" e com o valor padrão "certamente"
_____________________________________________________________________________________________
# Window.confirm()
O método Window.confirm() mostra uma janela modal com uma mensagem opcional e dois botões, 
OK e Cancelar.

Sintaxe
resultado = window.confirm(mensagem);

Exemplo
if (window.confirm("Você realmente quer sair?")) {
  window.open("sair.html", "Obrigado pela visita!");
}
_____________________________________________________________________________________________
# Window.document
Retorna a referência para o documento contido na janela.

Sintaxe
doc = window.document

Exemplo:
<!DOCTYPE html>
<html>
<head>
   <title>Hello, World!</title>
</head>
<body>

<script type="text/javascript">
   var doc = window.document;
   alert( doc.title);    // alerts: Hello, World!
</script>

</body>
_____________________________________________________________________________________________
# Document.getElementsByClassName()
Retorna um vetor de objetos com todos os elementos filhos que possuem o nome da classe dada. 
Quando invocado no objeto document, o documento é examinado por completo, incluindo o nó raiz.
Você também pode invocar getElementsByClassName() em qualquer elemento; isso retornaria 
somente elementos que são descendentes do nó raiz especificado com o nome da classe.

Sintaxe
var elementos = document.getElementsByClassName(nomes); // ou:
var elementos = rootElement.getElementsByClassName(nomes);

Exemplo:
Retorna todos os elementos que possuem a classe 'teste'

document.getElementsByClassName('teste');
_____________________________________________________________________________________________
# document.getElementById()
Retorna a referência do elemento através do seu ID.

Sintaxe
var elemento = document.getElementById(id);

Exemplo:
<!DOCTYPE html>
<html>
<head>
  <title>Exemplo getElementById</title>
  <script>
  function mudarCor(novaCor) {
    var elemento = document.getElementById("para1");
    elemento.style.color = novaCor;
  }
  </script>
</head>
<body>
  <p id="para1">Algum texto de exemplo</p>
  <button onclick="mudarCor('blue');">Azul</button>
  <button onclick="mudarCor('red');">Vermelho</button>
</body>
</html>
_____________________________________________________________________________________________
# Document.getElementsByTagName()
O método getElementsByTagName da interface Document retorna uma coleta HTML de elementos com 
o nome da tag dado.

O documento completo é pesquisado, incluindo o nó raiz. O retornado é ao vivo, o que 
significa que ele se atualiza automaticamente para ficar em sincronia com a árvore DOM sem 
ter que ligar novamente. HTMLCollectiondocument.getElementsByTagName()

Sintaxe
getElementsByTagName(name)

Exemplo:
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>getElementsByTagName example</title>
  <script>
    function getAllParaElems() {
      var allParas = document.getElementsByTagName('p');
      var num = allParas.length;
      alert('There are ' + num + ' paragraph in this document');
    }

    function div1ParaElems() {
      var div1 = document.getElementById('div1');
      var div1Paras = div1.getElementsByTagName('p');
      var num = div1Paras.length;
      alert('There are ' + num + ' paragraph in #div1');
    }

    function div2ParaElems() {
      var div2 = document.getElementById('div2');
      var div2Paras = div2.getElementsByTagName('p');
      var num = div2Paras.length;
      alert('There are ' + num + ' paragraph in #div2');
    }
  </script>
</head>
<body style="border: solid green 3px">
  <p>Some outer text</p>
  <p>Some outer text</p>

  <div id="div1" style="border: solid blue 3px">
    <p>Some div1 text</p>
    <p>Some div1 text</p>
    <p>Some div1 text</p>

    <div id="div2" style="border: solid red 3px">
      <p>Some div2 text</p>
      <p>Some div2 text</p>
    </div>
  </div>

  <p>Some outer text</p>
  <p>Some outer text</p>

  <button onclick="getAllParaElems();">
    show all p elements in document</button><br />

  <button onclick="div1ParaElems();">
    show all p elements in div1 element</button><br />

  <button onclick="div2ParaElems();">
    show all p elements in div2 element</button>

</body>
</html>
_____________________________________________________________________________________________
# Documento.getElementsByName()
O método getElementsByName() do objeto Documento retorna uma coleção de elementos nodeList 
com um determinado atributo no documento. name

Sintaxe
getElementsByName(name)

Exemplo:
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Example: using document.getElementsByName</title>
  </head>
  <body>
    <input type="hidden" name="up" />
    <input type="hidden" name="down" />
  </body>
</html>
_____________________________________________________________________________________________
# Document.querySelectorAll()
Retorna uma lista de elementos presentes no documento (usando ordenação em profundidade, 
pré-ordenada e transversal dos nós do documento) que coincidam com o grupo de seletores 
especificado. O objeto retornado é uma NodeList.

Sintaxe
elementList = document.querySelectorAll(selectors);

Exemplo:
Esse exemplo retorna uma lista de todos os elementos div presentes no document que contenham 
as classes "note" ou "alert":

var matches = document.querySelectorAll("div.note, div.alert");
_____________________________________________________________________________________________
*/