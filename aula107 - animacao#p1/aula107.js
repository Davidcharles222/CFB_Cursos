const carro=document.getElementById('carro')
const btn_parar=document.getElementById('btn_parar')
const btn_esquerda=document.getElementById('btn_esquerda')
const btn_direita=document.getElementById('btn_direita')


const init=()=>{
    carro.style='position: relative; left: 0px'
}

let anima=null

//função para mover automatico
const move=(dir)=>{
    carro.style.left=parseInt(carro.style.left) + (10*dir) +'px'  
}

btn_parar.addEventListener('click',(evt)=>{
    clearInterval(anima)//limpa o setinterval ANIMA
})


btn_esquerda.addEventListener('click',(evt)=>{
    clearInterval(anima)//limpa intervalo antes
    anima=setInterval(move,20,-1)//setInerval a função move, chama a função a cada 20 milisegundos de forma automatica e retorne o valor de -1 para função move, e atribui todos estes valores a anima
})


btn_direita.addEventListener('click',(evt)=>{
    clearInterval(anima)//limpa o intervado antes
    anima=setInterval(move,20,1)//setInerval a função move, chama a função a cada 20 milisegundos de forma automatica e retorne o valor de 1 para função move, e atribui todos estes valores a anima
})

window.onload=init