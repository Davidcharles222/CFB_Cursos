//conhecida como função lambda -> funções anônimas
//função de seta => arrow function - substitui o valor function por "=>",porém na frente dos parântros()

const soma = (v1,v2) => {return v1+v2}
console.log(soma(10,5)) 

//----------------------------------------------

//se for colocar somente um parâmetro, não precisa de parênteses
const nome = v1 => {return v1}
console.log(nome(10))

//----------------------------------------------

//quando não utilizamos o return não precisamos usar as chaves
const add = n => n + 10
console.log(add(10))

//----------------------------------------------

//se for uma chamada mais complexa - precisamos usar o return
const soma1 = (v1,v2) =>{
    let res = v1+v2
    return res
}
console.log(soma1(10,5))