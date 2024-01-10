//São funções que não possuem um nome associoado ao seu conteúdo
//Quando declaro ela não fica na memória, só criada no momento da execução
//Preciso associar em uma variável

const f = function(v1,v2){
    return v1 + v2
}
console.log(f(10,5))

//--------------------------------------

const f = function(...valores){
    let res = 0
    for(v of valores){
        res+=v
    }
    return res
}
console.log(f(10,5))

//---------------------------------------

//função construtor -> para funções mais simples

const f = new Function("v1","v2","v3","return v1+v2+v3")//função construtor anônim
//Obs. inicia com new, o Function precisa se maiúsculo,os parâmetros e resultados em aspas 1º parametro 2º retorno
console.log(f(10,5,15))