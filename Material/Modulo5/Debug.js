/*
# debugger
A declaração debug invoca qualquer funcionalidade de depuração disponivel, como definir um 
breakpoint. Se nenhuma funcionalidade de depuração estiver disponivel, essa declaração não 
tem nenhum efeito.

Sintaxe
debugger;

Exemplo:
O exemplo a seguir mostra o código onde uma declaração debugger foi inserida para invocar um 
depurador (se um existir) quando a função for chamada.

function codigoPotencialmenteBugado() {
    debugger;
    // faça atividades de depuração como examinar, pular um passo etc.
}

Quando o depurador é invocado, a execução é parada na declaração debugger. É como um 
breakpoint no código-fonte.
*/