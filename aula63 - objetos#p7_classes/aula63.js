
const f_nome=document.querySelector('#f_nome')
const f_portas=document.querySelector('#f_portas')
const f_blindagem=document.querySelector('#f_blindagem')
const f_municao=document.querySelector('#f_municao')
const f_tipoMilitar=document.querySelector('#f_tipoMilitar')
const f_tipoNormal=document.querySelector('#f_tipoNormal')
const btn_addCarro=document.querySelector('#btn_addCarro')
const carros=document.querySelector('.carros')

let a_carros=[]
let i = 0//let criada para evento de remover o carro -> puxo a posição de cada carro

const removerCarro=(quem)=>{//função remover 
    a_carros=a_carros.filter((el)=>{//na array carros filtra os elementos que...
        return el.i != quem//a posição de cada elemento seja diferente de quem, filtra somente os elementos que seja diferente da posição, automaticamente irá excluir a div.
    })
}

//evento de click para o tipo normal 
f_tipoNormal.addEventListener('click',(evt)=>{
    f_nome.focus()
    f_nome.value=''
    f_portas.value=0
    f_blindagem.value='0'
    f_municao.value='0'
    f_blindagem.setAttribute('disabled','disabled')//adicionando no evento o atributo disabled
    f_municao.setAttribute('disabled','disabled')//adicionando no evento o atributo disabled
})

//evento de click para o tipo militar
f_tipoMilitar.addEventListener('click',(evt)=>{
    f_nome.focus()
    f_nome.value=''
    f_portas.value=0
    f_blindagem.value='0'
    f_municao.value='0'
    f_blindagem.removeAttribute('disabled','disabled')//removendo no evento o atributo disabled
    f_municao.removeAttribute('disabled','disabled')//removendo no evento o atributo disabled
})

//criando função gerenciar carros para criar as divs e anexar os carros percorridos
const gerenciaExibicaoCarros=()=>{
    carros.innerHTML=''
    a_carros.forEach((c)=>{
        const div=document.createElement('div')
        const btn=document.createElement('button')

        btn.addEventListener('click',(evt)=>{//evento de click para o btn remover
            let btn = c.i//btn recebe o valor da posição que criei
            removerCarro(btn)//chamando a função removerCarro e atribuindo a posição do btn
            gerenciaExibicaoCarros()//chamando função gerencia...
        })

        div.setAttribute('class','carro')
        div.innerHTML=`Nome: ${c.nome}<br/>`
        div.innerHTML+=`Portas: ${c.portas}<br/>`
        div.innerHTML+=`Blindagem: ${c.blindagem}<br/>`
        div.innerHTML+=`Munição: ${c.municao}<br/>`
        // div.innerHTML+=`Posição ${c.i}` ->> deixei oculto para ficar mais dinâmico
        btn.innerHTML='Remover'

        div.appendChild(btn)
        carros.appendChild(div)
    })
}

//criando evento do botão
btn_addCarro.addEventListener('click',(evt)=>{
    if(f_tipoNormal.checked){//se tipo normal estiver marcado

        if(f_nome.value != '' && f_portas.value !=0){
        const c=new Carro(f_nome.value,f_portas.value)//chama a class Carro com os parâmetros do input
        a_carros.push(c)//array recebe os valores de c
        i++//a cada click soma 1
        }

    }else if(f_nome.value != '' && f_portas.value !=0 && f_blindagem.value !=0 && f_municao.value !=0){
        const c=new Militar(f_nome.value,f_portas.value,f_blindagem.value,f_municao.value)
        a_carros.push(c)
        i++//a cada click soma 1
    }

    gerenciaExibicaoCarros()//chamando função gerenciar carros para passar os parâmetros dos carros criados
})

//---------PAI-----------------
class Carro{//Classe PAI / BASE
    constructor(nome,portas){
        this.nome=nome
        this.portas=portas
        this.i=i//adicionei na class carro a posição
    }
}

//---------FILHO 1----------------
class Militar extends Carro{//Classe Filho
    constructor(nome,portas,blindagem,municao){
        super(nome,portas)
        this.blindagem=blindagem
        this.municao=municao
        this.i=i//adicionei na class militar a posição
    }
}

