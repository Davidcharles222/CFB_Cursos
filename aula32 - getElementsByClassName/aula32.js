const cursosTodos = [...document.getElementsByClassName('curso')]//chamando classe curso e transformando e array
const cursosC1 = [...document.getElementsByClassName('c1')]//chamando classe c1 e transformando e array
const cursosC2 = [...document.getElementsByClassName('c2')]//chamando classe c2 e transformando e array
const cursoEspecial = document.getElementsByClassName('curso')[6]//chamando classe curso[6] 

console.log(cursosTodos)//mostrando no console todos elementos do cursosTodos
console.log(cursosC1)//mostrando no console todos elementos do cursosC1
console.log(cursosC2)//mostrando no console todos elementos do cursosC2
console.log(cursoEspecial)//mostrando no console todos elementos do cursoEspecial

cursosC2.map((el)=>{//percorrendo todos elementos do cursosC2 com map
    el.classList.add('destaque')//nos elementos addicione a classe destaque que foi criada como importante direto no css.
})