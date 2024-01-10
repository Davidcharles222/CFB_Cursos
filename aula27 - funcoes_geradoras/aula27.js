//a proprio função pode ter este controle quando ela quiser retornar alguma coisa
//posso ir retornando coisas ao longo da função 
//para geradores precisamos utilizar a palavra function -> oque indica uma função geradora? colocar *

function* cores(){//precisa utilizar * e yield funciona como um retorno
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc = cores()//chamando função com atribuição
console.log(itc.next().value)//no itc ele pega o tipo do elemento,next indica proximo elemento - valor 'Vermelho
console.log(itc.next().value)//esta interação é por parte, item por item -> valor 'Verde'
console.log(itc.next().value)//valor 'Azul
console.log(itc.next().value)//este vai dar erro que a partir do ultimo elemento não tem mais nada a percorrer

//--------------------------------------------------------

function* perguntas(){//função garadora perguntas
    const nome = yield 'Qual seu nome?'//atribuindo e realizando a parada com yield
    const esporte = yield 'Qual seu esporte favorito?'//atribuindo e realizando a parada com yield
    return 'Seu nome é ' + nome + ' , seu esporte favorito é ' + esporte//meu retorno
}
const itp = perguntas()//atribuindo e chamando função perguntas
console.log(itp.next().value)//retorna resultado
console.log(itp.next('Bruno').value)//retorna primeiro yield e faz a chamada do nome
console.log(itp.next('Natação').value)//retorna segundo yield e faz a chamada do esporte

//---------------------------------------------------------

function* contador(){
    let i = 0
    while(true){//loop infinito quando fazemos desta forma 
        yield i++//enquanto true retorne valor de i + ele mesmo infinitamente
        if(i > 5)//se i form maior que o 5 pare
        break
    }
}
const itc = contador()//chamando minha função contador e incrementando no itc
for(let c of itc){//para o c dentro dos valores do contado 0,1,2,3,4
    console.log(c)//mostre o valor do c onde foi percorrido -> 0,1,2,3,4

}