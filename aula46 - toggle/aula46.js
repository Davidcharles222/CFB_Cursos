const caixaCursos = document.querySelector('#caixaCursos')
const cursos = ['HTML', 'CSS', 'Javascript', 'PHP', 'React', 'MySQL', 'ReactNative']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')

const tirarSelecao=()=>{
    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    cursosSelecionados.map((el)=>{
        el.classList.remove('selecionado')
    })
}

const criarNovoCurso=(curso,ind)=>{
    const novoElemento = document.createElement('div')
    novoElemento.setAttribute('id', 'c'+ind)
    novoElemento.setAttribute('class', 'curso c1')
    novoElemento.innerHTML = curso
    novoElemento.addEventListener('click',(evt)=>{
        tirarSelecao()
        evt.target.classList.toggle('selecionado')
    })

    return novoElemento//retorna novoElemento percorrido na map
}

cursos.map((el,i)=>{//map para percorrer todos elementos
    const novoElemento=criarNovoCurso(el,i)
    caixaCursos.appendChild(novoElemento)
})

const cursoSelecionado=()=>{
    const cursosSelecionados=[...document.querySelectorAll('.selecionado')]
    return cursosSelecionados[0]
}

btnCursoSelecionado.addEventListener('click',(evt)=>{
    if(cursoSelecionado() != undefined){
        alert('Curso selecionado: ' + cursoSelecionado().innerHTML)
    }else{
        alert('Selecione um curso')
    }
   
})

btnRemoverCurso.addEventListener('click', (evt)=>{
    if(cursoSelecionado() != undefined){
    cursoSelecionado().remove()
    }else{
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoAntes.addEventListener('click',(evt)=>{
    if(cursoSelecionado() != undefined){
        const cs = cursoSelecionado()
        if(nomeCurso.value!=""){
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cs)
        }else{
            alert("Digite o nome do curso")
        }
    }else{
        alert('Selecione um curso')
    }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (evt)=>{//evento criado para o click
    const cs = cursoSelecionado()
    if(cursoSelecionado() != undefined){
        if(nomeCurso.value!=""){
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso,cs.nextSibling)//
        }else{
            alert("Digite o nome do curso")
        }
    }else{
        alert('Selecione um curso')
    }
})


















//parentNode -> nó pai
//childNodes[nodenumber] -> nos filhos
//firstChild -> primeiro filho
//lastChild -> ultimo filho
//nextSibling -> proximo irmão
//previousSibling -> irmão anterior

