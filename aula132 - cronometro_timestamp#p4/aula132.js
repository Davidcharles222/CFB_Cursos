//CRONÔMETRO
const timer=document.getElementById('timer')
const btn_iniciar=document.getElementById('btn_iniciar')
const btn_parar=document.getElementById('btn_parar')
const btn_zerar=document.getElementById('btn_zerar')
const btn_parcial=document.getElementById('btn_parcial')
const parciaisregistradas=document.getElementById('parciaisregistradas')

let intervalo=null
let tmpini=null

const contador=()=>{
    const tmpatual=Date.now()
    let seg=(tmpatual-tmpini)/1000//transformando em segundos
    timer.innerHTML=converter(seg)//setando valor no relógio
}

const converter=(seg)=>{
    const hora=Math.floor(seg/3600)//dividindo segundos e 3600 segundos que tem o ano -> que aí conseguimos a hora
    const resto=seg%3600
    const minuto=Math.floor(resto/60)//transformando o resto em minutos
    const segundo=Math.floor(resto%60)//transformando o resto em segundos
    const tempoformatado=(hora<10?'0'+hora:hora)+':'+(minuto<10?'0'+minuto:minuto)+':'+(segundo<10?'0'+segundo:segundo)

    return tempoformatado//retornando o valor formatado da função 
}


btn_iniciar.addEventListener('click',(evt)=>{
    tmpini=Date.now()//pegando timestamp de agora
    intervalo=setInterval(contador,1000)//chamando setinterval para função contador
})

btn_parcial.addEventListener('click',(evt)=>{
    const parcial="<div>"+timer.innerHTML+"</div>"
    parciaisregistradas.innerHTML+=parcial
})

btn_parar.addEventListener('click',(evt)=>{
    clearInterval(intervalo)//limpando setinterval
})

btn_zerar.addEventListener('click',(evt)=>{
    tmpini=Date.now()//pegando timestamp de agora
    timer.innerHTML='00:00:00'//setando valor 00
    clearInterval(intervalo)//para para a contagem
    parciaisregistradas.innerHTML=''
})

