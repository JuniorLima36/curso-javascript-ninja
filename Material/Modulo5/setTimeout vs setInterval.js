/*
# Qual é a principal diferença entre setInterval e setTimeout em JavaScript?

setTimeout(expression, timeout); executa o código/função uma vez após o intervalo.

setInterval(expression, timeout); executa o código/função repetidamente, com o tempo limite 
entre cada repetição.

Exemplo:
var intervalID = setInterval(alert, 1000); // Will alert every second.
// clearInterval(intervalID); // Will clear the timer.

setTimeout(alert, 1000); // Will alert once, after a second.
*/