//                 0         1         2
const nomes = ['Eduardo', 'Maria', 'Joana'];
// Pode ser utilizado o contrutor para criar um array
// const nomes = new Array('Eduardo', 'Maria', 'Joana')

// Nesse caso será inserida a Monica no indice 2 e sobrescreverá a Joana
nomes[2] = 'Monica'
// Será excluido o valor dentro da posição do array mas a posição será mantida
// delete nomes[2]
// [ 'Eduardo', 'Maria', <1 empty item> ]
console.log(nomes)


// ********** Passar Valor por referencia
//  Quando eu passo o valor por referencia e não faço uma cópia todos as alterações realizadas em um reflete no outro
// const novo = nomes
// novo.pop() - Esse comando retorna o elemento removido

// console.log(nomes)

// Para resolver a questão pode se utilizar o spread operator
const novo = [...nomes]
console.log(novo)


// FUNÇÃO SLICE
// Realiza o fatiamento do array, sendo o primeiro numero de onde inicia e o ultimo onde termina, lembrando que o ultimo indice não será contado
const nuevo = nomes.slice(1,3)
console.log(nuevo)