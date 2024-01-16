//Forma de escrever textos com crases

const caixa=document.querySelector('#caixa')

const carros=['Polo','Golf','T-Cross','HRV']

let ul=`<ul>`

carros.map((el)=>{
    ul+=`<li>${el}</li>`
})

caixa.innerHTML=ul