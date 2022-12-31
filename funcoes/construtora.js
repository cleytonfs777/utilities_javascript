// FUNÇÃO CONSTRUTORA

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