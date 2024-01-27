const carro=document.getElementById('carro')
const btn_parar=document.getElementById('btn_parar')
const btn_esquerda=document.getElementById('btn_esquerda')
const btn_direita=document.getElementById('btn_direita')


const init=()=>{
    carro.style='position: relative; left: 0px; width: 100px'
    telmax=window.innerWidth - parseInt(carro.style.width)
}

let telmax= null
let anima = null


const move=(dir)=>{
    if(dir > 0){
        if(parseInt(carro.style.left) < telmax){
            carro.style.left=parseInt(carro.style.left) + (10*dir) +'px' 
            anima=setTimeout(move,20,dir)
        }else{
            carro.style.left=parseInt(carro.style.left) + (10*-1) +'px'
            anima=setTimeout(move,20,dir*-1)
            // console.log('chegou')
        }
    }else if(dir < 0){
        if(parseInt(carro.style.left) > 0){
            carro.style.left=parseInt(carro.style.left) + (10*dir) +'px'
            anima=setTimeout(move,20,dir)
        }else{
            carro.style.left=parseInt(carro.style.left) + (10*1) +'px'
            anima=setTimeout(move,20,dir*-1)
        }
    }  
}

btn_parar.addEventListener('click',()=>{
    clearTimeout(anima)
})

btn_esquerda.addEventListener('click',(evt)=>{
    clearTimeout(anima)
    move(-1)
})

btn_direita.addEventListener('click',(evt)=>{
    clearTimeout(anima)
    move(1)
})


//ao carregar a página chama a função
window.onload=init
window.addEventListener('resize',(evt)=>{
    telmax=window.innerWidth - parseInt(carro.style.left)
})

