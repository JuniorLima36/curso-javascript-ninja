/*
# DOM - Percorrer elementos
# Propriedades
Element.children
A propriedade de crianças somente leitura retorna uma coleção HTML ao vivo que contém todos 
os elementos infantis do elemento sobre o qual foi chamado.

Element.children inclui apenas nódulos de elementos. Para obter todos os nós infantis, 
incluindo nós não-elementos como nós de texto e comentários, use Node.childNodes.

Valor
Uma coleção HTMLCollection que é uma coleção ao vivo e ordenada dos elementos DOM que são 
crianças de . Você pode acessar os nós individuais da coleção usando o método item() na 
coleção ou usando notação estilo array JavaScript. node

Se o elemento não tem nenhum elemento criança, então é uma lista vazia com um de. 
children length 0

Exemplos
const myElement = document.getElementById('foo');
for (const child of myElement.children) {
  console.log(child.tagName);
}
______________________________________________________________________________________________
Element.firstElementChild
A propriedade Element.firstElementChild somente para leitura retorna o elemento primeiro 
filho de um elemento, ou se não há elementos infantis. null

Element.firstElementChild inclui apenas nódulos de elementos. Para obter todos os nós 
infantis, incluindo nós não-elementos como nós de texto e comentários, use Node.firstChild.

Valor
Um objeto Element, ou .null

Exemplos
<ul id="list">
  <li>First (1)</li>
  <li>Second (2)</li>
  <li>Third (3)</li>
</ul>

<script>
  const list = document.getElementById("list");
  console.log(list.firstElementChild.textContent);
  // logs "First (1)"
</script>
______________________________________________________________________________________________
Element.lastElementChild
A propriedade Element.lastElementChild somente para leitura retorna o último elemento filho 
de um elemento, ou se não há elementos infantis. null

Element.lastElementChild inclui apenas nódulos de elementos. Para obter todos os nós infantis,
incluindo nós não-elementos como nós de texto e comentários, use Node.lastChild.

Valor
Um objeto Element, ou .null

Exemplos
<ul id="list">
  <li>First (1)</li>
  <li>Second (2)</li>
  <li>Third (3)</li>
</ul>

<script>
  const list = document.getElementById("list");
  console.log(list.lastElementChild.textContent);
  // logs "Third (3)"
</script>
______________________________________________________________________________________________
Element.nextElementSibling
A propriedade Element.nextElementSibling reenvolté-apenas retorna o elemento imediatamente 
após o especificado na lista de filhos de seus pais ou se o elemento especificado é o último 
da lista. null

Valor
Um objeto Element, ou .null

Exemplos
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>

<script>
  let el = document.getElementById("div-01").nextElementSibling;
  console.log("Siblings of div-01:");
  while (el) {
    console.log(el.nodeName);
    el = el.nextElementSibling;
  }
</script>

Este exemplo é o seguinte para o console quando ele carrega:

Siblings of div-01:
DIV
SCRIPT
______________________________________________________________________________________________
Element.anteriorElementSibling
A propriedade Element.previousElementSibling retorna o Elemento imediatamente antes do especificado na lista de filhos de seus pais ou se o elemento especificado é o primeiro da lista. null

Valor
Um objeto Element, ou .null

Exemplos
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>
<li>This is a list item</li>
<li>This is another list item</li>
<div id="div-03">Here is div-03</div>

<script>
  let el = document.getElementById("div-03").previousElementSibling;
  document.write("<p>Siblings of div-03</p><ol>");
  while (el) {
    document.write("<li>" + el.nodeName + "</li>");
    el = el.previousElementSibling;
  }
  document.write("</ol>");
</script>

Este exemplo é o seguinte na página quando ele é carregado:

Siblings of div-03

   1. LI
   2. LI
   3. DIV
   4. DIV
______________________________________________________________________________________________
Element.childElementCount
A propriedade Element.childElementCount somente para leitura retorna o número de elementos 
infantis deste elemento.

Exemplos
let sidebar = document.getElementById('sidebar');
if (sidebar.childElementCount > 0) {
  // Do something
}
______________________________________________________________________________________________
# Metodos
Element.hasAtribute()
O método Element.hasAttribute() retorna um valor booleano indicando se o elemento 
especificado tem o atributo especificado ou não.

Sintaxe
hasAttribute(name)

Parâmetros
name
é uma string representando o nome do atributo.

Valor de retorno
Um booleano.

Exemplos
const foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
    // do something
}
______________________________________________________________________________________________
Element.hasAtributes()
O método hasAttributes() da interface Elemento retorna um valor booleano indicando se o 
elemento atual tem algum atributo ou não.

Sintaxe
hasAttributes()

Parâmetros
Nenhum.

Valor de retorno
Um booleano.

Exemplos
let foo = document.getElementById('foo');
if (foo.hasAttributes()) {
  // Do something with 'foo.attributes'
}
______________________________________________________________________________________________
Document.createTextNode()
Cria um novo TextNode. Este método pode ser usado para escapar de caracteres HTML.

Sintaxe
createTextNode(data)

Exemplos
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>createTextNode example</title>
    <script>
      function addTextNode(text) {
        const newtext = document.createTextNode(text);
        const p1 = document.getElementById("p1");

        p1.appendChild(newtext);
      }
    </script>
  </head>

  <body>
    <button onclick="addTextNode('YES! ');">YES!</button>
    <button onclick="addTextNode('NO! ');">NO!</button>
    <button onclick="addTextNode('WE CAN! ');">WE CAN!</button>

    <hr />

    <p id="p1">First line of paragraph.</p>
  </body>
</html>
______________________________________________________________________________________________
Document.createElement()
Em um documento HTML, o método document.createElement() cria o elemento HTML especificado 
pelo tagName ou um HTMLUnknownElement se tagName não for reconhecido.

Sintaxe
createElement(tagName)
createElement(tagName, options)

Exemplo:
document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}
______________________________________________________________________________________________
# Dom - percorrer elementos - Atributos
#Propriedade
Element.id
A propriedade de identificação da interface Elemento representa o identificador do elemento, 
refletindo o atributo global de identificação.

Se o valor não for a sequência vazia, deve ser único em um documento.id

O é frequentemente usado com getElementById() para recuperar um elemento específico. Outro 
caso comum é usar o ID de um elemento como seletor ao estilizar o documento com CSS. id
______________________________________________________________________________________________
Element.className
A propriedade className da interface Elemento recebe e define o valor do atributo de classe 
do elemento especificado.

Valor
Uma variável de string representando as classes classificadas ou separadas do espaço do 
elemento atual.

Exemplos
const el = document.getElementById('item');
el.className = el.className === 'active' ? 'inactive' : 'active';
______________________________________________________________________________________________
#Metodo
Element.getAtribute()
O método getAttribute() da interface Elemento retorna o valor de um atributo especificado no 
elemento.

Se o atributo dado não existir, o valor devolvido será ou (a sequência vazia); consulte 
atributos não existentes para obter detalhes. null""

Sintaxe
getAttribute(attributeName)

Exemplos
<!-- example div in an HTML DOC -->
<div id="div1">Hi Champ!</div>

// in a console
const div1 = document.getElementById('div1');
//=> <div id="div1">Hi Champ!</div>

const exampleAttr= div1.getAttribute('id');
//=> "div1"

const align = div1.getAttribute('align')
//=> null
______________________________________________________________________________________________
Element.setAttribute()
Define o valor de um atributo no elemento especificado. Se o atributo já existir, o valor 
será atualizado; caso contrário, um novo atributo é adicionado com o nome e o valor 
especificados.

Para obter o valor atual de um atributo, use getAttribute(); para remover um atributo, chame 
de removendoAtitribute().

Sintaxe
setAttribute(name, value)

Exemplo
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");
______________________________________________________________________________________________
Element.innerHTML
A propriedade Element.innerHTML define ou obtém a sintaxe HTML ou XML descrevendo os 
elementos descendentes.

Sintaxe
var content = element.innerHTML;

No retorno, content contém o código HTML serializado descrevendo todos os descendentes dos 
elementos.

element.innerHTML = content;

Exemplo:
<html>
<head></head>
<body>

<div id="txt">
  <script     id="txt0"> x=0 </script>
    <noembed    id="txt1"> 1   </noembed>
    <noframes   id="txt2"> 2   </noframes>
    <noscript   id="txt3"> 3   </noscript>
    <div        id="txt4"> 4   </div>
    <div>
      <noscript id="txt5"> 5   </noscript>
    </div>
    <span       id="txt6"> 6   </span>
  </div>

  <div id="innerHTMLtxt"></div>
<div id="textContenttxt"><div>

<script>
for (i = 0; i < 7; i++) {
    x = "txt" + i;
    document.getElementById(x).firstChild.nodeValue = '&<>';
}

document.getElementById("innerHTMLtxt").textContent = document.getElementById("txt").innerHTML
document.getElementById("textContenttxt").textContent = document.getElementById("txt").textContent
</script>

<body>
</html>
______________________________________________________________________________________________
Element.insertAdjacentHTML()
insertAdjacentHTML analisa o texto especificado como HTML ou XML e insere os nós que 
resultam na árvore DOM em uma posição especificada. Não reanalisa o elemento que está a ser 
utilizado e, portanto, não corrompe os elementos existentes dentro do elemento. Esta, e 
evitando a etapa extra de serialização, torna-o muito mais rápido do que a manipulação 
direta innerHTML.

Sintaxe
element.insertAdjacentHTML(posição, texto);

Posição é a posição em relação ao elemento, e deve ser um dos seguintes tipos:

'beforebegin'
Antes do elemento.

'afterbegin'
Dentro do elemento, antes de seu primeiro filho (childNode).

'beforeend'
Dentro do elemento, após seu último filho (childNode) .

'afterend'
Após o elemento.

texto é a string a ser analisada como HTML ou XML e inserido na árvore.

Visualização da posição de nomes
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->

Exemplo
// Estrutura inicial:
// <div id="one">one</div>

var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

// Neste ponto, a nova estrutura é:
// <div id="one">one</div>
// <div id="two">two</div>
______________________________________________________________________________________________

*/