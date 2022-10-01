/*
# RegExp
O construtor RegExp cria um objeto de expressão regular para realizar uma correspondência de 
texto com um padrão.

- Construtor
Notações literais e de construtores são possíveis:

/padrão/flags
new RegExp(padrão[, flags])
RegExp(padrão[, flags])

- Parâmetros
padrão
O texto da expressão regular, ou como em ES5, outro objeto RegExp. Os padrões podem incluir 
caracteres especiais para correspondencia em um intervalo maior de valores do que uma string 
literal.

flags
Se especificado, flagsindica os marcadores que podem ser adicionados, ou se um objeto é 
suficiente para o padrão, os valores de flags serão substituidos por qualquer uma das flags 
de objetos. O valor de flagsé uma string contendo qualquer combinação dos seguintes valores:

g
corresponder globalmente; acha todas as correspondências em vez de parar após achar a 
primeira

i
ignorar maiúsc./minúsc.; Se a flag u estiver ativa, deve ser utilizado o Unicode case folding

m
multilinha; trata caracteres de início e fim (^ e $) ao operar sobre múltiplas linhas 
(ou seja, corresponder o início ou fim de cada linha (delimitado por \n ou \r), e não apenas 
o começo ou fim de toda a string de entrada)

u Experimental
unicode; trata o padrão como uma sequência de código unicode

y Experimental
aderente; corresponde apenas pelo index indicado pela propriedade lastIndex dessa expressão 
regular na string alvo (e não tenta corresponder de qualquer indexes posteriores).
*/