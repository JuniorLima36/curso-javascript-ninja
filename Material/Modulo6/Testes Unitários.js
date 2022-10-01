/*
# Introdução aos Testes Unitários em JavaScript
Nesse artigo iremos ver algumas dicas de como utilizarmos de testes unitários pode ser 
extremamente útil no desenvolvimento front-end e como podem facilitar e muito a vida dos 
desenvolvedores.

A criação de programas complexos é apenas uma questão de dividi-los em unidades menores e 
depois juntá-las, assim como um quebra-cabeças, onde pegamos minúsculas peças e juntamos 
todas a fim de criar uma linda figura, quadro, etc.

O teste unitário é basicamente o teste dessas unidades menores, aquelas que iremos juntar. 
Caso nunca tenha usado dos testes unitários antes eu sugiro que use, pois vale a pena.

# O que fazem?
Basicamente os testes unitários ajudam você a pensar com as expectativas de seu código de 
uma forma organizada, minimizam o risco e o esforço ao mudar o código e incentivam o design 
modular.

Com a leitura desse artigo você poderá caminhar na direção certa para começar com testes 
unitários em JavaScript no navegador, e vai te ter algumas dicas para ter certeza de que 
eles sejam executados da melhor forma possível , seja para o usuário ou para o servidor.

# Escolha de um Framework
Existem frameworks de testes unitários bons o suficiente para que você não tenha que 
construir o seu próprio. Um exemplo muito bom é o QUnit, que é usado pela suíte de produtos 
do jQuery, é fácil de usar e tem um tutorial muito bom no site oficial, com ele ficará tudo 
mais fácil, não deixe de conferir.

Existem outras opções também, sugiro que olhe todas e escolha a que se adequar melhor com 
sua necessidade.

Jasmine
Mocha
Puppeteer
AVA
JEST

O mais importante é você escolher um, estudar sobre ele e começar a usá-lo. Com isso 
praticamente todo o trabalho já terá sido feito. Leia, estude e teste qual framework vai 
atender melhor suas expectativas.

Lembre-se que cada desenvolvedor possui suas particularidades e suas preferências. Eu, por 
exemplo, prefiro o dreamweaver do que qualquer outra IDE de desenvolvimento.

# Faça testes unitários
A ideia de teste unitário é testar uma pequena unidade autônoma de código antes de 
integrá-la ao sistema maior.

Se você estiver escrevendo o código a partir do zero, ou se o código já existe, é possível 
que seja necessário fazer uma certa quantidade de refatoração para tornar modular e de 
baixo acoplamento suficiente para adicionar testes unitários.

Um dos principais objetivos ao escrever testes unitários para o navegador é que eles são 
testáveis sem iniciar nosso servidor de aplicação. Queremos que seja capaz de fazer teste 
unitário com, no máximo, um servidor web estático.

Outra coisa importante de se fazer para seus testes unitários do navegador é termos uma 
página web separada que inclui um arquivo JS contendo seus casos de teste.

Embora não haja nenhuma regra para saber como organizá-los, é importante testar cada 
arquivo JS separado, ou seja, combinar cada um dos seus arquivos JS para outro contendo 
seus casos de teste, além de uma página HTML separada para aproveitar os casos de teste.

É interessante também ter uma página HTML principal para incluir todos os testes. Dessa 
forma, você pode executar todos eles antes de cada build/release, mas limitar apenas os 
testes para um módulo específico, enquanto você está ativamente fazendo alterações.
*/