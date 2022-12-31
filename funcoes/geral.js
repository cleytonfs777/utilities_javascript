/*
Função Fábrica 

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
*/

function Pessoa(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade

  this.falanome = function(){
    console.log(`${this.nome} tem idade de ${this.idade} anos`)
  }
}

let p1 = new Pessoa("Cleyton","Batista",34)
let p2 = new Pessoa("Maria","Zelia",14)

p1.falanome()
p2.falanome()