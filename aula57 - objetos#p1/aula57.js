class Pessoa{//declarando class Pessoa
    constructor(pnome){//chamando contrutor, se parâmetro contrutor estiver com valor preciso mencionar valor na chamada new
        this.nome=pnome//declarando nome e valor pnome
    }
}

let p1=new Pessoa(10)//atribuindo valor p1 o valor 10
let p2=new Pessoa('David')//atribuindo valor David no p2
let p3=new Pessoa('Lucas')//atribuindo valor Lucas no p3

console.log(p1.nome)
console.log(p2.nome)
console.log(p3.nome)

//---------------------------------------------------

class Pessoa{//declarando class Pessoa
    constructor(){//chamando contrutor, se parâmetro contrutor estiver vazio não preciso preencher na chamada como exemplo de cima
        this.nome='David'//declarando nome e valor David
    }
}

let p1=new Pessoa()

console.log(p1.nome)