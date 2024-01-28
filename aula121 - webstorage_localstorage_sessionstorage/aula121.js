//Armazena valores no console -> aplicação -> armazenamento local ou armazenamento da sessao
//localStorage -> uma vez armazenado o valor ele não some até ser eliminado com clear
//sessionSotrage -> quando fechamos o browser os dados são perdidos 

const f_texto=document.querySelector('#f_texto')
const p_texto=document.querySelector('#p_texto')
const btn_texto=document.querySelector('#btn_texto')

btn_texto.addEventListener('click',(evt)=>{

})

/************ LocalStorage ***********/
let num=10
let curso='Javascript'
// window.localStorage.setItem('numero',num)
localStorage.setItem('nome','Bruno')//seta valor -> chave e valor
localStorage.setItem('canal','CFB Cursos')//seta valor -> chave e valor
localStorage.setItem('curso',curso)//seta valor -> chave e valor
// alert(localStorage.length) -> mostra quantas chaves temos no local

// alert(localStorage.getItem(localStorage.key(0))) -> informa o valor da item que se encontra na posição 0

// alert(localStorage.getItem('nome')) -> mostra o item da chave nome
// alert(localStorage.getItem('canal')) -> mostra o item da chave canal
// alert(localStorage.getItem('curso')) -> mostra o item da chave curso
// localStorage.clear() -> limpa todo localStorage


/************ sessionStorage ***********/
sessionStorage.setItem('nome','Bruno')//seta valor -> chave e valor
sessionStorage.setItem('canal','CFB Cursos')//seta valor -> chave e valor
sessionStorage.setItem('curso',curso)//seta valor -> chave e valor