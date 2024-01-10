//break ele encerra e sai do loop imediato
//continue pula para próxima interação do loop continuando dentro do loop

let n = 0
let max = 1000

while(n<max){//enquanto 0 for menor que 1000
    console.log('CFB Cursos - ' + n)//mostre cfb curso + n
    if(n>10){//se n for maior que o 10
        break//encerra e saia do loop
    }
    n++//n encrementa 1
}
console.log('Fim do programa')

//---------------------------------------

let n = 0
let max = 1000
let pares = 0

for (let i = n; i < max; i++){//
    if(i%2!=0){//se i divido por 2 for diferente de 0 -> neste caso retornaria impar, mais neste caso queremos pares.
        continue//então o continua irá pular o que for ímpar e ir para o próximo elemento
    }
    pares++//neste caso irá considerar somente os pares
}

console.log('Quantidade de pares: ' + pares)
console.log('Fim do programa')