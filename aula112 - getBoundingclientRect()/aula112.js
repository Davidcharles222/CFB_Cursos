//consigo ter acesso na posição x,y,largura e altura
const q1=document.getElementById('q1')
const q2=document.getElementById('q2')
const posx=document.getElementById('posx')
const posy=document.getElementById('posy')
const largura=document.getElementById('largura')
const altura=document.getElementById('altura')


const info=(el)=>{
    let DOMRect_q=(el.getBoundingClientRect())
    posx.innerHTML=`posx:${DOMRect_q.x}`//posição de x do quadrado
    posy.innerHTML=`posy:${DOMRect_q.y}`//posição de y do quadrado
    largura.innerHTML=`largura:${DOMRect_q.width}`//largura quadrado
    altura.innerHTML=`altura:${DOMRect_q.height}`//altura quadrado
}

q1.addEventListener('click',(evt)=>{
    info(evt.target)
})

q2.addEventListener('click',(evt)=>{
    info(evt.target)
})