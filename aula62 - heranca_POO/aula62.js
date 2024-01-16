//classe que herda outra classe  --> classe PAI e classe FILHO

//---------PAI-----------------
class Carro{//Classe PAI / BASE
    constructor(nome,portas){//no contrutor invoco nome , portas
        this.nome=nome//invoco de nome no contrutor
        this.portas=portas//invoco de portas no contrutor
        this.ligado=false
        this.vel=0
        this.cor=undefined
    }
    ligar=function(){//criando função ligar para utilização da chamada
        this.ligado=true
    }
    desligar=function(){//criando função desligar para utilização da chamada
        this.ligado=false
    }
    setCor=function(cor){//criando função setCor para utilização da chamada
        this.cor=cor
    }
}


//---------FILHO 1----------------
class Militar extends Carro{//Classe Filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)//chamando o super para parametros do pai
        this.blindagem=blindagem
        this.municao=municao
        this.cor=undefined
    }
    setCor=function(cor){//criando função setCor para utilização da chamada
        this.cor=cor
    }
    atirar=function(){//criando função atirar para utilização da chamada
        if(this.municao>0){
            this.municao--
        }
    }
}


//---------FILHO 2----------------
class particular extends Carro{//Classe Filho
    constructor(nome,portas,lugares){
        super(nome,portas)//chamando o super para parametros do pai
        this.lugares=lugares
    }
}


//--------CHAMANDO A CLASSE PAI---------
const c1=new Carro('Normal', 4)//classe PAI carro recebe informações no construtor
c1.ligar()//c1 chamando a função ligar, onde o ligado recebe true
c1.setCor('Preto')//c1 chamando a função setCor e adicionando o preto


//--------CHAMANDO A CLASSE FILHO 1 --------
const c2=new Militar('Lutador',1,100,50)//classe FILHO militar recebe informações no construtor
c2.setCor('Verde')
c2.atirar()//chamando função atirar - diminui no valor munição
c2.atirar()
c2.atirar()
c2.atirar()
c2.atirar()


//--------CHAMANDO A CLASSE FILHO 2 --------
const c3=new particular('Corsa',2,7)


//MOSTRANDO NO CONSOLE C1 - PAI
console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${(c1.ligado?'Sim':'Não')}`)//ternária
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log(`------------------------`)


//MOSTRANDO NO CONSOLE C2 - FILHO 1
console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${(c2.ligado?'Sim':'Não')}`)//ternária
console.log(`Velocidade: ${c2.vel}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)
console.log(`Cor: ${c2.cor}`)
console.log(`------------------------`)


//MOSTRANDO NO CONSOLE C3 - FILHO 2
console.log(`Nome: ${c3.nome}`)
console.log(`Portas: ${c3.portas}`)
console.log(`Lugares: ${c3.lugares}`)