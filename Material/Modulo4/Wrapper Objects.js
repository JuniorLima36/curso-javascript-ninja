/*
# Wrapper
Em linguagens de programação, como o JavaScript, um wrapper é uma função destinada a chamar 
uma ou mais funções, às vezes diretamente por conveniência, e às vezes adaptá-las para fazer 
uma tarefa ligeiramente diferente no processo.

# Object
O construtor Object cria um wrapper de objeto.

Sintaxe
// Object initialiser or literal
{ [ nameValuePair1[, nameValuePair2[, ...nameValuePairN] ] ] }

// Called as a constructor
new Object([value])

O construtor Object cria um wrapper de objeto para o valor fornecido. Se o valor for null ou 
undefined, ele criará e retornará um objeto vazio, caso contrário, retornará um objeto de um 
Type que corresponde ao dado valor. Se o valor já for um objeto, ele retornará o valor.

Quando chamado em um contexto não-construtor, o object se comporta de forma idêntica ao new 
Object ().

° Objetos podem ter propriedades e métodos, enquanto valores primitivos não podem.
° JavaScript tem três tipos primitivos: String, números e booleanos.
° Quando você interage com um valor primitivo como se fosse um objeto (chamando um método ou 
lendo uma propriedade a partir dele), JavaScript cria um objeto wrapper na mosca.
° Você leu acesso a propriedades e métodos de objetos wrapper, como se fossem objetos 
regulares.
° Um objeto wrapper é descartado logo após um único uso.
° Devido a este mecanismo de eliminação automática, propriedades e métodos injetados em 
objetos wrapper são imediatamente perdidos.
° Cada tipo primitivo tem um tipo de contrapartida para seus objetos wrapper. Estes tipos 
são String, Number e Boolean.
° É possível instanciar um objeto wrapper explicitamente, usando seu construtor. No entanto,
raramente é necessário (se em tudo). Normalmente, a melhor abordagem é usar objetos regulares
em vez disso.
*/