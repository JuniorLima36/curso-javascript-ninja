/*
# Motivação
A utilização de expressões regulares, na maioria das linguagens de programação, representa 
um recurso de grande importância para a manipulação de strings. Em JavaScript, no entanto, 
devido às características do front-end das aplicações, onde é comum a entrada de dados pelo 
usuário, as RegEx passam a ter uma função ainda mais relevante, por estarem diretamente 
relacionadas à consistência das informações.

Uma expressão regular pode ser utilizada em um campo de busca, para a substituição de 
caracteres em um texto, para verificar a existência de um padrão na entrada de dados (como 
um campo de CPF), entre muitas outras opções. Entre tantos cenários, um dos mais comuns é o 
de validação de textos a partir de padrões, pois permite que controlemos os dados inseridos 
pelos usuários, assegurando assim o formato esperado.

# As expressões regulares

As RegEx são baseadas em dois elementos: um padrão e modificadores. Esses elementos, em 
conjunto, formam a chamada expressão regular, cuja sintaxe básica é bastante simples:

/padrão/modificadores

A expressão /devmedia/i, por exemplo, pode ser utilizada para buscar o padrão “devmedia” sem
levar em consideração se as letras são maiúsculas ou minúsculas no texto, por causa do 
modificador “i”.

Os modificadores são opcionais dentro das expressões regulares, e servem para adicionar 
algum comportamento que, por padrão, elas não possuem. A Tabela 1 mostra os três 
modificadores que podem ser utilizados.

-Tabela 1. Modificadores em expressões regulares
|Modificador | Descrição                                                                                                   |
|    i	     | Não leva em consideração maiúsculas e minúsculas (case-insensitive).                                        |
|    g	     | Global Match – procura todas as ocorrências da expressão no texto, ao invés de parar na primeira ocorrência.|
|    m	     | Procura por ocorrências em múltiplas linhas.                                                                |

As expressões regulares também aceitam a definição de alguns caracteres que devem ser 
encontrados nas strings, ao invés de texto explícito (como “devmedia”). Nós podemos querer 
buscar, por exemplo, somente números em um texto, ou números de 1 a 5, ou ainda somente as 
letras A, B e C. Tudo isso é possível através do uso de colchetes, como na expressão regular
/[abc]/i, que busca pelos caracteres “a”, “b” ou “c” sem levar em consideração se são 
maiúsculos ou não. Outra opção seria /[^abc]/i, que busca qualquer caractere que não seja 
“a”, “b” ou “c”. Também é possível buscarmos uma sequência de caracteres, como nas 
expressões /[a-c]/i e /[^a-c]/i, que em resultado são equivalentes às anteriores, mas 
definem uma busca por caracteres na faixa de “a” a “c”. O mesmo é válido com números, ao 
invés de letras.

Outra possibilidade que as expressões regulares oferecem é a utilização de caracteres entre 
parênteses, que fazem com que seja encontrada qualquer uma das alternativas especificadas 
nessa expressão. Por exemplo, /(a|b|c)/i tem o mesmo comportamento da expressão /[abc]/i, 
utilizando o caractere “|” para representar a operação lógica OU, como é comum na 
programação.

As expressões regulares oferecem, ainda, a possibilidade de utilização de metacharacters e 
quantificadores. Os meta caracteres são muito variados e cada um define um padrão comum. Com
eles é possível, por exemplo, definirmos uma expressão como /[\w]/ para encontrarmos uma 
palavra, e /[\W]/ para buscar por algo que não seja uma palavra (letras maiúsculas indicam a
negação do equivalente em minúsculo).

-A lista completa é extensa, e pode ser observada na Tabela 2.

Tabela 2. Meta caracteres em expressões regulares

| Meta caractere |	                    Descrição                               |
|  . (ponto)     | Qualquer caractere, exceto nova linha e terminador de linha. |
|   \w e \W      | Palavra e não-palavra.                                       |
|    \d e \D     | Dígito e não-dígito.                                         |
|    \s e \S     | Espaço em branco e não-espaço.                               |
|    \b e \B     | No começo/fim da palavra e não-começo/fim da palavra.        |
|    \0          | Caractere NUL.                                               |
|    \n          | Caractere nova linha.                                        |
|    \f          | Caractere form feed.                                         |
|    \r          | Caractere de retorno.                                        |
|    \t          | Caractere que representa “tab”.                              |
|    \v          | Caractere que representa “tab” vertical.                     |
|    \xxx        | Caractere especificado pelo número octal xxx.                |
|    \xdd        | Caractere especificado pelo número hexadecimal dd.           |
|    \uxxxx      | Caractere unicode especificado pelo número hexadecimal xxxx. |

Os quantificadores, por sua vez, indicam o número de vezes que os padrões devem ser 
encontrados nas strings. O “+”, por exemplo, procura por um texto que contenha pelo menos um
caractere especificado. Assim, uma expressão regular como /[a+]/ retorna qualquer string 
que tenha uma ou mais letras “a”.

Outros quantificadores que merecem destaque são: “?”, que procura por 0 ou 1 ocorrência; 
“{X}”, que procura por uma sequência de “X” (numeral) caracteres iguais; “$”, que procura 
pelos caracteres no fim da palavra; e “^”, que procura no início. Há outros quantificadores
que podem ser encontrados facilmente em uma busca na web, mas são bem menos utilizados do 
que esses destacados.
*/