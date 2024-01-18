//quanto utilizamos o static, seu resultado compoe toda a classe e não a cada instância

class Npc{
    static alerta=false//toda a classe com propriedade alerta recebe false

    constructor(energia){
        this.energia=energia
    }

    info=function(){
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${Npc.alerta?'Sim':'Não'}`)//em vez e usar this.alerta -> Npc.alerta
        console.log(`---------------------------`)
    }

    static alertar=function(){
        Npc.alerta=true//toda a classe com methodo alerta recebe true
    }
}

const npc1=new Npc(100)
const npc2=new Npc(80)
const npc3=new Npc(30)

Npc.alertar()//chamando a função alertar com alerta true

npc1.info()//chamando função info console.log
npc2.info()
npc3.info()