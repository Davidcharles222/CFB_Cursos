//escutador de eventos -> utilizado para chamar onclick

const c1 = document.querySelector('#c1')//chamando meu id c1 e atribuindo na const c1
const msg = ()=>{//função arrow function criada e declarada na const msg
    alert('clicou')//mostrar alert clicou na tela conforme o click chamado
}
c1.addEventListener('click',msg)//meu const c1 eu adiciono o addeventListener para clamar o evento click e declaro minha constante da função arrow function criada

//-----------------------------------------------------------

const cursos = [...document.querySelectorAll('.curso')]//chama todos as classes cursos e transforma e array
cursos.map((el)=>{//no cursos chama o map e a função array function com parametros elementos a percorrer
    el.addEventListener('click',(evt)=>{//nos meus elementos quero que adiciona o evento click e como parâmetro criamos a função array function evt
        const el = evt.target//const el recebe qual elemento disparou o evento
        el.classList.add('destaque')//o elemento que disparou o evento recebe a class destaque criada no css
        console.log(el.innerHTML + ' foi clicado')//mostrando qual elemento disparou evento
    })
})