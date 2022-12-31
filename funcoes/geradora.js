function* geradora1(){
    // Código qualuqer
    yield 'Valor 1';
    // Código qualquer
    yield 'Valor 2'
    // Código qualquer
    yield 'Valor 3'
}

const g1 = geradora1();
// Faz iteração a cada entrega de valor
// console.log(g1.next().value)
// console.log(g1.next().value)
// console.log(g1.next().value)

// Pode ser usado com o for em iteraçãog

for(let valor of g1){
    console.log(valor)
}