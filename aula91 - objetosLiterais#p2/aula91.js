//permite criar propriedades e métodos dentros deles

const objetos=document.getElementById('objetos')

const computador={//podemos criar objeto como base com as propriedades vazias e ir criando objetos abaixo e atribuindo valores a eles
    cpu:'',
    ram:'',
    hd:'',

    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD.:${this.hd}`)
    }
}
computador.info()

computador['monitor']='22pol'
computador.placaVideo='rtx'
delete(computador.hd)//removendo a propriedade hd do objeto computador

const c1=Object.assign({},computador)//clonando o objeto computador, nesse caso o c1 recebe todas propriedades do objeto computador acima
c1.info()

const c2=Object.create(computador)//criando um objeto atrelado ao objeto computador e imputando informações nas propriedades
c2.cpu='i9'
c2.ram='32gb'
c2.hd='2tb'
c2.info()


//-----------------------------------------------------
const o1={obj1:'1'}
const o2={obj2:'2'}
const o3={obj3:'3'}
const o4=Object.assign(o1,o2,o3)//mesclando os 3 objetos em um só objeto o4
console.log(o4)
//------------------------------------------------------

const computadores=[
    {
        cpu:'i9',
        ram:'64gb',
        hd:'2tb'
    },
    {
        cpu:'i7',
        ram:'21gb',
        hd:'2tb'
    },
    {
        cpu:'i5',
        ram:'16gb',
        hd:'1tb'
    }
]

computadores.forEach((c)=>{
    const div=document.createElement('div')
    div.innerHTML=c.cpu+'<br/>'+c.ram+'<br/>'+c.hd
    div.setAttribute('class','computador')
    objetos.appendChild(div)
})


