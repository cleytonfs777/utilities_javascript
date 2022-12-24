function soma(a, b){
  if(typeof(a) !== 'number' || typeof(b) !== 'number'){
// Lançamento de erro apenas com string
 //   throw('a e b obrigatóriamente devem ser numeros')
// Lançamento de erro tipado
  throw new Error('a e b obrigatóriamente devem ser numeros')
  }
  return a + b
}
//Tratamento de erros
try{
  console.log(soma(2,6))
}catch(e){
  /* Não se recomenda lançar erros na tela 
  console.log(e)*/
  console.log("Algo saiu errado")
}
// Esse bloco sempre será executado
finally{
  console.log(" Independente do que ocorer eu to aqui")
}