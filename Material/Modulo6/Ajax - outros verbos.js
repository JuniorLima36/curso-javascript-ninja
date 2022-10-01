/*
# Objeto XMLHttpRequest
O XMLHttpRequest define uma API que fornece funcionalidades para scripts do lado do cliente
para transferência de dados entre o browser e o servidor Web. O objeto suporta qualquer 
formato baseado em texto, incluindo XML e JSON. Ele pode ser utilizado para fazer 
requisições ao servidor Web usando os protocolos HTTP e HTTPS e representa uma das partes 
mais importantes do AJAX.

O conceito por trás do XMLHttpRequest foi desenvolvido originalmente pela Microsoft como 
parte do Outlook Web Access 2000. A implementação inicial da Microsoft era chamada XMLHTTP e
foi disponibilizada no Internet Explorer 5.0 como um ActiveX, sendo acessível via JScript, 
VBScript ou outra linguagem de script cliente suportada pelo browser via plug-ins.

Do Internet Explorer 5.0 ao 6.0, o XMLHTTP foi implementado como um ActiveX fornecido pelo
MSXML. Baseado no objeto XMLHTTP da Microsoft, a Fundação Mozilla incorporou a primeira 
implementação nativa do XMLHttpRequest no browser Mozilla 1.0 em 2002.

Posteriormente, o suporte nativo ao XMLHttpRequest foi implementado em outros browsers: 
Apple Safari desde a versão 1.2, Opera desde a versão 8.0, Konqueror, dentre outros. A 
própria Microsoft resolveu incluir o XMLHttpRequest como um objeto nativo de script a partir
do Internet Explorer 7.0.

A linguagem JavaScript do lado do cliente e o XMLHttpRequest serão utilizados para 
estabelecer uma comunicação HTTP assíncrona entre o browser e o servidor Web.

No projeto do Web Site, crie uma pasta com nome “Scripts” e dentro dela acrescente um 
arquivo JScript com o nome “AJAX.js”.

A Listagem 8 apresenta um código JavaScript para criar um XMLHttpRequest de modo 
cross-browser e utilizá-lo para fazer uma requisição HTTP assíncrona para o servidor Web a 
partir do browser.
*/