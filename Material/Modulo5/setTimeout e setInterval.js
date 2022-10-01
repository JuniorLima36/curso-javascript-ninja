/*
# setTimeout()
O método setTimeout() global define um temporizador que executa uma função ou uma peça de 
código especificada assim que o temporizador expirar.

Sintaxe
setTimeout(code)
setTimeout(code, delay)

setTimeout(functionRef)
setTimeout(functionRef, delay)
setTimeout(functionRef, delay, param1)
setTimeout(functionRef, delay, param1, param2)
setTimeout(functionRef, delay, param1, param2, / * … ,* / paramN)

- Descrição
Os intervalos são cancelados usando clearTimeout().

Para chamar uma função repetidamente (por exemplo, cada milissegundo n), considere usar 
setInterval().

Exemplo:
setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000)
________________________________________________________________________________________________
# Valores de atraso não-numédicamente são silenciosamente coagidos em números

Se for chamado com valor delay que não é um número, type coercion implícito é 
silenciosamente feita sobre o valor para convertê-lo em um número. Por exemplo, o código a 
seguir usa incorretamente a sequência para o valor de atraso, em vez do número – mas, no 
entanto, funciona, porque quando o código é executado, a sequência é coagida ao número , e 
assim o código executa 1 segundo depois.

setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1000")

Mas, em muitos casos, o tipo implícito de coerção pode levar a resultados inesperados e 
surpreendentes. Por exemplo, quando o código a seguir é executado, a sequência é coagida ao 
número — e assim, o código é executado imediatamente, sem atraso zero.

setTimeout(() => {
  console.log("Delayed for 1 second.");
}, "1 second")

Portanto, não use strings para o valor de atraso, mas use sempre números:

setTimeout(() => {
  console.log("Delayed for 1 second.");
}, 1000)
______________________________________________________________________________________________
# Trabalhando com funções assíncronsas
setTimeout() é uma função assíncroda, o que significa que a função do temporizador não 
pausará a execução de outras funções na pilha de funções. Em outras palavras, você não pode 
usar para criar uma "pausa" antes que a próxima função na pilha de função seja disparada. 
setTimeout()

Veja o exemplo a seguir:

  setTimeout(() => {console.log("this is the first message")}, 5000);
  setTimeout(() => {console.log("this is the second message")}, 3000);
  setTimeout(() => {console.log("this is the third message")}, 1000);

  // Output:

  // this is the third message
  // this is the second message
  // this is the first message

Observe que a primeira função não cria uma "pausa" de 5 segundos antes de chamar a segunda 
função. Em vez disso, a primeira função é chamada, mas espera 5 segundos para executar. 
Enquanto a primeira função está esperando para ser executada, a segunda função é chamada, e 
uma espera de 3 segundos é aplicada à segunda função antes de ser executada. Como nem os 
cronadores da primeira nem da segunda função foram concluídos, a terceira função é chamada e 
completa sua execução primeiro. Então o segundo segue. Então, finalmente, a primeira função é
executada após o temporizador finalmente completar.

Para criar uma progressão na qual uma função só é disparada após o preenchimento de outra 
função, consulte a documentação em Promessas.
______________________________________________________________________________________________
# clearTimeout()
O método global clearTimeout() cancela um tempo limite previamente estabelecido pelo chamado 
setTimeout().

Se o parâmetro fornecido não identificar uma ação previamente estabelecida, este método não 
faz nada.

Sintaxe
clearTimeout(timeoutID)

Exemplo:
Execute o script abaixo no contexto de uma página da Web e clique na página uma vez. Você 
verá uma mensagem aparecendo em um segundo. Se você clicar na página várias vezes em um 
segundo, o alerta só aparecerá uma vez.

const alarm = {
  remind(aMessage) {
    alert(aMessage);
    this.timeoutID = undefined;
  },

  setup() {
    if (typeof this.timeoutID === 'number') {
      this.cancel();
    }

    this.timeoutID = setTimeout((msg) => {
      this.remind(msg);
    }, 1000, 'Wake up!');
  },

  cancel() {
    clearTimeout(this.timeoutID);
  }
};
window.addEventListener('click', () => alarm.setup());
______________________________________________________________________________________________
# setInterval()
O método setInterval(), oferecido nas interfaces window e worker, chama repetidamente uma 
função ou executa um trecho de código, com um atraso de tempo fixo entre cada chamada.

Este método retorna um ID de intervalo que identifica exclusivamente o intervalo, para que 
você possa removê-lo mais tarde chamando clearInterval().

Sintaxe
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, arg0)
setInterval(func, delay, arg0, arg1)
setInterval(func, delay, arg0, arg1, / * … ,* / argN)

Exemplo:
O exemplo a seguir demonstra a sintaxe básica da sintaxe.setInterval()

const intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

function myCallback(a, b)
{
 // Your code here
 // Parameters are purely optional.
 console.log(a);
 console.log(b);
}
_____________________________________________________________________________________________
# clearInterval()
O método global clearInterval() cancela uma ação cronometrada e repetitiva que foi 
previamente estabelecida por uma chamada para definirInterval(). Se o parâmetro fornecido não
identificar uma ação previamente estabelecida, este método não faz nada.

Sintaxe
clearInterval(intervalID)

Exemplo:
// variable to store our intervalID
let nIntervId;

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
  }
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
*/