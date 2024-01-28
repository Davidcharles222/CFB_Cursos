//Trabalhando com API
const p_temp=document.getElementById('p_temp')
const p_nivel=document.getElementById('p_nivel')
const p_press=document.getElementById('p_press')
const btn_texto=document.getElementById('btn_texto')

//Link do replit - que foi criado
/****** PEGAR DADOS DA API PARA O DOM ***********/
const endpoint="https://55de2a05-034b-403b-895a-bf516234e35a-00-p15tjoznk7ri.kirk.replit.dev/"

const obterDados=()=>{//função para ser chamada
    res = fetch(endpoint)//utilizamos o fetch para api
    .then(res=>res.json())//resposta -> retorno dos dados res
    .then(dados=>{//resposta -> retorno dos dados api
        console.log(dados)
        p_temp.innerHTML=`Temperatura: ${dados.temperatura}`
        p_nivel.innerHTML=`Nivel: ${dados.nivel}`
        p_press.innerHTML=`Pressão: ${dados.pressao}`
    })
}

// let intervalo = setInterval(obterDados,1000)



/********* ENVIAR DADOS PARA API **********/
let dados={
    nome:'Bruno',
    canal: 'CFBCursos',
    curso: 'Javascript'
}

let cabecalho={
    method: 'POST',//Importante definir o method
    body:JSON.stringify(dados)//Passando os dados para o body convertido em JSON
}

const gravarDados=()=>{//função gravarDados
    //LINK do API que irá receber os dados
    const endpoint="XXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    fetch(endpoint,cabecalho)//no fetch definimos os metodos
    .then(res=>res.json())//resposta -> retorno dos dados res
    .then(ret=>{//retorna os dados
        console.log(ret)
    })
}

btn_texto.addEventListener('click',(evt)=>{
    gravarDados()
})

//PARA APIs estudar sobre Node-RED