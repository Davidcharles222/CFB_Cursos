const caixa1 = document.querySelector('#caixa1')//pegando caixa 1
const caixa2 = document.querySelector('#caixa2')//pegando caixa 2
const btn = document.querySelector('#btn_transferir')//pegando btn_copiar
const todosCursos = [...document.querySelectorAll('.curso')]//pegando todas div .curso

todosCursos.map((el)=>{//criando map para percorrer todos elementos do todosCursos
    el.addEventListener('click',(evt)=>{//em meus elementos vou add o evento click, criar uma array function evt
        const curso = evt.target//curso recebe o evento de quem disparou o click
        curso.classList.toggle('selecionado')//no curso selecionado estamos adicionadno a classe selecionado criada no css - TOGGLE seleciona e se clicar em cima de novo desmarca
    })
})

btn_transferir.addEventListener('click',()=>{//adicionando evento click no btn
    const cursosSelecionados = [...document.querySelectorAll('.selecionado')]//cursosSelecionados recebe todas classes com "selecionado"
    const cursosNaoSelecionados = [...document.querySelectorAll('.curso:not(.selecionado)')]//cursosNaoselecionados recebe todas classes .curso onde não possuem "selecionado" :not(.selecionado)
    cursosSelecionados.map((el)=>{//percorrer todos elementos do cursoSelecionado
        caixa2.appendChild(el)//quero que caixa2 anexa os filhos 'el'
    })
    cursosNaoSelecionados.map((el)=>{//percorrer todos elementos do cursoNaoSelecionado
        caixa1.appendChild(el)//quero que caixa1 anexa os filhos 'el'
    })
})


