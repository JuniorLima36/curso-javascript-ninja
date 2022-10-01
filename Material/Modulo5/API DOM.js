/*
# O que é a API DOM?
Embora existam muitos DOMs (cada documento HTML, XML e SVG tem um DOM), há apenas uma API DOM,
que é uma especificação W3C. A API DOM está escrita em JavaScript, e você pode usá-la para 
manipular o DOM de um documento web usando JavaScript.

API significa "Interface de Programação de Aplicativos", e é uma coleção de classes, 
interfaces, propriedades, métodos e outras estruturas de código que os desenvolvedores podem 
usar para acessar a funcionalidade de um aplicativo. Por exemplo, você pode usar a API do 
Twitter para acessar tweets, usuários, mensagens, anúncios e outros elementos do aplicativo 
do Twitter programáticamente. Da mesma forma, você pode usar APIs web para usar as 
funcionalidades incorporadas de um navegador web (que é um aplicativo também).

A API do DOM é uma das várias APIs da Web incorporadas aos navegadores da Web. Existem APIs 
de nível inferior, como a API de Trabalhadores da Web (para operações de fundo) e as de 
nível superior, como o DOM.

A maioria das APIs web, incluindo a API DOM, são escritas em JavaScript. Primeiro, o W3C cria
as especificações e, em seguida, os fornecedores de navegador as implementam. Assim, o 
"suporte ao navegador" refere-se a se um navegador implementou uma funcionalidade específica 
da API DOM ou não. Se o suporte ao navegador for bom, você pode usar com segurança um objeto 
(implementação de interface), propriedade ou método em produção, enquanto que se for ruim, é 
melhor encontrar uma alternativa.

As tags e atributos HTML e os estilos CSS têm suas alças na API DOM para que você possa 
modificá-las dinamicamente. Por exemplo, a seguinte tag HTML:

<a href='page.html' target='_blank'>Click this link</a>

é representado por quatro nodas (um pai e três filhos) no DOM:

°(nó pai) um objeto no DOM (que é a implementação da interface); este é um nó 
elementoHTMLAnchorElementHTMLAnchorElement
°(nó infantil) uma propriedade HTMLAnchorElement.href definida pela interface; este é um nó 
atributoHTMLAnchorElement
°(nó infantil) uma propriedade; este é outro nó atributoHTMLAnchorElement.target
°(nó infantil) um nó de texto ("Clique neste link")
*/