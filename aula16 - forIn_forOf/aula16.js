let num = [10,20,30,40,50]

for (let n of num){//desta forma vamos direto para os elementos da lista
    console.log(n)
}

//---------------------------------------

for (let pos in num){// percorrer a posição dentro de num
    console.log(num[pos])//na lista num quero percorrer as posições
}

//---------------------------------------

for(let pos=0; pos<num.length; pos++){
    console.log(num[pos])//na lista num quero percorrer as posições
}

//---------------------------------------

const objs = document.getElementsByTagName('div')

for(let o of objs){//mostra os elementos dos objs
    console.log(o)
}

for(let o in objs){//mostra as índices dos objs
    console.log(o)
}

const objs = document.getElementsByTagName('div')

for(let o of objs){//mostra os elementos dos objs
    console.log(o.innerHTML='Curso')//trota o texto de todos elementos para Curso
}
