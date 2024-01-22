const olhos=[...document.getElementsByClassName('olho')]

let posx_mouse=0
let posy_mouse=0

//pegando cordenada do mouse
window.addEventListener('mousemove',(evt)=>{//Evento na pagina 
    posx_mouse=evt.clientX//pegando posição x do mouse em cada evento
    posy_mouse=evt.clientY//pegando posição y do mouse em cada evento

    //
    const rot=Math.atan2(posy_mouse,posx_mouse)*180/Math.PI

    olhos.forEach((o)=>{//percorrendo os dois olhos
        o.style.transform='rotate('+rot+'deg)'
    })
})

//ROTATE -> precisa passar um angulo, em deg 'degraus'
//STYLE.TRANSFORM - é do css
//MATH.atan2 -> retorna o arco tangente de 2 coeficientes -> em radianos
//Radianos para graus -> multiplico o radiano por 180 e divido por PI