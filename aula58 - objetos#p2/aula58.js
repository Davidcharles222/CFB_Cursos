class Carro{//declarando Carro na class
    constructor(pnome,ptipo){//chamando contrutor com pnome, ptipo
        this.nome=pnome//nome recebe pnome onde será atribuido nos parâmetros la embaixo

        if(ptipo==1){//se o tipo lá embaixo for igual a 1 retorne os parâmetros no let mencionado
            this.tipo='Esportivo'
            this.velmax=300
        }else if(ptipo==2){//se o tipo lá embaixo for igual a 2 retorne os parâmetros no let mencionado
            this.tipo='Utilitário'
            this.velmax=100
        }else if(ptipo==3){//se o tipo lá embaixo for igual a 3 retorne os parâmetros no let mencionado
            this.tipo='Passeio'
            this.velmax=160
        }else{//se o tipo lá embaixo for diferente dos números citados retorne os parâmetros na let
            this.tipo='Militar'
            this.velmax=180
        }
    }
    info(){//info adicionado para chamar de forma automática
        console.log(`Nome.: ${this.nome}`)
        console.log(`Tipo.: ${this.tipo}`)
        console.log(`V.Max: ${this.velmax}`)
        console.log(`---------------------`)
    }
}

let c1=new Carro('Rapidão', 1)//atribuindo valor de acordo com a posição do tipo
let c2=new Carro('Super Luxo', 2)//atribuindo valor de acordo com a posição do tipo
let c3=new Carro('Bombadão', 4)//atribuindo valor de acordo com a posição do tipo
let c4=new Carro('Carrego tudo', 3)//atribuindo valor de acordo com a posição do tipo

c1.info()//chamando c1 com a informação info
c2.info()//chamando c2 com a informação info

//-----------------------------------------------------------

class Carro{//declarando Carro na class
    canal='CFB Cursos'
    constructor(pnome,ptipo){
        this.nome=pnome
        this.canal='Youtube'

        if(ptipo==1){
            this.tipo='Esportivo'
            this.velmax=300

        }else if(ptipo==2){
            this.tipo='Utilitário'
            this.velmax=100
            
        }else if(ptipo==3){
            this.tipo='Passeio'
            this.velmax=160

        }else{
            this.tipo='Militar'
            this.velmax=180
        }
    }


    getNome(){
        return this.nome
    }
    getTipo(){
        return this.tipo
    }
    getvelmax(){
        return this.velmax
    }


    setNome(nome){
        this.nome=nome
    }
    setTipo(tipo){
        this.tipo=tipo
    }
    setVelmax(velmax){
        this.velmax=velmax
    }


    info(){//info adicionado para chamar de forma automática
        console.log(`Nome.: ${this.nome}`)
        console.log(`Tipo.: ${this.tipo}`)
        console.log(`V.Max: ${this.velmax}`)
        console.log(`Canal: ${this.canal}`)
        console.log(`---------------------`)
    }
}

let c1=new Carro('Rapidão', 1)//atribuindo valor de acordo com a posição do tipo
let c2=new Carro('Super Luxo', 2)//atribuindo valor de acordo com a posição do tipo
let c3=new Carro('Bombadão', 4)//atribuindo valor de acordo com a posição do tipo
let c4=new Carro('Carrego tudo', 3)//atribuindo valor de acordo com a posição do tipo

c1.setNome('Super Veloz')
c1.setTipo('Corrida')
c1.setVelmax('500')
c1.info()