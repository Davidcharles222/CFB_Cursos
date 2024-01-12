const caixaCursos = document.querySelector('#caixaCursos')//acessando caixaCursos
const btn_c = [...document.querySelectorAll('.curso')]//acessando lista de cursos
const c1_2 = document.querySelector('#c1_2')//acessando id c1_2
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']//criando lista elementos
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')//acessando id btnCursoSelecionado
const btnRemoverCurso = document.getElementById('btnRemoverCurso')//acessando id btnRemoverCurso

cursos.map((el,chave)=>{//nos meus elementos de curso criado, irei percorreir todos elementos e indice
    const novoElemento = document.createElement('div')//criando div para novo elemento
    novoElemento.setAttribute('id', 'c'+chave)//novoElemento recebe atributo id com valor c + chave
    novoElemento.setAttribute('class', 'curso c1')//novoElemento recebe atributo class com valor curso c1
    novoElemento.innerHTML = el//novoElemento altera texto para elementos percorridos

    const comandos = document.createElement('div')//criando div para comandos
    comandos.setAttribute('class','comandos')//comandos recebe atributo class com valor comandos

    const rb = document.createElement('input')//criando elemento input 
    rb.setAttribute('type','radio')//rb recebe atributo type com valor radio
    rb.setAttribute('name','rb_curso')//rb recebe atributo name com valor rb_curso

    comandos.appendChild(rb)//anexando filho rb em comandos
    console.log(rb)
    novoElemento.appendChild(comandos)//anexando filho comandos em novoElemento
    console.log(comandos)
    caixaCursos.appendChild(novoElemento)//anexando filho novoElementos em caixaCursos
    console.log(novoElemento)
})

const radioSelecionado=()=>{//função radio selecionado criada, iremos chamar esta função nos eventos abaixo
    const todosRadios=[...document.querySelectorAll('input[type=radio]')]//todosRadios recebe array todos input radio
    const radioSelecionado=todosRadios.filter((ele,ind,arr)=>{//radioSelecionado recebe o filtro dos elementos de todos os radios
        return ele.checked//retorna os elementos que estão marcados - "checked"
    })
    return radioSelecionado[0]//retorna o resultado de radio selecionado para índice 0 - mantendo somente um
}

btnCursoSelecionado.addEventListener('click',(evt)=>{//adicionado evento do click para btnCursoSelecionado
    const rs = radioSelecionado()//rs recebe a chamada do rádio selecionado criada lá em cima
    if(rs != undefined){//se rs for diferente de indefinido - faz comando abaixo
        const cursoSelecionado=rs.parentNode.previousSibling.textContent//acessando conteudo do texto acessando do rs - o pai raiz, irmao anterior , conteudo do texto
        alert('Curso selecionado: ' + cursoSelecionado)//mostra em alerta o conteudo
    }else{//caso contrário faça isso
        alert('Selecione um curso')
    }
   
})

btnRemoverCurso.addEventListener('click', (evt)=>{
    const rs = radioSelecionado()//rs recebe a chamada do rádio selecionado criada lá em cima
    if(rs != undefined){//se rs for diferente de indefinido - faz comando abaixo
    const cursoSelecionado=rs.parentNode.parentNode//precisamos acessar a div completa para remover,acessamos o pai de rs e o pai do pai do res chegando da div completa
    cursoSelecionado.remove()
    }else{//caso contrário faça isso
        alert('Selecione um curso')
    }
})







//parentNode -> nó pai
//childNodes[nodenumber] -> nos filhos
//firstChild -> primeiro filho
//lastChild -> ultimo filho
//nextSibling -> proximo irmão
//previousSibling -> irmão anterior