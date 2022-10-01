/*
# Sync vs Async
Qual é a diferença entre código síncrocro e assíncrono em JavaScript?

O código síncrocros é executado em sequência. Isso significa que cada operação deve aguardar 
a conclusão da anterior antes da execução.

console.log('One');
console.log('Two');
console.log('Three');
// LOGS: 'One', 'Two', 'Three'

O código assíncrono funciona em paralelo. Isso significa que uma operação pode ocorrer 
enquanto outra ainda está sendo processada.

console.log('One');
setTimeout(() => console.log('Two'), 100);
console.log('Three');
// LOGS: 'One', 'Three', 'Two'

A execução de código assíncroníncro é muitas vezes preferível em situações em que a execução 
pode ser bloqueada indefinidamente. Alguns exemplos disso são solicitações de rede, cálculos 
de longo prazo, operações do sistema de arquivos etc. O uso do código assíncronivo no 
navegador garante que a página permaneça responsiva e que a experiência do usuário não seja 
afetada.
*/