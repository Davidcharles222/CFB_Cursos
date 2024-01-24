//permite criar propriedades e métodos dentros deles

const objetos=document.getElementById('objetos')

const computador={
    cpu:'i9',//criamos PROPRIEDADE cpu dentro do compuador
    ram:'64gb',//criamos PROPRIEDADE ram dentro do compuador
    hd:'2tb',//criamos PROPRIEDADE hd dentro do compuador

    info:function(){
        console.log(`CPU:${this.cpu}`)
        console.log(`RAM:${this.ram}`)
        console.log(`HD.:${this.hd}`)
    }
}
computador.info()//chamando função info

computador['monitor']='22pol'//adicionando propriedades monitor no comp.
computador.placaVideo='rtx'//adicionando propriedades placaVideo no comp.

//------------------------------------------------------

const computadores=[//criando arrays dentro do objeto
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

console.log(computadores)
