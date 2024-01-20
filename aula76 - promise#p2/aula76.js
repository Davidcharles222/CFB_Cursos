//PROMISE vem de promessa - retorna sempre alguma coisa depois de todo cod ser executado
//resolve -> ok
//reject -> não ok

const numero = document.getElementById('numero')
const btn_promessa=document.getElementById('btn_promessa')

btn_promessa.addEventListener('click',(evt)=>{
    numero.innerHTML='Processando...'
    promessa()

        .then((retorno)=>{//se a promesssa der no ok retorne esta condição - o retorno vai 'Deu tudo certo'
            numero.innerHTML=retorno
            numero.classList.remove('erro')
            numero.classList.add('ok')
        })

        .catch((retorno)=>{//se a promesssa não der no ok retorne esta condição - o retorno vai 'Deu tudo errado'
            numero.innerHTML=retorno
            numero.classList.add('erro')
            numero.classList.remove('ok')
        })
})


const promessa = ()=>{
    let p = new Promise((resolve,reject)=>{//1º parametro ok, 2º parametro não ok - posso usar outros nomes
        let resultado=true //onde controlo
        let tempo=3000 //equivale 3 segundos

        setTimeout(()=>{
            if(resultado){//se let resultado for true 
                resolve('Deu tudo certo')//retorne isso no resolve
            }else{
                reject('Deu tudo errado')//retorne isso no reject
            }
        },tempo)//depois do tempo de 3 segundos   
    })
    return p
}

numero.innerHTML='Esperando'