//               -5       -4        -3        -2         -1
//                0        1         2         3          4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
const nomes2 = ['Maria', 'João', 'Eduardo', 'Cesar', 'Júlia'];
const nomes3 = ['Maria', 'João', 'Gomes', 'Cesar', 'Júlia'];

// Função Splice
//              de que indice inicia    quantos quero apagar  elementos a adicionar separados por virgula
// nomes.splice(          0            ,           1        ,      elem1, elem2, elem3, elem4)
// Simular a função pop
let removed = nomes.splice(-1, 1)
console.log(removed)
console.log(nomes)

let removed2 = nomes2.splice(3, 2)
console.log(removed2)
console.log(nomes2)
// Tambem podemos inserir valores removendo ou não elementos

// let removed3 = nomes3.splice(3, 0, 'Cleyton', 'Tomas')
let removed3 = nomes3.splice(3, 2, 'Cleyton', 'Tomas')
console.log(removed3)
console.log(nomes3)