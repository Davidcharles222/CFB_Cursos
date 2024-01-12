//criando elementos direto no script

const caixa1 = document.querySelector('#caixa1')//pegando id caixa1
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']//criando array com todos os os cursos

cursos.map((el,indice)=>{//criando o map para percorrer todos elementos e indice
    const novoElemento = document.createElement('div')//criando o elemento div para todos elementos percorridos e adicionando valor em novo elemento
    novoElemento.setAttribute('id', 'c'+indice)//novoElemento seta o atributo id com valor de c e o indice
    novoElemento.setAttribute('class', 'curso c1')//novoElemento seta o atributo class com valor de curso c1
    novoElemento.innerHTML = el//novoElemento percorridos recebe o valor de cada elemento 
    caixa1.appendChild(novoElemento)//no container caixa1 anexa o filho de novoElemento que são os valores

    const btn_lixeira = document.createElement('img')//criando elemento imagem
    btn_lixeira.setAttribute('scr',"./lixeira.png")//btn_lixeira seta atributo src e indico a imagem
    btn_lixeira.setAttribute('class','btn_lixeira')//btn_lixeira seta atributo class com valor btn_lixeira
    
    btn_lixeira.addEventListener('click',(evt)=>{//adicionar evento de click na no btn_lixeira
        caixa1.removeChild(evt.target.parentNode)//dentro da caixa1 container remova o pai do elemento que disparou o evento
    })

    novoElemento.appendChild(btn_lixeira)//anexa filho btn_lixeira no novoElemento
    caixa1.appendChild(novoElemento)//anexa filho novoElemento na caixa1 - container
})