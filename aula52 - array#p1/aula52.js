const caixa=document.querySelector('#caixa')

let cores=['azul','verde','vermelho',['claro','escuro','médio']]
let cursos=['HTML','CSS','Javascript',cores]

cursos.push('C++')//adicina o curso c++ na array cursos
cursos.unshift('Python')//adiciona o curso Python na array cursos primeiro índice 

cursos.pop()//exclui curso adicinado no último índice
cursos.shift()//exclui curso adicionado no primeiro índice

console.log(cursos[3][3][2])//acessando array cursos,índice 3 para cessar as cores, índice 3 para acessar as tonalidades, índice 2 para selecionar a cor médio


//percorrendo todos elementos da array
cursos.map((el)=>{
    let p=document.createElement('p')
    p.innerHTML = el
    caixa.appendChild(p)
})

