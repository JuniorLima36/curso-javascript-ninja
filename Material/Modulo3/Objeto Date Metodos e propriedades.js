/*
# Date
Cria uma instância JavaScript de Date que representa um único momento no tempo. Objetos 
Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 
1970 (UTC).

Construtor
new Date();
new Date(valor);
new Date(dataString);
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

Exemplo:
-Várias formas de se criar um objeto Date
Os seguintes exemplos mostram várias formas de se criar datas em JavaScript:

var today = new Date();
var birthday = new Date("December 17, 1995 03:24:00");
var birthday = new Date("1995-12-17T03:24:00");
var birthday = new Date(1995,11,17);
var birthday = new Date(1995,11,17,3,24,0);
____________________________________________________________________________________________
# Metodos
Date.now()
O método Date.now() retorna o número de milisegundos decorridos desde 1 de janeiro de 1970 
00:00:00 UTC.

Sintaxe
var timeInMs = Date.now();

Exemplo
if (!Date.now) {
  Date.now = function now() {
    return new Date().getTime();
  };
}
____________________________________________________________________________________________
Date.prototype.getDate()
O método getDate() retorna o dia do mês da data especificada de acordo com a hora local.

Sintaxe
dateObj.getDate()

Exemplo: Usando getDate()
O segundo statement abaixo atribui o valor 25 à variável day, baseado no valor do objeto 
Date Xmas95.

var Xmas95 = new Date('December 25, 1995 23:15:30');
var day = Xmas95.getDate();

console.log(day); // 25
____________________________________________________________________________________________
Date.prototype.getDay()
O método getDay() retorna o dia da semana para a data especificada de acordo com a hora 
local, onde 0 representa o Domingo.

Sintaxe
dateObj.getDay()

Exemplo: Usando getDay()
O segundo statement abaixo atribui o valor 1 à variável weekday (dia da semana), baseado no 
valor do objeto Date Xmas95. A data 25 de Dezembro de 1995 é uma Segunda-Feira.

var Xmas95 = new Date('December 25, 1995 23:15:30');
var weekday = Xmas95.getDay();

console.log(weekday); // 1
____________________________________________________________________________________________
Date.prototype.getFullYear()
O método getFullYear() retorna o ano da data especificada de acordo com a hora local.

Use este método ao invés do getYear().

Sintaxe
dateObj.getFullYear()

Exemplo: Usando getFullYear()
O exemplo seguinte atribui o valor de quatro dígitos do ano corrente à variável year.

var today = new Date();
var year = today.getFullYear();
____________________________________________________________________________________________
Date.prototype.getHours()
O método getHours() retorna a hora para a data especificada, de acordo com a hora local.

Sintaxe
dateObj.getHours()

Exemplo: Usando getHours()
O segundo statement abaixo atribui o valor 23 à variável hours, baseado no valor do objeto Date Xmas95.

var Xmas95 = new Date('December 25, 1995 23:15:30');
var hours = Xmas95.getHours();

console.log(hours); // 23
*/