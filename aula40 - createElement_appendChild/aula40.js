//criando elementos direto no script

const caixa1 = document.querySelector('#caixa1')//pegando id caixa1
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']//criando array com todos os os cursos

cursos.map((el,indice)=>{//criando o map para percorrer todos elementos e indice
    const novoElemento = document.createElement('div')//criando o elemento div para todos elementos percorridos e adicionando valor em novo elemento
    novoElemento.setAttribute('id', 'c'+indice)//novoElemento seta o atributo id com valor de c e o indice
    novoElemento.setAttribute('class', 'curso c1')//novoElemento seta o atributo class com valor de curso c1
    novoElemento.innerHTML = el//novoElemento percorridos recebe o valor de cada elemento 
    caixa1.appendChild(novoElemento)//no container caixa1 anexa o filho de novoElemento que são os valores
})