const carro=document.getElementById('carro')
const btn_esquerda=document.getElementById('btn_esquerda')
const btn_direita=document.getElementById('btn_direita')

//função para adicionar na div a position e o left
const init=()=>{
    carro.style='position: relative; left: 0px'
}

//quando clicar carro recebe no style o número interio -10 + o px
btn_esquerda.addEventListener('click',(evt)=>{
    carro.style.left=parseInt(carro.style.left) - 10 + 'px'
})

//quando clicar carro recebe no style o número intero 10 mais o valor dele mesmo
btn_direita.addEventListener('click',(evt)=>{
    let pos=parseInt(carro.style.left)
    pos+=10
    carro.style=`position: relative; left:${pos}px`
})

//ao carregar a página chama a função
window.onload=init