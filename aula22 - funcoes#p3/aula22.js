//funções parametrizadas quando temos valors dentro dos parênteses

function soma(n1,n2){//na mesma ordem
    console.log(n1+n2)
}
soma(10,5)//na mesma ordem

//---------------------------------------

function soma(n1=0,n2=0){//podemos assumir valores padrões para que não de erro
    console.log(n1+n2)
}
soma(10)

//---------------------------------------

function soma(n1=0,n2=0){
    return n1 + n2//quando utilizamos o retorno, podemos chamar o console.log direto na chamada
}
console.log(soma(10))

//---------------------------------------

let valor = 0 //valor recebe 0
console.log(valor)//mostre valor 0 na tela

//---------------------------------------

function add(v){
    return valor + v//retorne a soma entre valor e v
}

valor = add(10)//chama função com valor 10 no parâmetro
console.log(valor)//mostre v 10 + valor 0 = 10

valor = add(5)//chama função com valor 5 no parâmetro
console.log(valor)//mostre v 5 + valor 10 = 15