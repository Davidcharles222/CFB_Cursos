class Pessoa{
    constructor(pnome,pidade){
        this.nome=pnome
        this.idade=pidade
    }

    getNome(){
        return this.nome
    }
    getidade(){
        return this.idade
    }

    setNome(nome){
        this.nome=nome
    }
    setidade(){
        this.idade=idade
    }

    info(){
        console.log(`Nome..: ${this.nome}`)
        console.log(`Idade.: ${this.idade}`)
        console.log(`---------------------`)
    }
}

const nome=document.querySelector('#f_nome')//relacinando o id f_nome
const idade=document.querySelector('#f_idade')//relacionando o id f_idade
const btn_add=document.querySelector('#btn_add')//relacionando o id btn_add
const res=document.querySelector('.res')//relacionando a class res

let pessoas=[]//array que irá receber os valores pessoas

const addPessoa=()=>{//função criada e atribuida a addPessoa
    res.innerHTML=''//resultado irá aparecer vazio
    pessoas.map((p)=>{//percorrendo todos valores da array pessoas
        const div=document.createElement('div')//criando div 
        div.setAttribute('class','pessoa')//atribuindo id pessoa na div
        div.innerHTML=`Nome:${p.getNome()}<br/>Idade:${p.getidade()}`//html da div mostra nome e pega valor de nome e idade
        res.appendChild(div)//anexa no resultado a div com o valor
    })
}

btn_add.addEventListener('click',(evt)=>{//criando evento de click para btn_add
    const p=new Pessoa(nome.value,idade.value)//p chamando o methodo class new Pessoa, recebe nome value que for digitado e idade value que for digitado
    pessoas.push(p)//array pessoas recebe e adiociona valor do p
    nome.value=''//nome limpa valor no input
    idade.value=''//idade limpa valor no input
    nome.focus()//input nome fica com mouse clicado
    addPessoa()//chamando função addPessoa
})