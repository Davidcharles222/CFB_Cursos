//utilizando função dentro da outra

const soma = (...valores) =>{//recebendo array da chamada
    const somar = val =>{//função interna onde val recebe o valores da chamada
        let res = 0
        for(v of val)//para v de valores
            res += v//res recebe a soma de res + v 10,5,15
        return res//returne a soma 30
    }
    return somar(valores)//retorno da função somar 30 e chamada da função somar
}
console.log(soma(10,5,15))//chamando a função externa - com retorno da função somar

//-----------------------------------------------------

//FORMA DO LADO DE FORA
const somar = val =>{//recebendo os valores da soma e atribuindo em val
    let res = 0
    for(v of val)//para v de val 10,5,15
        res += v//res 0 recebe o res + v 10 depois 5 depois 15
    return res//retornando res que é a soma dos valores
}
const soma = (...valores)=>{//chamado soma recebido com os valores 10,5,15
    return somar(valores)//retornando o resultado do somar e chamando os valores para função somar
}

console.log(soma(10,5,15))//chamando função soma 
