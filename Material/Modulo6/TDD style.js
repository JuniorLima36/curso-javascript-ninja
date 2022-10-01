/*
# Test Driven Development: TDD Simples e Prático

TDD é o Desenvolvimento Orientado por Testes (Test Driven Development). Isso mesmo! 
Desenvolvemos o nosso software baseado em testes que são escritos antes do nosso código de 
produção!

Se você nunca ouviu sobre TDD, ou já ouviu mas nunca tentou, sugiro ferozmente que você 
continue lendo o artigo e procure sobre o assunto! A ideia do TDD já é antiga e foi firmada 
com o mestreKent Beck(Autor também do famoso livro sobre TDD, que recomendo) e é um dos 
pilares (lê-se práticas) do Extreme Programming!

Basicamente o TDD se baseia em pequenos ciclos de repetições, onde para cada funcionalidade 
do sistema um teste é criado antes. Este novo teste criado inicialmente falha, já que ainda
 não temos a implementação da funcionalidade em questão e, em seguida, implementamos a 
 funcionalidade para fazer o teste passar! Simples assim!

Calma! Não tão rápido pequeno samurai! Não podemos simplesmente escrever outro teste só por 
que já temos um teste passando. É preciso que esta funcionalidade que acabamos de escrever 
seja refatorada, ou seja, ela precisa passar por um pequeno banho de "boas práticas” de 
Desenvolvimento de Software. Estas boas práticas que garantirão um software com código mais 
limpo, coeso e menos acoplado.

# Ciclo de desenvolvimento
Red,Green, Refactor. Ou seja:

° Escrevemos um Teste que inicialmente não passa (Red)
° Adicionamos uma nova funcionalidade do sistema
° Fazemos o Teste passar (Green)
° Refatoramos o código da nova funcionalidade (Refactoring)
° Escrevemos o próximo Teste

Nós temos, neste tipo de estratégia, um feedback rápido sobre a nova funcionalidade e sobre 
uma possível quebra de outra funcionalidade do sistema. Assim tempos muito mais segurança 
para as refatorações e muito mais segurança na adição de novas funcionalidades.

# Motivos para o uso
Temos diversos ganhos com esta estratégia e vou citar alguns:

° Feedback rápido sobre a nova funcionalidade e sobre as outras funcionalidades existentes 
no sistema
° Código mais limpo, já que escrevemos códigos simples para o teste passar
° Segurança no Refactoring pois podemos ver o que estamos ou não afetando
° Segurança na correção de bugs
° Maior produtividade já que o desenvolvedor encontra menos bugs e não desperdiça tempo com 
depuradores
° Código da aplicação mais flexível, já que para escrever testes temos que separar em 
pequenos "pedaços" o nosso código, para que sejam testáveis, ou seja, nosso código estará 
menos acoplado.
*/