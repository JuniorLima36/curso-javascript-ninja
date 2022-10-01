/*
# for in
O laço for in interage sobre propriedades enumeradas de um objeto, na ordem original de 
inserção. O laço pode ser executado para cada propriedade distinta do objeto.

Sintaxe
for (variavel in objeto) {...
}

Exemplo:
A função seguinte toma como argumento um objeto. O laço for...in iterage sobre todos as 
propriedades enumeráveis do objeto e retorna uma string com o nome das propriedades e seus 
respectivos valores.

//Objeto
var obj = {a:1, b:2, c:3};

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
  // ctrl+shift+k (para abrir o console no mozilla firefox)
  console.log("obj." + prop + " = " + obj[prop]);
}

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
*/