//Função Fábrica 

function pessoa(nome, sobrenome, peso){
  return {
    nome: nome,
    sobrenome: sobrenome,
    peso: peso,
    get nomec(){
      return `${nome} ${sobrenome} de Jesus`
    },
    set nomec(valor){
      this.peso = valor
    },
    get engorda(){
      this.peso = this.peso + 10
  }
}
}


let p1 = pessoa("Cleyton", "Batista", 95)

console.log(p1.nomec)
console.log(p1.peso)
p1.engorda
console.log(p1.peso)
p1.peso = 110
console.log(p1.peso)




