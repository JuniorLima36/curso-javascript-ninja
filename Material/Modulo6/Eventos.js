/*
# DOMContentLoaded
O evento DOMContentLoaded é acionado quando o documento HTML foi completamente analisado, e 
todos os scripts diferidos (e ) baixaram e executaram. Ele não espera que outras coisas como 
imagens, subquadros e scripts assínco terminem o carregamento.

DOMContentLoaded não espera que as folhas de estilo carreguem, porém os scripts diferidos 
esperam por folhas de estilo e filas atrás de scripts diferidos. Além disso, scripts que não 
são diferidos ou async (por exemplo) aguardarão a carga de folhas de estilo já analisadas.

O alvo original para este evento é o Documento que carregou. Você pode ouvir este evento na 
interface para lidar com ele nas fases de captura ou borbulhante. Para obter detalhes completos
sobre este evento, consulte a página no evento Documento: DOMContentLoaded.Window

Um evento diferente, carga, deve ser usado apenas para detectar uma página totalmente carregada.
É um erro comum usar onde seria mais apropriado.loadDOMContentLoaded

Este evento não é cancelável.

Sintaxe
Use o nome do evento em métodos como addEventListener()ou defina uma propriedade de manipulador
de eventos.

addEventListener('DOMContentLoaded', (event) => {});

onDOMContentLoaded = (event) => { };

Exemplo - Uso básico
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
*/