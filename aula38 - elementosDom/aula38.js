const caixa1 = document.querySelector('#caixa1')
const btn_c = [...document.querySelectorAll('.curso')]

console.log(btn_c[0].getRootNode())//obter nó raiz - document pai
console.log(btn_c[0].ownerDocumen)//documento proprietário - document

console.log(caixa1.firstElementChild)//primeiro elemento filho
console.log(caixa1.lastElementChild)//ultimo elemento filho
console.log(caixa1.children)//todos elementos filhos