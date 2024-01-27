const carro=document.getElementById('carro')
const btn_parar=document.getElementById('btn_parar')
const btn_play=document.getElementById('btn_play')



const init=()=>{
    carro.style='position: relative; left: 0px; width: 100px; height: 40px'
    tamCarro=parseInt(carro.style.width)
    telmax=window.innerWidth - tamCarro
}

let telmax= null
let anima = null
let tamCarro=null
let dir=0

const move=()=>{
    if(parseInt(carro.style.left) >= telmax){
        dir=-1
    }else if(parseInt(carro.style.left) <= 0){
        dir=1
    }  
    carro.style.left=parseInt(carro.style.left) + (10*dir) +'px'
    anima=setTimeout(move,20)
}

btn_parar.addEventListener('click',()=>{
    clearTimeout(anima)
})

btn_play.addEventListener('click',(evt)=>{
    move()
})

window.addEventListener('load',init())
window.addEventListener('resize',(evt)=>{
    telmax=window.innerWidth - parseInt(carro.style.width)
})


window.addEventListener('keydown',(evt)=>{
    if(evt.code === 'ArrowUp'){//se o cod for igual a seta para baixo faz isso
        carro.style.width=parseInt(carro.style.width)+10+'px'
        carro.style.height=parseInt(carro.style.width)+10+'px'
    }
    if(evt.code === 'ArrowDown'){//se o cod for igual a seta para cima faz isso
        carro.style.width=parseInt(carro.style.width)-10+'px'
        carro.style.height=parseInt(carro.style.width)-10+'px'
    }
    tamCarro=parseInt(carro.style.width)
    telmax=window.innerWidth - tamCarro
})