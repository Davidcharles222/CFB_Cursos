//na querySolector só conseguimos acessar uma div -> se não identificar o índice ela entende como a primeira div que encontrar.

const query_divTodas = [...document.querySelectorAll('div[class')]//pegar todas div que tenham class
const query_divTodas2 = [...document.querySelectorAll('div > p')]//pegar dos p dentro das div
const query_cursosTodos = [...document.querySelectorAll('.curso')]//pegar todas class curso
const query_cursosC1 = [...document.querySelectorAll('.c1,p')]//pegar todas classes c1 e todos p
const query_cursosC2 = [...document.querySelectorAll('.c2')]//pegar todas classes c2
const query_cursoEspecial = document.querySelector('#c1')//pegar somente o id c1 -> como não referenciei a posição, ele pega a primeira que encontrar
const query_cursoEspecial2 = document.querySelector('#c1')[0]//pegar somente o id c1 do índice 0

console.log(query_divTodas)