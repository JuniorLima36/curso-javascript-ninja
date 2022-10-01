/*
# Declarações
Existem três tipos de declarações em JavaScript.

- var
Declara uma variável, opcionalmente, inicializando-a com um valor.
- let
Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
- const
Declara uma constante de escopo de bloco, apenas de leitura.
______________________________________________________________________________________________
# Declarando variáveis
Você pode declarar uma variável de três formas:

° Com a palavra chave var. Por exemplo, var x = 42. Esta sintaxe pode ser usada para 
declarar tanto variáveis locais como variáveis globais.

° Por simples adição de valor. Por exemplo, x = 42. Isso declara uma variável global. Essa 
declaração gera um aviso de advertência no JavaScript. Você não deve usar essa variante.

° Com a palavra chave let. Por exemplo, let y = 13. Essa sintaxe pode ser usada para 
declarar uma variável local de escopo de bloco. Veja escopo de variável abaixo.
______________________________________________________________________________________________
# Comentários
A sintaxe dos comentários em JavaScript é semelhante como em C++ e em muitas outras 
linguagens:
"
- // comentário de uma linha
- /* isto é um comentário longo de múltiplas linhas.* /
______________________________________________________________________________________________
# Tipos de dados
O mais recente padrão ECMAScript define sete tipos de dados:

Seis tipos de dados são os chamados primitivos:    
-Boolean. true e false.  
-null. Uma palavra-chave que indica valor nulo. Devido JavaScript ser case-sensitive, null
não é o mesmo que Null, NULL, ou ainda outra variação.      
-undefined. Uma propriedade superior cujo valor é indefinido.       
-Number. 42 ou 3.14159.
-String. "Howdy"
-Symbol (novo em ECMAScript 6). Um tipo de dado cuja as instâncias são únicas e imutáveis.
-Object
______________________________________________________________________________________________
*/