/*
# try-catch
As declarações try...catch marcam um bloco de declarações para testar (try), e especifica 
uma resposta, caso uma exceção seja lançada.

Sintaxe
try {
   try_statements
}
[catch (exception_var_1 if condition_1) {
   catch_statements_1
}]
...
[catch (exception_var_2) {
   catch_statements_2
}]
[finally {
   finally_statements
}]

A declaração try consiste em um bloco try, que contém uma ou mais declarações, e ao menos uma 
cláusula catch ou uma cláusula finally, ou ambas. Ou seja, há 3 formas de declarações try :
- try...catch
- try...finally
- try...catch...finally

Exemplo:
try {
  try {
    throw new Error("oops");
  }
  catch (ex) {
    console.error("inner", ex.message);
  }
  finally {
    console.log("finally");
  }
}
catch (ex) {
  console.error("outer", ex.message);
}
// Resultado:
// "inner" "oops"
// "finally"
_______________________________________________________________________________________________
throw
A declaração throw lança uma exceção definida pelo usuário. A execução da função atual vai 
parar (as instruções após o throw não serão executadas), e o controle será passado para o 
primeiro bloco catch na pilha de chamadas. Se nenhum bloco catch existe entre as funções 
"chamadoras", o programa vai terminar.

Sintaxe
throw expressão;

Descrição
Use a instrução throw para lançar uma exceção. Quando você lança uma exceção, expressão 
especifica o valor da exceção. Cada uma das intruções a seguir lança uma exceção:

throw "Erro2"; // gera uma exceção com um valor string
throw 42;      // gera uma exceção com o valor 42
throw true;    // gera uma exceção com o valor true

Exemplo:
Lançando um objeto
Você pode especificar um objeto quando você lança uma exceção. Você pode então referenciar 
as propriedades do objeto no bloco catch. O exemplo a seguir cria um objeto do tipo 
UserException e o usa na intrução throw.

function UserException(message) {
   this.message = message;
   this.name = "UserException";
}
function getMonthName(mo) {
   mo = mo-1; // Ajusta o número do mês para index de array (1=Jan, 12=Dec)
   var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct", "Nov", "Dec"];
   if (months[mo] !== undefined) {
      return months[mo];
   } else {
      throw new UserException("InvalidMonthNo");
   }
}

try {
   // statements to try
   var myMonth = 15; // 15 is out of bound to raise the exception
   monthName = getMonthName(myMonth);
} catch (e) {
   monthName = "unknown";
   logMyErrors(e.message, e.name); // pass exception object to err handler
}
*/