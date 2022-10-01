/*
# Estrutura léxica
Podemos entender Estrutura léxicos como um conjunto de regras que vai definir de que modo 
ou de que forma você irá escrever nessa linguagem. Tais regras especificam como definir 
variáveis, fazer comentários, criar funções, usar tipos de caracteres, entre outras coisas. 
Ou seja, vai dar toda a estrutura da linguagem.

# Maiúsculas e Minúsculas
Vamos ver um exemplo simples:

var semana = 'segunda';
var Semana = 'quarta';
console.log(semana);
console.log(Semana);
console.log(semana != Semana);
console.log(SEMANA);

# Comentários
Há duas maneiras de fazer comentários no javascript. Vejamos:

De linha //
De bloco / ** /

# Literais
Literatura são programas que são diretamente do programa, fazem parte do código javascript,
não mudam, já existem dentro do js. São exemplos de literais:

Number   (33)
String   ('john')
Boolean  (true/false)
Objets   ({z: 33})
Matrizes ([2,6,8])

# Identificadores
Existem algumas regras para o nome-las.Os identifiers podem começar com:

- ou $
Letras minúsculas de a a z
Letras maiúsculas de A a Z
Podem conter símbolos de 0 a 9 e qualquer caractere unicode.
*/