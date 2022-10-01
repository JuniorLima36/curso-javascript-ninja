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

# Parâmetros para o constructor Date
Nota: Quando Date for chamado como um construtor com mais de um argumento, se os valores 
forem maiores do que seu limite lógico (e.g. se 13 for fornecido como um valor para mês ou 
70 for o valor para minuto), o valor adjacente será ajustado. E.g. new Date(2013, 13, 1)
é equivalente a new Date(2014, 1, 1), ambos criam uma data para 2014-02-01 (note que o mês 
começa em 0). Similarmente para outros valores: new Date(2013, 2, 1, 0, 70) é equivalente a 
new Date(2013, 2, 1, 1, 10), pois ambos criam uma data para 2013-03-01T01:10:00.

value
Um valor inteiro representando o número de milisegundos desde 1 de Janeiro de 1970 00:00:00 UTC (Era Unix ou Marco Zero).

dataString
Um valor do tipo String que representa uma data. A string deverá estar uma formato reconhecido pelo método Date.parse() (IETF-compliant RFC 2822 timestamps e também uma versão da ISO8601).

year
Um valor inteiro que representa o ano. Valores de 0 a 99 correspondem aos anos de 1900 a 1999. Veja o exemplo abaixo.

month
Um valor inteiro que representa o mês, começando com 0 para Janeiro até 11 para Dezembro.

day
Um valor inteiro que representa o dia do mês.

hour
Um valor inteiro que representa a hora do dia.

minute
Um valor inteiro que representa o segmento de um minuto de tempo.

second
Um valor inteiro que representa o segmento de segundo do tempo.

millisecond
Um valor inteiro que representa o segmento de milisegundo do tempo.

Descrição
° Se nenhum argumento for fornecido, o construtor criará um objeto JavaScript Date com a 
data e hora corrente de acordo com as configurações do sistema.
° Se ao menos 2 argumentos forem fornecidos, os argumentos ausentes serão configurados como 
1 (se o dia estiver ausente) ou 0 para todos os outros.
° A data do JavaScript é baseada no valor de tempo em milisegundos desde a meia noite de 01
de Janeiro de 1970, UTC. Um dia corresponde a 86.400,000 milisegundos. O intervalo do objeto
Date no JavaScript é de -100.000,000 dias a 100.000,000 dias relativo a 01 de Janeiro de 
1970, UTC.
° O objeto Date no JavaScript tem um comportamento uniforme nas plataformas. O valor do 
tempo pode ser transmitido entre sistemas para representar o mesmo instante no tempo e se 
for usado para criar um objeto de data local, ele refletirá o tempo local equivalente.
° O objeto Date JavaScript suporta vários métodos UTC (universal), assim como métodos de 
tempo locais. UTC, também conhecido como Tempo Médio de Greenwich (Greenwich Mean Time, GMT),
refere-se ao tempo como definido pelo Padrão de Tempo Mundial (World Time Standard). O tempo
 local é o tempo conhecido pelo computador onde o JavaScript é executado.
° Invocar o objeto Date no JavaScript como uma função (i.e., sem o operador new) retornatá 
uma string representando a data e hora corrente.

Exemplo:
-Várias formas de se criar um objeto Date
Os seguintes exemplos mostram várias formas de se criar datas em JavaScript:

var today = new Date();
var birthday = new Date("December 17, 1995 03:24:00");
var birthday = new Date("1995-12-17T03:24:00");
var birthday = new Date(1995,11,17);
var birthday = new Date(1995,11,17,3,24,0);
*/