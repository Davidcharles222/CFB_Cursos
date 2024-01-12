const caixa1 = document.querySelector('#caixa1')
const btn_c1 = document.querySelector('#c1')
const cursos = [...document.querySelectorAll('.curso')]

caixa1.addEventListener('click', (evt)=>{//adiciona evento click em todo container - funciona em todos espaços 
    console.log('clicou')
})

cursos.map((el)=>{//percorre todos elementos de cursos
    el.addEventListener('click',(evt)=>{//nos elementos percorridos adicione o evento click e chama função evt
        evt.stopPropagation()//na função evt para o click, em todos elementos percorridos não irá funcionar o click
    })
})