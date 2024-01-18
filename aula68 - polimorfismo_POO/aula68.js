//dois metodos com funcinalidades diferentes
class Carro{
    constructor(tipo,estagioTurbo){
        this.turbo=new Turbo(estagioTurbo)//a classe turbo irá receber valor do estagioTurbo
        if(tipo==1){
            this.velMax=120
            this.nome='normal'
        }else if(tipo==2){
            this.velMax=160
            this.nome='esportivo'
        }else if(tipo==3){
            this.velMax=200
            this.nome='super esportivo'
        }
        this.velMax += this.turbo.pot
    }
    info(){
        console.log(this.nome)
        console.log(this.velMax)
        console.log(this.turbo)
        console.log('----------')
    }
}

class Turbo{
    constructor(e){//este valo do e irá receber o seu valor no estagio turbo da class Carro
        if(e==0){
            this.pot=0
        }else if(e==1){
            this.pot=50
        }else if(e==2){
            this.pot=75
        }else if(e==3){
            this.pot=100
        }
    }
}

class CarroEspecial extends Carro{
    constructor(estagioTurbo){
        super(4,estagioTurbo)
        this.tipoInfo=0//regulagem de qual info chamar
        this.velMax=300 + this.turbo.pot
        this.nome='Carro especial'
    }
    info(){//POLIMORFISMO -> info sobrepoe do pai
        if(this.tipoInfo==1){
            super.info()//chamando super do pai
        }else{
            console.log(`Nome...: ${this.nome}`)
            console.log(`Vel.Max: ${this.velMax}`)
            console.log(`Turbo..: ${this.turbo.pot}`)
            console.log('---------------------')
        }
    }
}

const c1=new Carro(1,0)
const c2=new Carro(2,1)
const c3=new CarroEspecial(3)

c1.info()
c2.info()
c3.info()