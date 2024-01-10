//interessante para percorrer todos os elementos
//vai interar toda coleção - por completo
//primeiro parâmetro irá interar com todos elementos em sequência
//segundo parâmentro índice dos elementos de cada interação
//FOR seria interessante em outros casos onde precisaremos ter parada no meio dos elementos

//----------------------------------------------------------

const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']//coleção cursos criada 
cursos.map((el,i)=>{//para operar dentro do map precisamos de uma função - dentro do parâmetro da função está o el como primeiro parâmetro onde irá interar com todos elementos e no segundo parâmetro da função está o i como índice de cada elemento e => como função anonima. 

    console.log('Curso:' + el + ' - Posição do curso:' + i)//el retornando o valor de cada elemento
    //i retornando o índice de cada elemento
})

//----------------------------------------------------------

const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React']//coleção
let c = cursos.map((el,i)=>{//declarei minha função na variante c
    return el//retornei todos elementos da variante c
})
console.log(c)//mostrei na tela toda minha coleção 

//----------------------------------------------------------

let el = document.getElementsByTagName('div')
el = [...el]//precisa criar uma array "ESPALHAR OS ITENS - um debaixo do outro" para conseguir interar com map pois el.map não é uma função "erro que gera" -> pois estamos interagindo com document colection -> HTML
el.map((e,i)=>{
    e.innerHTML = 'CFB Cursos'//modifica todos elementos texto HTML
    console.log(e.innerHTML)//mostra todos valroes dos elementos
})

//----------------------------------------------------------

const el = document.getElementsByTagName('div')
const val = Array.prototype.map.call(el,({innerHTML})=>innerHTML)//desta forma chamamos a array direto sem ser pelos elementos, acessamos os parâmtros de innerHTML e acessamos a propriedade dele mesmo
console.log(val)

//----------------------------------------------------------

const converterInt = (e)  => parseInt(e)//passa função para inteiro
let num = ['1','2','3','4','5'].map(converterInt)//da let num percorre todos elementos com map chamando a função converterInt
console.log(num)//mostre na tela