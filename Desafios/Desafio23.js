/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
const $display = document.getElementById('display');
const $buttons = document.querySelectorAll('button');

let expression = '';

$buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent;
    
    if (button.dataset.js === 'num') {
      handleNumber(buttonValue);
    } else if (button.dataset.js === 'op') {
      handleOperation(buttonValue);
    } else if (button.dataset.js === 'equal') {
      handleEqual();
    } else if (button.dataset.js === 'clear') {
      handleClear();
    }
  });
});

function handleNumber(value) {
  if ($display.value === '0') {
    $display.value = value;
  } else {
    $display.value += value;
  }
  expression += value;
}

function handleOperation(op) {
  const lastChar = expression.slice(-1);
  if (lastChar === '+' || lastChar === '-' || lastChar === 'x' || lastChar === '÷') {
    expression = expression.slice(0, -1) + op;
  } else {
    expression += op;
  }
  $display.value = expression;
}

function handleEqual() {
  try {
    const result = eval(expression);
    $display.value = result;
    expression = result.toString(); 
  } catch (error) {
    $display.value = 'Erro';
    expression = ''; 
  }
}

function handleClear() {
  $display.value = '0';
  expression = '';
}