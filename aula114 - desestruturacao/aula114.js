let numeros=()=>{
    return [10,20,30,40]
}

let[a,b,c,d]=numeros()//a desestruturação acontece na mesma ordem

console.log(a)//retorna 10
console.log(b)//retorna 20
console.log(c)//retorna 30
console.log(d)//retorna 40

//----------------------------------

let numeros1=[10,20,30,40,50,60,70,80,90]
let[a,b,c,...d]=numeros1//ele acompanha a ordem e o d recebe o restante do array
console.log(a)
console.log(b)
console.log(c)
console.log(d)

//--------------------------------------

let obj={nome:'Bruno',canal:'CFBCursos',curso:'Javascript'}
let {nome,canal}=obj//propriedade precisa ser a mesma para objetos
console.log(nome)
console.log(canal)

//--------------------------------------

const cores=()=>{
    return ['verde','amarelo','azul','branco']
}

let[c1,c2,c3]=cores()
console.log(c1)
console.log(c2)
console.log(c3)

//----------------------------------------

let texto='Curso de Javascript'
let[p1,p2,p3]=texto.split(' ')
console.log(p1)
console.log(p2)
console.log(p3)