/*
# XMLHttpRequest
é um objeto que fornece funcionalidade ao cliente para transferir dados entre um cliente e 
um servidor. Ele fornece uma maneira fácil de recuperar dados de um URL sem ter que fazer 
uma atualização de página inteira. Isso permite que uma página da Web atualize apenas uma 
parte do conteúdo sem interromper o que o usuário esteja fazendo. XMLHttpRequest é usado 
constantemente na programação de AJAX.

XMLHttpRequest foi originalmente projetado pela Microsoft e adotado pela Mozilla, Apple e 
Google. Está sendo padronizado pela WHATWG. Apesar do nome, XMLHttpRequest pode ser usado 
para recuperar qualquer tipo de dados, e não apenas XML, suportando também, protocolos 
diferentes de HTTP (incluindo file e ftp ).

Para criar uma instância de XMLHttpRequest , basta fazer isso:

var myRequest = new XMLHttpRequest();
____________________________________________________________________________________________
# Metodo
XMLHttpRequest.open()
O XMLHttpRequest método**open()** inicializa uma nova requisição, ou reinicializa uma 
requisição já existente.

Sintaxe
XMLHttpRequest.open(method, url)
XMLHttpRequest.open(method, url, async)
XMLHttpRequest.open(method, url, async, user)
XMLHttpRequest.open(method, url, async, user, password)
____________________________________________________________________________________________
XMLHttpRequest.send()
O método send(), do XMLHttpRequest, envia uma requisição para o servidor.Se a solicitação 
for assíncrona (que é o padrão), esse método retornará assim que a solicitação for enviada 
e o resultado for entregue usando eventos. Se a solicitação for síncrona, esse método não 
retornará até que a resposta chegue.

send() aceita um parâmetro opcional que permite especificar o corpo da solicitação; isso é 
usado principalmente para solicitações como PUT. Se o método de solicitação for GET ou HEAD,
o parâmetro body será ignorado e o corpo da solicitação será definido como null.

Se nenhum cabeçalho Accept tiver sido definido usando setRequestHeader(), um cabeçalho 
Accept com o tipo "* / *" (qualquer tipo) é enviado.

Sintaxe
XMLHttpRequest.send(body)

Exemplo: GET
var xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

xhr.onload = function () {
  // Requisição finalizada. Faça o processamento aqui.
};

xhr.send(null);
// xhr.send('string');
// xhr.send(new Blob());
// xhr.send(new Int8Array());
// xhr.send(document);
Exemplo: POST
var xhr = new XMLHttpRequest();
xhr.open("POST", '/server', true);

// Envia a informação do cabeçalho junto com a requisição.
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = function() { // Chama a função quando o estado mudar.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        // Requisição finalizada. Faça o processamento aqui.
    }
}
xhr.send("foo=bar&lorem=ipsum");
// xhr.send(new Int8Array());
// xhr.send(document);
____________________________________________________________________________________________
XMLHttpRequest: readystatechange event
O evento é acionado sempre que a propriedade readyState do XMLHttpRequest muda.
readystatechange

Sintaxe
Use o nome do evento em métodos como addEventListener()ou defina uma propriedade de 
manipulador de eventos.

addEventListener('readystatechange', (event) => { })

onreadystatechange = (event) => { }

Exemplo:
const xhr = new XMLHttpRequest();
const method = "GET";
const url = "https://developer.mozilla.org/";

xhr.open(method, url, true);
xhr.onreadystatechange = () => {
  // In local files, status is 0 upon success in Mozilla Firefox
  if (xhr.readyState === XMLHttpRequest.DONE) {
    const status = xhr.status;
    if (status === 0 || (status >= 200 && status < 400)) {
      // The request has been completed successfully
      console.log(xhr.responseText);
    } else {
      // Oh no! There has been an error with the request!
    }
  }
};
xhr.send();
____________________________________________________________________________________________
# Propriedade
XMLHttpRequest.readyState
A propriedade XMLHttpRequest.readyState retorna o estado de um XMLHttpRequest. Uma 
requisição XHR que existe em um dos seguintes estados:

|Valor|	Estado	         | Descrição                                                              |
|  0	| UNSENT	         | Um cliente foi criado. Mas o método open() não foi chamado ainda.      |
|  1	| OPENED	         | O método open() foi chamado.                                           |
|  2	| HEADERS_RECEIVED | o método send() foi chamado e os cabeçalhos e status estão disponíveis.|
|  3	| LOADING	         | Baixando e responseText contem os dados parciais.                      |
|  4	| DONE	           | Operação concluída.                                                    |

-UNSENT
O XMLHttpRequest foi criado. Mas o método open() não foi chamado ainda.

-OPENED
O método open() foi invocado. Durante esse estado, os headers da requisição podem ser inseridos usando o método setRequestHeader() e o método send() pode ser chamado, iniciando a busca.

-HEADERS_RECEIVED
O método send() foi chamado e os cabeçalhos de respostas foram recebidos.

-LOADING
A resposta da requisição está sendo recebida. se o responseType for "text" ou um texto em branco, o responseText terá o texto parcial da resposta conforme seu carregamento.

-DONE
A Operação de busca está completa. Isso pode significar que a trasferência foi concluída com êxito ou que falhou.

Exemplo:
var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState will be 0

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState will be 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); // readyState will be 3
};

xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState will be 4
};

xhr.send(null);
____________________________________________________________________________________________
XMLHttpRequest.status
A propriedade XMLHttpRequest.status retorna o código de status HTTP numérico da resposta da
'.XMLHttpRequest

Antes que a solicitação seja concluída, o valor é 0. Os navegadores também informam um 
status de 0 em caso de erros.statusXMLHttpRequest

Códigos de status de respostas HTTP
Os códigos de status das respostas HTTP indicam se uma requisição HTTP foi corretamente 
concluída. As respostas são agrupadas em cinco classes:

Respostas de informação (100-199),
Respostas de sucesso (200-299),
Redirecionamentos (300-399)
Erros do cliente (400-499)
Erros do servidor (500-599).

Exemplos
const xhr = new XMLHttpRequest();
console.log('UNSENT: ', xhr.status);

xhr.open('GET', '/server');
console.log('OPENED: ', xhr.status);

xhr.onprogress = () => {
  console.log('LOADING: ', xhr.status);
};

xhr.onload = () => {
  console.log('DONE: ', xhr.status);
};

xhr.send();

/**
 * Outputs the following:
 *
 * UNSENT: 0
 * OPENED: 0
 * LOADING: 200
 * DONE: 200
 * /
____________________________________________________________________________________________
XMLHttpRequest.responseText
Resposta de propriedade XMLHttpRequest somente responseText retorna o texto recebido de um 
servidor após uma solicitação ser enviada.

Valor
Uma sequência que contém os dados textuais recebidos usando o ou se a solicitação falhou ou
se a solicitação ainda não foi enviada por chamada de envio(). XMLHttpRequestnull""

Ao lidar com uma solicitação assíncrola, o valor de sempre tem o conteúdo atual recebido do 
servidor, mesmo que esteja incompleto porque os dados ainda não foram completamente 
recebidos. responseText

Você sabe que todo o conteúdo foi recebido quando o valor do ReadyState se torna 
XMLHttpRequest.DONE (), e o status se torna 200 (). 4"OK"

 Exemplo:
const xhr = new XMLHttpRequest();
xhr.open('GET', '/server', true);

// If specified, responseType must be empty string or "text"
xhr.responseType = 'text';

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE) {
    if (xhr.status === 200) {
      console.log(xhr.response);
      console.log(xhr.responseText);
    }
  }
};

xhr.send(null);
____________________________________________________________________________________________
XMLHttpRequest.responseXML
A propriedade XMLHttpRequest.responseXML retorna um documento contendo o HTML ou XML 
recuperado pela solicitação; ou se a solicitação não foi bem sucedida, ainda não foi enviada
ou se os dados não podem ser analisados como XML ou HTML. null

Normalmente, a resposta é analisada como "". Se a respostaType estiver definida como "" e a 
solicitação for feita de forma assíncrona, em vez disso, a resposta será analisada como "". 
é para quaisquer outros tipos de dados, bem como para dados: URLs. 
text/xmldocumenttext/htmlresponseXMLnull

Se o servidor não especificar o tipo de conteúdo como "" ou "", você poderá usar 
xMLHttpRequest.overrideMimeType() para analisá-lo como XML de qualquer maneira. 
text/xmlapplication/xml

Esta propriedade não está disponível para os trabalhadores.

Exemplo:
const xhr = new XMLHttpRequest;
xhr.open('GET', '/server');

// If specified, responseType must be empty string or "document"
xhr.responseType = 'document';

// Force the response to be parsed as XML
xhr.overrideMimeType('text/xml');

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    console.log(xhr.response, xhr.responseXML);
  }
};

xhr.send();
____________________________________________________________________________________________
*/