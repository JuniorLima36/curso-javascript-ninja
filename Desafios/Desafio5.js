/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var qualquer = [0, '1', 2.5, 3, [4, '5']];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function recebe(umArray){
	return umArray;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log( recebe(qualquer)[1] );
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function outro(umArray, x){
    return umArray[x];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var tipos = [0, '1', 2.2, {}, true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(recebe(tipos)[0]); // 0
console.log(recebe(tipos)[1]); // "1"
console.log(recebe(tipos)[2]); // 2.2
console.log(recebe(tipos)[3]); // {…}
console.log(recebe(tipos)[4]); // true

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nomeLivro){
	var catalogo = {
		"O homem perante o infinito": {
			quantidadePaginas: 280,
    		autor: 'Mario Ferreira dos Santos',
    		editora: 'Desconhecido'
		},
		"A cidade de Deus": {
			quantidadePaginas: 530,
    		autor: 'Santo Agostinho',
    		editora: 'Vozes de Bolso'
		}, 
		"Proslogium": {
			quantidadePaginas: 50,
    		autor: 'Santo Anselmo',
    		editora: 'Desconhecido'
		}
	}

    return !nomeLivro ? catalogo : catalogo[nomeLivro];
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log( "O livro O Homem Perante o Infinito tem " + book("O homem perante o infinito").quantidadePaginas + " páginas!" );
// O livro O Homem Perante o Infinito tem 280 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log( "O autor do livro O Homem perante ao infinito é " + book("O homem perante o infinito").autor);
// O autor do livro O Homem perante ao infinito é Mario Ferreira dos Santos

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log( "O livro A cidade de Deus foi publicado pela editora " + book("A cidade de Deus").editora);
// O livro A cidade de Deus foi publicado pela editora Vozes de Bolso