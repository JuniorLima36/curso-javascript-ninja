/*
# DOM - Percorrer elementos
# Node Propriedades
Node.parentNode
é uma propriedade DOM somente leitura que retorna o nó (node) parente de um Node referenciado
na árvore DOM. É extremamente aconselhável que você conheça a estrutura DOM para um melhor 
estudo e aprendizado.

Sintaxe
parentNode = node.parentNode

Exemplo
// Exemplo de como obter um elemento pai
parente = node.parentNode; // Retorna o elemento pai

// Obtém o primeiro <li> de uma lista
var li = document.getElementsById('li-first');
// A partir do <li> obtido, obtém o element <ul>
var ul = li.parentNode;

// Estrutura com parágrafos dentro de uma div
var p = document.getElementsByTagName('p');
var div = p[0].parentNode;

if (node.parentNode) {
  // remove um node da árvore (estrutura) DOM, a menos que
  // ele já não exista não estrutura
  node.parentNode.removeChild(node);
}
______________________________________________________________________________________________
Node.childNodes
A propriedade somente leitura Node.childNodes retorna uma coleção viva de nós filhos de um 
dado elemento.

Sintaxe
var listaNos = noReferencia.childNodes;

Exemplo
// parg é uma referência de objeto a um elemento <p>

if (parg.hasChildNodes()) {
  // Primeiramente verificamos se o objeto não está vazio, se o objeto tem nós filhos
  var filhos= parg.childNodes;

  for (var i = 0; i < filhos.length; i++) {
    // fazer algo com cada filho em filhos[i]
    // NOTE: A lista é viva - adicionar ou remover filhos altera a lista
  }
}
______________________________________________________________________________________________
Node.firstChild
Node.firstChild é uma propriedade do tipo somente leitura que retorna o node (nó) do primeiro
elemento filho de uma árvore DOM ou null no caso do elemento não ter filhos (children).

Sintaxe
var childNode = node.firstChild;

Exemplo
Este exemplo demonstra o uso do firstChild e como os espaços em branco "whitespace" de um 
node (nó) podem interferir.

<p id="para-01">
  <span>First span</span>
</p>

<script type="text/javascript">
  var p01 = document.getElementById('para-01');
  console.log(p01.firstChild.nodeName);
</script>
______________________________________________________________________________________________
Node.lastChild
é uma propriedade do tipo somente leitura (read-only) que retorna o último elemento filho 
(node) de uma estrutura DOM. Se seu parentNode for um Element, ele retornará um Element node,
um text node, ou um comment node. Retornará null se o elemento de referência não tiver 
elementos filhos child. É extremamente recomendável que você conheça a estrutura DOM para um 
melhor aprendizado e entendimento.

Sintaxe
var last_child = element.lastChild

Exemplo
// Obtém um elemento <ul>
var ul = document.getElementById('lista');

// Obtém o último <li> pertencente a estrutura <ul> obtida
var li_last = ul.lastChild;
______________________________________________________________________________________________
Node.nextSibling
Retorna o nó seguinte ao especificado dentro do lista de filhos do seu pai(childNodes), ou 
null se o nó especificado for o último nó da lista.

Sintaxe
proximoNo = no.nextSibling

Exemplo:
<div id="div-01">Aqui esta a div-01</div>
<div id="div-02">Aqui esta a div-02</div>

<script type="text/javascript">
var el = document.getElementById('div-01').nextSibling;

document.write('<p>Nós irmãos de div-01</p><ol>');

while (el) {
  document.write('<li>' + el.nodeName + '</li>');
  el = el.nextSibling;
}

document.write('</ol>');
</script>

/ **************************************************
     O seguinte texto será escrito na página quando ela carregar:

     Nós irmãos de div-01

      1. #text
      2. DIV
      3. #text
      4. SCRIPT
      5. P
      6. OL
************************************************** /
______________________________________________________________________________________________
Node.previousSibling
Retorna o nó que precede o nó especificado na lista de childNodes do nó pai, retorna null se 
o nó especificado é o primeiro desta lista.

Sintaxe
previousNode = node.previousSibling;

Exemplo
// <a><b1 id="b1"/><b2 id="b2"/></a>

alert(document.getElementById("b1").previousSibling); // null
alert(document.getElementById("b2").previousSibling.id); // "b1"
______________________________________________________________________________________________
Node.nodeType
A propriedade nodeType somente leitura de uma interface Node é um inteiro que identifica qual
é o nó. Distingue diferentes tipos de nódulos uns dos outros, como elementos, texto e 
comentários.

- Valor
Um inteiro que especifica o tipo do nó. Os valores possíveis são:

Node.ELEMENT_NODE (1)
Um nó Elemento como <p> ou <div>.

Node.ATTRIBUTE_NODE (2)
Um atributo de um elemento.

Node.TEXT_NODE (3)
O texto real dentro de um Elemento ou Attr.

Node.CDATA_SECTION_NODE(4)
Um CDATASection, como <!CDATA[[ … ]]>

Node.PROCESSING_INSTRUCTION_NODE (7)
Uma instrução de processamento de um documento XML, tais como .<?xml-stylesheet … ?>

Node.COMMENT_NODE (8)
Um nó de comentário, como .<!-- … -->

Node.DOCUMENT_NODE (9)
Um nó documental.

Node.DOCUMENT_TYPE_NODE (10)
Um nó DocumentType, tais como .<!DOCTYPE html>

Node.DOCUMENT_FRAGMENT_NODE (11)
Um nó DocumentFragment.

Exemplo:
- Diferentes tipos de nódulos
document.nodeType === Node.DOCUMENT_NODE; // true
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true

document.createDocumentFragment().nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true

const p = document.createElement("p");
p.textContent = "Once upon a time…";

p.nodeType === Node.ELEMENT_NODE; // true
p.firstChild.nodeType === Node.TEXT_NODE; // true

- Comentários
Este exemplo verifica se o primeiro nó dentro do elemento documento é um comentário e exibe 
uma mensagem se não.

const node = document.documentElement.firstChild;
if (node.nodeType !== Node.COMMENT_NODE) {
  console.warn("You should comment your code!");
}
______________________________________________________________________________________________
Node.nodeValue
A propriedade nodeValue da interface Node retorna ou define o valor do nó atual.

- Valor
Uma sequência contendo o valor do nó atual, se houver. Para o documento em si, retorna . Para
texto, comentário e acenos CDATA, retorna o conteúdo do nó. Para os atribudos, o valor do 
atributo é devolvido. nodeValuenullnodeValue

A tabela a seguir mostra os valores de retorno para diferentes tipos de nódulos.
 _______________________ ___________________________________
| Nodo	                | Valor do nodeValue                |          
| CDATASection	        | Conteúdo da seção CDATA           |     
| Comment	              | Conteúdo do comentário            |
| Document	            | null                              |
| DocumentFragment	    | null                              |
| DocumentType	        | null                              |
| Element	              | null                              |
| NamedNodeMap	        | null                              |
| ProcessingInstruction	| Conteúdo inteiro excluindo o alvo |
| Text	                | Conteúdo do nó de texto           |

Exemplo
<div id="d1">Hello world</div>
<!-- Example of comment -->
<output id="result">Not calculated yet.</output>

e o seguinte script:

let node = document.querySelector("body").firstChild;
let result = "<br/>Node names are:<br/>";
while (node) {
  result += `Value of ${node.nodeName}: ${node.nodeValue}<br/>`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerHTML = result;
______________________________________________________________________________________________
Node.nodeName
A propriedade node Name somente leitura do Node retorna o nome do nó atual como uma sequência.

- Valor
Uma corda. Os valores para os diferentes tipos de nós são:

Attr
O valor de Attr.name, esse é o nome qualificado do atributo.

CDATASection
A corda."#cdata-section"

Comment
A corda."#comment"

Document
A corda."#document"

DocumentFragment
A corda."#document-fragment"

DocumentType
O valor da DocumentType.name

Element
O valor do Element.tagName, que é o nome maiústo da tag elemento se um elemento HTML, ou a 
tag de elemento minúscula se um elemento XML (como um elemento SVG ou MATHML).

ProcessingInstruction
O valor do ProcessamentoInstruction.target

Text
A corda."#text"

Exemplo:
Este exemplo exibe os nomes dos nódulos de vários nódulos

This is some HTML:
<div id="d1">Hello world</div>
<!-- Example of comment -->
Text <span>Text</span> Text<br />
<svg height="20" width="20">
  <circle cx="10" cy="10" r="5" stroke="black" stroke-width="1" fill="red" />
</svg>
<hr />
<output id="result">Not calculated yet.</output>

e o seguinte script:

let node = document.querySelector("body").firstChild;
let result = "Node names are:<br/>";
while (node) {
  result += `${node.nodeName}<br/>`;
  node = node.nextSibling;
}

const output = document.getElementById("result");
output.innerHTML = result;
______________________________________________________________________________________________
# Metodos 
Node.appendChild
Adiciona um nó ao final da lista de filhos de um nó pai especificado. Se o nó já existir no 
documento, ele é removido de seu nó pai atual antes de ser adicionado ao novo pai.

Sintaxe
var filho = elemento.appendChild(filho);

° elemento é o elemento (en-US) pai.
° filho é o nó a ser adicionado como filho de elemento. Também é devolvido.

Descrição
O método appendChild devolve uma referência ao nó adicionado.

Exemplo
// Cria um novo elemento de parágrafo e adiciona-o ao final do documento
var p = document.createElement("p");
document.body.appendChild(p);
______________________________________________________________________________________________
Node.insertBefore
O método **Node.insertBefore() **insere um nó antes do nó de referência como um filho de um 
nó pai especificado. Se o filho especificado for uma referência a um nó existente no documento, 
insertBefore() o moverá de sua posição atual para a nova posição (não há necessidade de 
remover o nó de seu nó pai antes de anexá-lo a outro nó).

Isso significa que um nó não pode estar em dois pontos do documento simultaneamente. Portanto,
se o nó já tiver um pai, o nó será removido pela primeira vez e inserido na nova posição. O 
Node.cloneNode() pode ser usado para fazer uma cópia do nó antes de anexá-lo ao novo pai. 
Note que as cópias feitas com cloneNode() não serão automaticamente mantidas em sincronia.

Se o nó de referência for null, o nó especificado será incluído no final da lista de filhos 
do nó pai especificado.

Se o filho especificado for um DocumentFragment, todo o conteúdo do DocumentFragment será 
movido para a lista de filhos do nó pai especificado.

Sintaxe
var elementoInserido = elementoPai.insertBefore(novoElemento, elementoDeReferencia);

Exemplo
<div id="elementoPai">
  <span id="elementoFilho">foo bar</span>
</div>

<script>
// Cria um novo elemento <span> vazio
var sp1 = document.createElement("span");

// Guarda a referência do elemento atraś do qual nos queremos inserir o novo elemento
var sp2 = document.getElementById("elementoFilho");
// Guarda a referência do elemento pai
var divPai = sp2.parentNode;

// Insere o novo elemento no DOM antes de sp2
divPai.insertBefore(sp1, sp2);
</script>
______________________________________________________________________________________________
Node.cloneNode()
O método Node.cloneNode() duplica um elemento node (nó) da estrutura de um documento DOM. Ele
retorna um clone do elemento para o qual foi invocado.

Sintaxe
var dupNode = node.cloneNode(deep);

Exemplo
<div id="paragrafos">
    <p>Texto parágrafo</p>
</div>

//Obtém o elemento div
var div_p = document.getElementById("paragrafos");

//Obtém o primeiro filho do elemento div
var p = div_p.firstChild;

//Clona o elemento, no caso, um parágrafo
var p_clone = p.cloneNode(true);

//Adiciona o clone do elemento <p> ao elemento <div>
div_p.appendChild(p_clone);
______________________________________________________________________________________________
Node.hasChildNodes()
O método hasChildNodes() da interface Node retorna um valor booleano indicando se o nó dado 
tem nós infantis ou não.

Sintaxe
hasChildNodes()

Exemplo
let foo = document.getElementById('foo');

if (foo.hasChildNodes()) {
  // Do something with 'foo.childNodes'
}
______________________________________________________________________________________________
Node.removeChild()
O método removeChild() da interface Node remove um nó infantil do DOM e retorna o nó removido.

Sintaxe
removeChild(child)

Exemplos
Exemplos simples
Dado este HTML:

<div id="top">
  <div id="nested"></div>
</div>

Para remover um elemento especificado ao saber seu nó pai:

let d = document.getElementById("top");
let d_nested = document.getElementById("nested");
let throwawayNode = d.removeChild(d_nested);

Para remover um elemento especificado sem ter que especificar seu nó pai:

let node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}

Para remover todas as crianças de um elemento:

let element = document.getElementById("idOfParent");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
______________________________________________________________________________________________
Node.replaceChild()
O método substituindoChild() do elemento Nó substitui um nó infantil dentro do nó (pai) dado.

Sintaxe
replaceChild(newChild, oldChild)

Exemplo
// Given:
// <div>
//  <span id="childSpan">foo bar</span>
// </div>

// Create an empty element node
// without an ID, any attributes, or any content
const sp1 = document.createElement("span");

// Give it an id attribute called 'newSpan'
sp1.id = "newSpan";

// Create some content for the new element.
const sp1_content = document.createTextNode("new replacement span element.");

// Apply that content to the new element
sp1.appendChild(sp1_content);

// Build a reference to the existing node to be replaced
const sp2 = document.getElementById("childSpan");
const parentDiv = sp2.parentNode;

// Replace existing node sp2 with the new span element sp1
parentDiv.replaceChild(sp1, sp2);

// Result:
// <div>
//   <span id="newSpan">new replacement span element.</span>
// </div>
______________________________________________________________________________________________
*/