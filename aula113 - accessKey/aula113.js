//permite definir uma tecla de atalho para um componente HTML
const q1=document.getElementById('q1')
const q2=document.getElementById('q2')
const posx=document.getElementById('posx')
const posy=document.getElementById('posy')
const largura=document.getElementById('largura')
const altura=document.getElementById('altura')

q1.accessKey='b'//atalho criado -> alt e b -> como se estivesse clicando
q2.accessKey='n'//atalho criado -> alt e n -> como se estivesse clicando

console.log('q1: '+ q1.accessKey)
console.log('q2: '+ q2.accessKey)

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