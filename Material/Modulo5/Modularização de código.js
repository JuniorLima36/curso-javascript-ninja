/*
# Modularização em Javascript
- Necessidade de modularizar o código
Todas as linguagens de programação modernas possuem uma alternativa para se trabalhar de 
forma modularizada, ajudando a criar pedaços de software que serão usados com um objetivo 
somente e de forma satisfatória. Modularizar o código funciona de forma análoga a dividir 
livros em capítulos e seções. Bons módulos, no entanto, são altamente auto-suficientes com 
funcionalidades bem definidas, o que lhes permitem ser adicionados ou removidos conforme a 
necessidade sem impactar no sistema como um todo.

- Na teoria é meio complicado né? Vamos exemplificar essa definição:
Um módulo é um arquivo Python contendo definições e instruções. O nome do arquivo é o módulo 
com o sufixo .py adicionado.

#greetings.py
#tem funções que exibem na tela cumprimentos
def sayHello():
  print(“Hello World!”)
end

def sayBye():
  print(“Bye bye!”)
end

e pode ser usado da seguinte forma:

#main.py
import greetings
greetings.sayHello()
##como resultado veremos como saída na tela a string “Hello World!”

Ainda no python podemos usar somente alguns pedaços do nosso módulo, melhorando assim a 
performance! Visto que não precisaremos importar todas as funções de greetings:

from greetings import sayHello
sayHello()
#como resultado veremos como saída na tela a mesma string “Hello World!” mas sem precisar ler todas as informações do módulo
# e ainda podemos fazer chamadas diretas como se o pedaço de código
#estivesse sido implementado destroço escopo do nosso arquivo de chamada.

No javascript temos um problema grande com isso visto que desde a última implementação da 
linguagem(ECMA-262 5.1, que atualmente roda em todos os browsers modernos), não é possível 
trabalhar com módulos de forma nativa. Tendo em vista essa necessidade de trabalhar de forma 
modularizada, a comunidade desenvolveu formas de fazer isso utilizando module patterns como 
AMD,CommonJS e UMD.
*/