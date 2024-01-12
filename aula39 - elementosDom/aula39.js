const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]


console.log(caixa1.hasChildNodes)//caixa1 tem filho
console.log(btn_c[0].hasChildNodes())//btn_c tem filho
console.log(btn_c[0].childNodes)//btn_c tem filho

console.log(btn_c[0].children.length > 0 ? 'Possui filhos' : 'Não possui filhos')//btn - todos seus filhos em seu comprimento, se for maior que 0 returne ...

console.log(caixa1.children[1].innerHTML = 'Teste')//acessando todos filhos de caixa1, selecionando o indice 1 e modificando texto para teste