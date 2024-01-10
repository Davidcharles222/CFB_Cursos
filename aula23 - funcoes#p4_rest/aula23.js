//funçõa rest posso criar uma função com números de parâmetros que eu quiser, sem limitação
//função sem o rest os podemos operar 02 parâmetros na mesma função

function soma(...valores){//tranformando valores em REST 'array' com o spread
    let tam = valores.length//verificando quantos elementos temos em valores
    let res = 0 //criando let no valor 0
    for(let i = 0; i < tam; i++){//para i = 0, enquanto i menor que tam, i recebe 1
        res+=valores[i]//valor de 0 recebe a soma de 0 + valor da posição 0,1,2,3...
    }
    return res//retorne valor da soma res
}
console.log(soma(10,5,2,8))//mostre na tela o retorno da função soma

//SIMPLIFICANDO

function soma(...valores){
    let res = 0
    for (let v of valores){//percorra v dentro dos valores
        res+=v//res 0 recebe valor dele mesmo 0 + valor 10,5,2,8,15 percorrido de valores
    }
    return res
}
console.log(soma(10,5,2,8,15))