(function() {
  'use strict'
  /*
  Declare uma variável chamada `name` que receba seu primeiro nome.
  Mostre no console todas as letras do seu nome separadas, com a frase:
  - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
  Ex: no caso do nome ser "Fernando", deve mostrar as frases:
  - "F é a 1ª letra do meu nome."
  - "e é a 2ª letra do meu nome."
  E assim por diante, até a última.
  */
  console.log('As letras do seu nome:');
  let name = 'Fernando';
  for (let i = 0; i < name.length; i++) {
    console.log(`${name[i]} é a ${i + 1}ª letra do meu nome.`);
  }

  /*
  - Declare uma variável chamada `fullName`, que receba seu nome completo,
  escrito no formato de slug (caixa baixa e palavras separadas por um traço).
  Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
  - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
  por um espaço.
  - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
  nome, então fique à vontade para usar as artimanhas que já viu até agora no
  curso para fazer isso funcionar corretamente :)
  - Mostre no console o nome no formato slug, e o resultado final. Use um
  console.log para cada formato.
  */
  console.log('\nNome convertido à partir de um slug:');
  let fullName = 'joao-silva-souza';
  console.log(`Slug: ${fullName}`);
  fullName = fullName.split('-').map(function(namePart) {
    return namePart.charAt(0).toUpperCase() + namePart.slice(1);
  }).join(' ');
  console.log(`Nome: ${fullName}`);

  /*
  - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
  cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
  ser um "e". No final, concatene com a frase: " são meus amigos.".
  O resultado final deve ficar mais ou menos assim:
  - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
  - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
  5 nomes foi somente uma sugestão ;)
  */
  console.log('\nMeus amigos:');
  let friends = ['Ana', 'Carlos', 'Bruno', 'Daniel', 'Eduardo'];
  let friendsString = friends.reduce((acc, friend, index) => {
    if (index === 0) {
      return friend;
    }
    if (index === friends.length - 1) {
      return acc + ' e ' + friend;
    }
    return acc + ', ' + friend;
  }, '');
  console.log(`${friendsString} são meus amigos.`);

  /*
  Usando o replace(), faça a string "Roberto" virar "Roberta".
  Mostre o resultado no console.
  */
  console.log('\nEra "Roberto", agora é:');
  let nameToChange = 'Roberto';
  console.log(nameToChange.replace('to', 'ta'));

  /*
  Mostre no console a parte "nando" da string "Fernando". Use o método que
  faz a busca do final para o início da string.
  */
  console.log('\nParte de uma string:');
  let anotherName = 'Fernando';
  console.log(anotherName.slice(3, 8));

  /*
  Declare uma variável chamada `myName`, que receba o seu primeiro nome,
  escrito de forma natural.
  Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
  e minúsculas.
  - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
  de qualquer tamanho, escrito de qualquer forma.
  Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
  */
  console.log('\nNome com letras intercaladas entre caixa alta e baixa:');
  let myName = 'Junior';
  let intercalatedName = '';
  for (let i = 0; i < myName.length; i++) {
    intercalatedName += i % 2 === 0 ? myName[i].toUpperCase() : myName[i].toLowerCase();
  }
  console.log(intercalatedName);
})();